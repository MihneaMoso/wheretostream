document.addEventListener("alpine:init", () => {
    Alpine.data("searchInput", () => ({
        isOpen: false,
        search: "",

        init() {
            // load remote data (placeholder async function for now)
            this.loadData();
        },

        async loadData(query = "") {
            this.sourceData = await this.fetchResults(query);
        },

        sanitizeMovie(raw = {}) {
            return {
                id: String(raw.id ?? (raw.title ?? "").slice(0, 8))
                    .replace(/\s+/g, "-")
                    .toLowerCase(),
                title: String(raw.title ?? "Untitled"),
                preview_image: String(
                    raw.preview_image ?? "/favicon/favicon-32x32.png"
                ),
                description: String(raw.description ?? ""),
                available: Boolean(raw.available ?? false),
                provider: raw.provider ? String(raw.provider) : "",
                link: String(raw.link ?? "#"),
            };
        },

        // placeholder async fetch - replace with your real API call later
        async fetchResults(query = "") {
            const demo = [
                {
                    id: "m1",
                    title: "Inception",
                    preview_image:
                        "https://placehold.co/160x240?text=Inception",
                    description:
                        "A thief who steals corporate secrets through dream-sharing technology.",
                    available: true,
                    provider: "Netflix",
                },
                {
                    id: "m2",
                    title: "Spirited Away",
                    preview_image:
                        "https://placehold.co/160x240?text=Spirited+Away",
                    description:
                        "A young girl enters a world of spirits and must find her way home.",
                    available: false,
                    provider: "",
                },
                {
                    id: "m3",
                    title: "The Grand Budapest Hotel",
                    preview_image:
                        "https://placehold.co/160x240?text=Grand+Budapest",
                    description:
                        "A whimsical tale of a famous European hotel's legendary concierge.",
                    available: true,
                    provider: "Hulu",
                },
                {
                    id: "m4",
                    title: "Moonlight",
                    preview_image:
                        "https://placehold.co/160x240?text=Moonlight",
                    description:
                        "A young man grapples with his identity and sexuality while growing up in Miami.",
                    available: false,
                    provider: "",
                },
            ];

            try {
                // If a real API is added later, uncomment the fetch example above and map the response:
                // const results = Array.isArray(data) ? data : data.results || [];
                // return results.map(this.sanitizeMovie).slice(0, 5);

                // For now, simulate search by filtering demo dataset when query is provided
                const normalized = query.trim().toLowerCase();
                const pool = demo;

                const matched = normalized
                    ? pool.filter((item) =>
                          item.title.toLowerCase().includes(normalized)
                      )
                    : pool; // return popular / all when no query

                // sanitize and return up to first 5
                return matched.map(this.sanitizeMovie).slice(0, 5);
            } catch (err) {
                console.error("fetchResults error", err);
                return [];
            }
        },

        get getItems() {
            // return items that match the search (by title)
            if (!this.search.trim()) {
                this.isOpen = false;
                return [];
            }

            const filterItems = this.sourceData.filter((item) => {
                return item.title
                    .toLowerCase()
                    .includes(this.search.toLowerCase());
            });

            if (filterItems.length > 0) {
                this.isOpen = true;
                return filterItems;
            } else {
                this.isOpen = false;
                return [];
            }
        },

        cleanSearch(e) {
            // clear search after selection
            this.search = "";
            this.isOpen = false;
        },
        closeSearch() {
            this.search = "";
            this.isOpen = false;
        },

        sourceData: [],
    }));
});

document.addEventListener('alpine:init', () => {
    Alpine.data('searchInput', () => ({
        isOpen: false,
        search: "",

        init() {
            // load remote data (placeholder async function for now)
            this.loadData();
        },

        async loadData() {
            this.sourceData = await this.fetchDemoResults();
        },

        // placeholder async fetch - replace with your real API call later
        async fetchDemoResults() {
            return [
                {
                    id: "m1",
                    title: "Inception",
                    preview_image: "https://placehold.co/160x240?text=Inception",
                    description: "A thief who steals corporate secrets through dream-sharing technology.",
                    available: true,
                    provider: "Netflix"
                },
                {
                    id: "m2",
                    title: "Spirited Away",
                    preview_image: "https://placehold.co/160x240?text=Spirited+Away",
                    description: "A young girl enters a world of spirits and must find her way home.",
                    available: false,
                    provider: ""
                },
                {
                    id: "m3",
                    title: "The Grand Budapest Hotel",
                    preview_image: "https://placehold.co/160x240?text=Grand+Budapest",
                    description: "A whimsical tale of a famous European hotel's legendary concierge.",
                    available: true,
                    provider: "Hulu"
                },
                {
                    id: "m4",
                    title: "Moonlight",
                    preview_image: "https://placehold.co/160x240?text=Moonlight",
                    description: "A young man grapples with his identity and sexuality while growing up in Miami.",
                    available: false,
                    provider: ""
                }
            ];
        },

        get getItems() {
            // return items that match the search (by title)
            if (!this.search.trim()) {
                this.isOpen = false;
                return [];
            }

            const filterItems = this.sourceData.filter((item) => {
                return item.title.toLowerCase().includes(this.search.toLowerCase());
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

        sourceData: []

    }))
})

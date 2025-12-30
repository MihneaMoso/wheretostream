import https from "https";
import { Movie } from "../types";
type MovieType = typeof Movie._type;

const options = {
    hostname: "web.prod.cloud.netflix.com",
    path: "/graphql",
    method: "POST",
    headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.5",
        "content-type": "application/json",
        dnt: "1",
        origin: "https://www.netflix.com",
        priority: "u=1, i",
        referer: "https://www.netflix.com/",
        "sec-ch-ua":
            '"Chromium";v="140", "Not=A?Brand";v="24", "Brave";v="140"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "sec-gpc": "1",
        "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36",
        "x-netflix.context.app-version": "v60c7d392",
        "x-netflix.context.hawkins-version": "5.4.0",
        "x-netflix.context.locales": "ro-ro",
        "x-netflix.context.operation-name": "SearchPageQueryResults",
        "x-netflix.context.ui-flavor": "akira",
        "x-netflix.request.attempt": "1",
        "x-netflix.request.client.context": '{"appstate":"foreground"}',
        "x-netflix.request.id": "ad905f7f8d134eac89ce11e645f7c69c",
        "x-netflix.request.originating.url":
            "https://www.netflix.com/search?q=better",
        "x-netflix.request.toplevel.uuid":
            "a0c606b1-2a9a-4f35-a9d9-62227cf7b1fa",
        cookie: "netflix-sans-normal-3-loaded=true; netflix-sans-bold-3-loaded=true; nfvdid=BQFmAAEBENj1aULP097r7dWdkt8tiBZgi2DHNMRtUtsyCylcfOyK_iHNSO78RJ67GQ9OsXujFdQDSZKy4qF09UY-qFeUE77cYbh67Melm0LsHOkDV-TqxMS46oTXQ0IKnlK6ycWOTtRtGqXqkDBGME5oxCevsK5i; SecureNetflixId=v%3D3%26mac%3DAQEAEQABABRO6tfc5E4YGUmztgpBIErGvNU9ARH732M.%26dt%3D1758905665371; NetflixId=ct%3DBgjHlOvcAxLfA_U8OP3Zf8-6gRiNXVRYI-tHzihCt8y9LqLJ_8p8SJQAt-RRZwN9C8BB23hiqHa_enOu-uJVYuNDK7Bb2lpS9aTyJcT-9NMzAG1WRua-2nlv9WtSAFDKIeXgPXJY88XGKQLZU5ZtTB7k_choxl-bpwDoPo4rMSuExKmuXzOGTcSatxfdj7pO_FboB21MQeMC6o2pat41UiQ0qZLZ0cNYefaXwxODzjUpkihpru0MirJcl8aeTwyyxqERBZidip2Z2MdPLfvlyxqLk4yVnUJft14Ho7OTbHhosZK-L34aR8xjhp-1lIpi_7enjCEFk3hrUJqYAlKZFP31pkrd7BsOWin5TA1Z24_YFkzfk6FddgYpv1U-hih42cctJQ11X5O58CMd-mxKNoWYJGkCg_2KE2Pe9q9LyC5_3xZIyA6QoCIwBLJsFVBc7nYJOkPXxM2UIZegGlBrFOi7YT56LZHN8G5NtkbFO-FKwyXvqCBPJYWtt8yqgE_bO3XWA-vMv7TJiMqKfnvPYaf55wF_EuICSwJILsal2WdJbTzx1eLenOnJ5lDdd_3woQfGmMeEC7io7-bstHchO9dgj38p9iteGXFgZ6cB3VwYY0OaKkkDma78VEl-jUJZ-LiQjvnc4xidGAYiDgoMQmBL2Ra8do9bVmf4%26ch%3DAQEAEAABABRK4PYy7cNg6GibaTLCmR7uKQ01mV11jME.%26v%3D3%26pg%3DH2BR2MLKKZA6VLKFUESM635TF4; flwssn=fc0c9e5e-f94e-49f9-b653-1f8fed5c0847; gsid=10ce21d8-5a87-4b1c-81a0-bef7d68fba83; profilesNewSession=0",
    },
};

export default async function getNetflix(query: string): Promise<MovieType> {

    options["headers"]["x-netflix.request.originating.url"] = `https://www.netflix.com/search?q=${query}`;

    let jsonData: MovieType;

    const req = https.request(options, function (res) {
        const chunks = [];

        res.on("data", function (chunk) {
            chunks.push(chunk);
        });

        res.on("end", function () {
            try {
                const body = Buffer.concat(chunks);

                const rawjsonData = JSON.parse(body.toString());
                const title = rawjsonData["data"]['page']['sections']['edges'][1]['node']['entities']['edges'][0]['node']['displayString'];
                const preview_image = rawjsonData[''];
                jsonData.title = title;
            } catch (error: any) {
                console.error("Error parsing JSON:", error.message)
            }
            // console.log(body.toString());

        });
    }).on('error', (error) => {
        console.error('Request error:', error.message);
    });

    req.write(
        JSON.stringify({
            operationName: "SearchPageQueryResults",
            variables: {
                artworkParamsStandardBoxshot: {
                    artworkType: "SDP",
                    dimension: {
                        width: 342,
                        height: 192,
                    },
                    features: {
                        fallbackStrategy: "STILL",
                    },
                },
                artworkParamsStandardCloudAppIcon: {
                    artworkType: "GAME_CLOUD_BOXART_HORIZONTAL_INCOMPATIBLE",
                    dimension: {
                        width: 342,
                        height: 192,
                    },
                    features: {
                        fallbackStrategy: "STILL",
                        topContentTypeBadge: true,
                    },
                },
                artworkParamsStandardMobileAppIcon: {
                    artworkType: "GAME_ICON_BOXART_HORIZONTAL_CARD",
                    dimension: {
                        width: 342,
                        height: 192,
                    },
                    features: {
                        fallbackStrategy: "STILL",
                        topContentTypeBadge: true,
                    },
                },
                pageSize: 48,
                options: {
                    pageCapabilities: {
                        base: {
                            canHandlePlayingCloudGames: false,
                            capabilitiesBySection: {
                                pinotGallery: {
                                    base: {
                                        capabilitiesBySectionTreatment: {
                                            pinotCreatorHome: {
                                                base: {
                                                    capabilitiesByEntityTreatment:
                                                        {
                                                            pinotStandardBoxshot:
                                                                {
                                                                    base: {
                                                                        canHandleEntityKinds:
                                                                            [
                                                                                "VIDEO",
                                                                            ],
                                                                    },
                                                                },
                                                            pinotStandardCloudAppIcon:
                                                                {
                                                                    base: {
                                                                        canHandleEntityKinds:
                                                                            [
                                                                                "GAME",
                                                                            ],
                                                                    },
                                                                },
                                                            pinotStandardMobileAppIcon:
                                                                {
                                                                    base: {
                                                                        canHandleEntityKinds:
                                                                            [
                                                                                "GAME",
                                                                            ],
                                                                    },
                                                                },
                                                            pinotStandardDestination:
                                                                {
                                                                    base: {
                                                                        canHandleEntityKinds:
                                                                            [
                                                                                "GENERIC_CONTAINER",
                                                                            ],
                                                                    },
                                                                },
                                                        },
                                                    maxTotalEntities: 300,
                                                },
                                            },
                                            pinotStandard: {
                                                base: {
                                                    capabilitiesByEntityTreatment:
                                                        {
                                                            pinotStandardBoxshot:
                                                                {
                                                                    base: {
                                                                        canHandleEntityKinds:
                                                                            [
                                                                                "VIDEO",
                                                                            ],
                                                                    },
                                                                },
                                                            pinotStandardCloudAppIcon:
                                                                {
                                                                    base: {
                                                                        canHandleEntityKinds:
                                                                            [
                                                                                "GAME",
                                                                            ],
                                                                    },
                                                                },
                                                            pinotStandardMobileAppIcon:
                                                                {
                                                                    base: {
                                                                        canHandleEntityKinds:
                                                                            [
                                                                                "GAME",
                                                                            ],
                                                                    },
                                                                },
                                                            pinotStandardDestination:
                                                                {
                                                                    base: {
                                                                        canHandleEntityKinds:
                                                                            [
                                                                                "GENERIC_CONTAINER",
                                                                            ],
                                                                    },
                                                                },
                                                        },
                                                    maxTotalEntities: 300,
                                                },
                                            },
                                        },
                                    },
                                },
                                pinotList: {
                                    base: {
                                        capabilitiesBySectionTreatment: {
                                            pinotSuggestions: {
                                                base: {
                                                    capabilitiesByEntityTreatment:
                                                        {
                                                            pinotSuggestion: {
                                                                base: {
                                                                    canHandleEntityKinds:
                                                                        [
                                                                            "AUTOCOMPLETE",
                                                                            "VIDEO",
                                                                            "CHARACTER",
                                                                            "GENERIC_CONTAINER",
                                                                            "GENRE",
                                                                            "PERSON",
                                                                        ],
                                                                },
                                                            },
                                                        },
                                                    maxTotalEntities: 100,
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                            maxTotalSections: 2,
                        },
                        canHandleComplexSectionId: true,
                    },
                    session: {
                        id: "e296ab9b-bb2c-4b7d-827c-9b83c215295b",
                    },
                },
                searchTerm: query,
                endCursor: null,
            },
            extensions: {
                persistedQuery: {
                    id: "72c86526-8d73-4949-82f6-43f3ee66cbb4",
                    version: 102,
                },
            },
        })
    );
    req.end();

    return jsonData;
}

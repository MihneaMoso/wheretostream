import http.client
import json

headers = {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.5",
    "content-type": "application/json",
    "dnt": "1",
    "origin": "https://www.netflix.com",
    "priority": "u=1, i",
    "referer": "https://www.netflix.com/",
    "sec-ch-ua": '"Chromium";v="140", "Not=A?Brand";v="24", "Brave";v="140"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "sec-gpc": "1",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36",
    "x-netflix.context.app-version": "vc6cb3222",
    "x-netflix.context.hawkins-version": "5.5.0",
    "x-netflix.context.locales": "ro-ro",
    "x-netflix.context.operation-name": "SearchPageQueryResults",
    "x-netflix.context.ui-flavor": "akira",
    "x-netflix.request.attempt": "1",
    "x-netflix.request.client.context": '{"appstate":"foreground"}',
    "x-netflix.request.id": "1a074d6b4e3f4b29b356b121b2a110a1",
    "x-netflix.request.originating.url": f"https://www.netflix.com/search?q=",
    "x-netflix.request.toplevel.uuid": "9f043b4c-7c29-44cc-8f8f-2fdd04960afd",
    "cookie": "netflix-sans-normal-3-loaded=true; netflix-sans-bold-3-loaded=true; nfvdid=BQFmAAEBENj1aULP097r7dWdkt8tiBZgi2DHNMRtUtsyCylcfOyK_iHNSO78RJ67GQ9OsXujFdQDSZKy4qF09UY-qFeUE77cYbh67Melm0LsHOkDV-TqxMS46oTXQ0IKnlK6ycWOTtRtGqXqkDBGME5oxCevsK5i; SecureNetflixId=v%3D3%26mac%3DAQEAEQABABR924-ArQq6gnfOfoG2uuwB90Gquqx_Wlc.%26dt%3D1759563248577; NetflixId=ct%3DBgjHlOvcAxLkA-5k0wHQ_uzJQj4PlOpT191q3-i2uMPY_NSfrl-Nz5Yxe4MQJQpVPXYU2_f1cjUwP7SyMAqMrFo-7f407iDq8kBw1CXJGXTOLcDZqdehCXwX_Di_WyJapaGWrLDBDDWdRtF_Mm9sWNRq1sL4f2_wbFLxnRp8yUiWCPyRxdTKYAB4-IXjQJCHEZHYEhvc2YM8zf5W_jehHDVv4-EGxtw_W7ISTDXw75gSPUGMgDi7BDz_sGpi3NKZHJVhMZfkv3ewCWtAPuzJjkdFG9Ln7API_uysh4i8ddgJovmLBdQrWRrG3cBn1oasL7rmCrsgu-IBM7IobqIR9vB0ILwM-wMiLfo4B3k6H9qSD6Y0SOQXTvJGWFKlAtvEoZA4vTkqULiJta7FvGVIy6ozRt3SfJbdWduPJEiLn8rqW9-AojT6I7YfcjQH4aCN2LH-gK0Ksi9E7se7Vc_fVQYyV2yfccGaXPTkDNI_0xhh7sN7Yd3YIbAIFIalXyqA9Kr-rRYaR4Kf__hVIZBFxN46zA3wrEL6cVcur4uL6W8OIUCRJ1GQeBF2slRug7pwg5ysk_oUXulO-dpJlBSE5c5t7e-zSycqFgnqNFEAV2eXpFa6N87cNSuq64GVvShMOxJT9iyqLt3IstnH2P8YBiIOCgyqVixJi3b_iEfhWoE.%26ch%3DAQEAEAABABRK4PYy7cNg6GibaTLCmR7uKQ01mV11jME.%26v%3D3%26pg%3DH2BR2MLKKZA6VLKFUESM635TF4; gsid=969ea46a-0571-42f8-b5e7-54eaf3677720; profilesNewSession=0",
}

json_data = {
    "operationName": "SearchPageQueryResults",
    "variables": {
        "artworkParamsStandardBoxshot": {
            "artworkType": "SDP",
            "dimension": {
                "width": 342,
                "height": 192,
            },
            "features": {
                "fallbackStrategy": "STILL",
            },
        },
        "artworkParamsStandardCloudAppIcon": {
            "artworkType": "GAME_CLOUD_BOXART_HORIZONTAL_INCOMPATIBLE",
            "dimension": {
                "width": 342,
                "height": 192,
            },
            "features": {
                "fallbackStrategy": "STILL",
                "topContentTypeBadge": True,
            },
        },
        "artworkParamsStandardMobileAppIcon": {
            "artworkType": "GAME_ICON_BOXART_HORIZONTAL_CARD",
            "dimension": {
                "width": 342,
                "height": 192,
            },
            "features": {
                "fallbackStrategy": "STILL",
                "topContentTypeBadge": True,
            },
        },
        "pageSize": 48,
        "options": {
            "pageCapabilities": {
                "base": {
                    "canHandlePlayingCloudGames": False,
                    "capabilitiesBySection": {
                        "pinotGallery": {
                            "base": {
                                "capabilitiesBySectionTreatment": {
                                    "pinotCreatorHome": {
                                        "base": {
                                            "capabilitiesByEntityTreatment": {
                                                "pinotStandardBoxshot": {
                                                    "base": {
                                                        "canHandleEntityKinds": [
                                                            "VIDEO",
                                                        ],
                                                    },
                                                },
                                                "pinotStandardCloudAppIcon": {
                                                    "base": {
                                                        "canHandleEntityKinds": [
                                                            "GAME",
                                                        ],
                                                    },
                                                },
                                                "pinotStandardMobileAppIcon": {
                                                    "base": {
                                                        "canHandleEntityKinds": [
                                                            "GAME",
                                                        ],
                                                    },
                                                },
                                                "pinotStandardDestination": {
                                                    "base": {
                                                        "canHandleEntityKinds": [
                                                            "GENERIC_CONTAINER",
                                                        ],
                                                    },
                                                },
                                            },
                                            "maxTotalEntities": 300,
                                        },
                                    },
                                    "pinotStandard": {
                                        "base": {
                                            "capabilitiesByEntityTreatment": {
                                                "pinotStandardBoxshot": {
                                                    "base": {
                                                        "canHandleEntityKinds": [
                                                            "VIDEO",
                                                        ],
                                                    },
                                                },
                                                "pinotStandardCloudAppIcon": {
                                                    "base": {
                                                        "canHandleEntityKinds": [
                                                            "GAME",
                                                        ],
                                                    },
                                                },
                                                "pinotStandardMobileAppIcon": {
                                                    "base": {
                                                        "canHandleEntityKinds": [
                                                            "GAME",
                                                        ],
                                                    },
                                                },
                                                "pinotStandardDestination": {
                                                    "base": {
                                                        "canHandleEntityKinds": [
                                                            "GENERIC_CONTAINER",
                                                        ],
                                                    },
                                                },
                                            },
                                            "maxTotalEntities": 300,
                                        },
                                    },
                                },
                            },
                        },
                        "pinotList": {
                            "base": {
                                "capabilitiesBySectionTreatment": {
                                    "pinotSuggestions": {
                                        "base": {
                                            "capabilitiesByEntityTreatment": {
                                                "pinotSuggestion": {
                                                    "base": {
                                                        "canHandleEntityKinds": [
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
                                            "maxTotalEntities": 100,
                                        },
                                    },
                                },
                            },
                        },
                    },
                    "maxTotalSections": 2,
                },
                "canHandleComplexSectionId": True,
            },
            "session": {
                "id": "ce5cba68-ea70-4aef-80b3-3811573936c8",
            },
        },
        "searchTerm": "debug",
        "endCursor": None,
    },
    "extensions": {
        "persistedQuery": {
            "id": "72c86526-8d73-4949-82f6-43f3ee66cbb4",
            "version": 102,
        },
    },
}


def get_search_results(searchTerm: str):

    # searchTerm = input("Enter search term: ")
    headers['x-netflix.request.originating.url'] += searchTerm
    json_data['variables']['searchTerm'] = searchTerm

    conn = http.client.HTTPSConnection("web.prod.cloud.netflix.com")

    conn.request(
        "POST",
        "/graphql",
        json.dumps(json_data),
        # '{"operationName":"SearchPageQueryResults","variables":{"artworkParamsStandardBoxshot":{"artworkType":"SDP","dimension":{"width":342,"height":192},"features":{"fallbackStrategy":"STILL"}},"artworkParamsStandardCloudAppIcon":{"artworkType":"GAME_CLOUD_BOXART_HORIZONTAL_INCOMPATIBLE","dimension":{"width":342,"height":192},"features":{"fallbackStrategy":"STILL","topContentTypeBadge":true}},"artworkParamsStandardMobileAppIcon":{"artworkType":"GAME_ICON_BOXART_HORIZONTAL_CARD","dimension":{"width":342,"height":192},"features":{"fallbackStrategy":"STILL","topContentTypeBadge":true}},"pageSize":48,"options":{"pageCapabilities":{"base":{"canHandlePlayingCloudGames":false,"capabilitiesBySection":{"pinotGallery":{"base":{"capabilitiesBySectionTreatment":{"pinotCreatorHome":{"base":{"capabilitiesByEntityTreatment":{"pinotStandardBoxshot":{"base":{"canHandleEntityKinds":["VIDEO"]}},"pinotStandardCloudAppIcon":{"base":{"canHandleEntityKinds":["GAME"]}},"pinotStandardMobileAppIcon":{"base":{"canHandleEntityKinds":["GAME"]}},"pinotStandardDestination":{"base":{"canHandleEntityKinds":["GENERIC_CONTAINER"]}}},"maxTotalEntities":300}},"pinotStandard":{"base":{"capabilitiesByEntityTreatment":{"pinotStandardBoxshot":{"base":{"canHandleEntityKinds":["VIDEO"]}},"pinotStandardCloudAppIcon":{"base":{"canHandleEntityKinds":["GAME"]}},"pinotStandardMobileAppIcon":{"base":{"canHandleEntityKinds":["GAME"]}},"pinotStandardDestination":{"base":{"canHandleEntityKinds":["GENERIC_CONTAINER"]}}},"maxTotalEntities":300}}}}},"pinotList":{"base":{"capabilitiesBySectionTreatment":{"pinotSuggestions":{"base":{"capabilitiesByEntityTreatment":{"pinotSuggestion":{"base":{"canHandleEntityKinds":["AUTOCOMPLETE","VIDEO","CHARACTER","GENERIC_CONTAINER","GENRE","PERSON"]}}},"maxTotalEntities":100}}}}}},"maxTotalSections":2},"canHandleComplexSectionId":true},"session":{"id":"ce5cba68-ea70-4aef-80b3-3811573936c8"}},"searchTerm":"better","endCursor":null},"extensions":{"persistedQuery":{"id":"72c86526-8d73-4949-82f6-43f3ee66cbb4","version":102}}}',
        headers,
    )
    response = conn.getresponse()

    resp_code = response.getcode()
    resp_body = json.loads(response.read())

    return resp_body
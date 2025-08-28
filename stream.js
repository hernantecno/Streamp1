let mt = "csc-axs-edge01.sensa.com.ar";

const streams = {
    clarosports: {
        url: "https://"+mt+"/live/eds/ClaroSports/live_dash_cld/ClaroSports.mpd",
        key: "======wMklzY3IDZlJDZkRTMilDO4EWO3M2YwYzY4MmYkBzM0MTOldjNjVDMxcTNlBDZiRmNmFjN3MGOkBzMyQmMlFTYhFzMkNzY2Q2YilDNiVTZmJWZyUGM5ITM2MjZ0IGOykzYygjN4QjZ1gTZ3IGNwQTZxMzMlN2M3ITN4ETMkdjMxcTYkJmYmJ2YhJjY0gTYhlDNwgDZhBTZihDOkNDOxEDZ6ITNzYzY4UGOmljY1kDZ4YWYwIWY0YDZjV2N5MTYhVjNa1b2c3d4e5f67890"
    },
    telefe: {
        url: "https://"+mt+"/live/eds/Telefe/live_dash_cld/Telefe.mpd",
        key: "======QYxQmMxYDZmRGOjFDZ2QWNjhTO4kTM1IWY1QWZjZjZkhDN5ImNxIGNmNWYzIWOhlTYyUDMxIWO0UzY4MzYzIjYyUTY0QmZ0UGZwgzMxYGZiJjY5MmZzkTNxUGOxETNlhTY3QTZ5QGZ1gjZ2UmMkZmM5EWZ4MWY2QzNhZGMwczM3YmN1QWY3gzNxEWZ5UWYilDMzgDZmVTO1EDZxEDZkVmY6I2YxYTNyU2YwcjN4M2MyYjMwYDNjdTZyIWM2kjYzgjYa1b2c3d4e5f67890"
    },
    TYC_SPORTS_21: {
        url: "https://cdn.trimi.com.ar/live/sm-live/TYC_SPORTS_21-5/sa_live_dash_ll/TYC_SPORTS_21-5.mpd",
        key: "======QMwEWZhZ2M2QTZ1cTY3MDO1UTZyE2N0QmYiVGZ0UWOmdTYwUWM3MTN4kDMzYzNkFzN4EjYzIzN1cjMjBjMwQDOzUTNiRmN2UDNwMTMjdTZ5QjYxIjN1kTYjlzMkFTNxYGZxMmY2MTZyIzY2EDMjdzY1IGNzQzMzMDMyQWN5EWN1U2NmZmN4EzYlBTMlNzYkZ2M2IWYiJTM5UTMjJGOwUTN6IjY1EzY3YjMhVWO5E2MmRzY4MmMmJjZlVjY3MTNhBTZa1b2c3d4e5f67890"
    },
    evento2: {
        url: "https://CSC-ARR-EDGE01.sensa.com.ar/bpk-tv/TYCSports/default/index.mpd/bpk-tv/SensaEventos1/default/index.mpd",
        key: "====AZjhzY5EzMmhTMwMWOilzNwgDZ2QjN0UDO0ITOlRmMzAjMkdjZyAjZlNjM2UTOhBjZzEmNkhTZwYjNxMTZjFDNhZmZxUGN4IjMlljY3MDMyQGNhBTZmlTO1MjN0MGNmRjM0IDM0EGZ5UmYkZGZwQ2Y2YDO4YTOxM2M0M2N1UGMiNTOlNTOzIjZ0E2Y4E2N0M2N5YDZzUmY5IDZkVDMzMzY6IzNmZmN1UGZkVjY1cTOkhjMyIjM0IjNkNDZ5czY3YmYa1b2c3d4e5f67890"
    },
    tycsports: {
        url: "https://"+mt+"/live/eds/TYCSports/live_dash_cld/TYCSports.mpd",
        key: "======wYyYjNiZWN4YDNwYDZmJjY4EjNlBDNjhTN3kjNlVmYmJzM1UzNxQTN5ATN1QGZlZmM1EDZjF2YjNjZmZDZkBTNiFGMjRmZjZDOhJjNwkTN1QmYiZWNlZmN4gjMiNmNyMDM0gzYyMTMxQjNlNzYyYDNxkTZiFWZkRmNiNGOiBzNhdjYmhzM5UDOzYjNhVzYjZDMkZzM2EzYwUmY0QjNyETY6MDNhRWNhZmNjRWO3UTOjhDZ4QWOjhTZxIGMhJGZhZmNa1b2c3d4e5f67890"
    },
    tvpublica: {
        url: "https://cdn.trimi.com.ar/live/sm-live/TV_PUBLICA_BACKUP/sa_live_dash_ll/TV_PUBLICA_BACKUP.mpd",
        key: "======gYwQmMlJWM1UmNyMTMhhDMlFjMkZDZ5IWM4cTNyUDNzM2MwkTZyYGZiFTN5QWO3YzN2UzY0AzYyIWZlZGZkRWN5gTMhJ2NlZTZiRWMjFDOzYWYyYWM5EDNyI2MwYjZ1czN3YmYwADM0QzN0YGOkJ2NiJmNhRTY1U2NmFmMiBjY0Y2MkVzMxQzMwgDZxQDZjNzYjJjY2YGZkVGMjZmN0ETY6YzY3ImNykTYxMTM2IDMyYDNmNGMjFWZygTZyEGZwEmYa1b2c3d4e5f67890"
    },
    tudnusa: {
        url: "https://live-atv-cdn.izzigo.tv//1/out/u/dash/TUDN-HD/default.mpd",
        key: "======AZhNDM3YzM3EGOiljN2MjYhZzM0IzN2QDNzETZyQ2MjV2M1YmZ2YWYzkzMhJDZkljY3cTZ4MzNidjZ0IzNwUTM0IGN0YmZ2IjYhVDNkNTZ2gTY4czY3YGM4QjMhJjNjJmZ2YDNykTO5MjZhFmZzkTYldjM0YTZlZmMmRDNmhjZjlDNyEmMxMzN0EzYmBDN1UTY5U2YlRjYyMmMhVGNxcTO6ITO1UWNwETYyUDOhhDO4ADM3gDO2IjZmBTZ3U2YklzMa1b2c3d4e5f67890"
    },
    hbomax: {
        url: "https://live-atv-cdn.izzigo.tv/2/out/u/dash/TNTHD/default.mpd",
        key: "======QMxIDNmVTZzUmN1MmNzgjZwIWOkN2Y2ATYjRjM0MTYlVTY0IGZyImYjdjZmRmNwczYhJjY1AjY2EmMxgjY2gDM0QjZ3MGO4IjY2MTZ4MWNzYmYzUDOiJWN3I2N2EDN5cTNyUWNwIGOlRzMkBjNjRWY4EDZ0M2NjhTY5EWM5UTZ1EGOkVjYiNTYykTZyQ2M0EmY5gDOmFjMyMzN0AzYhVzN6UzNzYjN1AzY3kDMwUGMiFjN2UTY5E2M5ATZ5EjNzAjNa1b2c3d4e5f67890"
    },
    beinsport1: {
        url: "https://a122aivottlinear-a.akamaihd.net/OTTB/syd-nitro/live/clients/dash/enc/pwdvd9fm5u/out/v1/5e22845dab3648b8a7033fd5923d62d1/cenc.mpd",
        key: "======QMkhTOwUWN2kTN3gDO1MTYhhTNwkjZlRWO1YjZyIDO1UWN1E2M5QTZmRjZ1UDOyUDZ1QGZ5E2Y4EjZiZWMhZGO0gDMxM2Y5UTZ1ATY5QmZjZ2MyETZ2IWN5kjNxUjNiRjZlJTNiFDM2EzMiJmN3EzM2IjNwYWYlhDN2U2M3cTNhZTO4U2YjJGNmRWN5Y2YwMjMyI2NmZTZ3ITNxEjYyITZ6YzNyMTZyUGZ3QTN1kjM3IDNxETYhRDNwQjN3gTOhZWNa1b2c3d4e5f67890"
    },
    beinsport3: {
        url: "https://a83aivottlinear-a.akamaihd.net/OTTB/syd-nitro/live/clients/dash/enc/gigxsk0lya/out/v1/df75d887bce4437b8fdf345ae455113b/cenc.mpd",
        key: "======QNkBTNiN2MmJDO4UzY1YWOjFmMjBTYwUDNjNjMlFzMyETOiR2MyIzNiV2MhZWOwUzY4IjYjVGM1E2NmNjMmNDN5MGZlJWYyEzYyEDN1UmYklzM0UWZkFDZllTO5IGZ5EWYwE2YzY2N0Q2YzYGZ3QWNxUWO3YGM5MGZiNDZjFzN3E2NlJTOwUTMhJDOyQTYkJzM4UmMjZmNyQWN3ATMkN2N6UmYyMGO0MzMhdjNlFGNhlTOwYDMwY2YiJGMwkDNlFjNa1b2c3d4e5f67890"
    },
    usanetwork: {
        url: "https://fsly.stream.peacocktv.com/Content/CMAF_OL1-CTR-4s/Live/channel(usa-west)/master.mpd",
        key: "======gNmJjMwETYiJTY3EmYycTYhFmM3cTOkFjNyQzMlBTY2QDN3E2NjFjZjdDM2QmNkhTNlF2YmNDOxQmZlNjNkF2YhV2M0MTOjRmYmZzY5EmY2QjN4UzN1QzNwI2N2U2Y3E2M3EmNkdjMhNWNjFGZiFGZ0QWY0Y2N1AjZykjZhZWMxMGOjNGM1gzNiNGMiRjZmhTZmhTNkJWYyEmMiJGZmhTZ6UzM1IWOmVWZ2IjYwIGNyUzM4UGMhdjMmR2MwAzNmRWZa1b2c3d4e5f67890"
    },
    dazn1it: {
        url: "https://otte.live.fly.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/lgk8kppclc/out/v1/f51173b6b0624a4386358ab8dfee257f/cenc.mpd",
        key: "======AZwQGZmFGOkdjYhRzNihTMiJjZ3ITOyYDOkZWZkN2YlJ2YygTYhFWYmVTOxU2N5MjM5MGMwIjNwUTNxQ2YzYDZ3QzM2EzY1cTYzUTZwUGN3IWOkZzYiVTYmZWY3MGZ1MTO3UmZwkjZhZjM3QzMhBDMyIWY3QzYldTOmVmYhVmM1kDNhJ2NlJGZ5QDNhdTM0cDO1kzN1EWYkNWMklTYzUDZ6EDZ5QmYhNmNmFTNhNTYlRGMzMDMxUjY0UTO5M2YhFWOa1b2c3d4e5f67890"
    },
    espn1mx: {
        url: "https://live-atv-cdn.izzigo.tv/1/out/u/dash/ESPNHD/dash/default.mpd",
        key: "======ANmZmY1YjM3QmMwcjZjNGOzMTZlBDO0IDO2EmNxITYhZ2NxEDZyYTZxQDMkRDOyImNygTY1MGZ4cjZlljN0IzM1cTY2cjYlBjM1Q2MmVTNyUzNklzMyETOhJjY0M2M5EzYhRmN3kDOmlTYkZzY5UjZ0kTZhRWZkFzMhdTN2QjYmFmZ2EzMyYmYmJWYjVmMiRTMwAjM1IGMwMTOiFzYmZ2M6QDO4EzYxEGNkNGZzUWNjRjNjRmNzEWOkRGN3UjYzgDZa1b2c3d4e5f67890"
    },
    espn2mx: {
        url: "https://live-atv-cdn.izzigo.tv/1/out/u/dash/ESPN2HD/default.mpd",
        key: "======gZmdzNxAzY4UGNiRzYkNjNjBDZkJDOiJGOiNmNlFGMihjZiJTZ1UzNldzNmRzYyYmNwADOjhTYxE2N1UjM0EDMjhDN5U2N5UzM0YmNxE2Y3QTZ2UGZiVzM1UTO2I2MmJDO1ATMmVjN0ETZykjMyYGM1E2NhZzMwI2NjFWO4UTZhdTNxEDZjF2N4cTYxIWNmNTMkNDN2YjYjJGZ1YmYwkTN6UTNhJjZhZzMzImNyUDM4YTZ5ITOxgTZ4cjM0MWMzYDNa1b2c3d4e5f67890"
    },
    espn3mx: {
        url: "https://live-atv-cdn.izzigo.tv/1/out/u/dash/ESPN3HD/dash/default.mpd",
        key: "======AM3UDN5Q2Y3I2NhNmMiZTZxM2NjFmNjFGOhFWZjRGMmBzY4EWOzMTZwMmMmFjYykTYhJWMjhjMzEzM5IGNwETZ4YzNmJWNwI2N1UTZ0UGO2UmZwcjMhNGMwYmYlFWN3ETYyEWO4gzNxkTO1UDO2UGZlhTM5kDNkRDZ4U2MlV2MwUjN3YzYzYGN5YWOxQjZhF2N4QWOzADN3EWNhVDZlhDM6gTZidzN1Q2M0UjMwkTOjRWY1EGMhFjZwImMjRDN4MTMa1b2c3d4e5f67890"
    },
    espn4mx: {
        url: "https://live-atv-cdn.izzigo.tv/1/out/u/dash/ESPN4HD/default.mpd",
        key: "======QO1EWM5gzM2QGMjVTMwgTYiJmYjdjNmFTY1QmZhZ2MyQTY0YDNmVzN3IDZhFGOjdTOiJWO5gDMwITZhFWO0I2N3ETOlBjYyU2NkJDOiNmM0UjMkVmY1MzNxITY4MjMwIDMiBTZiVWMwYTYyQDZlVDMxkzYmVzMhZjZ3IGOwcjMjZGMhhTNiJTOkVTYidzMkZ2NwUjYzQjM3QzMiBjM0IWM6UGMlVjNmdDO0QGM5IjNjFTNiJDZ3YGOjZzYiNTO5kTZa1b2c3d4e5f67890"
    },
    espncohd: {
        url: "https://covoslivechannels2dash.clarovideo.com/Content/DASH_DASH_FK/Live/Channel(ESPN_HD)/manifest.mpd",
        key: "======wM1kzY0cTZlNjZyQmZ0kTZwQWNiZGN4ETZ5gzYyYGZyEWMwUGN2EjYwYzNxgjY0YjN5YjZ2MWN4IjNxUWY2cTY3Y2M3czMzEjZmJjN0YjYwMTOxYzNxATNiRWMhNjZ1UWN3U2MkVWO5cDOxUTZyUWN1EDOhRTYxkzM5MDOmFGO5gzMiN2YklzYmJTN2UjYzAzNjFmY1QWO0MmYzYTN4MWM6gTN3IjMkljZiFjY5YjMmR2MhJDZmRGO1kjY1IWNihTNa1b2c3d4e5f67890"
    },
    espnco2hd: {
        url: "https://anonimocors.online/https://covoslivechannels2dash.clarovideo.com/Content/DASH_DASH_FK/Live/Channel(ESPN_2_HD)/manifest.mpd",
        key: "======gMwgTOxQDO2EjY5Q2NwYWY5YWMhF2YxUDO2YzM5gDZkNmZyIjMzADNyMDMwITZmFjM5EjYkNTOmdzNiRDZ0IjZiVDNxM2MlN2YxgjM1kjMiZGOmlzN2cjZzMjNjZmY5YWYihTZlRDN5gTY2MmZyAjY3AzN3QTOkdjYzMWY5IWYzUWN1ATOzU2MhVWZ4gTYjRDNkdzY5AjZ5ImZlNDOyI2N6UGZmNWNwIjYxkzM1kzM1kDOxUGMzYTO2EjMyMmNmBzNa1b2c3d4e5f67890"
    },
    espnco3hd: {
        url: "https://anonimocors.online/https://covoslivechannels2dash.clarovideo.com/Content/DASH_DASH_FK/Live/Channel(ESPN_3_HD)/manifest.mpd",
        key: "======AOkFDMlRWOlVDNxYjZ1QmZmRTZlZWZ0gjNkdjZwEjNiVTMhZDZxADZkljN2kzY3QTZmVWY4YmNmhDM5EGZzYjMxQTZ0UzN5kzMkRTO1AjY5UmZmFjY3kDMzYGMyUGMzQTMjN2N0QzM1EWZykDZllTMidTZwQGN5QWN0UGZmJGM3QWO1ETZzkjN4IWOwAjZwETZjdTNwgDZxYTMkNTYmJ2M6MzNlN2NjNTZkdjZjlzM0Q2MwIjZhRzMiF2NldjNwkjNa1b2c3d4e5f67890"
    },
    canal5mx: {
        url: "https://live-atv-cdn.izzigo.tv/2/out/u/dash/CANAL-5-HD/manifest.mpd",
        key: "======gNwEGOkFGMldzY4E2MlRWOhJTOlVWNkdzY2UzNmJjM5I2N4YTM1kjNwMWY1YWO5YmMiJ2MkRWY3MGOiBDM1UGN5MmZ1MTM3UDNlJTZjJzN2kDO2IjN5Y2YiNGOiZ2M2EWMjNjNiFDNlNTYlFTMzQDNzUTNyQGOkRWOwYjM4cDMiZWO5YjNjNzMwUWN1UTYlFWYhljZ3EDN3QDMmNTN1QGN6QGZ3UGNhVWMjBTN2EmNwIDZmRjNlRWYiZmYiFDNjZTOa1b2c3d4e5f67890"
    },
    daznfast: {
        url: "https://ac-003.live.p7s1video.net/63f8995e/t_003/dazn-fast-hd/cenc-default.mpd",
        key: "======QOkVzMwUDN0EjNjVDZmV2YiVDMxQmNzQjY2kDZxgTNyYGMxEzMxM2MldDZiR2N0IWZkJWMzITOycjYyYTY0YGMyYGZkFDM3EzYmFDO0YDZzUWM1YGZ1UmZwUTOlFzYyUWN2MWMxIWZlJmNiBTO1YWYiZmZlZDN3MTYjNWNhhTZ2czM0Y2M0ADNkVWNwUzN0YGOlZTM5UGOzAzNmRGMxMGO6IzM1ATYxImMmdzY1YGNzUGO0UGO4czY2kjMidTOlJTZa1b2c3d4e5f67890"
    },
    espn1: {
        url: "https://"+mt+"/live/eds/ESPN/live_dash_cld/ESPN.mpd",
        key: "======ANilDM5UTM2QjM1cTYzcDZ5ETZ1ImM3EWY0IDM3YWNiNTZ2EWN4MzN2QzMiVzNwYjNiFWZ4ADOhZDNhRmN3EzM5YzNyYWN0cjYxkDOjVGMxEjYkNWNwYDZ3MWNmJWYlRDMlBjY5QjNmVmYhZTYykTMwADNmNzYlVmZxQTOzQTYkJDZ2UGZ4MGNkJmM1EGMlV2NwcDNyIWZllDO4YTMmRjM6QmZzEjZlBTMyMWMiJTM2YDN0YGO4cDZxczY0UTOzcTMa1b2c3d4e5f67890"
    },
    espn2: {
        url: "https://"+mt+"/live/eds/ESPN2/live_dash_cld/ESPN2.mpd",
        key: "======AOyQGM5MjZ3MTYhhjYwgjNwATYlljMxETYkZzY5E2N1YzYzM2MxAjYzITNidjYyQDN3ImY1E2Y4IGMyYWMkJGOyEWM1IjYiJWNkRDZhhDM2gjM0QjMxYzY4E2MiNGN3IzYwUDN0AjYxMjMiZDZxIGN3gTYyIDM0EjMxYWMmhTM1MjMiF2MmdzY4EWO3QjZjJmZihTZ4M2YxQDN3kDMwAjZ6MTNhBTY3AjYzQWYkhjN2ETZykDZzcDMjRGNxYDZhJjNa1b2c3d4e5f67890"
    },
    espn3: {
        url: "https://"+mt+"/live/eds/ESPN3/live_dash_cld/ESPN3.mpd",
        key: "======gYjlDN1EjY4EDM4UDM4UWY3AjN2MWYzYTMyMDNhZGMlNGZ2kjYiZWYzgjMwkjZ3gTOjFWO4MWNzIWMzgTY0UDZxYmNzU2M5IGNmJWM4kjN1UzN5MGZjdTMlVTYzIzNmRjNjJWYxIWYlFGMzcTZxcDZjZDN0IjZyYGNyYDMyQ2N4MDOhNTN4UmN4MWZzUWM3YWZ5kTZ1cDNlVWZxgDN3MTZ6IWO4E2N5UGNygjNyITZlJWNwYWMzUjYlNTO2EGNhlTYa1b2c3d4e5f67890"
    },
    espn4: {
        url: "https://"+mt+"/live/eds/ESPN4/live_dash_cld/ESPN4.mpd",
        key: "======QY0MmM1gTM0UGZ4MWOzQTOzETZldTN0gTZhVmN4ADNkJDM0M2M5ADZ0UmYjhzN2EDNyMDN2ITYhBzNkFmZxUzMjVzM2kTMhNDM0QDOlFWZ4EmNzUDNmVTOwkTZ5ETM3YWMwAjZwIWZlJGMxIGZiNjY2MGO0gTZ0UzMhJmYxgzNxImN2IGMiNTO1YmNwEGNmJTO5UmYxQWZ3UzN0gDOzczY6Q2N3ITZ4MTM0QjM5EjM0IWZzMzMyYjY2EzYlFTYkZmMa1b2c3d4e5f67890"
    },
    FoxSports1: {
        url: "https://"+mt+"/live/eds/FoxSports1/live_dash_cld/FoxSports1.mpd",
        key: "======gNjJjMjNTM0IWYlJzM0UWMihzM2kDMwcTZhFGZzQDMlFTYmljM5EzY2YzMhJWY1EWY1ETNzMmZxkzNhJTY4AzNhNGO1IzM0QTN3MGN1ImYklDZklTYjZGMjdTNwkTYlZzMiNGOyUWMlRWYzIzM3QTNlFWYiR2MzkzMjFDMmZGZxUjM4IDMhVDOxU2NxkTNhVjYkJDZ4UzN4IWO2ADMxIGN6cTN2EWNkZWZkFmNxEDN0E2N5Y2Y4UWOjVWZiVGOkJGMa1b2c3d4e5f67890"
    },
    FoxSports2: {
        url: "https://"+mt+"/live/eds/FoxSports2/live_dash_cld/FoxSports2.mpd",
        key: "======wNxMWM5gTY3MWMwEzM3QjZlBTYhBDNzEjNwUGZxQGZ4IGNkV2MkZDOjljYjRDNxU2MiZDN3YjY3YTOhdTOjJjZ1IWMzEWO4UjNygzNwIWMxgTYwE2YiNzM1QGOjNjM0AjZ1EmZxcjM0YzM1kzN1MjZmNWY4UGO1EGMlNGNzkDMmJGOiZmYkZjZzQTM5ADZhhDMmNTMiVWZlRjMklTMiBTZ6Q2MlRWZyITOyYTNzMTM3EDN1QWMhRWNjZmNmFWZzAjMa1b2c3d4e5f67890"
    },
    FoxSports3: {
        url: "https://"+mt+"/live/eds/FoxSports3/live_dash_cld/FoxSports3.mpd",
        key: "======QO0EmZ4QDOiNDN2MjM0EmZ5MDMhVTNwYTMiVjY2QDMhFTZhJTNkJ2YwUzM5ADMwATOwIWMiZTZ1EzY4UGZ2UzMjVTY4Y2YlZ2M4EWYklTZxAjN3UWMiVWOlhjM0UWOjRWMwETNjdzNmRjMyM2YwczMhhTYkJmM3MGZzMWO4kTN2EzN4EmY5ATMiZTOmZWN3gzY0EDOiNWM1cTYiNGOmFjM6MzYhF2NwEjN5Q2Y5QTYlNGN1cDNiNzN3MDNhRGN5MzNa1b2c3d4e5f67890"
    },
    foxsports: {
        url: "https://cdn.trimi.com.ar/live/sm-live/FOX_SPORTS_BKP2/sa_live_dash_ll/FOX_SPORTS_BKP2.mpd",
        key: "======AZ0YWZidDN5ITZkFWN0kTYyUjZhVDNxImM3kDZ3YTYllTNzMDNiJ2MzcDZxIzY3cDNiRWM0MWY3UjNidzYkFmM3cDZxM2NmdjYhZzMyETZ4AzYmRWOkR2NwAzMiVzYhVWNldjN2QzNiljMjhjYwIjNzcDZjNWZ3MWYzQzYmBDZzQTOlFmY1Y2MmZDOlFzMiVWZmF2MjNWNiJGNkhjNlR2M6YDOyAjMxczN1UmM2UWNwUGNzQDM2UTOxIWO2IjZ5QTMa1b2c3d4e5f67890"
    },
    foxsports2: {
        url: "https://cdn.trimi.com.ar/live/sm-live/FOX_SPORTS_2/sa_live_dash/FOX_SPORTS_2.mpd",
        key: "======QN5gzN4MjYmRGN3cDO0YjMwYTNlZzYxQzYhlzYxEWZzcjNiljM2ATNzYTYhljYjhTZ5UmMhNGN5MzNmJzN0YmNjdzY3UGZ5MzY5ADO2EWY4UWNkRjN5M2MyUTOkJWY5QDOlZ2MlZGNyI2MwATY0QTY5YTOmJjN0gzMxUGN0YTO4QzNjdjZ5EjMhJWZ0kjZlFTMwMWZ3I2MxQWNwAzMmJGO6MGMhBDN3QjY5QTY4UDOzITMxEmZyMjYzcDO5YDN3QTNa1b2c3d4e5f67890"
    },
    foxsports3: {
        url: "https://cdn.trimi.com.ar/live/sm-live/FOX_SPORTS_3_BACKUP/sa_live_dash/FOX_SPORTS_3_BACKUP.mpd",
        key: "======wNldDNmRTYihDZ4QjM4gTNxQGOyUGO3UjNhNTN4QTY4gTNidDZmNmNlRDZ0QmY2UWM4QWNzQTO1EWZwkTM3QzMxM2M4UWZxQzNxMTZ1UDM4YTMkFzY3MmMjRTOzE2NkVGZlNWZ0YGZmBTYlBjYldjN2kjMwIDM5ATN5YGM2U2YyYDM0gzYzYzM2YzYhNjZwQGN4M2NzUDNyUWN0U2NlFjY6kjN0QTYmJGN3gzYiRjNzM2N3QmM1MGO2gjZyIWOhJDOa1b2c3d4e5f67890"
    },
    espnpremium: {
        url: "https://cdn.trimi.com.ar/live/sm-live/ESPN_PREM_BKP4/sa_live_dash_ll/ESPN_PREM_BKP4.mpd",
        key: "======QOhN2YwUjZ3Y2M0IDO4AzYjZGZklTYwMDZkJzYlJGOlZ2M3ETZmVWYwYzYmBTZhRWNmBjM4gTZwUGM4kjY2EGNxkTM1ImN0EDNwYGMxEWNmVDZxYmNhljZ5YzMzEjYkZTY4EjZxIDNzYmMmJWY3EzNkRGMmFjZzczMlFmMjFjY1MDZhhDZ3kTZlRzN5IjM3cTYmNGZkNmZ1U2N5IjZlhDN6ITZ3EDN3cTYiJmN0EDZiFWZ1AzY2UGZ3IjNzgTOyQmZa1b2c3d4e5f67890"
    },
    espnpremium2: {
        url: "https://"+mt+"/live/eds/ESPNPremium/live_dash_cld/ESPNPremium.mpd",
        key: "======QZwYzMxYjNmhTZwUTO5Q2NlJjY2AjZxMDOlRTZhdjYkhjMiRDM4YmZ0MWO3MWNlVDN4ADN3UDNlJzM2QmYyMDZllDZ1QTOyYTZ1ATYhlTOwUTNhlzN1YzMjBzM3AzMzcjYkRTNhhjMldjNhFWZ1IDZ2QzMxYDO3gjZkRjY1U2YjRTY4ETMlZjZzQGZ5MzYyUzN4cTZkRTZmR2N0AzN5MDN6QDZzMTOxYWO2YWZlRTZ0QmYxMTZyMzM0UjZkRWNyUjMa1b2c3d4e5f67890"
    },
    tntsports2: {
        url: "https://"+mt+"/live/eds/TNTSports/live_dash_cld/TNTSports.mpd",
        key: "======ANiR2M4UWNkRmMwUmZ5UjNkRDZxQmYxYWMzATMlBjYkVTOxkTMxczMwMmY3IzMkNDNkhTMwEzMkFjZkZGN1UjZ4QTO0MWN0M2YzEmNxEGOjZWZlV2MhRDM3QzN1ITOlNWMklDN0MDZ4gTO2YDOjRWY0cTY5ITNxczMyQDZjlTOxATNwgjZmBjN1IWZ5QzMyMmZlFWZwMTM1YjNmRDZhF2M6EWYygDM2QWNjNzYkRTZxI2N4UGZhR2YiFGMwQzN5YzMa1b2c3d4e5f67890"
    },
    deportv: {
        url: "https://"+mt+"/live/eds/Deportv/live_dash_cld/Deportv.mpd",
        key: "======QN4kzY2QjN2gDNhlTNyIjYlJDM1U2MkdDN1MmNjJjYwgjY4YDN4IDMkRTNxU2MhJTMxYWO5UWYhJjZjRTYkdTN3MmMjJTYwQ2MkFTM3YTZ1gDZhVWNhZGMzM2MmNTO0YmN0kjZmZDOkVzMzUzNyIDZhNWNkRTM2AzYjVmM0QmNhFzMjVDNmBTNlhDM5MWOyImNyYTM5QWYhFjN0EDN2UjN6ITNxEmY3YjYwMjYkBzN0ITMzMzN3YTN2gjZlJzNkhzNa1b2c3d4e5f67890"
    },
    tvpublica2: {
        url: "https://"+mt+"/live/eds/TVPublica/live_dash_cld/TVPublica.mpd",
        key: "======AMkFTZwQDZkBTY2gTMzgDZxU2YmVmN1MmN1QjY3YzM0UDZjZ2MihjNwEDM3kDOhJzY5QjYxQWOzATM0YGOlNmYwYTZ5MzM5AzN1MTY4YWY1YjM3UzYyQGMkhTY3MTZ1MTOhFWO5MWYmVGMldDZyQDO1YWMkFTO0UTZyUWNxMWNxIGOxADNiZjYjhTOlNjN0gDOyUGN2kzNlZmMiBTNmJTZ6IzN2QTO1kDMjFGZ4QGO2gzM2ITOiZDNhVmMkdjMhVDZa1b2c3d4e5f67890"
    },
    tntsports: {
        url: "https://cdn.trimi.com.ar/live/sm-live/TNT_SPORTS_BKP4/sa_live_dash_ll/TNT_SPORTS_BKP4.mpd",
        key: "======gMlVGO4EGOjZGN3cjNygDZ1cTO3EDN1AzYwEjYhJTOilzNjJjZ3kTMmJGNwMzNwEGMzIGZhV2M0UGNkFzM0MmYxQzYmRTZjJTOxEWZjFDOxUjNxMWOiJGM0MTZwEWZlJjNkFjNygDZwUjNzIWOiZjYwIGN4YWN0IjM3gTMxI2M3cDNkZDZ5YGMzQDM4ETN5YjMhNzYyIGMxkDOihDNyQmM6YjMlNDZhJGZzYDMkZmZ3gDZyEmZ0czMidTN2kTM2YTZa1b2c3d4e5f67890"
    },
};

function decryptAES(ciphertext, ivHex, key) {
    try {
        const keyHash = CryptoJS.SHA256(CryptoJS.enc.Utf8.parse(key));
        const iv = CryptoJS.enc.Hex.parse(ivHex);
        
        const decrypted = CryptoJS.AES.decrypt(
            { ciphertext: CryptoJS.enc.Hex.parse(ciphertext) },
            keyHash,
            { 
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            }
        );
        
        return decrypted.toString(CryptoJS.enc.Utf8);
    } catch (error) {
        console.error("[ERROR] en decryptAES:", error);
        return null;
    }
}

function deobfuscateKey(obfuscatedKey) {
    try {
        const trimmedKey = obfuscatedKey.slice(4, -16);
        const reversedKey = trimmedKey.split("").reverse().join("");
        const decodedBytes = CryptoJS.enc.Base64.parse(reversedKey);
        const decodedText = decodedBytes.toString(CryptoJS.enc.Utf8);
        const [ivHex, ciphertext] = decodedText.split(':');
        if (!ivHex || !ciphertext) {
            throw new Error("Formato invÃ¡lido despuÃ©s de desofuscaciÃ³n");
        }
        const masterKey = "EnRjmF8X6VZlfS4PifbJD8oWK4PaHnlZ";
        const decrypted = decryptAES(ciphertext, ivHex, masterKey);
        
        if (!decrypted) {
            throw new Error("Fallo en desencriptaciÃ³n AES");
        }
        
        return decrypted;
    } catch (error) {
        console.error("[ERROR] en deobfuscateKey:", error);
        return null;
    }
}

function getStreamById(streamId) {
    try {
        const stream = streams[streamId];
        if (!stream) throw new Error(`Stream ${streamId} no encontrado`);
        
        let finalKey = stream.key;
        if (finalKey.startsWith('====')) {
            finalKey = deobfuscateKey(finalKey);
            if (!finalKey) throw new Error("Fallo en desencriptaciÃ³n");
        }
        if (finalKey && finalKey.includes(':')) {
            const [kid, key] = finalKey.split(':');
            return {
                url: stream.url,
                key: { [kid.trim()]: key.trim() }
            };
        }

        throw new Error("Formato de clave invÃ¡lido");
    } catch (error) {
        console.error(`[ERROR] en getStreamById: ${error.message}`);
        return null;
    }
}

window.getStreamById = getStreamById;

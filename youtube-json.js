let yt = {
    "kind": "youtube#searchListResponse",
    "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/PaiEDiVxOyCWelLPuuwa9LKz3Gk\"",
    "nextPageToken": "CAUQAA",
    "regionCode": "KE",
    "pageInfo": {
      "totalResults": 4249,
      "resultsPerPage": 5
    },
    "items": [   //array
      {    //array[0]
        "kind": "youtube#searchResult",
        "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/QpOIr3QKlV5EUlzfFcVvDiJT0hw\"",
        "id": {
          "kind": "youtube#channel",
          "channelId": "UCJowOS1R0FnhipXVqEnYU1A"
        }
      },
      {    //array[1]
        "kind": "youtube#searchResult",
        "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/AWutzVOt_5p1iLVifyBdfoSTf9E\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "Eqa2nAAhHN0"
        }
      },
      {    //array[2]
        "kind": "youtube#searchResult",
        "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/2dIR9BTfr7QphpBuY3hPU-h5u-4\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "IirngItQuVs"
        }
      }
    ]
  }

  console.log(yt.pageInfo.totalResults);
  console.log(yt.items[0].id.kind);
  console.log(yt.items[2].id.videoId);
const game_stat = {
    "get": "fixtures/statistics",
    "parameters": {
        "fixture": "831483",
        "team": "375"
    },
    "errors": [],
    "results": 1,
    "paging": {
        "current": 1,
        "total": 1
    },
    "response": [
        {
            "team": {
                "id": 375,
                "name": "Malmo FF",
                "logo": "https://media-4.api-sports.io/football/teams/375.png"
            },
            "statistics": [
                {
                    "type": "Shots on Goal",
                    "value": 4
                },
                {
                    "type": "Shots off Goal",
                    "value": 4
                },
                {
                    "type": "Total Shots",
                    "value": 14
                },
                {
                    "type": "Blocked Shots",
                    "value": 6
                },
                {
                    "type": "Shots insidebox",
                    "value": 10
                },
                {
                    "type": "Shots outsidebox",
                    "value": 4
                },
                {
                    "type": "Fouls",
                    "value": 17
                },
                {
                    "type": "Corner Kicks",
                    "value": 2
                },
                {
                    "type": "Offsides",
                    "value": 1
                },
                {
                    "type": "Ball Possession",
                    "value": "58%"
                },
                {
                    "type": "Yellow Cards",
                    "value": null
                },
                {
                    "type": "Red Cards",
                    "value": null
                },
                {
                    "type": "Goalkeeper Saves",
                    "value": 5
                },
                {
                    "type": "Total passes",
                    "value": 493
                },
                {
                    "type": "Passes accurate",
                    "value": 381
                },
                {
                    "type": "Passes %",
                    "value": "77%"
                }
            ]
        }
    ]
};

module.exports = { game_stat };

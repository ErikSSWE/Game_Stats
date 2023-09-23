//import {fetchTeamIdMalmö, fetchTeamIdDegen, fetchLast5H2H, fetchGameStat} from './api_test';
import {fetchTeamId, fetchLast5, fetchLast5H2H, fetchGameStat} from './api';

let no_stats = [
    {"type": "Shots on Goal", "value": null},
    {"type": "Shots of Goal", "value": null},
    {"type": "Total Shots", "value": null},
    {"type": "Blocked Shots", "value": null},
    {"type": "Shots insidebox", "value": null},
    {"type": "Shots outsidebox", "value": null},
    {"type": "Fouls", "value": null},
    {"type": "Corner Kicks", "value": null},
    {"type": "Offsides", "value": null},
    {"type": "Ball Possession", "value": null},
    {"type": "Yellow Cards", "value": null},
    {"type": "Red Cards", "value": null},
    {"type": "Goalkeeper Saves", "value": null},
    {"type": "Total passes", "value": null},
    {"type": "Passes accurate", "value": null},
    {"type": "passes %", "value": null},
    {"type": "expected_goals", "value": null},
]

let test = {"statistics": no_stats};

async function getLast5H2Hid(info) {
    let ids = [];
    let count = 0;

    while (count < info.length) {
        ids[count] = info[count].fixture.id;
        count ++;
    }

    return ids;
}

async function getGameStats(teamId, gameIds) {
    let count = 0;

    let stats_arr = [];

    while (count < gameIds.length) {
        let stats = await fetchGameStat(gameIds[count], teamId);

        if (stats.length === 0) {
            stats_arr[count] = test.statistics;
        }else {
            stats_arr[count] = stats[0].statistics;
        }
        count ++;
    }

    return stats_arr;
}

async function test_timer() {
    let count = 0;

    while (count < 5) {
        console.log(`test: ${count}`);
        count ++;
    }
    setTimeout(test_timer ,60000);
}

async function main_function(team1, team2) {
    /*
        1. team ids from name ✅
        2. teams last 5 games against eachother ids ✅
        3. teams stats 5 latest h2h (both teams) ✅
        4. teams 5 latests games overall ids ✅
        5 step 3 but not h2h ✅
        6. save stats in a retrevable state in two arrays that nested
        team [
            name: "",
            id: "",
            "logo",
            statsH2H: [[1][2][3][4][5]],
            stats5l: [[1][2][3][4][5]]
        ]
        ex of statsH2H array: :
        [
            "corners": x,
            "yellow cards": x,
            "Red Cards": x
        ] ✅
        
        let team1_info = {};
        let team2_info = {};

        team1_info.name = team1;
        team2_info.name = team2;
        
        team1_info.id = await fetchTeamId(team1_info.name);
        team2_info.id = await fetchTeamId(team2_info.name);

        let h2hData = await fetchLast5H2H(team1_info.id, team2_info.id);
        let h2hIds = await getLast5H2Hid(h2hData);
        
        team1_info.statsH2H = await getGameStats(team1_info.id, h2hIds);
        team2_info.statsH2H = await getGameStats(team2_info.id, h2hIds);
        
        let team1_5_latest = await fetchLast5(team1_info.id);
        let team2_5_latest = await fetchLast5(team2_info.id);
        
        team1_info.latestIds = await getLast5H2Hid(team1_5_latest);
        team2_info.latestIds = await getLast5H2Hid(team2_5_latest);
        
        team1_info.latestStats = await getGameStats(team1_info.id, team1_info.latestIds);
        team2_info.latestStats = await getGameStats(team2_info.id, team2_info.latestIds);
        
    return [team1_info, team2_info];
    */
    test_timer();
}

export default main_function;

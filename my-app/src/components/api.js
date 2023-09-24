const api_key = "ecc33badf66036c9face3ae01b3fbdba";
const base_url = "https://v3.football.api-sports.io";

async function fetchTeamId(teamName) {

    let id = fetch(`${base_url}/teams?name=${teamName}`, {
	"method": "GET",
    "headers": {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': `${api_key}`
    }
    })
    .then(response => {
        return response.json();
    })
    .then((data) => {
        return data.response[0].team.id;
    })
    .catch(err => {
        console.log(err);
    });

    return id;
}

async function fetchLast5H2H(team1, team2) {

    let info = fetch(`${base_url}/fixtures/headtohead?h2h=${team1}-${team2}&last=5`, {
	"method": "GET",
    "headers": {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': `${api_key}`
    }
    })
    .then(response => {
        return response.json();
    })
    .then((data) => {
        return data.response;
    })
    .catch(err => {
        console.log(err);
    });

    return info
}

async function fetchLast5(team) {

    let info = fetch(`${base_url}/fixtures?team=${team}&last=5`, {
	"method": "GET",
    "headers": {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': `${api_key}`
    }
    })
    .then(response => {
        return response.json();
    })
    .then((data) => {
        console.log("fetchLast5");
        console.log(data.response);
        return data.response;
    })
    .catch(err => {
        console.log(err);
    });

    return info
}

async function fetchGameStat(fixture, teamId) {
    let url_param = `/fixtures/statistics?fixture=${fixture}&team=${teamId}`
    let info = await test_fetch(url_param);
    return info;
}

async function test_fetch(url) {
    let info = fetch(`${base_url}${url}`, {
        "method": "GET",
        "headers": {
            'x-rapidapi-host': 'v3.football.api-sports.io',
            'x-rapidapi-key': `${api_key}`
        }
        })
        .then(response => {
            return response.json();
        })
        .then((data) => {
            return data.response;
        })
        .catch(err => {
            console.log(err);
        });
    
        return info
}

export {fetchTeamId, fetchLast5, fetchLast5H2H, fetchGameStat};


const api_key = "hello process.env not working like normal with vite apparently";
var base_url = 'http://localhost:3000';

async function fetchTeamId(teamName) {

    let id = fetch(`${base_url}/teams?name=${teamName}`, {
	"method": "GET",
    "headers": {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': `${api_key}`,
        'Access-Control-Allow-Origin': 'http://localhost:3000'
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
        'x-rapidapi-key': `${api_key}`,
        'Access-Control-Allow-Origin': 'http://localhost:3000'
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
        'x-rapidapi-key': `${api_key}`,
        'Access-Control-Allow-Origin': 'http://localhost:3000'
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
        'x-rapidapi-key': `${api_key}`,
        'Access-Control-Allow-Origin': 'http://localhost:3000'
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


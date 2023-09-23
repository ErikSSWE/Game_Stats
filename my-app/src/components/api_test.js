const api_key = "70d5ab3002bbf6aa6d0e039504c13f3a";
const base_url = "http://localhost:3000";
// "ecc33badf66036c9face3ae01b3fbdba"

/*
Man kan söka efter lag med att istället skicka query med team istället
som exempel nedanför. 
https://v3.football.api-sports.io/teams?name=Manchester United eller
https://v3.football.api-sports.io/teams?name=Malmö FF

function getTeamsH2H(team1, team2) {
    fetch("https://v3.football.api-sports.io/teams?name=Malmö FF", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": api_key
	}
    })
    .then(response => {
        return response.json();
    })
    .then((data) => {
        console.log(data.response);
    })
    .catch(err => {
        console.log(err);
    });
}

*/

async function fetchTeamIdMalmö() {

    let id = fetch(`${base_url}/mff`, {
	"method": "GET",
    "headers": {
        "Access-Control-Allow-Origin": '*'
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

async function fetchTeamIdDegen() {

    let id = fetch(`${base_url}/degen`, {
	"method": "GET",
    "headers": {
        "Access-Control-Allow-Origin": '*'
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

    let info = fetch(`${base_url}/h2h`, {
	"method": "GET",
    "headers": {
        "Access-Control-Allow-Origin": '*'
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

    let info = fetch(`${base_url}/stats`, {
	"method": "GET",
    "headers": {
        "Access-Control-Allow-Origin": '*'
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

export {fetchTeamIdMalmö, fetchTeamIdDegen, fetchLast5H2H, fetchGameStat};

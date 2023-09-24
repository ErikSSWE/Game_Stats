const base_url = "http://localhost:3000";

async function test_fetchTeamId(teamName) {
    let id = fetch(`${base_url}/team_info?team=${teamName}`, {
	"method": "GET",
    "headers": {
        'allow-cross-origin': '*'
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

async function test_fetchLast5H2H(team1, team2) {

    let info = fetch(`${base_url}/h2h_info`, {
	"method": "GET",
    "headers": {
        'allow-cross-origin': '*'
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


export {test_fetchTeamId, test_fetchLast5H2H};

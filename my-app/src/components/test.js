const api_key = "ecc33badf66036c9face3ae01b3fbdba";

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

async function getTeamsId(teamName) {
    console.log(teamName);

    let test = fetch(`https://v3.football.api-sports.io/teams?name=${teamName}`, {
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
        return data.response[0].team.id;
    })
    .catch(err => {
        console.log(err);
    });

    return test;
}

async function getTeamsH2H(team1, team2) {
    const HomeTeam = await getTeamsId(team1);
    const GuestTeam = await getTeamsId(team2);

    //console.log(`Home team id = ${HomeTeam}`);
    //console.log(`Guest team id = ${GuestTeam}`);

    let GameIds = [];
    
    let AllFiveGamesData = fetch(`https://v3.football.api-sports.io/fixtures/headtohead?h2h=${HomeTeam}-${GuestTeam}&last=5`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": api_key,
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
}

async function GetLast5GamesH2HData(team1, team2) {
    let data = await getTeamsH2H(team1, team2);

    console.log("data");
    console.log(data);
    console.log("\n ----- \n");

    let testIds = []

    let count = 0;
    
    for (i in data) {
        console.log(i.fixture.id);
        testIds[count] = i.fixture.id;
    }

    console.log(`test ids = \n`);
    console.log(testIds);
}

export default GetLast5GamesH2HData;

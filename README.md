# Fotball stats website
### created by Erik Svensson


# Table of contents
1. [Introduction](#introduction)
2. [Setup](#setup)
3. [Test]("#test")



<a name="introduction"><a/>
# Introduction
The aim with this is to be able to get fotball statistics in a readable format and also collected.

# Setup<a name="setup"><a/>
### Setup locally
To run this app localy you open two terminals, one in my-app and one in mock_api

1. for my-app you run ```$ bun run dev```
2. for mock_api you run ```$ npm start ```

### Setup using docker and docker compose (reccomended)

To run this project using docker you first of need to know how to use docker and docker compose.

1. Build image for both front using ```$ docker build -t ersr/my_app:0.1``` in my-app
2. Build image for both mock using ```$ docker build -t ersr/mock_api:0.1``` in mock_api
**if you decide to use your own username instead of mine (ersr) you also need to remember to change
the docker-compose file in the root directory and change out the images names in there also.**
3. go back to root directory where the docker compose file is, the run the command ```$ docker compose up```
wich starts the apps if everything is correctly done in the steps before. in the terminal you should get
a link to the app running and you need to select __NOT__ localhost link and instead use the network link
because of a unfixed bug from my side that I havent fixed yet with the configs and Vite.
4. Rember this is set up for local test right now and therefor it is only possible so search after
Liverpool vs West ham and the statistics are just incremented to keep track.


# Test<a name="test"><a/>
this is only for test in README and is not important!
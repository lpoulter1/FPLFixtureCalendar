# FPL Fixture Difficulty Calendar - James Attrill Side Project

Side Project - A FPL Fixture Calendar that shows the upcoming fixtures for each Premier League team and ranks them based on their difficulty. I aim to use this side project to practice my React, JS and CSS skills. Will eventually merge with the official FPL API or perhaps even create my own one to practice more advanced back-end skills. Any suggestions welcome!

E-mail address: attrill20@gmail.com

## Current To-Do List

- Add a search bar / drop down to filter fixtures
- Add home and away display
- Add a header for the site

- Import the FPL API
- Colour code fixture difficulty
- Reorder table based on fixture difficulty (create own algorithm?)

- Add testing
- Ensure accessibility
- Link to betting site for odds
- Clean sheet percentage

## 13/05/23

Initialised the repo on GitHub. Set up a new React project and made sure all the components are linked, passed down props of teams and GWs down from app.js down to cardlist and card. Felt good to see them successfully rendering! Set up dummy arrays of teams and GWs to check that they were diplaying properly and learnt about using [index] if mapping multiple arrays. 

Did some basic styling to check the files were all linked up properly, changed the background color and made some parts of the text bold to improve readability. Put all the fixtures into a table and ensured the width of the columns remained the same even when team name lengths changed. 

A good start. Here's the first screenshot of progress:

<img width="1652" alt="Screenshot 2023-05-13 at 23 42 55" src="https://github.com/attrill20/FPLFixtureCalendar/assets/123314687/4cfe2324-0614-45e3-b7b5-bb58264b75ad">

## 15/05/23

Did some reading and research as to what API I would need to use to implement in the project. Here are some useful links:

- Live FPL Rank: https://www.livefpl.net/rank (useful website displaying loads of data, nice new design)
- Official FPL API: https://fantasy.premierleague.com/api/fixtures/ (this is the full database, might need to filter for useful information)
- Medium article: https://medium.com/@frenzelts/fantasy-premier-league-api-endpoints-a-detailed-guide-acbd5598eb19 (explains how to use the API)
- Football Fallout Calendar: https://www.footballfallout.com/fpl/fixture-difficulty-planner (the current fixture calendar I use, aim to build on this)

Discovered that there is an inbuilt difficulty ranking buried within the FPL API ("team_h_difficulty": 4, "team_a_difficulty": 2) which ranks them out of 5. I presume this is what is being used by the other fixture difficulty calendars out there. Maybe I'll start with this, but would love to build my own algorithm for determining this possibly on a scale out of 10 for more control over this and to allow for a more refined way of navigating fixture difficulty for FPL managers.

The API seems to be divided into these sections:

1. General Information (Full URL: https://fantasy.premierleague.com/api/bootstrap-static/)
- events (basic information of every Gameweek such as average score, highest score, top scoring player, most captained, etc)
- teams (basic information of current Premier League clubs)
- total_players (total FPL players)
- elements (information of all Premier League players including points, status, value, match stats (goals, assists, etc.), ICT index, etc)
- element_types (basic information about player’s position (GK, DEF, MID, FWD))

2. Fixtures (Full URL: https://fantasy.premierleague.com/api/fixtures/)
- To get fixtures for specific Gameweek, you can add a parameter after the endpoint path (ex: fixtures?event=7)
- You can also request only the upcoming fixtures using future parameter (ex: fixtures?future=1)
- event (event id)
- team_a and team_h refers to the team id in teams section of the bootstrap-static data
- team_h_difficulty and team_a_difficulty is the FDR value calculated by FPL
- stats (contains a list of match facts that affect points of a player. It consists of goals_scored, assists, own_goals, penalties_saved, penalties_missed, yellow_cards, red_cards, saves, bonus, and bps data)

3. Player's Detailed Data (Full URL: https://fantasy.premierleague.com/api/element-summary/{element_id}/)
- fixtures (remaining fixtures), history (previous fixtures and match stats), history_past (previous season stats)

4. Gameweek Live Data (Full URL: https://fantasy.premierleague.com/api/event/{event_id}/live/)
- id (refers to element id from bootstrap-static), stats (player match stats), explain (breakdown of player's points)

5. Manager Basic Information (Full URL: https://fantasy.premierleague.com/api/entry/{manager_id}/)
- name, id, info, joined, team name, team value, leagues

6. Manager's History (Full URL: https://fantasy.premierleague.com/api/entry/{manager_id}/history/)
- previous GWs, chips used, past seasons

7. Classic League Standings (Full URL: https://fantasy.premierleague.com/api/leagues-classic/{league_id}/standings)
- league, standings, new entries

8. My Team (Full URL: https://fantasy.premierleague.com/api/my-team/{manager_id}/)
- picks (a list of players you have picked in your team), chips (list of unused chips), transfers (recent transfer information)

9. Manager's Team Per Gameweek (Full URL: https://fantasy.premierleague.com/api/entry/{manager_id}/event/{event_id}/picks/)
- automatic_subs, entry_history, picks

10. Event Status (Full URL: https://fantasy.premierleague.com/api/event-status/)
- Shows when bonus / league tables etc have been processed

11. Dream Team (Example URL: https://fantasy.premierleague.com/api/dream-team/8/)
- highest scoring team and overall star of the GW

12. Set Piece Taker Notes (Full URL: https://fantasy.premierleague.com/api/team/set-piece-notes/)
- Looks to be handwritten notes on team's set piece takers

Won't do anything with this data right now, but very interesting to have more information on how the API can be utilised. Started learning about SQL on the course today, so intrigued to see how that could possibly be implemeented into this project in the future too. A good day!

## 20/05/23

Spent a bit of time today improving the look of the site, and added a badge icon for each of the clubs which now renders below their name in the team list, and does so smaller now under the initials of the team in the GW column. A surprisngly simple job, but got caught for a while when I asked ChatGPT to reorder the dummy arrays for me, but for some reason it omly generated 18 for one of them so kept getting errors that took me far too long to realise were being caused by this! 

Tidied up the UI of the site with a slightly brighter background and clear black text for the teams. Added some padding and display issues too. Good recap of some CSS and React essential skills today. All the basic information is dispaying nciely now, so will look to add a filter search bar next, and start thinking about how to add in the calculation of fixture difficulty (which will have to factor in home / away considerations). Here's how the site is currently looking:

<img width="1768" alt="Screenshot 2023-05-21 at 20 22 01" src="https://github.com/attrill20/FPLFixtureCalendar/assets/123314687/b13a00c9-59ce-4836-af55-ab1753e0910e">


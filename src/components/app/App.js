import React, { useState } from "react";
import Dropdown from "../dropdown/dropdown";
import { teams, gameweeks } from "../dummy arrays/dummy";
import "./App.css";

export default function App() {
  const [numberOfGameweeks, setNumberOfGameweeks] = useState(3);

  const handleGameweekChange = (event) => {
    setNumberOfGameweeks(event.target.value);
  };

  let filteredGameweeks = gameweeks.slice(0, numberOfGameweeks);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Welcome to the FPL Fixture Difficulty Calendar</h1>
      </header>
      <div className="sub-heading">
        <h2>
          Welcome to the Fixture Difficulty Planner for the 2022/23 Fixtures.
          You can use this site to filter teams by upcoming GWs to help plan
          transfers for players with easier fixtures and maximise your returns.
          Best of luck!
        </h2>
      </div>
      <div class="filter-container">
        <div className="gameweek-dropdown">
          <Dropdown handleGameweekChange={handleGameweekChange} />
        </div>
      </div>
      <div>
        <FixtureTable teams={teams} gameweekFixtures={filteredGameweeks} />
      </div>
    </div>
  );
}

function FixtureTable({ teams, gameweekFixtures }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th> {/* Leave the first cell in the header row empty */}
            {gameweekFixtures.map((_, index) => (
              <th>{`GW ${index + 1}`}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {teams.map((team, teamIndex) => {
            // gamweekfixtures are orderd by team,
            // so we can use the teamIndex to get the correct fixture for a given team
            const teamFixtures = gameweekFixtures.map(
              (fixture) => fixture[teamIndex]
            );
            return <FixturesRow team={team} teamFixtures={teamFixtures} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

function FixturesRow({ team, teamFixtures }) {
  return (
    <tr>
      <td>
        <span>{team.name}</span>
        <br />
        <img src={team.badge} alt={team.name} className="fixtures-row-badge" />
      </td>
      {teamFixtures.map((fixture) => (
        <FixtureCell
          location={fixture.location}
          opposition={fixture.initial}
          team={fixture.initial}
          badge={fixture.badge}
          alt={fixture.name}
        />
      ))}
    </tr>
  );
}

function FixtureCell({ location, opposition, badge, name }) {
  return (
    <td>
      {location} {opposition}{" "}
      <img src={badge} alt={name} className="fixture-card-badge" />
    </td>
  );
}

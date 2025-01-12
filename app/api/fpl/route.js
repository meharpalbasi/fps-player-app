// app/api/fpl/route.js

import { NextResponse } from 'next/server';

// Utility function to fetch FPL data
const fetchFPLData = async () => {
  const res = await fetch('https://fantasy.premierleague.com/api/bootstrap-static/', {
    next: { revalidate: 3600 }, // Revalidate every hour
  });

  if (!res.ok) {
    throw new Error('Failed to fetch FPL data');
  }

  const data = await res.json();
  return data;
};

// Function to transform player data
const transformPlayers = (data) => {
  const teamsMap = new Map(data.teams.map((team) => [team.id, team.name]));
  const typesMap = new Map(
    data.element_types.map((type) => [type.id, type.singular_name])
  );

  return data.elements.map((player) => ({
    id: player.id,
    firstName: player.first_name,
    secondName: player.second_name,
    fullName: `${player.first_name} ${player.second_name}`,
    teamId: player.team,
    teamName: teamsMap.get(player.team) || 'Unknown',
    position: typesMap.get(player.element_type) || 'Unknown',
    totalPoints: player.total_points,
    minutes: player.minutes,
    goalsScored: player.goals_scored || 0,
    assists: player.assists,
    cleanSheets: player.clean_sheets,
    goalsConceded: player.goals_conceded,
    ownGoals: player.own_goals,
    penaltiesMissed: player.penalties_missed,
    yellowCards: player.yellow_cards,
    redCards: player.red_cards,
    saves: player.saves, // Applicable for goalkeepers
    bonus: player.bonus,
    bps: player.bps,
    form: player.form,
    ictIndex: player.ict_index,
    selectedByPercent: player.selected_by_percent,
    // Add more fields as needed
  }));
};

// Function to transform team data
const transformTeams = (data) => {
  return data.teams.map((team) => ({
    id: team.id,
    name: team.name,
    strength: team.strength,
    // Add more fields as needed, e.g., overall points, games played
    // If such data is available in the API response
  }));
};

// Handler for GET requests
export async function GET(request) {
  try {
    const data = await fetchFPLData();

    // Transform data into players and teams
    const players = transformPlayers(data);
    const teams = transformTeams(data);

    //
    console.log('Sample Player:', players[0]);

    return NextResponse.json({ players, teams });
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch FPL data' },
      { status: 500 }
    );
  }
}

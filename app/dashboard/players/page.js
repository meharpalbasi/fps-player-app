// app/dashboard/players/page.js

import PlayersList from '@/components/PlayerList';

export default async function PlayersPage() {
  try {
    // Fetch data from the internal API route
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/fpl`, {
      cache: 'no-cache', // Use ISR caching strategy
    });

    if (!res.ok) {
      throw new Error('Failed to fetch players data');
    }

    const data = await res.json();
    const players = data.players;

    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-8">Premier League Players</h1>
        <PlayersList players={players} />
      </div>
    );
  } catch (error) {
    console.error('Players Page Error:', error);
    return <div className="text-red-500">Error loading player data.</div>;
  }
}

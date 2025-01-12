// app/dashboard/teams/page.js

import TeamsList from '@/components/TeamsList';

export default async function TeamsPage() {
  try {
    // Fetch data from the internal API route
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/fpl`, {
      cache: 'force-cache', // Use ISR caching strategy
    });

    if (!res.ok) {
      throw new Error('Failed to fetch teams data');
    }

    const data = await res.json();
    const teams = data.teams;

    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-8">Premier League Teams</h1>
        <TeamsList teams={teams} />
      </div>
    );
  } catch (error) {
    console.error('Teams Page Error:', error);
    return <div className="text-red-500">Error loading team data.</div>;
  }
}

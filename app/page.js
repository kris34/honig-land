export const dynamic = 'force-dynamic'; // This disables SSG and ISR

import HomepageBanner from './components/HomepageBanner'

export default async function Home() {
  // Check if the post table exists

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-24 px-8">
      <HomepageBanner />
    </div>
  );
}

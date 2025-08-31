export const dynamic = 'force-dynamic'; // This disables SSG and ISR

import { redirect } from 'next/navigation';
import { checkPostTableExists } from '@/lib/db-utils';
import HomepageBanner from './components/HomepageBanner'

export default async function Home() {
  // Check if the post table exists
  const tableExists = await checkPostTableExists();

  // If the post table doesn't exist, redirect to setup page
  if (!tableExists) {
    redirect('/setup');
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-24 px-8">
      <HomepageBanner />
    </div>
  );
}

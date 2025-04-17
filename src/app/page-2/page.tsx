import Header from '@/components/Header';
import TweetGrid from '@/components/TweetGrid';
import { mockTweets } from '@/data/mockData';
import Link from 'next/link';

export default function PageTwo() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 flex justify-between items-center">
          <Link 
            href="/" 
            className="text-blue-600 font-semibold hover:underline"
          >
            ← Home
          </Link>
          <h2 className="text-2xl font-semibold text-blue-600">Community Tweets</h2>
        </div>
        
        {/* Tweet Grid */}
        <TweetGrid tweets={mockTweets} />
        
        {/* Additional Content Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border border-gray-300 rounded-md p-6 h-48"></div>
          ))}
        </div>
      </main>
    </div>
  );
}
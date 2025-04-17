import Link from 'next/link';
import Header from '@/components/Header';

export default function PreviousEditionPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="border-b border-double border-gray-300 pb-6 mb-8">
          <div className="text-center mb-2 text-sm text-gray-500">ARCHIVED EDITION</div>
          <h2 className="text-3xl font-serif font-bold text-center mb-2">
            THE MONDAY EDITION
          </h2>
          <div className="text-center mb-6">
            <span className="text-sm italic font-serif text-gray-700">original contentcoin</span>
          </div>
          <p className="text-center text-gray-600 italic font-serif">
            April 8, 2025 • Issue 42
          </p>
        </div>
        
        <div className="text-center mb-12">
          <Link 
            href="/"
            className="px-6 py-2 border border-gray-300 text-sm font-serif"
          >
            Return to Current Edition
          </Link>
        </div>
        
        <div className="max-w-2xl mx-auto mb-12">
          <div className="mb-8 pb-6 border-b border-gray-300">
            <h2 className="text-2xl font-serif font-bold mb-3">Introducing The Tuesday Edition</h2>
            <p className="article-excerpt mb-4">
              We're proud to announce the evolution of our publication into the new Tuesday Edition. 
              Starting next week, our main publication day will move from Monday to Tuesday, 
              with expanded content and new features for our readers and token holders.
            </p>
            <div className="text-xs article-meta">
              <span className="font-semibold">Emma Rodriguez</span>
              <span className="mx-2">•</span>
              <span>Apr 8, 2025</span>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-serif font-bold mb-3">What's Changing</h3>
            <p className="article-excerpt mb-4">
              The new Tuesday Edition will feature an enhanced editorial process, with community 
              members and token holders playing a more significant role in content curation. 
              Our editor's corner will now include a voting system for submissions, ensuring the 
              highest quality content makes it to publication.
            </p>
            <p className="article-excerpt">
              Token economics have also been upgraded, with new incentives for regular contributors 
              and more transparent revenue sharing. The contentcoin model has proved successful in our 
              first 42 issues, and we're refining it further based on community feedback.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-300 pt-8 text-center">
          <div className="text-sm text-gray-500 mb-2">Issue archived on April 9, 2025</div>
          <Link 
            href="/"
            className="text-sm font-serif hover:underline"
          >
            Continue to Tuesday Edition
          </Link>
        </div>
      </main>
    </div>
  );
}
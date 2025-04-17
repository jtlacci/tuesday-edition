import Header from '@/components/Header';
import ArticleMetalink from '@/components/ArticleMetalink';
import EditorSection from '@/components/EditorSection';
import FeaturedArticle from '@/components/FeaturedArticle';
import { mockArticles } from '@/data/mockData';
import Link from 'next/link';

export default function Home() {
  // Find the featured article
  const featuredArticle = mockArticles.find(article => article.featured);
  // Get remaining articles
  const regularArticles = mockArticles.filter(article => !article.featured);
  
  // Community spotlight content (not from mockData)
  const communitySpotlight = {
    title: "Community Spotlight: Token Holders Making a Difference",
    excerpt: "How TEdition1 token holders are using governance proposals to shape the future of publishing.",
    author: "Community Team",
    date: "Apr 9, 2025"
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Featured Article */}
        {featuredArticle && featuredArticle.image && (
          <div className="mb-10">
            <FeaturedArticle 
              title={featuredArticle.title}
              excerpt={featuredArticle.excerpt}
              author={featuredArticle.author}
              date={featuredArticle.date}
              image={featuredArticle.image}
            />
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Left column - Articles */}
          <div className="md:col-span-1 space-y-6">
            {regularArticles.length > 0 && (
              <ArticleMetalink 
                key={regularArticles[0].id}
                title={regularArticles[0].title}
                excerpt={regularArticles[0].excerpt}
                author={regularArticles[0].author}
                date={regularArticles[0].date}
              />
            )}
            
            {/* Extra article - trending topic */}
            <div className="nyt-card">
              <h3 className="headline text-base">Trending: NFTs for Publication Rights</h3>
              <p className="article-excerpt text-sm mb-2">
                New models for distributing ownership of syndication and translation rights.
              </p>
              <div className="flex justify-between text-xs article-meta">
                <span className="font-semibold">Tech Team</span>
                <span>Apr 8, 2025</span>
              </div>
            </div>
            
            {/* Extra article - market update */}
            <div className="nyt-card">
              <h3 className="headline text-base">DFT Market Update</h3>
              <p className="article-excerpt text-sm mb-2">
                TEdition1 token up 12% this week as new governance proposals gain traction.
              </p>
              <div className="flex justify-between text-xs article-meta">
                <span className="font-semibold">Finance Desk</span>
                <span>Apr 7, 2025</span>
              </div>
            </div>
          </div>
          
          {/* Middle columns - Editor Section */}
          <div className="md:col-span-2">
            <EditorSection />
            
            {/* Articles Grid Below Editors */}
            <div className="mt-6">
              <div className="grid grid-cols-2 gap-6">
                {/* Article 1 */}
                {regularArticles.length > 3 && (
                  <ArticleMetalink 
                    key={regularArticles[3].id}
                    title={regularArticles[3].title}
                    excerpt={regularArticles[3].excerpt}
                    author={regularArticles[3].author}
                    date={regularArticles[3].date}
                  />
                )}
                
                {/* Article 2 */}
                {regularArticles.length > 4 && (
                  <ArticleMetalink 
                    key={regularArticles[4].id}
                    title={regularArticles[4].title}
                    excerpt={regularArticles[4].excerpt}
                    author={regularArticles[4].author}
                    date={regularArticles[4].date}
                  />
                )}
              </div>
              
              {/* Community Spotlight - Full Width */}
              <div className="mt-6 pt-3 border-t border-double border-gray-300">
                <h3 className="headline text-base mb-2">{communitySpotlight.title}</h3>
                <p className="article-excerpt text-sm mb-2">
                  {communitySpotlight.excerpt}
                </p>
                <div className="flex justify-between text-xs article-meta">
                  <span className="font-semibold">{communitySpotlight.author}</span>
                  <span>{communitySpotlight.date}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Articles */}
          <div className="md:col-span-1 space-y-6">
            {regularArticles.length > 1 && (
              <ArticleMetalink 
                key={regularArticles[1].id}
                title={regularArticles[1].title}
                excerpt={regularArticles[1].excerpt}
                author={regularArticles[1].author}
                date={regularArticles[1].date}
              />
            )}
            
            {regularArticles.length > 2 && (
              <ArticleMetalink 
                key={regularArticles[2].id}
                title={regularArticles[2].title}
                excerpt={regularArticles[2].excerpt}
                author={regularArticles[2].author}
                date={regularArticles[2].date}
              />
            )}
            
            {/* Writer of the week */}
            <div className="nyt-card">
              <h3 className="headline text-base border-b border-gray-100 pb-1 mb-2">Writer of the Week</h3>
              <div className="flex mb-2">
                <div className="text-lg mr-2">✍️</div>
                <div>
                  <p className="font-semibold text-sm">Maya Peterson</p>
                  <p className="text-xs article-meta">Contributing Writer</p>
                </div>
              </div>
              <p className="article-excerpt text-sm">
                Maya's series on DeFi transparency earned the most community votes this month.
              </p>
            </div>
            
            {/* Upcoming event */}
            <div className="nyt-card">
              <h3 className="headline text-base">Upcoming Event</h3>
              <p className="font-semibold article-excerpt text-sm mb-1">
                Town Hall: Future of TEdition
              </p>
              <p className="text-xs mb-2">
                Join us April 20th for a discussion on governance proposals.
              </p>
              <div className="text-xs italic">
                DFT holders only • Virtual
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation to Page 2 */}
        <div className="mt-12 text-center border-t border-b border-gray-300 py-3">
          <Link 
            href="/page-2" 
            className="text-gray-900 font-semibold hover:underline article-title"
          >
            VIEW MORE ARTICLES →
          </Link>
        </div>
      </main>
    </div>
  );
}
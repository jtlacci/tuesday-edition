import React from 'react';
import Header from '@/components/Header';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="border-b border-double border-gray-300 pb-6 mb-8">
            <h1 className="text-3xl font-serif font-bold text-center mb-2">About Tuesday Edition</h1>
            <p className="text-center text-gray-600 italic font-serif">
              A web3 curation app powered by $TEdition contentcoins
            </p>
          </div>
          
          {/* Mission Statement */}
          <div className="mb-12">
            <p className="text-lg font-serif leading-relaxed mb-6">
              Tuesday Edition is a community-powered curation application that leverages contentcoins to 
              surface the highest quality content each week. Our mission is to create a sustainable economic 
              model for content discovery, rewarding both curators and creators.
            </p>
            <p className="text-lg font-serif leading-relaxed">
              Founded in 2025, the app releases new curated content every Tuesday, with selections determined by 
              our token holders. The largest $TEdition holders automatically become curators, ensuring that those with 
              the most stake have the most influence in the curation process.
            </p>
          </div>
          
          {/* Token Flow Infographic */}
          <div className="border border-gray-300 p-8 bg-gray-50 mb-12">
            <h2 className="text-2xl font-serif font-bold text-center mb-8">The $TEdition1 Token Economy</h2>
            
            <div className="relative">
              {/* SVG Infographic showing token flow */}
              <div className="w-full max-w-3xl mx-auto">
                <svg viewBox="0 0 800 450" className="w-full">
                  {/* Background */}
                  <rect x="0" y="0" width="800" height="450" fill="#fafafa" rx="10" />
                  
                  {/* Headers */}
                  <text x="100" y="50" fontSize="22" fontWeight="bold" fontFamily="serif">Tuesday Edition Token Flow</text>
                  
                  {/* Token symbol */}
                  <circle cx="400" cy="120" r="70" fill="#e6f7ff" stroke="#333" strokeWidth="2" />
                  <text x="400" y="110" textAnchor="middle" fontSize="28" fontWeight="bold" fontFamily="serif">$TEdition1</text>
                  <text x="400" y="140" textAnchor="middle" fontSize="16" fontFamily="serif">Content Token</text>
                  
                  {/* Flow Diagram */}
                  {/* Top flow boxes */}
                  <rect x="150" y="220" width="200" height="60" fill="#e6ffe6" stroke="#333" strokeWidth="2" rx="5" />
                  <text x="250" y="245" textAnchor="middle" fontSize="16" fontWeight="bold" fontFamily="serif">Writers</text>
                  <text x="250" y="265" textAnchor="middle" fontSize="12" fontFamily="serif">Create Quality Content</text>
                  
                  <rect x="450" y="220" width="200" height="60" fill="#fff5e6" stroke="#333" strokeWidth="2" rx="5" />
                  <text x="550" y="245" textAnchor="middle" fontSize="16" fontWeight="bold" fontFamily="serif">Token Holders</text>
                  <text x="550" y="265" textAnchor="middle" fontSize="12" fontFamily="serif">Vote on Content</text>
                  
                  {/* Bottom flow box */}
                  <rect x="300" y="330" width="200" height="60" fill="#ffe6e6" stroke="#333" strokeWidth="2" rx="5" />
                  <text x="400" y="355" textAnchor="middle" fontSize="16" fontWeight="bold" fontFamily="serif">Tuesday Edition</text>
                  <text x="400" y="375" textAnchor="middle" fontSize="12" fontFamily="serif">Top 10 Holders = Curators</text>
                  
                  {/* Connecting Flow Arrows */}
                  {/* Token to Writers - 5% distribution */}
                  <path d="M350 170 L250 215" stroke="#0066cc" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
                  <text x="270" y="180" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0066cc" fontFamily="serif">5% Weekly</text>
                  
                  {/* Token to Holders - governance */}
                  <path d="M450 170 L550 215" stroke="#0066cc" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
                  <text x="530" y="180" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0066cc" fontFamily="serif">Governance</text>
                  
                  {/* Writers to Publication - submit content */}
                  <path d="M250 280 L380 325" stroke="#333" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
                  <text x="280" y="315" textAnchor="middle" fontSize="12" fill="#333" fontFamily="serif">Submit</text>
                  
                  {/* Holders to Publication - curate content */}
                  <path d="M550 280 L420 325" stroke="#333" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
                  <text x="520" y="315" textAnchor="middle" fontSize="12" fill="#333" fontFamily="serif">Curate</text>
                  
                  {/* Publication back to Tokens - completes cycle */}
                  <path d="M300 355 L100 355 L100 120 L330 120" stroke="#333" strokeWidth="2" fill="none" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
                  <text x="150" y="335" textAnchor="middle" fontSize="12" fill="#333" fontFamily="serif">Weekly Edition</text>
                  
                  {/* Arrow Marker Definition */}
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#333" />
                    </marker>
                  </defs>
                </svg>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm italic text-gray-600 mb-2">
                Every week, 5% of the $TEdition contentcoin supply is distributed to creators whose content was featured in the previous week.
              </p>
              <p className="text-sm italic text-gray-600 mb-2">
                Token holders vote weekly on which content will be featured in the upcoming Tuesday curation.
              </p>
              <p className="text-sm italic text-gray-600 font-bold">
                The curation team automatically consists of the 10 largest token holders from the previous week.
              </p>
            </div>
          </div>
          
          {/* Original Timeline */}
          <div className="border border-gray-300 p-8 bg-gray-50 mb-12">
            <h2 className="text-2xl font-serif font-bold text-center mb-8">The Weekly Cycle</h2>
            
            <div className="relative">
              {/* Timeline */}
              <div className="absolute top-32 left-0 right-0 h-1 bg-gray-400"></div>
              
              {/* Step 1: Writers Submit */}
              <div className="grid grid-cols-3 gap-8 relative">
                <div className="text-center">
                  <div className="h-64 border border-gray-300 bg-white p-4 mb-4 relative">
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gray-900 border-4 border-white z-10"></div>
                    <div className="font-bold font-serif mb-2">1. Writers Submit</div>
                    <div className="mb-2 text-sm">Writers submit articles to the platform through the submission form</div>
                    <div className="w-20 h-20 mx-auto my-2 flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" stroke="#000" strokeWidth="2" />
                        <path d="M7 7H17M7 12H17M7 17H13" stroke="#000" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className="text-xs text-gray-500 italic">Monday</div>
                  </div>
                </div>
                
                {/* Step 2: Editors & Token Holders Vote */}
                <div className="text-center">
                  <div className="h-64 border border-gray-300 bg-white p-4 mb-4 relative">
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gray-900 border-4 border-white z-10"></div>
                    <div className="font-bold font-serif mb-2">2. Community Votes</div>
                    <div className="mb-2 text-sm">Token holders and editors vote on submissions for the next edition</div>
                    <div className="w-20 h-20 mx-auto my-2 flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="text-xs text-gray-500 italic">Monday Evening</div>
                  </div>
                </div>
                
                {/* Step 3: Publication & Distribution */}
                <div className="text-center">
                  <div className="h-64 border border-gray-300 bg-white p-4 mb-4 relative">
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gray-900 border-4 border-white z-10"></div>
                    <div className="font-bold font-serif mb-2">3. Publish & Reward</div>
                    <div className="mb-2 text-sm">Selected content is published and writers receive token rewards</div>
                    <div className="w-20 h-20 mx-auto my-2 flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="9" stroke="#000" strokeWidth="2" />
                        <path d="M12 7V12L15 15" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="text-xs text-gray-500 italic">Tuesday</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Token Economics */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold mb-4 border-b border-gray-300 pb-2">Token Economics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
              <div className="border border-gray-300 p-4">
                <h3 className="font-bold font-serif mb-2">Weekly Distribution</h3>
                <p className="text-sm">
                  5% of the supply for the next edition is distributed to writers selected from the previous edition.
                  This creates a sustainable reward system for content creators.
                </p>
              </div>
              
              <div className="border border-gray-300 p-4">
                <h3 className="font-bold font-serif mb-2">Governance & Curation Control</h3>
                <p className="text-sm">
                  Token holders vote weekly on content, with voting power proportional to token balance. 
                  The 10 largest holders automatically become the curation team for the next edition, with direct control over which content appears in the app.
                </p>
              </div>
              
              <div className="border border-gray-300 p-4">
                <h3 className="font-bold font-serif mb-2">Value Accrual</h3>
                <p className="text-sm">
                  As the platform grows, token value increases, rewarding early participants and creating a virtuous cycle of quality content.
                </p>
              </div>
            </div>
          </div>
          
          {/* How It Works */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold mb-4 border-b border-gray-300 pb-2">How It Works</h2>
            
            <div className="article-excerpt space-y-4 mt-4">
              <p>
                Every week, writers submit articles through our submission portal. These submissions go to our Editors' Corner, 
                where both our editorial team and token holders can review and vote on them.
              </p>
              
              <p>
                <strong>Weekly Distribution Model:</strong> Each week, 5% of the total supply for the next edition is allocated 
                to writers whose work was selected in the previous edition. This creates a sustainable economic model where 
                quality content is rewarded and incentivized.
              </p>
              
              <p>
                <strong>Community Governance:</strong> $TEdition1 token holders vote on which submissions should be included 
                in the upcoming edition. This ensures that the content reflects the interests and values of our community.
              </p>
              
              <p>
                <strong>Curators Are Token Holders:</strong> The curation team for each edition automatically consists of the 
                10 largest $TEdition contentcoin holders from the previous issue. As a token holder, your curation power grows with your stake. 
                Become a top holder, and you'll join the curation team with direct control over which content is featured in the app. This creates 
                a powerful incentive to acquire and hold tokens, as the largest stakeholders gain the most influence over the content discovery process.
              </p>
              
              <p>
                <strong>Transparent Economics:</strong> All token distribution is recorded on-chain, ensuring complete 
                transparency in the reward process. Content creators, curators, and app users all benefit from the growth 
                of the ecosystem.
              </p>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center border-t border-gray-300 pt-8">
            <h3 className="text-xl font-serif font-bold mb-4">Join Tuesday Edition Today</h3>
            <div className="flex justify-center space-x-4">
              <Link href="/upload" className="px-6 py-2 bg-gray-900 text-white font-serif">
                Submit Content
              </Link>
              <Link href="/" className="px-6 py-2 border border-gray-900 text-gray-900 font-serif">
                Read Current Edition
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
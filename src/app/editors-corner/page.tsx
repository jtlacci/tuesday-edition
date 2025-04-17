'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { mockArticles, mockTweets } from '@/data/mockData';
import Header from '@/components/Header';
import TokenBalance from '@/components/TokenBalance';

export default function EditorsCornerPage() {
  // Filter to get only the most recent 5 submissions
  const submissions = mockArticles.slice(0, 5).map(article => ({
    ...article,
    votes: Math.floor(Math.random() * 20) + 1, // Random votes between 1-20 for demo
  }));

  // Get tweets for the tweet review section
  const tweetSubmissions = mockTweets.slice(0, 5).map(tweet => ({
    ...tweet,
    votes: Math.floor(Math.random() * 15) + 1, // Random votes between 1-15 for demo
  }));

  // State for active tab
  const [activeTab, setActiveTab] = useState('articles');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="border-b border-double border-gray-300 pb-6 mb-8">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h1 className="text-3xl font-serif font-bold text-center mb-2">Editors' Corner</h1>
                <p className="text-center text-gray-600 italic font-serif">
                  Where our editorial team selects content for the next edition
                </p>
              </div>
              <div className="ml-4">
                <TokenBalance />
              </div>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="flex border-b border-gray-300 mb-8">
            <button 
              className={`py-2 px-4 text-sm font-serif font-semibold ${activeTab === 'articles' ? 'border-b-2 border-black' : 'text-gray-500'}`}
              onClick={() => setActiveTab('articles')}
            >
              Article Submissions
            </button>
            <button 
              className={`py-2 px-4 text-sm font-serif font-semibold ${activeTab === 'tweets' ? 'border-b-2 border-black' : 'text-gray-500'}`}
              onClick={() => setActiveTab('tweets')}
            >
              Tweet Curation
            </button>
          </div>
          
          {/* Articles Tab Content */}
          <div className={`${activeTab === 'articles' ? 'block' : 'hidden'}`}>
            <div className="bg-white p-8 border border-gray-300 mb-8">
              <h2 className="text-xl font-serif font-bold mb-6 border-b border-gray-200 pb-2">
                Submissions Under Review
              </h2>
              
              <div className="space-y-6">
                {submissions.map((submission) => (
                  <div key={submission.id} className="border-b border-gray-200 pb-6 last:border-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="headline text-lg mb-1">{submission.title}</h3>
                        <p className="article-excerpt text-sm mb-2">{submission.excerpt}</p>
                        <div className="text-xs article-meta">
                          <span className="font-semibold">{submission.author}</span>
                          <span className="mx-2">•</span>
                          <span>{submission.date}</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">{submission.votes}</div>
                        <div className="text-xs text-gray-500">votes</div>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex space-x-2">
                      <button className="px-4 py-1 bg-green-50 border border-green-200 text-green-800 text-sm font-medium">
                        Approve
                      </button>
                      <button className="px-4 py-1 bg-red-50 border border-red-200 text-red-800 text-sm font-medium">
                        Reject
                      </button>
                      <button className="px-4 py-1 bg-gray-50 border border-gray-200 text-gray-800 text-sm font-medium ml-auto">
                        Add Vote
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Tweets Tab Content */}
          <div className={`${activeTab === 'tweets' ? 'block' : 'hidden'}`}>
            <div className="bg-white p-8 border border-gray-300 mb-8">
              <h2 className="text-xl font-serif font-bold mb-6 border-b border-gray-200 pb-2">
                Tweets Under Review
              </h2>
              
              <div className="space-y-6">
                {tweetSubmissions.map((tweet) => (
                  <div key={tweet.id} className="border-b border-gray-200 pb-6 last:border-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center mb-2">
                          <span className="font-semibold text-sm">{tweet.author}</span>
                          <span className="mx-2 text-gray-400">@{tweet.handle}</span>
                        </div>
                        <p className="text-sm mb-2">{tweet.content}</p>
                        <div className="text-xs article-meta flex items-center">
                          <span>{tweet.date}</span>
                          <span className="mx-2">•</span>
                          <span>{tweet.likes} likes</span>
                          <span className="mx-2">•</span>
                          <span>{tweet.retweets} retweets</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">{tweet.votes}</div>
                        <div className="text-xs text-gray-500">votes</div>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex space-x-2">
                      <button className="px-4 py-1 bg-green-50 border border-green-200 text-green-800 text-sm font-medium">
                        Feature
                      </button>
                      <button className="px-4 py-1 bg-red-50 border border-red-200 text-red-800 text-sm font-medium">
                        Skip
                      </button>
                      <button className="px-4 py-1 bg-gray-50 border border-gray-200 text-gray-800 text-sm font-medium ml-auto">
                        Add Vote
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 border border-gray-300">
            <h2 className="text-xl font-serif font-bold mb-6 border-b border-gray-200 pb-2">
              Editorial Guidelines
            </h2>
            
            <div className="prose prose-sm">
              <p className="mb-4">
                Our editorial team reviews all submissions based on the following criteria:
              </p>
              
              <ul className="space-y-2 ml-5 list-disc">
                <li>
                  <strong>Relevance</strong> - Content must be relevant to Web3, blockchain, or decentralized technologies.
                </li>
                <li>
                  <strong>Quality</strong> - Writing should be clear, well-researched, and free of errors.
                </li>
                <li>
                  <strong>Originality</strong> - Content should offer fresh perspectives or information not widely available.
                </li>
                <li>
                  <strong>Value</strong> - Submissions should provide value to our readers through education, analysis, or insight.
                </li>
              </ul>
              
              <p className="mt-4">
                Editor votes are tallied weekly, and the top submissions are selected for the next edition.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';

export default function UploadPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-white p-8 border border-gray-300">
          <h1 className="text-2xl font-serif font-bold mb-6 text-center">Submit to Next Edition</h1>
          
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="title" className="block text-sm font-semibold">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter link title"
                className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-gray-500"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="url" className="block text-sm font-semibold">
                URL
              </label>
              <input
                type="url"
                id="url"
                name="url"
                placeholder="https://example.com"
                className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-gray-500"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="description" className="block text-sm font-semibold">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                placeholder="Brief description of the link"
                className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-gray-500"
              ></textarea>
            </div>
            
            
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-2 font-serif font-bold hover:bg-black transition"
            >
              Submit Next Edition
            </button>
          </form>
          
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>All submissions will be reviewed by our editorial team.</p>
            <p className="mt-2">
              <Link href="/" className="text-gray-900 hover:underline">
                Learn more about our submission process
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
import Link from 'next/link';

export default function Header() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long', 
    day: 'numeric',
    year: 'numeric'
  });
  
  return (
    <header className="w-full nyt-header">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center text-xs mb-2">
          <div>{today}</div>
          <div>Tuesday Edition</div>
          <div>Web3 Curation App</div>
        </div>
        
        <h1 className="text-5xl font-bold text-center mt-4 mb-1 article-title">
          THE TUESDAY EDITION
        </h1>
        <div className="text-center mb-4">
          <span className="text-sm italic font-serif text-gray-700">onchain contentcoin</span>
        </div>
        
        <nav className="border-t border-b border-gray-300 py-2 my-2">
          <ul className="flex justify-center space-x-8 text-sm">
            <li>
              <Link href="/" className="font-semibold hover:underline article-title">PAGE 1</Link>
            </li>
            <li>
              <Link href="/page-2" className="hover:underline article-title">PAGE 2</Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline article-title">ABOUT</Link>
            </li>
            <li>
              <Link href="/editors-corner" className="hover:underline article-title">EDITORS-CORNER</Link>
            </li>
            <li>
              <Link href="/upload" className="hover:underline article-title">SUBMIT-TO-NEXT-ED</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
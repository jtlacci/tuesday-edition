import Link from 'next/link';

export default function PreviousEditionLink() {
  return (
    <div className="fixed top-4 left-4 z-50">
      <Link 
        href="/previous-edition" 
        className="text-sm font-serif hover:underline flex items-center text-gray-700"
      >
        <span className="mr-1">←</span> Previous Edition
      </Link>
    </div>
  );
}
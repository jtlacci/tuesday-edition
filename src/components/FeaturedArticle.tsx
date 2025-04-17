interface FeaturedArticleProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
}

export default function FeaturedArticle({ title, excerpt, author, date, image }: FeaturedArticleProps) {
  return (
    <div className="pb-6 mb-6 border-b border-gray-300">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3">
          <h2 className="featured-headline mb-3">{title}</h2>
          <p className="subheadline mb-3 text-base">{excerpt}</p>
          <p className="article-excerpt text-base mb-4">The publishing industry stands at the threshold of a remarkable transformation, driven by blockchain technology's unprecedented capabilities. Web3 publishing promises to solve long-standing issues affecting both creators and consumers.</p>
          <div className="flex justify-between text-sm article-meta border-t border-gray-200 pt-2">
            <span className="font-semibold">{author}</span>
            <span>{date}</span>
          </div>
        </div>
        <div className="md:w-1/3">
          <img 
            src={image} 
            alt={title}
            className="w-full aspect-[4/3] object-cover"
          />
          <p className="text-xs text-gray-600 mt-1 italic">Web3 technology is changing the publishing landscape</p>
        </div>
      </div>
    </div>
  );
}
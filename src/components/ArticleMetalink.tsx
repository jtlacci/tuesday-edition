interface ArticleMetalinkProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
}

export default function ArticleMetalink({ title, excerpt, author, date }: ArticleMetalinkProps) {
  return (
    <div className="nyt-card cursor-pointer">
      <h3 className="headline text-lg mb-1">{title}</h3>
      <p className="article-excerpt text-gray-900 text-sm mb-2">{excerpt}</p>
      <div className="flex justify-between text-xs article-meta">
        <span className="font-semibold">{author}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}
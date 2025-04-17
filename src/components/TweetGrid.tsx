interface Tweet {
  id: string;
  author: string;
  handle: string;
  content: string;
  date: string;
  likes: number;
  retweets: number;
}

interface TweetGridProps {
  tweets: Tweet[];
}

export default function TweetGrid({ tweets }: TweetGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tweets.map((tweet) => (
        <div key={tweet.id} className="border border-gray-300 rounded-xl p-4 hover:border-blue-400 transition-colors">
          <div className="flex items-center mb-2">
            <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
            <div>
              <p className="font-semibold">{tweet.author}</p>
              <p className="text-gray-500 text-sm">@{tweet.handle}</p>
            </div>
          </div>
          <p className="mb-3">{tweet.content}</p>
          <div className="text-sm text-gray-500 mb-3">{tweet.date}</div>
          <div className="flex justify-between text-gray-500 text-sm">
            <span>{tweet.likes} Likes</span>
            <span>{tweet.retweets} Retweets</span>
          </div>
        </div>
      ))}
    </div>
  );
}
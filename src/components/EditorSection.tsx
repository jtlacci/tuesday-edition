import { mockEditors } from '@/data/mockData';

export default function EditorSection() {
  return (
    <div className="border-b border-gray-300 pb-4 mb-4">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-base uppercase font-semibold">From Our Editors</h2>
        <button className="nyt-button hover:bg-gray-900 transition">
          Buy TEdition1 →
        </button>
      </div>
      <div className="flex flex-wrap gap-3 mb-4">
        {mockEditors.slice(0, 5).map((editor) => (
          <div 
            key={editor.id} 
            className="flex items-center"
            title={`${editor.name} - ${editor.role}`}
          >
            <span className="text-lg mr-1">{editor.avatar}</span>
            <span className="text-xs">{editor.name.split(' ')[0]}</span>
          </div>
        ))}
      </div>
      <div className="space-y-3">
        <div className="pb-3 border-b border-gray-200">
          <div className="flex items-center">
            <span className="text-base mr-2">{mockEditors[0].avatar}</span>
            <span className="font-semibold text-sm headline">{mockEditors[0].name}</span>
            <span className="text-xs ml-2 article-meta">Chief Editor</span>
          </div>
          <p className="text-sm mt-1 article-excerpt">"This week we examine new community governance models in decentralized publishing."</p>
        </div>
        <div className="pb-3">
          <div className="flex items-center">
            <span className="text-base mr-2">{mockEditors[1].avatar}</span>
            <span className="font-semibold text-sm headline">{mockEditors[1].name}</span>
            <span className="text-xs ml-2 article-meta">Tech Editor</span>
          </div>
          <p className="text-sm mt-1 article-excerpt">"Token holders will gain access to new features in our upcoming platform update."</p>
        </div>
      </div>
    </div>
  );
}
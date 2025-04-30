import React from 'react';

const articles = [
  { title: 'What is a Pomeranian? How to Identify Pomeranian Dogs', link: '#' },
  { title: 'Dog Diet You Need to Know', link: '#' },
  { title: 'Why Dogs Bite and Destroy Furniture', link: '#' },
];

const KnowledgeSection: React.FC = () => {
  return (
    <section className="py-10 px-6">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">Useful Pet Knowledge</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
            <a href={article.link} className="text-blue-600 text-sm">View more</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KnowledgeSection;

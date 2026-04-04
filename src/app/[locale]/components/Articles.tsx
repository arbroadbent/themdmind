export default function Articles() {
  const articles = [
    {
      title: "Why AI Adoption Fails in Clinical Settings",
      description: "The 20/60/20 problem and what it means for AI tools.",
      tag: "Framework",
    },
    {
      title: "Documentation vs. Reasoning",
      description: "Why we've been solving the wrong problem.",
      tag: "Philosophy",
    },
    {
      title: "The Cognitive Interface",
      description: "What AI collaboration with clinicians should actually look like.",
      tag: "Vision",
    },
  ]

  return (
    <section id="articles" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ideas behind the system
          </h2>
          <p className="text-gray-600">
            Articles and frameworks on clinical AI, reasoning, and adoption.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <article 
              key={index}
              className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition cursor-pointer"
            >
              <div className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">
                {article.tag}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {article.description}
              </p>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm italic">
            Full articles coming soon
          </p>
        </div>
      </div>
    </section>
  )
}

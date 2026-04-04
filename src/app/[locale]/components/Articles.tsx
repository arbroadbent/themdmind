import Link from 'next/link'

export default function Articles() {
  const articles = [
    {
      title: "Practicing Medicine Is Not About Certainty",
      description: "Foundation. Establishes the core claim. Everything builds from here.",
      tag: "Series · Part 1",
      slug: "practicing-medicine-is-not-about-certainty",
    },
    {
      title: "Commitment Points: What Gets Lost in the Note",
      description: "Introduces framework. What actually matters—and what notes miss.",
      tag: "Series · Part 3",
      slug: "commitment-points",
    },
    {
      title: "Past the Hype: Using AI in Clinical Practice",
      description: "A practical look at where AI actually helps—and where it falls short.",
      tag: "Standalone",
      slug: "past-the-hype",
    },
  ]

  return (
    <section id="articles" className="py-24 bg-background-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Ideas behind the system
          </h2>
          <p className="text-text-secondary">
            Articles and frameworks on clinical AI, reasoning, and adoption.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Link 
              key={index}
              href={`/articles/${article.slug}`}
              className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition block"
            >
              <div className="text-xs font-semibold text-secondary mb-2 uppercase tracking-wide">
                {article.tag}
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                {article.title}
              </h3>
              <p className="text-text-secondary text-sm">
                {article.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/articles"
            className="text-secondary hover:underline font-medium"
          >
            View all articles →
          </Link>
        </div>
      </div>
    </section>
  )
}

import { Footer } from '../components/Footer'

const seriesArticles = [
  {
    part: 1,
    title: "Practicing Medicine Is Not About Certainty",
    slug: "practicing-medicine-is-not-about-certainty",
    description: "Foundation. Establishes the core claim. Everything builds from here.",
  },
  {
    part: 2,
    title: "Medical Documentation Was Never Built for How We Think",
    slug: "medical-documentation-was-never-built",
    description: "Extends uncertainty into documentation. Names the structural problem.",
  },
  {
    part: 3,
    title: "Commitment Points: What Gets Lost in the Note",
    slug: "commitment-points",
    description: "Introduces framework. What actually matters—and what notes miss.",
  },
  {
    part: 4,
    title: "Capturing Multiplanar Thinking: Moving Away From Linear Documentation",
    slug: "capturing-multiplanar-thinking",
    description: "The mismatch. Linear format vs. multiplanar cognition.",
  },
  {
    part: 5,
    title: "Faithful Documentation: A Different Model for AI in Medicine",
    slug: "faithful-documentation",
    description: "The direction. What AI should actually do. Closes the arc.",
  },
]

const standaloneArticles = [
  {
    title: "Past the Hype: Using AI in Clinical Practice",
    slug: "past-the-hype",
    description: "A practical look at where AI actually helps—and where it falls short.",
  },
]

export default function ArticlesPage() {
  return (
    <div className="pt-24">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Articles
          </h1>
          <p className="text-xl text-text-secondary">
            Ideas and frameworks on clinical reasoning, documentation, and AI.
          </p>
        </header>

        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-2">
              The Series
            </h2>
            <p className="text-text-secondary">
              Exploring where clinical thinking, documentation, and AI intersect—and where they diverge.
            </p>
          </div>

          <div className="space-y-4">
            {seriesArticles.map((article) => (
              <a 
                key={article.slug}
                href={`/en/articles/${article.slug}`}
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg hover:border-gray-300 transition"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-background-secondary rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-secondary">{article.part}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">
                      {article.title}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {article.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-8">
            Standalone
          </h2>

          <div className="space-y-4">
            {standaloneArticles.map((article) => (
              <a 
                key={article.slug}
                href={`/en/articles/${article.slug}`}
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg hover:border-gray-300 transition"
              >
                <h3 className="text-lg font-semibold text-primary mb-1">
                  {article.title}
                </h3>
                <p className="text-text-secondary text-sm">
                  {article.description}
                </p>
              </a>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}

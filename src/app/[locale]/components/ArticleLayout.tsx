import { Link } from '@/src/navigation'
import { Footer } from './Footer'

interface ArticleLayoutProps {
  title: string
  subtitle?: string
  seriesPart?: number
  seriesTotal?: number
  nextArticle?: {
    title: string
    slug: string
    teaser: string
  }
  prevArticle?: {
    title: string
    slug: string
  }
  children: React.ReactNode
}

export default function ArticleLayout({
  title,
  subtitle,
  seriesPart,
  seriesTotal,
  nextArticle,
  prevArticle,
  children
}: ArticleLayoutProps) {
  const isPartOfSeries = seriesPart && seriesTotal

  return (
    <div className="pt-24">
      {/* Article Header */}
      <header className="max-w-3xl mx-auto px-6 mb-12">
        {/* Series Banner */}
        {isPartOfSeries && (
          <div className="mb-6 p-4 bg-background-secondary rounded-lg border-l-4 border-secondary">
            <p className="text-sm text-text-secondary">
              <span className="font-semibold">Part {seriesPart} of {seriesTotal}</span>
              {' · '}
              This is part of a series exploring where clinical thinking, documentation, and AI intersect—and where they diverge.
            </p>
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight mb-4">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-xl text-text-secondary">
            {subtitle}
          </p>
        )}
      </header>

      {/* Article Body */}
      <article className="max-w-3xl mx-auto px-6 prose prose-lg prose-slate">
        {children}
      </article>

      {/* Navigation Between Articles */}
      <nav className="max-w-3xl mx-auto px-6 mt-16 mb-12">
        {/* Next Article Teaser (for series) */}
        {nextArticle && (
          <div className="p-6 bg-background-secondary rounded-lg mb-6">
            <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
              Next in series
            </p>
            <p className="text-text-secondary mb-4 italic">
              {nextArticle.teaser}
            </p>
            <Link 
              href={`/articles/${nextArticle.slug}`}
              className="text-secondary hover:underline font-medium"
            >
              Read: {nextArticle.title} →
            </Link>
          </div>
        )}

        {/* Prev/Next Links */}
        <div className="flex justify-between items-center pt-6 border-t border-gray-200">
          {prevArticle ? (
            <Link 
              href={`/articles/${prevArticle.slug}`}
              className="text-text-secondary hover:text-primary transition"
            >
              ← {prevArticle.title}
            </Link>
          ) : (
            <div></div>
          )}
          
          <Link 
            href="/articles"
            className="text-secondary hover:underline"
          >
            All Articles
          </Link>
        </div>
      </nav>

      <Footer />
    </div>
  )
}

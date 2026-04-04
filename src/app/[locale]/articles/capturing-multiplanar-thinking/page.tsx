import ArticleLayout from '../../components/ArticleLayout'

export default function Article4() {
  return (
    <ArticleLayout
      title="Capturing Multiplanar Thinking: Moving Away From Linear Documentation"
      seriesPart={4}
      seriesTotal={5}
      prevArticle={{
        title: "Commitment Points: What Gets Lost in the Note",
        slug: "commitment-points"
      }}
      nextArticle={{
        title: "Faithful Documentation: A Different Model for AI in Medicine",
        slug: "faithful-documentation",
        teaser: "If this is what documentation should reflect, what role should AI play in getting us there?"
      }}
    >
      <p className="text-xl text-text-secondary mb-8 italic">
        The mismatch. Linear format vs. multiplanar cognition.
      </p>

      <p>
        [Your article content here]
      </p>

    </ArticleLayout>
  )
}

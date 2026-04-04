import ArticleLayout from '../../components/ArticleLayout'

export default function Article5() {
  return (
    <ArticleLayout
      title="Faithful Documentation: A Different Model for AI in Medicine"
      seriesPart={5}
      seriesTotal={5}
      prevArticle={{
        title: "Capturing Multiplanar Thinking",
        slug: "capturing-multiplanar-thinking"
      }}
      // No nextArticle — this closes the arc
    >
      <p className="text-xl text-text-secondary mb-8 italic">
        The direction. What AI should actually do. Closes the arc.
      </p>

      <p>
        [Your article content here]
      </p>

      {/* Final closing line */}
      <p className="mt-12 p-6 bg-background-secondary rounded-lg text-center text-lg font-medium text-primary">
        This is where the work is.
      </p>

    </ArticleLayout>
  )
}

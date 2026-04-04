import ArticleLayout from '../../components/ArticleLayout'

export default function Article1() {
  return (
    <ArticleLayout
      title="Practicing Medicine Is Not About Certainty"
      seriesPart={1}
      seriesTotal={5}
      nextArticle={{
        title: "Medical Documentation Was Never Built for How We Think",
        slug: "medical-documentation-was-never-built",
        teaser: "If uncertainty is the reality of clinical practice, what happens when documentation refuses to reflect it?"
      }}
    >
      {/* ARTICLE CONTENT GOES HERE */}
      <p className="text-xl text-text-secondary mb-8 italic">
        Foundation. Establishes the core claim. Everything builds from here.
      </p>

      <p>
        [Your article content here]
      </p>

      <p>
        [Your article content here]
      </p>

      <p>
        [Your article content here]
      </p>

      {/* Add more paragraphs, headings, etc. */}

    </ArticleLayout>
  )
}

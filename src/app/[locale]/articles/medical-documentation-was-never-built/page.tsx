import ArticleLayout from '../../components/ArticleLayout'

export default function Article2() {
  return (
    <ArticleLayout
      title="Medical Documentation Was Never Built for How We Think"
      seriesPart={2}
      seriesTotal={5}
      prevArticle={{
        title: "Practicing Medicine Is Not About Certainty",
        slug: "practicing-medicine-is-not-about-certainty"
      }}
      nextArticle={{
        title: "Commitment Points: What Gets Lost in the Note",
        slug: "commitment-points",
        teaser: "If documentation misses the complexity of clinical reasoning, what should it actually capture?"
      }}
    >
      <p className="text-xl text-text-secondary mb-8 italic">
        Extends uncertainty into documentation. Names the structural problem.
      </p>

      <p>
        [Your article content here]
      </p>

    </ArticleLayout>
  )
}

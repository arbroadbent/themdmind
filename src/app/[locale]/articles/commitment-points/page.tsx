import ArticleLayout from '../../components/ArticleLayout'

export default function Article3() {
  return (
    <ArticleLayout
      title="Commitment Points: What Gets Lost in the Note"
      seriesPart={3}
      seriesTotal={5}
      prevArticle={{
        title: "Medical Documentation Was Never Built for How We Think",
        slug: "medical-documentation-was-never-built"
      }}
      nextArticle={{
        title: "Capturing Multiplanar Thinking",
        slug: "capturing-multiplanar-thinking",
        teaser: "The format itself may be the problem. What would documentation look like if it matched how we actually think?"
      }}
    >
      <p className="text-xl text-text-secondary mb-8 italic">
        Introduces framework. What actually matters—and what notes miss.
      </p>

      <p>
        [Your article content here]
      </p>

    </ArticleLayout>
  )
}

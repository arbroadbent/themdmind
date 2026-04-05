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
      <p className="mb-6">
        We are trained to practice medicine in uncertainty, but we are trained to document as if uncertainty doesn&apos;t exist. That tension has always been present. Most clinicians learn to live with it early—compress their thinking, smooth the edges, write something that reads cleanly. It becomes reflexive. You stop noticing the gap between how you thought and what you wrote.
      </p>

      <p className="mb-6">
        AI documentation tools are making that gap visible again. And wider.
      </p>

      <h2 className="text-2xl font-bold text-primary mt-12 mb-6">Clinical Thinking Is Not Linear</h2>

      <p className="mb-6">
        Clinical encounters—especially in acute care—don&apos;t unfold in straight lines. They involve parallel processing across multiple hypotheses, revising probability in real time, selective attention to high-risk and low-probability diagnoses, pattern recognition that precedes articulation, decisions made before full justification exists, and uncertainty that is tolerated rather than resolved.
      </p>

      <p className="mb-6">
        A clinician might consider a catastrophic diagnosis, assign it low probability, still order the test to exclude it, then move on. That entire arc happens in seconds. It rarely gets narrated out loud, and it almost never appears in the note.
      </p>

      <p className="mb-6">
        The chart demands something different: a linear story. This happened, therefore I considered this, therefore I did this, therefore this was my conclusion. That format is familiar and expected—but it compresses complex cognition into a structure that cannot fully represent it.
      </p>

      <h2 className="text-2xl font-bold text-primary mt-12 mb-6">How Notes Lie</h2>

      <p className="mb-6">
        Most notes don&apos;t lie intentionally. They lie structurally.
      </p>

      <p className="mb-6">
        They replace probabilistic thinking with certainty, threshold-based decisions with definitive statements, and expert pattern recognition with textbook logic. They tell a story that sounds complete but doesn&apos;t feel authentic to the clinician who lived it.
      </p>

      <p className="mb-6">
        This is not dishonesty. It is distortion built into the format itself. The note is asked to do something it cannot do: represent non-linear thinking in a linear medium. Clinicians adapt. They learn to write what the chart requires, even when it flattens what actually happened.
      </p>

      <h2 className="text-2xl font-bold text-primary mt-12 mb-6">AI Makes This Worse</h2>

      <p className="mb-6">
        Ambient documentation tools—DAX, Suki, Abridge, and others—promise efficiency. A clean narrative, generated automatically, ready to sign. But these systems are optimized for the wrong things: sounding confident, being thorough, and reading cleanly to outside reviewers.
      </p>

      <p className="mb-6">
        In doing so, they smooth over uncertainty. They invent clarity that never existed. They fill gaps with reasoning the clinician didn&apos;t articulate—because the clinician was operating on pattern recognition, not verbal logic.
      </p>

      <p className="mb-6">
        The result is notes that feel &quot;right&quot; to reviewers but wrong to the clinician who was actually there. This is where ambient AI crosses a line. It stops being a mirror of clinical judgment and starts becoming an author of it.
      </p>

      <h2 className="text-2xl font-bold text-primary mt-12 mb-6">What Gets Lost</h2>

      <p className="mb-6">
        When AI-generated notes no longer reflect how decisions were actually made, something shifts. The clinician&apos;s sense of the note&apos;s honesty—its integrity—erodes.
      </p>

      <p className="mb-6">
        Clinicians start reviewing AI-generated notes not to approve them, but to check whether they&apos;ve been misrepresented. Editing increases. Cognitive burden returns. The efficiency promise disappears. Worse: if the note is signed without careful review, the clinician becomes legally and ethically attached to reasoning they didn&apos;t actually use.
      </p>

      <p className="mb-6">
        Documentation was already a compression of clinical thinking. AI is compressing it further—and calling it an improvement.
      </p>

      <h2 className="text-2xl font-bold text-primary mt-12 mb-6">The Problem We Need to Name</h2>

      <p className="mb-6">
        The issue is not that AI writes notes. The issue is that AI writes notes as if clinical thinking were linear, certain, and fully articulable. It isn&apos;t. It never was.
      </p>

      <p className="mb-6">
        We&apos;ve been forcing that fiction for years through manual documentation. AI just automates the distortion—faster, smoother, and at scale. If we want AI to actually help, we need to stop asking it to invent certainty. We need documentation that reflects how clinicians actually think.
      </p>

    </ArticleLayout>
  )
}

import ArticleLayout from '../../components/ArticleLayout'

export default function Article5() {
  return (
    <ArticleLayout
      title="The Moments That Matter: A Different Model for AI Use in Documentation"
      seriesPart={5}
      seriesTotal={5}
      prevArticle={{
        title: "Capturing Multiplanar Thinking",
        slug: "capturing-multiplanar-thinking"
      }}
    >
      <p className="mb-6">
        Current ambient AI tools try to author clinical reasoning. They listen to the encounter, infer logic, and produce a polished narrative that sounds like the clinician thought in a completely linear process.
      </p>

      <p className="mb-6">
        Documentation compresses and distorts how clinicians actually think.
      </p>

      <p className="mb-6">
        What if AI did something different? What if its primary job wasn&apos;t to explain, but to observe—and to surface what matters only when called upon?
      </p>

      <h2 className="text-2xl font-bold text-primary mt-12 mb-6">A Different Model</h2>

      <p className="mb-6">
        Imagine an AI that doesn&apos;t try to write your reasoning. Instead, it watches for the moments that matter—the commitment points—and records them.
      </p>

      <p className="mb-6">
        It timestamps when a decision was made. It links what data was available at that moment to what action followed. It builds a causal trace of what actually happened, without smoothing the edges or inventing justification.
      </p>

      <p className="mb-6">
        Not a narrative. A record.
      </p>

      <p className="mb-6">
        Interpretation would be optional, not mandatory. A clinician could request a written summary when documentation requires it, but the default would be observation—capturing the structure of the encounter without forcing it into a story that never existed.
      </p>

      <p className="mb-6">
        This kind of AI wouldn&apos;t try to make medicine cleaner than it is. It would make it truer.
      </p>

      <h2 className="text-2xl font-bold text-primary mt-12 mb-6">Allowing AI to Say &quot;I Don&apos;t Know&quot;</h2>

      <p className="mb-6">
        Context cannot always be inferred from ambient audio. Prior experience, subtle gestalt, situational nuance, a pattern recognized from a similar patient years ago—none of that lives in the conversation. It lives in the clinician, built over years of practice, a personal database of pattern recognition that forms as they learn to see.
      </p>

      <p className="mb-6">
        When AI cannot access that context, it has two options. It can fabricate reasoning to fill the gap, or it can acknowledge the gap exists.
      </p>

      <p className="mb-6">
        Current systems fabricate. They produce confident, complete-sounding explanations for decisions that were made on grounds the AI cannot see. The note reads well. It also has the potential to misrepresent the clinician who made the decision.
      </p>

      <p className="mb-6">
        The alternative is honesty. AI that says, in effect, &quot;a commitment was made here, and I don&apos;t have full access to the reasoning behind it.&quot; That is not a failure. That is accuracy.
      </p>

      <p className="mb-6">
        Preserving uncertainty is not weakness. It is fidelity to what actually happened.
      </p>

      <h2 className="text-2xl font-bold text-primary mt-12 mb-6">What Faithful Documentation Looks Like</h2>

      <p className="mb-6">
        Faithful documentation doesn&apos;t mean longer notes. It doesn&apos;t mean smarter-sounding notes. It means notes that reflect the actual structure of clinical thinking—including the parts that resist articulation.
      </p>

      <p className="mb-6">
        A faithful note would make commitment points visible. It would distinguish between what was known at the time and what became clear later. It would hold space for uncertainty instead of compressing it into false confidence.
      </p>

      <p className="mb-6">
        It would match how clinicians actually work: acting on incomplete information, committing under uncertainty, and carrying risk that cannot be fully explained in retrospect.
      </p>

      <p className="mb-6">
        This is not a technical problem. It is a design problem. Current AI documentation is designed to produce clean narratives. Faithful documentation would be designed to preserve truth.
      </p>

      <h2 className="text-2xl font-bold text-primary mt-12 mb-6">The Opportunity</h2>

      <p className="mb-6">
        Medicine has always lived in uncertainty. We&apos;ve just been forcing it to speak as if it doesn&apos;t.
      </p>

      <p className="mb-6">
        AI gives us a chance to correct that—maybe the best chance we&apos;ve had. Not by making notes longer. Not by making them sound smarter. But by making them faithful.
      </p>

      <p className="mb-6">
        Faithful to how clinicians think. Faithful to how decisions are made. Faithful to the reality that uncertainty is not an error—it is the work.
      </p>

      <p className="mt-12 p-6 bg-background-secondary rounded-lg text-center text-lg font-medium text-primary">
        This is where the work is.
      </p>

    </ArticleLayout>
  )
}

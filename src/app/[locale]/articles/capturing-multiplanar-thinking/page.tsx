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
      <p className="mb-6">
        Clinical cognition is multiplanar. It holds competing hypotheses simultaneously, revises probability as new information arrives, and tolerates unresolved uncertainty across multiple decision points at once.
      </p>

      <p className="mb-6">
        Current documentation is linear. One narrative. One thread. A story that moves from beginning to end as if thinking happened that way.
      </p>

      <p className="mb-6">
        The mismatch is structural. When the format is linear, the parts of your reasoning that don&apos;t fit the line get compressed or cut. Uncertainty—the thing that actually shaped your decisions—has no place in the current format, so it disappears.
      </p>

      <p className="mb-6">
        AI accelerates this. Ambient tools are built to produce clean, confident output. They take multiplanar thinking and flatten it further, resolving ambiguity that was never meant to be resolved.
      </p>

      <h2 className="text-2xl font-bold text-primary mt-12 mb-6">The Document as a Living Record</h2>

      <p className="mb-6">
        Documentation doesn&apos;t have to be static.
      </p>

      <p className="mb-6">
        A note could be treated as something living—changing as the encounter evolves, holding uncertainty at critical decision points, capturing the complexity of the case instead of compressing it. Not a final summary written in retrospect, but a record that grows alongside the clinical reasoning it represents.
      </p>

      <p className="mb-6">
        This means treating the document as an entity: mobile, formable, always developing but never completely defined. It reflects where your thinking was at each moment, not just where it landed at the end.
      </p>

      <p className="mb-6">
        Linear documentation asks: what happened?
      </p>

      <p className="mb-6">
        Multiplanar documentation asks: what were you thinking, and when?
      </p>

      <h2 className="text-2xl font-bold text-primary mt-12 mb-6">Uncertainty at Critical Decision Points</h2>

      <p className="mb-6">
        The moments that carry weight in clinical practice—commitment points—are surrounded by uncertainty. You decide to discharge while residual risk remains. You choose not to image while the differential isn&apos;t fully narrowed. You commit to a path before all the information is available.
      </p>

      <p className="mb-6">
        These decisions define clinical work. But linear documentation erases the uncertainty that surrounded them, presenting the conclusion as if it were obvious from the start.
      </p>

      <p className="mb-6">
        Multiplanar documentation does something different. It captures uncertainty at the point of decision—not to hedge, but to show the complexity of the case and the level of thinking it required. It preserves what was known, what was unclear, and what would have changed management.
      </p>

      <p className="mb-6">
        That&apos;s not defensive documentation. That&apos;s honest documentation.
      </p>

      <h2 className="text-2xl font-bold text-primary mt-12 mb-6">What This Looks Like</h2>

      <p className="mb-6">
        Traditional formats like SOAP are built for retrospective summary, not real-time reasoning. They work backwards from the conclusion. Multiplanar thinking doesn&apos;t fit neatly into that structure—which is why it gets compressed.
      </p>

      <p className="mb-6">
        There are deeper structural reasons why linear systems erase uncertainty, and those deserve their own exploration. But the starting point is simpler: recognizing that the format itself shapes what survives.
      </p>

      <p className="mb-6">
        When documentation is treated as a living record—one that evolves with the encounter and holds uncertainty without resolving it—more of your actual thinking makes it into the note.
      </p>

      <h2 className="text-2xl font-bold text-primary mt-12 mb-6">The Goal</h2>

      <p className="mb-6">
        The goal isn&apos;t to make notes longer or more detailed. The goal is to let documentation reflect what clinical thinking actually looks like: multiplanar, evolving, and shaped by uncertainty at every turn.
      </p>

      <p className="mb-6">
        Current documentation compresses that complexity into something linear. Capturing multiplanar thinking means pushing back—letting the document breathe, holding space for uncertainty, and building a record that matches how decisions were actually made.
      </p>

    </ArticleLayout>
  )
}

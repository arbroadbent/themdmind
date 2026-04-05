import ArticleLayout from '../../components/ArticleLayout'

export default function CommitmentPoints() {
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

            <p className="mb-6">
        Most of what happens during a clinical encounter is context. History, exam findings, test results, conversation, reassessment—all of it builds toward something, but most of it isn&apos;t the thing itself.
      </p>

      <p className="mb-6">
        The thing itself is the moment a clinician commits. To discharge or admit. To image or not. To treat empirically or wait. To stop the workup and accept residual uncertainty as reasonable.
      </p>

      <p className="mb-6">
        These are commitment points—moments when a clinician chooses a path that closes off alternatives and carries risk. Everything else is information gathering. Commitment points are where the weight falls.
      </p>

      <h2 className="text-2xl font-bold text-primary mt-12 mb-6">What Makes a Commitment Point</h2>

      <p className="mb-6">
        Commitment points share three features.
      </p>

      <p className="mb-6">
        First, they close off alternatives. Once you decide not to image, that path is gone unless something changes. Once you discharge, the patient leaves your controlled environment. The decision moves care in a direction that cannot be silently undone.
      </p>

      <p className="mb-6">
        Second, they carry risk. Every commitment point involves accepting some probability of being wrong. The clinician knows this. The decision is made anyway, because medicine does not allow indefinite delay.
      </p>

      <p className="mb-6">
        Third, they are rarely narrated in the moment. Commitment points happen fast, often without explicit verbalization. A clinician may glance at the monitor, review the note, and sign the discharge—committing fully—without announcing the reasoning out loud. The decision was real. The documentation of it comes later, if at all.
      </p>

      <h2 className="text-2xl font-bold text-primary mt-12 mb-6">Examples</h2>

      <p className="mb-6">
        The decision to discharge a patient with chest pain after a negative workup. The troponin is normal, the EKG is unchanged, the history is low-risk. You sign the discharge. That is a commitment point—not the conversation, not the testing, but the moment you accepted the residual risk and let them leave.
      </p>

      <p className="mb-6">
        The decision not to image. A child with a head injury meets PECARN low-risk criteria. You explain to the parents, answer their questions, and move on without a CT. That is a commitment point. The tool supported your reasoning, but the commitment was yours.
      </p>

      <p className="mb-6">
        These moments define clinical practice. Everything else is preparation.
      </p>

      <h2 className="text-2xl font-bold text-primary mt-12 mb-6">Clinical Tools Are Not Thinking Engines</h2>

      <p className="mb-6">
        We use HEART scores, PECARN rules, Wells criteria, and dozens of other decision instruments. They are embedded in our workflows, referenced in our notes, and taught in training as if they guide decisions.
      </p>

      <p className="mb-6">
        Most experienced clinicians know the truth: these tools rarely decide what we do. They explain and justify decisions we have already made.
      </p>

      <p className="mb-6">
        A clinician doesn&apos;t calculate a HEART score and then discover their disposition. They gestalt the patient, land on a plan, and then run the score to confirm it fits—or to document why the decision was reasonable. The tool is applied after the commitment, not before it.
      </p>

      <p className="mb-6">
        Used this way, clinical decision tools are powerful. They provide structure, standardization, and defensibility. They translate expert intuition into language the system can recognize.
      </p>

      <p className="mb-6">
        Used incorrectly—or generated prematurely by AI—they become checkbox theater. The appearance of rigor without the substance of judgment. A score that was never actually consulted. A rule retrofitted to match a decision already made on other grounds.
      </p>

      <p className="mb-6">
        A note that documents the score but not the commitment has it backwards.
      </p>

      <h2 className="text-2xl font-bold text-primary mt-12 mb-6">Why This Matters for Documentation</h2>

      <p className="mb-6">
        Current documentation captures everything. Every element of history, every exam finding, every result, every conversation. Notes are comprehensive to the point of being unreadable.
      </p>

      <p className="mb-6">
        But they often miss what actually mattered: the commitment points.
      </p>

      <p className="mb-6">
        A note might include twelve paragraphs of clinical detail and never clearly articulate the moment the clinician decided to discharge, or why that decision was reasonable given what was known at the time. The commitment is buried, implied, or absent entirely.
      </p>

      <p className="mb-6">
        This is the gap between documentation and clinical thinking. Clinicians operate around commitment points. Notes operate in comprehensive data capture. The structure doesn&apos;t match the cognition.
      </p>

      <p className="mb-6">
        If documentation is going to reflect how clinicians actually think—and if AI is going to help—it needs to start with what actually carries weight.
      </p>
    </ArticleLayout>
  )
}

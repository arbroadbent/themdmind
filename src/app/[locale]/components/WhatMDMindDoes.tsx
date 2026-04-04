export default function WhatMDMindDoes() {
  return (
    <section id="thinking" className="py-24 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            A cognitive interface for clinical reasoning
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Documentation is the output. Thinking is the product.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-slate-800 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl"></span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Organizes Reasoning</h3>
            <p className="text-slate-400">
              Helps structure why you ordered, interpreted, escalated, deferred, or discharged.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-slate-800 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">📄</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Improves Documentation</h3>
            <p className="text-slate-400">
              Turns reasoning into clearer, more defensible MDM output.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-slate-800 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl"></span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Adapts to the Clinician</h3>
            <p className="text-slate-400">
              Not generic AI output. Alignment with individual thinking style.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

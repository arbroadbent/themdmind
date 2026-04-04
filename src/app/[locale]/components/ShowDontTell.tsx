export default function ShowDontTell() {
  return (
    <section id="demos" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            From thought process to structured output
          </h2>
          <p className="text-gray-600">
            Reasoning in, defensible documentation out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-50 rounded-lg p-6">
            <div className="text-sm font-semibold text-slate-500 mb-3 uppercase tracking-wide">
              Clinician's Reasoning
            </div>
            <div className="bg-white rounded border border-slate-200 p-4 text-gray-700 text-sm leading-relaxed">
              <p className="mb-2">"72yo with chest pain, troponin negative x2, EKG unchanged from prior.</p>
              <p className="mb-2">Thinking this is likely MSK given reproducible tenderness, but can't rule out ACS given age and history.</p>
              <p>Going to do a stress test outpatient, follow up in 48 hours, return precautions given."</p>
            </div>
          </div>

          <div className="bg-slate-900 rounded-lg p-6">
            <div className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wide">
              MDMind Output
            </div>
            <div className="bg-slate-800 rounded p-4 text-slate-100 text-sm leading-relaxed">
              <p className="mb-3 font-semibold">MDM — Chest Pain, Low-Risk ACS</p>
              <p className="mb-2">Data reviewed: Serial troponins negative, EKG without acute changes, hemodynamically stable.</p>
              <p className="mb-2">Assessment: Low probability ACS given negative workup. Reproducible chest wall tenderness suggests MSK etiology. However, age and cardiac history warrant further evaluation.</p>
              <p>Plan: Outpatient stress testing within 48-72 hours. Strict return precautions reviewed. Patient verbalized understanding of warning signs.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm italic">
            More demo cases coming soon
          </p>
        </div>
      </div>
    </section>
  )
}

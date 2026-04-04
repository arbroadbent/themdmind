export default function Problem() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Why current AI doesn&apos;t feel right to many clinicians
        </h2>
        
        <p className="text-center text-gray-600 text-lg mb-12">
          The adoption problem isn&apos;t just about quality. It&apos;s about fit.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-slate-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Cognitive Mismatch</h3>
            <p className="text-gray-600 text-sm">
              Most tools don&apos;t match how clinicians actually think and reason through cases.
            </p>
          </div>
          
          <div className="p-6 bg-slate-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Flattened Reasoning</h3>
            <p className="text-gray-600 text-sm">
              Output often loses the nuance of clinical thinking, becoming generic documentation.
            </p>
          </div>
          
          <div className="p-6 bg-slate-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Wrong Adaptation Direction</h3>
            <p className="text-gray-600 text-sm">
              Clinicians adapt to the tool, instead of the tool adapting to the clinician.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

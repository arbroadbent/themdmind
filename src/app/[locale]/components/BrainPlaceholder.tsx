export default function BrainPlaceholder() {
  const regions = [
    { name: "Thinking", description: "Core reasoning engine", href: "#thinking" },
    { name: "Documentation", description: "Clear, defensible output", href: "#demos" },
    { name: "Personalization", description: "AI that adapts to you", href: "#thinking" },
    { name: "Demos", description: "See it in action", href: "#demos" },
    { name: "System", description: "Why this works", href: "#vision" },
    { name: "Vision", description: "Where we're going", href: "#vision" },
  ]

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            The MDMind Framework
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Each region represents a core pillar of how The MDMind supports clinical thinking.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="w-64 h-64 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
            <span className="text-slate-500 text-sm">[ Brain graphic coming soon ]</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {regions.map((region) => (
            <a
              key={region.name}
              href={region.href}
              className="p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-400 hover:shadow-md transition text-center"
            >
              <div className="font-semibold text-gray-900">{region.name}</div>
              <div className="text-sm text-gray-500">{region.description}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

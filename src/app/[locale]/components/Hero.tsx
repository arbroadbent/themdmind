export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white pt-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Clinical reasoning,{' '}
          <span className="bg-span-bg bg-clip-text text-transparent">
            made visible.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          The MDMind helps clinicians organize and express their reasoning — with more clarity, 
          less friction, and better alignment with how they already think.
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <a 
            href="#vision" 
            className="px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-medium"
          >
            Explore the Vision
          </a>
          <a 
            href="#demos" 
            className="px-8 py-4 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition font-medium"
          >
            See a Demo
          </a>
        </div>
      </div>
    </section>
  )
}

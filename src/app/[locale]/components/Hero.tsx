export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 pt-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          The{' '}
          <span className="bg-span-bg bg-clip-text text-transparent">
            MDMind
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Clinical reasoning, made visible.
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
            className="px-8 py-4 border border-gray-300 bg-white text-gray-700 rounded-lg hover:border-gray-400 transition font-medium"
          >
            See a Demo
          </a>
        </div>
      </div>
    </section>
  )
}

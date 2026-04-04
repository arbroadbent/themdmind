export const Footer = () => {
  return (
    <footer id="about" className="py-12 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-xl font-semibold mb-2">MDMind</div>
            <p className="text-slate-400 text-sm">
              A cognitive interface for clinical reasoning.
            </p>
          </div>
          
          <div className="flex gap-8">
            <a href="#vision" className="text-slate-400 hover:text-white transition text-sm">
              Vision
            </a>
            <a href="#demos" className="text-slate-400 hover:text-white transition text-sm">
              Demos
            </a>
            <a href="#articles" className="text-slate-400 hover:text-white transition text-sm">
              Articles
            </a>
            <a href="mailto:contact@themdmind.com" className="text-slate-400 hover:text-white transition text-sm">
              Contact
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500 text-sm">
          © 2024 MDMind. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

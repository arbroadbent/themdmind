import Button from './Button'

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-24 pt-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-center text-7xl font-extrabold leading-tight mb-6">
          The{' '}
          <span className="bg-span-bg bg-clip-text text-transparent">
            MDMind
          </span>
        </h1>
        
        <p className="text-2xl text-text-secondary mb-10 max-w-2xl mx-auto">
          Clinical reasoning, made visible.
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#vision">
            <Button rounded size="large">
              Explore the Vision
            </Button>
          </a>
          <a href="#demos">
            <Button rounded size="large" variant="secondary">
              See a Demo
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

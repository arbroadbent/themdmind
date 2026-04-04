import Hero from './components/Hero'
import BrainPlaceholder from './components/BrainPlaceholder'
import Problem from './components/Problem'
import WhatMDMindDoes from './components/WhatMDMindDoes'
import ShowDontTell from './components/ShowDontTell'
import Articles from './components/Articles'
import Vision from './components/Vision'
import { Footer } from './components/Footer'

export default function HomePage() {
  return (
    <div>
      <Hero />
      <BrainPlaceholder />
      <Problem />
      <WhatMDMindDoes />
      <ShowDontTell />
      <Articles />
      <Vision />
      <Footer />
    </div>
  )
}

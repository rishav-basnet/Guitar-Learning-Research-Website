import './App.css'
import Hero from './components/Hero'
import HowItStarted from './components/HowItStarted'
import TheProblem from './components/TheProblem'
import HowITested from './components/HowITested'
import DifficultyStructure from './components/DifficultyStructure'
import SuccessCriteria from './components/SuccessCriteria'
import Outcome from './components/Outcome'
import Factors from './components/Factors'
import DataCollection from './components/DataCollection'
import WhatILearned from './components/WhatILearned'
import Reflection from './components/Reflection'

function App() {
  return (
    <div className="app">
      <div className="bg-blob blob-1" aria-hidden="true" />
      <div className="bg-blob blob-2" aria-hidden="true" />
      <Hero />
      <main className="main main-container">
        <HowItStarted />
        <div className="section-divider" aria-hidden="true" />
        <TheProblem />
        <div className="section-divider" aria-hidden="true" />
        <HowITested />
        <DifficultyStructure />
        <SuccessCriteria />
        <Outcome />
        <Factors />
        <DataCollection />
        <WhatILearned />
        <Reflection />
      </main>
    </div>
  )
}

export default App

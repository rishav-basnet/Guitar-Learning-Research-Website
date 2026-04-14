import './App.css'
import Hero from './components/Hero'
import MetricsStrip from './components/MetricsStrip'
import HowItStarted from './components/HowItStarted'
import TheProblem from './components/TheProblem'
import HowITested from './components/HowITested'
import Analysis from './components/Analysis'
import Insights from './components/Insights'
import Reflection from './components/Reflection'

function App() {
  return (
    <div className="app">
      <Hero />
      <MetricsStrip />
      <main className="main">
        <HowItStarted />
        <TheProblem />
        <HowITested />
        <Analysis />
        <Insights />
        <Reflection />
      </main>
    </div>
  )
}

export default App

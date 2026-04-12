import './App.css'
import Hero from './components/Hero'
import Motivation from './components/Motivation'
import ExperimentDesign from './components/ExperimentDesign'
import Analysis from './components/Analysis'
import Insights from './components/Insights'
import Reflection from './components/Reflection'

function App() {
  return (
    <div className="app">
      <Hero />
      <main className="main">
        <Motivation />
        <ExperimentDesign />
        <Analysis />
        <Insights />
        <Reflection />
      </main>
    </div>
  )
}

export default App

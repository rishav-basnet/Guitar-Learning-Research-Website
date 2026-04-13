import './App.css'
import Container from './components/Container'
import Hero from './components/Hero'
import MetricsStrip from './components/MetricsStrip'
import Motivation from './components/Motivation'
import ExperimentDesign from './components/ExperimentDesign'
import Analysis from './components/Analysis'
import Insights from './components/Insights'
import Reflection from './components/Reflection'

function App() {
  return (
    <div className="app">
      <Hero />
      <MetricsStrip />
      <main className="main">
        <Container>
          <Motivation />
          <ExperimentDesign />
          <Analysis />
          <Insights />
          <Reflection />
        </Container>
      </main>
    </div>
  )
}

export default App

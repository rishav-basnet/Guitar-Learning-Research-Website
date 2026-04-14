import Button from './Button'
import Container from './Container'
import HeroMiniChart from './HeroMiniChart'

export default function Hero() {
  return (
    <header className="hero">
      <Container>
        <div className="hero__layout">
          <div className="hero__main">
            <h1 className="hero__title">Guitar Skill Acquisition Study</h1>
            <p className="hero__subtitle">
              I designed a controlled experiment to measure how a beginner
              improves at guitar over time.
              <br />
              <br />
              Instead of relying on 'feeling better', I tracked accuracy across
              speed and difficulty to make progress measurable.
            </p>
            <p className="hero__metric">
              The same short routine ran every day so the results stay easy to
              compare.
            </p>
            <div className="hero__actions">
              <Button
                href="https://github.com/rishav-basnet/Guitar-Learning-Research"
                className="hero-github-btn"
              >
                View on GitHub
              </Button>
            </div>
          </div>
          <div
            className="hero__panel hero-card"
            aria-label="Preview of practice progress over time"
          >
            <div className="hero-glow" aria-hidden="true" />
            <HeroMiniChart />
          </div>
        </div>
      </Container>
    </header>
  )
}

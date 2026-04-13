import Button from './Button'
import Container from './Container'

export default function Hero() {
  return (
    <header className="hero">
      <Container>
        <div className="hero__layout">
          <div className="hero__main">
            <p className="hero__label">Practice study</p>
            <h1 className="hero__title">Guitar Skill Acquisition Study</h1>
            <p className="hero__subtitle">
              A ↔ E chord transitions measured under tempo and mode pressure.
            </p>
            <p className="hero__metric">
              BPM sets speed; mode sets how long you have to switch. Performance
              uses <span className="term">clean_ratio</span> (
              <span className="term">successful_trials</span> / 4).
            </p>
            <div className="hero__actions">
              <Button href="https://github.com/rishav-basnet/Guitar-Learning-Research">
                View on GitHub
              </Button>
            </div>
            <p className="hero__caption">
              Experiment protocol, dataset, and analysis code in the reference
              repository.
            </p>
          </div>
          <div className="hero__panel" aria-hidden="true" />
        </div>
      </Container>
    </header>
  )
}

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
              I designed an experiment protocol and measured how much I
              progressed as a complete beginner over 7 days.
            </p>
            <p className="hero__metric">
              The same short routine ran every day so the results stay easy to
              compare.
            </p>
            <div className="hero__actions">
              <Button href="https://github.com/rishav-basnet/Guitar-Learning-Research">
                View on GitHub
              </Button>
            </div>
            <p className="hero__caption subtle-text">
              Full study details:
              {' '}
              <a
                className="text-link"
                href="https://github.com/rishav-basnet/Guitar-Learning-Research"
                target="_blank"
                rel="noreferrer"
              >
                repository
              </a>
              ,{' '}
              <a
                className="text-link"
                href="https://github.com/rishav-basnet/Guitar-Learning-Research/blob/main/README.md"
                target="_blank"
                rel="noreferrer"
              >
                README
              </a>
              , and{' '}
              <a
                className="text-link"
                href="https://github.com/rishav-basnet/Guitar-Learning-Research/blob/main/data/main-data.csv"
                target="_blank"
                rel="noreferrer"
              >
                dataset
              </a>
              .
            </p>
          </div>
          <div
            className="hero__panel"
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

import Button from './Button'
import Container from './Container'
import HeroMiniChart from './HeroMiniChart'

export default function Hero() {
  return (
    <header className="hero">
      <Container>
        <div className="hero__layout">
          <div className="hero__main">
            <h1 className="hero__title">
              <span className="hero__title-line">Guitar Skill Acquisition</span>
              <span className="hero__title-line hero__title-line--second">
                Study
              </span>
            </h1>
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
            <p className="hero__caption">
              Protocol notes, saved data, and analysis code are in the GitHub
              repository.
            </p>
          </div>
          <div
            className="hero__panel"
            aria-label="Preview of practice progress over time"
          >
            <HeroMiniChart />
          </div>
        </div>
      </Container>
    </header>
  )
}

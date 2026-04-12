export default function Hero() {
  return (
    <header className="hero hero--centered">
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
      <a
        className="hero__github-btn"
        href="https://github.com/rishav-basnet/Guitar-Learning-Research"
        target="_blank"
        rel="noreferrer"
      >
        View on GitHub
      </a>
      <p className="hero__caption">
        Experiment protocol, dataset, and analysis code in the reference
        repository.
      </p>
    </header>
  )
}

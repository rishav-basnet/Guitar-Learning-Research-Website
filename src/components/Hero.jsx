export default function Hero() {
  return (
    <header className="hero">
      <p className="hero__label">Practice study</p>
      <h1 className="hero__title">Guitar Skill Acquisition Study</h1>
      <p className="hero__lede">
        This project studies how chord transition performance (A ↔ E) changes
        under time pressure.
      </p>
      <p className="hero__metric">
        BPM controls speed, and mode controls how much time is available to
        switch chords. Performance is measured using{' '}
        <span className="hero__term">clean_ratio</span> (
        <span className="hero__term">successful_trials</span> / 4).
      </p>
      <p className="hero__note">
        <a
          className="hero__link"
          href="https://github.com/rishav-basnet/Guitar-Learning-Research"
          target="_blank"
          rel="noreferrer"
        >
          Reference repository
        </a>{' '}
        — experiment design, data, and analysis scripts.
      </p>
    </header>
  )
}

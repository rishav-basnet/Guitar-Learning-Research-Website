import Section from './Section'

export default function Factors() {
  return (
    <Section id="factors" title="What made it harder or easier?">
      <p>
        Increasing speed made it significantly harder to switch chords cleanly.
        When the available time to switch decreased, mistakes increased.
      </p>
      <p>
        At slower speeds, I had more control and consistency. As difficulty
        increased, it became harder to stay accurate under time pressure.
      </p>
      <p>
        The harder levels made small timing and coordination issues much more
        noticeable.
      </p>
      <div className="section-card chart-card">
        <div className="chart-placeholder">BPM vs Performance Chart</div>
        <p className="chart-caption">Performance vs speed and difficulty</p>
      </div>
    </Section>
  )
}

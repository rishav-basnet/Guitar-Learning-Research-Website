import Card from './Card'
import KeywordBadge from './KeywordBadge'
import Section from './Section'

export default function ExperimentDesign() {
  return (
    <Section id="experiment" title="Experiment design">
      <div className="experiment-grid">
        <Card interactive>
          <h3 className="experiment-card__title">Modes</h3>
          <p className="experiment-card__lede">
            Four difficulty levels. More strums per cycle → less time to switch
            chords.
          </p>
          <ul className="experiment-card__list">
            <li>
              <strong>Mode 1:</strong> strum once, switch during remaining beats
            </li>
            <li>
              <strong>Mode 2:</strong> strum twice, switch in shorter window
            </li>
            <li>
              <strong>Mode 3:</strong> strum three times, very limited switching
              time
            </li>
            <li>
              <strong>Mode 4:</strong> strum continuously, minimal gap to switch
            </li>
          </ul>
        </Card>
        <Card interactive>
          <h3 className="experiment-card__title">BPM levels</h3>
          <p className="experiment-card__lede">
            <KeywordBadge>BPM</KeywordBadge> sets tempo and time pressure for
            each block.
          </p>
          <ul className="experiment-card__list">
            <li>Six levels: 60, 70, 80, 90, 100, 110 BPM</li>
            <li>Same grid every session for comparable results</li>
          </ul>
        </Card>
        <Card interactive>
          <h3 className="experiment-card__title">Trials</h3>
          <p className="experiment-card__lede">
            Four trials per (<KeywordBadge>mode</KeywordBadge>,{' '}
            <KeywordBadge>BPM</KeywordBadge>) cell.
          </p>
          <ul className="experiment-card__list">
            <li>Each trial scored as success or not</li>
            <li>
              Success = clean, on-time chord change within the mode window
            </li>
          </ul>
        </Card>
        <Card interactive>
          <h3 className="experiment-card__title">Rules / protocol</h3>
          <p className="experiment-card__lede">
            Protocol video (same routine each session):{' '}
            <a
              className="text-link"
              href="https://www.youtube.com/watch?v=WtXb90taPOY"
              target="_blank"
              rel="noreferrer"
            >
              watch on YouTube
            </a>
            .
          </p>
          <ul className="experiment-card__list">
            <li>Each session: 4 modes × 6 BPM levels × 4 trials per cell</li>
            <li>A 4-beat cycle at each BPM; alternate A and E chords</li>
            <li>
              Exact same structure every session for direct cross-session
              comparison
            </li>
          </ul>
        </Card>
      </div>
    </Section>
  )
}

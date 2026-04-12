import Section from './Section'

export default function ExperimentDesign() {
  return (
    <Section id="experiment" title="Experiment design">
      <p>
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
      <p>Each session follows the same grid:</p>
      <ul className="prose-list">
        <li>4 modes (difficulty levels)</li>
        <li>6 BPM levels: 60, 70, 80, 90, 100, 110</li>
        <li>4 trials per (mode, BPM)</li>
      </ul>
      <p>
        <strong>Mode (1–4):</strong> more strums per cycle → less time to
        switch chords.
      </p>
      <p>
        <strong>BPM:</strong> controls tempo and time pressure.
      </p>
      <h3 className="subsection-title">Practice protocol</h3>
      <p>Each session follows a timed strumming exercise:</p>
      <ul className="prose-list">
        <li>A 4-beat cycle is repeated at each BPM.</li>
        <li>The player alternates between A and E chords.</li>
      </ul>
      <p>Modes define how much time is available to switch:</p>
      <ul className="prose-list">
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
      <p>For each (mode, BPM):</p>
      <ul className="prose-list">
        <li>4 trials are performed</li>
        <li>
          Each trial is marked successful or not based on a clean, on-time
          chord change
        </li>
      </ul>
      <p>
        Each session follows the exact same structure, allowing direct
        comparison across sessions.
      </p>
    </Section>
  )
}

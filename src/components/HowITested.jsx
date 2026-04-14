import NarrativeSection from './NarrativeSection'

export default function HowITested() {
  return (
    <NarrativeSection
      id="how-i-tested"
      label="METHOD"
      className="method-content"
      titleBefore="How I "
      titleAccent="tested it"
    >
      <p>
        I kept the setup as simple and consistent as possible.
      </p>
      <p>
        I focused on just two chords — A and E — and followed the same short
        practice routine every day using a reference video.
      </p>
      <p>Each session used the exact same structure:</p>
      <ul className="prose-list">
        <li>BPM levels: 60 -&gt; 110</li>
        <li>4 difficulty modes</li>
        <li>4 attempts per condition</li>
      </ul>
      <p>
        Instead of changing what I practiced, I measured how accurately I could
        execute each transition under the same conditions.
      </p>
      <p>
        Each attempt was scored as either successful or not, and then converted
        into a success rate.
      </p>
      <p>
        <strong>
          By keeping everything constant, any change in performance would reflect
          real improvement — not randomness
        </strong>
        .
      </p>
      <p className="video-label">Reference practice routine</p>
      <div className="reference-video-wrapper video-container">
        <div className="reference-video-card method-video">
          <iframe
            src="https://www.youtube.com/embed/WtXb90taPOY"
            title="Practice routine reference"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      <a
        className="video-link"
        href="https://www.youtube.com/watch?v=WtXb90taPOY"
        target="_blank"
        rel="noreferrer"
      >
        Open on YouTube →
      </a>
    </NarrativeSection>
  )
}

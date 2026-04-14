import NarrativeSection from './NarrativeSection'

export default function HowITested() {
  return (
    <NarrativeSection
      id="how-i-tested"
      label="METHOD"
      titleBefore="How I "
      titleAccent="tested it"
    >
      <p>
        I followed the same short routine every session so the results stay easy
        to compare across days.
      </p>
      <p>
        Each session used a fixed grid of practice modes and BPM levels, with
        four trials per cell. Each trial was scored as a success or not based on
        clean, on-time chord changes within the mode window.
      </p>
      <p className="video-label">Reference practice routine</p>
      <div className="reference-video-card">
        <iframe
          src="https://www.youtube.com/embed/WtXb90taPOY"
          title="Practice routine reference"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
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

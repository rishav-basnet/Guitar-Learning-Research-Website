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
      <p>
        The protocol video (same routine each session) is on YouTube:{' '}
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
    </NarrativeSection>
  )
}

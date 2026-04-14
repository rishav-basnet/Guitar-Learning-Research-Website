import NarrativeSection from './NarrativeSection'

export default function DifficultyStructure() {
  return (
    <NarrativeSection
      id="difficulty"
      label="SYSTEM"
      titleBefore="How the "
      titleAccent="difficulty"
      titleAfter=" increased"
    >
      <div className="text-container">
        <p>
          Each session included four levels of difficulty based on how much time
          I had to switch between chords.
        </p>
        <p>
          At easier levels, there was enough time to reposition my fingers before
          the next strum.
        </p>
        <p>
          As difficulty increased, that time became shorter, forcing faster and
          more precise transitions.
        </p>
        <div className="mode-card">
          <p>Mode 1 → more time to switch</p>
          <p>Mode 4 → almost no time to switch</p>
        </div>
        <p>
          This created a controlled way to test how performance changes under
          time pressure.
        </p>
      </div>
    </NarrativeSection>
  )
}

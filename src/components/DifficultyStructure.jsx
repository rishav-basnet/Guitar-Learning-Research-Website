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
      <p>
        There are four difficulty levels (modes). Each mode changes how many
        strums happen before the chord switch, which changes how much time you
        have to move between chords.
      </p>
      <div className="mode-card">
        <p>Mode 1 → more time to switch</p>
        <p>Mode 4 → almost no time to switch</p>
      </div>
    </NarrativeSection>
  )
}

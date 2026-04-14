import Section from './Section'

export default function DifficultyStructure() {
  return (
    <Section id="difficulty" title="Difficulty">
      <p>
        There are four difficulty levels (modes). Each mode changes how many
        strums happen before the chord switch, which changes how much time you
        have to move between chords.
      </p>
      <div className="mode-card">
        <p>
          <strong>Mode 1</strong> → more time to switch
        </p>
        <p>
          <strong>Mode 4</strong> → almost no time to switch
        </p>
      </div>
    </Section>
  )
}

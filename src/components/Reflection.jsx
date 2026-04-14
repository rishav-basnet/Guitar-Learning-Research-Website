import Section from './Section'

export default function Reflection() {
  return (
    <Section id="reflection" title="Reflection" className="reflection card-section">
      <p>
        At the beginning, practice felt <strong>inconsistent and hard to judge</strong>.
        Some sessions felt better than others, but I had no clear way to
        measure it.
      </p>
      <p>
        <strong>Tracking performance</strong> changed that. Seeing the data
        across sessions — including both improvements and setbacks — made
        progress <span className="highlight">concrete instead of guesswork</span>.
      </p>
      <p>
        It also revealed patterns I would not have noticed otherwise, like how
        <span className="highlight"> improvement varies by difficulty</span> and
        how performance drops under time pressure.
      </p>
      <p>
        Recording each session gave structure to my practice and made it more
        <strong>intentional day to day</strong>.
      </p>
      <hr className="reflection-divider" />
      <p className="reflection__closing">
        Even though this was a small experiment, it changed how I think about
        learning. Progress isn’t always obvious day-to-day, but when it’s
        measured over time, it becomes <span className="highlight">clearer and
        easier to trust</span>.
      </p>
    </Section>
  )
}

import Section from './Section'

export default function Reflection() {
  return (
    <Section id="reflection" title="Reflection" className="reflection card-section">
      <div className="text-container">
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
          It also revealed <strong>patterns I would have missed</strong>, like how
          <span className="highlight"> improvement varies by difficulty</span> and
          how performance drops under time pressure.
        </p>
        <p>Recording each session added structure and made practice intentional.</p>
        <hr className="reflection-divider" />
        <p className="reflection__closing">
          Even though this was a small experiment, it changed how I think about
          learning. <strong>Progress is not always obvious day-to-day</strong>, but when it’s
          measured over time, it becomes <span className="highlight">clearer and
          easier to trust</span>.
        </p>
      </div>
    </Section>
  )
}

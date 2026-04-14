import Card from './Card'
import Section from './Section'

export default function Reflection() {
  return (
    <Section id="reflection" title="Reflection" className="reflection card-section">
      <Card interactive>
        <p>
          At the beginning, practice felt inconsistent and hard to judge. Some
          sessions felt better than others, but I had no clear way to measure
          it.
        </p>
        <p>
          Tracking performance changed that. Seeing the data across sessions -
          including both improvements and setbacks - made progress concrete
          instead of just a feeling.
        </p>
        <p>
          It also revealed patterns I would not have noticed otherwise, like how
          improvement varies across difficulty levels and how performance drops
          under time pressure.
        </p>
        <p>
          Recording each session gave structure to my practice and made it more
          intentional.
        </p>
        <div className="reflection-divider" aria-hidden="true" />
        <p className="reflection__closing">
          Even though this was a small experiment, it changed how I think about
          learning. Progress is not always obvious day-to-day, but when it is
          measured over time, it becomes much clearer and easier to trust.
        </p>
      </Card>
    </Section>
  )
}

import Card from './Card'
import Section from './Section'

export default function Reflection() {
  return (
    <Section id="reflection" title="Reflection" className="reflection">
      <Card interactive>
        <p>
          At the beginning, practice felt inconsistent and hard to judge. Some
          days felt better, others worse, but I had no clear way to measure it.
        </p>
        <p>
          Seeing the progress visually — especially as it gradually improved over
          time — made a big difference. It turned a vague feeling into something
          concrete and measurable.
        </p>
        <p>
          Recording each session also turned out to be surprisingly enjoyable. It
          gave structure to my practice and made the process feel more
          intentional.
        </p>
        <p>
          Even though this was a small experiment, it changed how I think about
          learning — not just in guitar, but in any skill where progress is hard
          to notice day-to-day.
        </p>
        <div className="reflection-divider" aria-hidden="true" />
        <p className="reflection__closing">
          This experiment showed me that progress becomes much clearer when it
          is measured, not just felt.
        </p>
      </Card>
    </Section>
  )
}

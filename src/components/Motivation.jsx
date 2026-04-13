import Card from './Card'
import KeywordBadge from './KeywordBadge'
import Section from './Section'

export default function Motivation() {
  return (
    <Section id="motivation" title="Motivation">
      <Card interactive>
        <div className="motivation__lede">
          Each block is scored with <KeywordBadge>clean_ratio</KeywordBadge>{' '}
          across <KeywordBadge>BPM</KeywordBadge> levels and practice modes.
        </div>
        <ul className="prose-list">
          <li>
            I was learning guitar and wanted to know whether progress was
            actually happening, and how fast it showed up.
          </li>
          <li>
            Day-to-day practice felt inconsistent, so I wanted a fixed structure
            to measure performance instead of relying on intuition.
          </li>
          <li>
            Turning practice into a small experiment made improvement something
            I could observe, not just assume.
          </li>
        </ul>
      </Card>
    </Section>
  )
}

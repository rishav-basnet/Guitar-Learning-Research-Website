import ChartContainer from './ChartContainer'
import Section from './Section'

export default function Analysis() {
  return (
    <Section id="analysis" label="ANALYSIS" title="Analysis" className="section--analysis">
      <div className="analysis-intro">
        <p>
          Each data point represents one short practice block — a combination of
          session, difficulty level, and speed.
        </p>
        <p>
          To keep things simple, I tracked how many clean chord transitions I
          could make in each block.
        </p>
        <p>
          This gave me a consistent way to compare performance across different
          days and conditions.
        </p>
      </div>
      <div className="analysis-section">
        <ChartContainer
          title="Session trend"
          caption="This shows how my overall performance changed from day to day."
          takeaway="Overall performance improves across sessions with small dips."
        >
          <img
            src="/images/learning.png"
            alt="Overall performance changing across practice days"
            width={720}
            height={320}
            loading="lazy"
          />
        </ChartContainer>
        <ChartContainer
          title="BPM vs performance"
          caption="This shows how increasing speed made chord transitions more difficult."
          takeaway="Higher BPM and harder levels both reduce performance."
        >
          <img
            src="/images/bpm.png"
            alt="Performance at different speeds and difficulty levels"
            width={720}
            height={320}
            loading="lazy"
          />
        </ChartContainer>
        <ChartContainer
          title="Threshold"
          caption="This shows the highest speed where I could still play cleanly most of the time."
          takeaway="Easier levels allow higher speeds before performance drops."
        >
          <img
            src="/images/threshold.png"
            alt="Highest speed where playing stayed mostly clean"
            width={720}
            height={320}
            loading="lazy"
          />
        </ChartContainer>
      </div>
    </Section>
  )
}

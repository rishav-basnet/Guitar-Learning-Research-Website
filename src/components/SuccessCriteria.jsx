import NarrativeSection from './NarrativeSection'

export default function SuccessCriteria() {
  return (
    <NarrativeSection
      id="success-criteria"
      label="CRITERIA"
      titleBefore="Success "
      titleAccent="criteria"
    >
      <p>
        Success for a single trial means a clean chord change on time within the
        window set by the mode. Across the study, I looked for upward movement in
        those scores over sessions, not perfection on every block.
      </p>
      <div className="video-grid">
        <div className="video-card">
          <h4>Successful Attempt</h4>
          <div className="video-placeholder">Video</div>
          <p>Clean chord transition, on beat</p>
        </div>
        <div className="video-card">
          <h4>Unsuccessful Attempt</h4>
          <div className="video-placeholder">Video</div>
          <p>Muted or delayed transition</p>
        </div>
      </div>
    </NarrativeSection>
  )
}

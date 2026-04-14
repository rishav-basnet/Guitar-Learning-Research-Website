import NarrativeSection from './NarrativeSection'

export default function SuccessCriteria() {
  return (
    <NarrativeSection
      id="success-criteria"
      className="criteria-section"
      label="WHAT MAKES A TRIAL"
      titleBefore=""
      titleAccent="SUCCESSFUL?"
    >
      <p>
        A trial is successful when the chord transition is clean and happens on
        time within the rhythm.
      </p>
      <div className="video-grid">
        <div className="video-card success-card">
          <h4>✓ Successful attempt</h4>
          <div className="video-placeholder">
            <span>Click to play</span>
          </div>
          <p>Clean, on-beat chord transition</p>
        </div>
        <div className="video-card fail-card">
          <h4>✗ Unsuccessful attempt</h4>
          <div className="video-placeholder">
            <span>Click to play</span>
          </div>
          <p>Muted or delayed chord transition</p>
        </div>
      </div>
    </NarrativeSection>
  )
}

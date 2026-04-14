import NarrativeSection from './NarrativeSection'

export default function SuccessCriteria() {
  return (
    <NarrativeSection
      id="success-criteria"
      className="criteria-section attempt-section"
      titleBefore="What makes a chord transition attempt successful?"
      titleAccent=""
    >
      <p>
        A trial is successful when the chord transition is clean and happens on
        time within the rhythm.
      </p>
      <p>
        To reduce subjectivity, I judged each attempt strictly based on audible
        clarity and timing, keeping the criteria consistent across all sessions.
      </p>
      <div className="video-grid attempt-cards">
        <div className="video-card success-card attempt-card">
          <h3>✓ Successful attempt</h3>
          <div className="video-wrapper">
            <video className="video-placeholder" controls preload="metadata">
              <source src="/videos/successTrial.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p>Clean strums after switching, no buzz, still on beat.</p>
        </div>
        <div className="video-card fail-card attempt-card">
          <h3>✗ Unsuccessful attempt</h3>
          <div className="video-wrapper">
            <video className="video-placeholder" controls preload="metadata">
              <source src="/videos/failTrial.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p>Unclear strums, half-muted and buzz.</p>
        </div>
      </div>
    </NarrativeSection>
  )
}

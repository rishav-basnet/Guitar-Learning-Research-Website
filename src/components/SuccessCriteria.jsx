import NarrativeSection from './NarrativeSection'

export default function SuccessCriteria() {
  return (
    <NarrativeSection
      id="success-criteria"
      className="criteria-section attempt-section"
      titleBefore="What counts as a successful "
      titleAccent="attempt?"
    >
      <p>
        Each attempt followed a fixed rhythm where I had to switch from one
        chord to another on time.
      </p>
      <p>
        An attempt was counted as successful only if:
      </p>
      <ul className="prose-list">
        <li>the chord sounded clean (no muted or buzzing strings)</li>
        <li>the transition happened on beat</li>
      </ul>
      <p>This gave me a simple and consistent way to measure performance.</p>
      <p>
        Instead of relying on how it felt, every attempt was judged using the
        same criteria.
      </p>
      <div className="video-grid attempt-grid">
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

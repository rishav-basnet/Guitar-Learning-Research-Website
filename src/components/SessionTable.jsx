const sessionThreeRows = [
  { mode: 1, bpm: 60, trials: 3, accuracy: 0.75 },
  { mode: 1, bpm: 70, trials: 3, accuracy: 0.75 },
  { mode: 1, bpm: 80, trials: 1, accuracy: 0.25 },
  { mode: 1, bpm: 90, trials: 3, accuracy: 0.75 },
  { mode: 1, bpm: 100, trials: 1, accuracy: 0.25 },
  { mode: 1, bpm: 110, trials: 1, accuracy: 0.25 },
  { mode: 2, bpm: 60, trials: 3, accuracy: 0.75 },
  { mode: 2, bpm: 70, trials: 2, accuracy: 0.5 },
  { mode: 2, bpm: 80, trials: 3, accuracy: 0.75 },
  { mode: 2, bpm: 90, trials: 2, accuracy: 0.5 },
  { mode: 2, bpm: 100, trials: 3, accuracy: 0.75 },
  { mode: 2, bpm: 110, trials: 1, accuracy: 0.25 },
  { mode: 3, bpm: 60, trials: 2, accuracy: 0.5 },
  { mode: 3, bpm: 70, trials: 0, accuracy: 0.0 },
  { mode: 3, bpm: 80, trials: 1, accuracy: 0.25 },
  { mode: 3, bpm: 90, trials: 1, accuracy: 0.25 },
  { mode: 3, bpm: 100, trials: 1, accuracy: 0.25 },
  { mode: 3, bpm: 110, trials: 0, accuracy: 0.0 },
  { mode: 4, bpm: 60, trials: 0, accuracy: 0.0 },
  { mode: 4, bpm: 70, trials: 2, accuracy: 0.5 },
  { mode: 4, bpm: 80, trials: 0, accuracy: 0.0 },
  { mode: 4, bpm: 90, trials: 1, accuracy: 0.25 },
  { mode: 4, bpm: 100, trials: 0, accuracy: 0.0 },
  { mode: 4, bpm: 110, trials: 1, accuracy: 0.25 },
]

function getAccuracyClass(accuracy) {
  if (accuracy >= 0.75) {
    return 'accuracy-pill accuracy-pill--high'
  }
  if (accuracy === 0.5) {
    return 'accuracy-pill accuracy-pill--mid'
  }
  return 'accuracy-pill accuracy-pill--low'
}

export default function SessionTable() {
  return (
    <div className="session-table-wrap" role="region" aria-label="Session 3 data table">
      <table className="session-table">
        <thead>
          <tr>
            <th>Mode</th>
            <th>BPM</th>
            <th>Successful Trials</th>
            <th>Accuracy</th>
          </tr>
        </thead>
        <tbody>
          {sessionThreeRows.map((row) => (
            <tr key={`${row.mode}-${row.bpm}`}>
              <td>{row.mode}</td>
              <td>{row.bpm}</td>
              <td>{row.trials}</td>
              <td>
                <span className={getAccuracyClass(row.accuracy)}>
                  {row.accuracy.toFixed(2)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

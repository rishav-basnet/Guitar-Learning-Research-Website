import NarrativeSection from './NarrativeSection'

export default function TheProblem() {
  return (
    <NarrativeSection
      id="the-problem"
      label="PROBLEM"
      titleBefore="The "
      titleAccent="problem"
    >
      <p>
        Without a clear measure, it is hard to tell whether a practice session
        went well or whether you are actually improving week to week.
      </p>
      <p>
        I wanted something repeatable so I could compare sessions directly
        instead of guessing from memory.
      </p>
      <p>
        The goal was a simple way to track progress that stayed consistent even
        when how I felt on a given day did not.
      </p>
    </NarrativeSection>
  )
}

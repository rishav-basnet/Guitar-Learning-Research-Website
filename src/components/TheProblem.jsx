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
        But then I ran into a bigger question: how do you even measure progress
        in something like this?
      </p>
      <p>
        Unlike workouts, where you can track reps or weight, improvement in
        guitar is subtle. Cleaner transitions and better timing are noticeable,
        but hard to quantify.
      </p>
      <p>
        That meant I needed a way to turn a subjective feeling - "this sounded
        better" - into something objective and consistent.
      </p>
      <p>
        So the question became:
        <br />
        How can you measure improvement in a skill where progress is usually
        felt, not recorded?
      </p>
    </NarrativeSection>
  )
}

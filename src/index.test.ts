import {describe, expect, test} from 'vitest'
import {Signal, State, validSignals, isValidSignal, isWaitingState, isActingState} from "./index.ts"

test('valid signal for Aborting is StateComplete', () => {
    expect(validSignals(State.Aborting)).toEqual(new Set([Signal.StateComplete]))
})

test('valid signal for Aborted is Clear', () => {
    expect(validSignals(State.Aborted)).toEqual(new Set([Signal.Clear]))
})

test('valid signals for Idle are Start, Abort and Stop', () => {
    expect(validSignals(State.Idle)).toEqual(new Set([Signal.Start, Signal.Stop, Signal.Abort]))
})

test('Start is not a valid signal for Aborted', () => {
    expect(isValidSignal(State.Aborted, Signal.Start)).toBe(false)
})

test('Hold is a valid signal for Execute', () => {
    expect(isValidSignal(State.Execute, Signal.Hold)).toBe(true)
})

test('Idle is a waiting state', () => {
    expect(isWaitingState(State.Idle)).toBe(true)
})

test('Aborted is a waiting state', () => {
    expect(isWaitingState(State.Aborted)).toBe(true)
})

test('Stopping is not waiting state', () => {
    expect(isWaitingState(State.Stopping)).toBe(false)
})

test('Resetting is an acting state', () => {
    expect(isActingState(State.Resetting)).toBe(true)
})

describe.each([
    State.Aborting,
    State.Aborted,
    State.Clearing,
    State.Stopping,
    State.Stopped,
    State.Resetting,
    State.Idle,
    State.Starting,
    State.Execute,
    State.Holding,
    State.Held,
    State.Unholding,
    State.Suspending,
    State.Suspended,
    State.Unsuspending,
    State.Completing,
    State.Complete,
])('all states have valid signals', (state: State) => {
    test(`state ${State[state]} has valid signals`, () => {
        expect(validSignals(state as State).size).not.toBe(0)
    })
})

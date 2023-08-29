import {State} from "./States"
import {Signal} from "./Signals"

export const Transitions = new Map<State, Map<Signal, State>>([
    [State.Aborted, new Map([
        [Signal.Clear, State.Clearing]
    ])],
    [State.Stopping, new Map([
        [Signal.StateComplete, State.Stopped],
        [Signal.Abort, State.Aborting]]
    )],
    [State.Clearing, new Map([
        [Signal.StateComplete, State.Stopped],
        [Signal.Abort, State.Aborting]]
    )],
    [State.Stopped, new Map([
        [Signal.Reset, State.Resetting],
        [Signal.Abort, State.Aborting]]
    )],
    [State.Resetting, new Map([
        [Signal.StateComplete, State.Idle],
        [Signal.Abort, State.Aborting],
        [Signal.Stop, State.Stopping]]
    )],
    [State.Idle, new Map([
        [Signal.Start, State.Starting],
        [Signal.Abort, State.Aborting],
        [Signal.Stop, State.Stopping]]
    )],
    [State.Starting, new Map([
        [Signal.StateComplete, State.Execute],
        [Signal.Abort, State.Aborting],
        [Signal.Stop, State.Stopping]]
    )],
    [State.Execute, new Map([
        [Signal.Suspend, State.Suspending],
        [Signal.Hold, State.Holding],
        [Signal.Abort, State.Aborting],
        [Signal.Stop, State.Stopping],
        [Signal.StateComplete, State.Completing]]
    )],
    [State.Holding, new Map([
        [Signal.StateComplete, State.Held],
        [Signal.Abort, State.Aborting],
        [Signal.Stop, State.Stopping]]
    )],
    [State.Held, new Map([
        [Signal.Unhold, State.Unholding],
        [Signal.Abort, State.Aborting],
        [Signal.Stop, State.Stopping]]
    )],
    [State.Unholding, new Map([
        [Signal.StateComplete, State.Execute],
        [Signal.Abort, State.Aborting],
        [Signal.Stop, State.Stopping]]
    )],
    [State.Suspending, new Map([
        [Signal.StateComplete, State.Suspended],
        [Signal.Abort, State.Aborting],
        [Signal.Stop, State.Stopping]]
    )],
    [State.Completing, new Map([
        [Signal.StateComplete, State.Complete],
        [Signal.Abort, State.Aborting],
        [Signal.Stop, State.Stopping]]
    )],
    [State.Suspended, new Map([
        [Signal.Unsuspend, State.Unsuspending],
        [Signal.Abort, State.Aborting],
        [Signal.Stop, State.Stopping]]
    )],
    [State.Unsuspending, new Map([
        [Signal.StateComplete, State.Execute],
        [Signal.Abort, State.Aborting],
        [Signal.Stop, State.Stopping]]
    )],
    [State.Complete, new Map([
        [Signal.Reset, State.Resetting],
        [Signal.Abort, State.Aborting],
        [Signal.Stop, State.Stopping]]
    )],
    [State.Aborting, new Map([
        [Signal.StateComplete, State.Aborted]]
    )],
])

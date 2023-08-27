export enum State {
    Undefined = 0,
    Clearing = 1,
    Stopped = 2,
    Starting = 3,
    Idle = 4,
    Suspended = 5,
    Execute = 6,
    Stopping = 7,
    Aborting = 8,
    Aborted = 9,
    Holding = 10,
    Held = 11,
    Unholding = 12,
    Suspending = 13,
    Unsuspending = 14,
    Resetting = 15,
    Completing = 16,
    Complete = 17,
}

export const ActingStates = new Set<State>([
    State.Clearing,
    State.Starting,
    State.Execute,
    State.Stopping,
    State.Aborting,
    State.Holding,
    State.Unholding,
    State.Suspending,
    State.Unsuspending,
    State.Resetting,
    State.Completing,
])

export const WaitingStates = new Set<State>([
    State.Stopped,
    State.Idle,
    State.Suspended,
    State.Held,
    State.Complete,
    State.Aborted,
])

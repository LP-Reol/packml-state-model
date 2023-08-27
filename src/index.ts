import {Signal} from "./Signals.ts";
import {Transitions} from "./Transitions.ts";
import {ActingStates, State, WaitingStates} from "./States.ts";

export {
    Signal,
    State,
    Transitions,
}

export const validSignals = (state: State): Set<Signal> => new Set(Transitions.get(state)?.keys() ?? [])
export const isValidSignal = (state: State, signal: Signal): boolean => validSignals(state).has(signal)
export const isActingState = (state: State): boolean => ActingStates.has(state)
export const isWaitingState = (state: State): boolean => WaitingStates.has(state)

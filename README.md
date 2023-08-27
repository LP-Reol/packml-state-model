# PackML state model for Typescript

Typescript definitions of the states, signals and transitions in the [PackML](https://www.omac.org/packml) automation standard by [OMAC](https://www.omac.org).


Valid signals for a given state:

```ts
validSignals(State.Idle); 
// => [Signal.Start, Signal.Abort, Signal.Stop] 
```

Waiting states and acting states:

```ts
isActingState(State.Aborting);
// => true

isWaitingState(State.Idle);
// => true
```

Transitions for a given state:

```ts
Transitions.get(State.Stopped)
// => Map([
//     [Signal.Reset, State.Resetting],
//     [Signal.Abort, State.Aborting]]
// )]
```

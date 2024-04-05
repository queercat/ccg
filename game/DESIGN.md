# Engine Design

## How do handle effects???

Effects can be handled by building steps into the system that are required when certain actions are taken. Hooks are built into the cards that are some encapsulation of functions and how they modify
global state.

Replacement or otherwise alterting effects can be applied as those encapsulated functions into specific areas as needed.

Something like, when X ETBs or is in plan, push into the requirements check for move zone step a function that does some modification of state or its own check.

It's pretty complicated, I think it'd be best to write out examples to prove the system.

### TODO: ^

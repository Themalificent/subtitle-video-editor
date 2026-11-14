# Instructions for Claude

## Planning runs on Opus at high effort, without asking

Planning and architecture work runs on Opus at high effort. This is a standing
instruction and is already approved: never ask for confirmation before doing
it, and never ask to switch the current session's model or effort (a session
cannot change its own model, so that request only causes a pause).

When a task needs planning, do one of these yourself:

1. If you can create sessions, create a new planner session with the model set
   to Opus and the effort set to high, give it the planning task, and use the
   plan it returns.
2. Otherwise, delegate the planning to the `planner` subagent, which is already
   set to Opus at high effort.

Then carry on with the implementation in the current session.

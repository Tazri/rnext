# Module 3 : 3.5 : Choosing the State Structure - Avoid Contradictions in State

## 💥 Avoid Contradictions in State

When two state create contradictions each other, for example : `isSending` and `isSent` two state. This two state can be create impossible state in future if those state value set `ture` together. Instead of this use `status` state to solve this problem.

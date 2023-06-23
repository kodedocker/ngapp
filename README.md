# STEP 1

- Install the depdendencies
  - ng add @ngrx/store
  - ng add @ngrx/store-devtools
  - ng add @ngrx/effects
- Optional
  - Add HttpClientModule
  - Add FormsModule
  - Add ReactiveFormModule

# STEP 2

- Plain Reducer
  - Create Module1 Reducer
  - Create Module2 Reducer
  - Create Root Store
    - create root state
    - create root reducer
    - create root effects

# STEP 3

- Go to Component
  - Generate new component
  - Access the State/Store of Module1 or Module2
  - Plus Dispatch Action

# STEP 4

- Create Affects
  - Create root affect or update the root affect
  - Note: Understand the binding of Action in Affects
  - Calling the Action on button click
  - Inspect thd data via Devtools
  - Access the state and Display in Component

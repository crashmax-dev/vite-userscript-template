import {
  atom,
  withReducers,
  createCtx
} from '@reatom/framework'

export const ctx = createCtx()

export const counterAtom = atom(0).pipe(
  withReducers({
    reset: () => 0,
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  })
)

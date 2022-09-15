import { mount } from 'redom-jsx'
import type { RedomComponent, RedomEl } from 'redom-jsx'
import { createAtom } from '@reatom/core'
import './style.scss'

const counterAtom = createAtom(
  {
    increase: () => {},
    decrease: () => {},
    reset: () => 0
  },
  ({ onAction, schedule }, state = 0) => {
    onAction('increase', () => state++)
    onAction('decrease', () => state--)
    onAction('reset', (value) => (state = value))

    schedule(() => console.log(`Counter: ${state}`))

    return state
  }
)

class Counter implements RedomComponent {
  el: RedomEl
  h1: HTMLHeadingElement

  constructor() {
    // prettier-ignore
    <div this="el" className="card">
      <h1 this="h1"></h1>
      <button onclick={() => counterAtom.decrease.dispatch()}>decrease</button>
      <button onclick={() => counterAtom.reset.dispatch()}>reset</button>
      <button onclick={() => counterAtom.increase.dispatch()}>increase</button>
    </div>
  }
}

const counter = new Counter()
counterAtom.subscribe((value) => (counter.h1.textContent = `${value}`))

mount(document.body, counter)

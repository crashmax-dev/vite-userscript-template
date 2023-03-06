import { mount } from 'redom-jsx'
import { ctx, counterAtom } from './state.js'
import type { RedomComponent, RedomEl } from 'redom-jsx'
import './style.scss'
import { onUpdate } from '@reatom/framework'

class Counter implements RedomComponent {
  el: RedomEl
  h1: HTMLHeadingElement

  constructor() {
    // prettier-ignore
    <div this="el" className="card">
      <h1 this="h1">{ctx.get(counterAtom)}</h1>
      <button onclick={() => counterAtom.increment(ctx)}>increment</button>
      <button onclick={() => counterAtom.reset(ctx)}>reset</button>
      <button onclick={() => counterAtom.decrement(ctx)}>decrement</button>
    </div>
  }
}

const counter = new Counter()

onUpdate(counterAtom, () => {
  (counter.h1.textContent = `${ctx.get(counterAtom)}`)
})

mount(document.body, counter)

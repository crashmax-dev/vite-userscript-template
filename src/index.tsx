import { createMemo, createSignal } from 'solid-js'
import { render } from 'solid-js/web'
import type { Component } from 'solid-js'
import './style.scss'

const [count, setCount] = createSignal(2)
const double = createMemo(() => count() * 2)

const App: Component = () => {
  return (
    <div class="card">
      <h1 class="title">Hello World</h1>
      <button onClick={() => setCount(count() + 1)}>
        {count()} x 2 = {double()}
      </button>
    </div>
  )
}

const fragment = document.createDocumentFragment()
render(() => <App />, fragment)
document.body.appendChild(fragment)

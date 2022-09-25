import { render } from 'preact'
import { computed, signal } from '@preact/signals'
import './style.scss'

const count = signal(0)
const double = computed(() => count.value * 2)

function App() {
  return (
    <div className="card">
      <h1 className="title">Hello World</h1>
      <button onClick={() => count.value++}>
        {count} x 2 = {double}
      </button>
    </div>
  )
}

const fragment = document.createDocumentFragment()
render(<App />, fragment)
document.body.appendChild(fragment)

import { mount } from 'redom-jsx'
import './style.scss'

function App() {
  return (
    <div className="card">
      <h1 className="title">Hello World</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, ipsa.
      </p>
      <a href="https://google.com" target="_blank">Link</a>
    </div>
  )
}

mount(document.body, <App />)

import { el, mount } from 'redom'
import './style.scss'

const App = el(
  'div',
  { className: 'card' },
  el('h1', { className: 'title' }, 'Hello World'),
  el(
    'p',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, ipsa.'
  ),
  el('a', { href: 'https://google.com', target: '_blank' }, 'Link')
)

mount(document.body, App)

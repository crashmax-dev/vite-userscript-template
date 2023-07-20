import { el } from '@zero-dependency/dom'

import './style.scss'

const card = el(
  'div',
  { className: 'card' },
  el('h1', { className: 'title' }, 'Hello World'),
  el(
    'p',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, ipsa.'
  ),
  el('a', { href: 'https://google.com', target: '_blank' }, 'Link')
)

document.body.appendChild(card)

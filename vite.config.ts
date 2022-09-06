import { defineConfig } from 'vite'
import Redom from 'vite-redom-jsx'
import Userscript from 'vite-userscript-plugin'
import { name, version, homepage } from './package.json'

export default defineConfig({
  plugins: [
    Redom(),
    Userscript({
      entry: 'src/index.tsx',
      header: {
        name,
        version,
        homepage,
        match: 'https://example.com'
      }
    })
  ]
})

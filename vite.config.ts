import { defineConfig } from 'vite'
import { imba } from 'vite-plugin-imba'
import Userscript from 'vite-userscript-plugin'
import { name, version, homepage, license } from './package.json'

export default defineConfig((config) => {
  return {
    plugins: [
      imba(),
      Userscript({
        entry: 'src/index.imba',
        header: {
          name,
          version,
          license,
          homepage,
          match: 'https://example.com'
        },
        server: {
          port: 3000
        }
      })
    ]
  }
})

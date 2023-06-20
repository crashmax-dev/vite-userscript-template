import { defineConfig } from 'vite'
import Solidjs from 'vite-plugin-solid'
import Userscript from 'vite-userscript-plugin'
import { name, version, homepage, license } from './package.json'

export default defineConfig((config) => {
  return {
    plugins: [
      Solidjs(),
      Userscript({
        entry: 'src/index.tsx',
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

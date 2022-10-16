import { execa } from 'execa'
import fs from 'fs'

let extension = ''
if (process.platform === 'win32') {
  extension = '.exe'
}

async function main() {
  const rustInfo = (await execa('rustc', ['-vV'])).stdout
  const targetTriple = /host: (\S+)/g.exec(rustInfo)[1]
  if (!targetTriple) {
    console.error('Failed to determine platform target triple')
  }
  fs.renameSync(`src-tauri/bin/main${extension}`, `src-tauri/bin/main-${targetTriple}${extension}`)
}

main().catch((e) => {
  throw e
})

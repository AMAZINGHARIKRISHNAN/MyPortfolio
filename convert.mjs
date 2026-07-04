import sharp from 'sharp'
import { readdirSync, statSync, unlinkSync } from 'fs'
import { join, extname } from 'path'

const ROOT = 'public/assets/images'
let before = 0
let after = 0

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f)
    return statSync(p).isDirectory() ? walk(p) : [p]
  })

for (const file of walk(ROOT)) {
  const ext = extname(file).toLowerCase()
  if (!['.png', '.jpg', '.jpeg', '.gif'].includes(ext)) continue
  const out = file.replace(/\.(png|jpe?g|gif)$/i, '.webp')
  const animated = ext === '.gif'
  const origSize = statSync(file).size

  await sharp(file, { animated })
    .webp({ quality: 80, effort: 5 })
    .toFile(out)

  const newSize = statSync(out).size
  before += origSize
  after += newSize
  unlinkSync(file)
  console.log(`${file}  ${(origSize / 1024).toFixed(0)}KB -> ${(newSize / 1024).toFixed(0)}KB`)
}

console.log(`\nTOTAL: ${(before / 1024 / 1024).toFixed(2)}MB -> ${(after / 1024 / 1024).toFixed(2)}MB (${(100 - (after / before) * 100).toFixed(0)}% smaller)`)

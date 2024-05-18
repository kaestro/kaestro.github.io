import fs from 'fs'
import path from 'path'

export function getAllPosts(dirPath: string, arrayOfFiles: string[] = []) {
  const files = fs.readdirSync(dirPath)

  files.forEach(file => {
    if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
      arrayOfFiles = getAllPosts(path.join(dirPath, file), arrayOfFiles)
    } else {
      arrayOfFiles.push(path.join(dirPath, file))
    }
  })

  return arrayOfFiles
}
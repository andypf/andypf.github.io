import { minify } from "minify"
import fs from "fs"
import fse from "fs-extra"
import glob from "glob"

const src = "./src"
const dist = "./dist"
const timestamp = new Date().getTime()

try {
  fs.rmSync(dist, { recursive: true })
  console.log(`${dist} is deleted!`)

  fs.mkdirSync(dist)
  fs.mkdirSync(`${dist}/css`)

  console.log("dist folder created")
} catch (e) {
  console.error(e)
}

// options is optional
glob(`${src}/*.html`, function (er, files) {
  // console.log(files)
  for (let file of files) {
    let fileName = file.split("/")
    fileName = fileName[fileName.length - 1]

    minify(file).then((result) => {
      result = result.replace(".css", `.${timestamp}.css`)
      fs.writeFile(`${dist}/${fileName}`, result, (err) => {
        if (err) {
          console.error(err)
        }
        // file written successfully
      })
    })
  }
})

minify(`${src}/css/reset.css`)
  .then((reset) => minify(`${src}/css/app.css`).then((app) => reset + app))
  .then((stream) => {
    fs.writeFile(`${dist}/css/app.${timestamp}.css`, stream, (err) => {
      if (err) {
        console.error(err)
      }
      // file written successfully
    })
  })

fse.copySync(`${src}/images`, `${dist}/images`, {}, (err) => {
  if (err) console.error(err)
  else console.info("images copyed")
})

fse.copySync(`${src}/CNAME`, `${dist}/CNAME`, {}, (err) => {
  if (err) console.error(err)
  else console.info("CNAME copyed")
})

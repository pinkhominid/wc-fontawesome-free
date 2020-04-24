const fs = require('fs')
const mustache = require('mustache')
const { fab } = require('@fortawesome/free-brands-svg-icons')
const { far } = require('@fortawesome/free-regular-svg-icons')
const { fas } = require('@fortawesome/free-solid-svg-icons')

const prefixStyleMap = { fab: 'brands', far: 'regular', fas: 'solid', }

async function generate() {
  const tmpl = await fs.promises.readFile('./build/wc-icon.mustache', 'utf8')

  const iconsMetadata = [
    ...extractIconsMetadata(fab),
    ...extractIconsMetadata(far),
    ...extractIconsMetadata(fas),
  ]

  iconsMetadata.forEach(i => {
    const filePath = `./dist/${i.wcIconName}.js`
    fs.promises.writeFile(filePath, mustache.render(tmpl, i))

    console.log(`Generating ${filePath}`)
  })
}

function extractIconsMetadata(faIcons) {
  return Object.entries(faIcons).map(e => ({
    faIconDefName: e[0],
    faIconPrefix: e[1].prefix,
    faIconName: e[1].iconName,
    faIconStyle: prefixStyleMap[e[1].prefix],
    // remove redundant '-icon' suffix, e.g. accessible-icon-icon
    wcIconName: `${e[1].prefix}-${e[1].iconName.replace('-icon', '')}-icon`,
  }));
}

generate().catch(console.error);

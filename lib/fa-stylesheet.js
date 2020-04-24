import { config, dom } from '../../node_modules/@fortawesome/fontawesome-svg-core/index.es.js'

config.autoAddCss = false

export const faStyleSheet = new CSSStyleSheet()
faStyleSheet.replaceSync(dom.css())

import { library, icon } from '../../../node_modules/@fortawesome/fontawesome-svg-core/index.es.js'
import { faStyleSheet } from './fa-stylesheet.js'
import { wcIconStyleSheet } from './wc-icon-stylesheet.js'

export function createIconClass(prefix, iconName, iconDef) {
  // add icon definition to library
  library.add(iconDef)

  // create icon instance
  const iconInst = icon({ prefix, iconName })

  /**
   * Font Awesome icon as a custom element
   */
  return class extends HTMLElement {
    static get observedAttributes() { return ['class'] }

    constructor() {
      super()

      this.attachShadow({ mode: 'open' })
      this.shadowRoot.adoptedStyleSheets = [faStyleSheet, wcIconStyleSheet]
      this.shadowRoot.innerHTML = iconInst.html[0]

      this._svg = this.shadowRoot.firstElementChild
      this._origClassAttr = this._svg.getAttribute('class')
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'class') this._svg.setAttribute('class', `${this._origClassAttr} ${newValue}`)
    }
  }
}

export const wcIconStyleSheet = new CSSStyleSheet()

wcIconStyleSheet.replaceSync(`
  :host {
    display: inline-block;
  }
  :host([hidden]) {
    display: none;
  }
  path {
    fill: inherit;
  }
`)

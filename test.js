import {jevkoToCss, mergeStyles} from './mod.js'
import {parseJevko} from 'https://cdn.jsdelivr.net/gh/jevko/parsejevko.js@v0.1.3/mod.js'

const case1 = jevkoToCss(mergeStyles(parseJevko(`
color [blue]
font-size [10pt]
`), parseJevko(`
color [red]
background-color [black]
`)))

console.assert(case1.includes('color: red;'))
console.assert(!case1.includes('color: blue;'))
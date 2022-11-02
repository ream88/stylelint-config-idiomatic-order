function trbl (prefix) {
  const rules = []

  if (prefix) {
    rules.push(prefix)
    prefix = prefix + '-'
  } else {
    prefix = ''
  }

  return rules.concat([
    prefix + 'top',
    prefix + 'right',
    prefix + 'bottom',
    prefix + 'left'
  ])
}

function logical (prefix) {
  const rules = [prefix]
  prefix += '-'

  return rules.concat([
    prefix + 'block',
    prefix + 'block-start',
    prefix + 'block-end',
    prefix + 'inline',
    prefix + 'inline-start',
    prefix + 'inline-end',
  ])
}

function minMax (suffix) {
  return [suffix, 'min-' + suffix, 'max-' + suffix]
}

function border (infix) {
  if (infix) {
    infix = '-' + infix
  } else {
    infix = ''
  }

  return [
    'border' + infix,
    'border' + infix + '-width',
    'border' + infix + '-style',
    'border' + infix + '-color',
    'border' + infix + '-radius'
  ]
}

const cssModules = []
  .concat([
    'composes'
  ])

const reset = ['all']

const positioning = []
  .concat([
    'position',
    'z-index'
  ])
  .concat(trbl())
  .concat(logical("inset"))

const displayAndBoxModel = []
  .concat([
    'display',
    'overflow'
  ])
  .concat(minMax('width'))
  .concat(minMax('height'))
  .concat([
    'box-sizing',
    'flex',
    'flex-basis',
    'flex-direction',
    'flex-flow',
    'flex-grow',
    'flex-shrink',
    'flex-wrap',
    'align-content',
    'align-items',
    'align-self',
    'justify-content',
    'order'
  ])
  .concat(trbl('padding'))
  .concat(logical('padding'))
  .concat(border())
  .concat(border('top'))
  .concat(border('right'))
  .concat(border('bottom'))
  .concat(border('left'))
  .concat(border('block-start'))
  .concat(border('block-end'))
  .concat(border('inline-start'))
  .concat(border('inline-end'))
  .concat(trbl('margin'))
  .concat(logical('margin'))

module.exports = {
  plugins: 'stylelint-order',
  rules: {
    'order/properties-order': [
      []
        .concat(cssModules)
        .concat(reset)
        .concat(positioning)
        .concat(displayAndBoxModel),
      { unspecified: 'bottomAlphabetical' }
    ]
  }
}

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

function startEnd (prefix) {
  return [prefix + '-start', prefix + '-end']
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
  .concat(startEnd('inset-block'))
  .concat(startEnd('inset-inline'))

const displayAndBoxModel = []
  .concat([
    'display',
    'overflow'
  ])
  .concat(minMax('width'))
  .concat(minMax('inline-size'))
  .concat(minMax('height'))
  .concat(minMax('block-size'))
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
  .concat(startEnd('padding-block'))
  .concat(startEnd('padding-inline'))
  .concat([]
    .concat(border())
    .concat(border('top'))
    .concat(border('right'))
    .concat(border('bottom'))
    .concat(border('left'))
    .concat(border('block-start'))
    .concat(border('block-end'))
    .concat(border('inline-start'))
    .concat(border('inline-end'))
    .concat([
      'border-start-start-radius',
      'border-start-end-radius',
      'border-end-start-radius',
      'border-end-end-radius'
    ])
  )
  .concat(trbl('margin'))
  .concat(startEnd('margin-block'))
  .concat(startEnd('margin-inline'))

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

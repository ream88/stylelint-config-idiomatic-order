function trbl(prefix) {
  var rules = [];

  if (prefix) {
    rules.push(prefix);
    prefix = prefix + "-";
  } else {
    prefix = "";
  }

  return rules.concat([
    prefix + "top",
    prefix + "right",
    prefix + "bottom",
    prefix + "left"
  ]);
}

var positioning = []
  .concat([
    "position",
    "z-index"
  ])
  .concat(trbl());

var displayAndBoxModel = []
  .concat([
    "display",
    "overflow",
    "box-sizing",
    "width",
    "height"
  ])
  .concat([
    "align-content",
    "align-items",
    "align-self",
    "flex",
    "flex-basis",
    "flex-direction",
    "flex-flow",
    "flex-grow",
    "flex-shrink",
    "flex-wrap",
    "justify-content",
    "order"
  ])
  .concat(trbl("padding"))
  .concat(trbl("border"))
  .concat(trbl("margin"));

module.exports = {
  "extends": "stylelint-config-standard",
  "rules": {
    "declaration-block-properties-order": [
      { "emptyLineBefore": "always", "properties": positioning },
      { "emptyLineBefore": "always", "properties": displayAndBoxModel }
    ]
  }
};

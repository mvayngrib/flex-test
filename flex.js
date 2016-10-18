
const FLEX_AUTO = '1 1 auto'
const FLEX_INITIAL = '0 1 auto'

module.exports = function getFlexExpansion (style, isIE) {
  // https://roland.codes/blog/ie-flex-collapse-bug/
  const defaultBasis = isIE ? 'auto' : '0%'
  const flex = style.flex
  if (flex == null) {
    if (style.flexGrow == null && style.flexShrink == null && style.flexBasis == null) {
      return FLEX_INITIAL
    }

    // ^ line 1
    const grow = style.flexGrow || '0'
    const shrink = style.flexShrink || '1'
    const basis = style.flexBasis || defaultBasis
    return `${grow} ${shrink} ${basis}`
  }

  // ^ line 2
  // if flex is a number of a stringified number
  if (!isNaN(flex)) {
    return `${flex} 1 ${defaultBasis}`
  }

  // ^ lines 3, 4
  if (flex === 'auto') {
    return FLEX_AUTO
  } else if (flex === 'initial') {
    return FLEX_INITIAL
  }

  // flex was set explicitly
  return flex
}

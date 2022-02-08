export const jevkoToCss = (jevko) => {
  const {subjevkos, suffix} = jevko

  let ret = ''
  for (const {prefix, jevko} of subjevkos) {
    ret += prefix.trim() + ': ' + jevkoToValue(jevko) + ';\n'
  }
  return ret + suffix
}

export const mergeStyles = (a, b) => {
  const keyed = Object.create(null)
  mutKeyed(a, keyed)
  mutKeyed(b, keyed)
  const subjevkos = Object.entries(keyed).map(([k, v]) => ({prefix: k, jevko: v}))
  return {subjevkos, suffix: ''}
}

const mutKeyed = (jevko, keyed) => {
  const {subjevkos, suffix} = jevko
  for (const {prefix, jevko} of subjevkos) {
    keyed[prefix.trim()] = jevko
  }
}

const jevkoToValue = (jevko) => {
  const {subjevkos, suffix} = jevko

  if (subjevkos.length > 0) throw Error('oops')

  return suffix.trim()
}
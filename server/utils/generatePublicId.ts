export const generatePublicId = (length: number = 12): string => {
  let id = ''
  while (id.length < length) {
    id += Math.random().toString(36).substring(2)
  }
  return id.substring(0, length)
}

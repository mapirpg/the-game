export const uidGen = () => {
  const timestamp = Date.now().toString(36)
  const randomString = Math.random().toString(36).substring(2, 15)
  return `${timestamp}-${randomString}`
}

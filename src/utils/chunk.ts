export function chunk<T>(list: T[], size: number) {
  const result: T[][] = []
  const chunkSize = Math.max(1, size)
  for (let i = 0; i < list.length; i += chunkSize) {
    result.push(list.slice(i, i + chunkSize))
  }
  return result
}

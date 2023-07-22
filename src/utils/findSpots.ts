export const findSpots = (
  value: number,
  arrays: number[][]
): { y: number; x: number }[] => {
  const indexes: { y: number; x: number }[] = []

  for (let i = 0; i < arrays.length; i++) {
    const secondaryArray = arrays[i]

    for (let j = 0; j < secondaryArray.length; j++) {
      const secondaryValue = secondaryArray[j]

      if (secondaryValue === value) {
        indexes.push({ y: i, x: j })
      }
    }
  }

  return indexes
}

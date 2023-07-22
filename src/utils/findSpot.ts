export const findSpot = (
  spot: number,
  mainArray: number[][]
): { y: number; x: number } | null => {
  for (let mainIndex = 0; mainIndex < mainArray.length; mainIndex++) {
    const subIndex = mainArray[mainIndex].indexOf(spot)
    if (subIndex !== -1) {
      return { y: mainIndex, x: subIndex }
    }
  }
  return null
}

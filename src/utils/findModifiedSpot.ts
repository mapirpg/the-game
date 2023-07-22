export const findModifiedSpot = (
  number: number,
  mainArray: number[][]
): { mainIndex: number; subIndex: number } | null => {
  for (let mainIndex = 0; mainIndex < mainArray.length; mainIndex++) {
    const subIndex = mainArray[mainIndex].indexOf(number)
    if (subIndex !== -1) {
      return { mainIndex, subIndex }
    }
  }
  return null
}

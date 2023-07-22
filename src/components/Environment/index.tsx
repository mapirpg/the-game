import { Box, HStack, View } from 'native-base'
import { TargetProps } from '../../types/target'

interface Props {
  targets: TargetProps[]
  mapSpots: number[][]
  elements: Record<number, React.ReactNode>
}

export const Environment = ({ elements, mapSpots }: Props) => {
  return (
    <Box zIndex={-1}>
      {mapSpots.map((row, y) => (
        <HStack key={y}>
          {mapSpots[y].map((column, x) => (
            <View key={x}>{elements[column]}</View>
          ))}
        </HStack>
      ))}
    </Box>
  )
}

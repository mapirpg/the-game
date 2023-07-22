import { Box, HStack, IBoxProps, View } from 'native-base'

interface Props extends IBoxProps {
  mapSpots: number[][]
  elements: Record<number, React.ReactNode>
}

export const Environment = ({ elements, mapSpots, ...props }: Props) => {
  return (
    <Box {...props}>
      {mapSpots?.map((row, y) => (
        <HStack key={y}>
          {mapSpots[y].map((column, x) => (
            <View key={x}>{elements[column]}</View>
          ))}
        </HStack>
      ))}
    </Box>
  )
}

import { Box, HStack, View } from 'native-base'
import { TargetProps } from '../../types/target'

interface Props {
  targets: TargetProps[]
  headquarters: number[][]
  elements: ({
    targets,
  }: {
    targets: TargetProps[]
  }) => Record<number, React.ReactNode>
}

export const Environment = ({ targets, elements, headquarters }: Props) => {
  return (
    <Box zIndex={-1}>
      {headquarters.map((row, y) => (
        <HStack key={y}>
          {headquarters[y].map((column, x) => (
            <View key={x}>{elements({ targets })[column]}</View>
          ))}
        </HStack>
      ))}
    </Box>
  )
}

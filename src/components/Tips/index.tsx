import { Center, ICenterProps, Pressable, Text } from 'native-base'

interface Props extends ICenterProps {
  text: string
  onClose?: () => void
}

export const Tips = ({ text, onClose, ...props }: Props) => {
  return (
    <Center
      zIndex={10}
      width={'100px'}
      padding={'2px'}
      borderWidth={1}
      borderRadius={'10px'}
      borderColor={'black'}
      position={'absolute'}
      backgroundColor={'#00000050'}
      right={'20px'}
      bottom={'20px'}
      {...props}
    >
      <Pressable
        position={'absolute'}
        top={'-10px'}
        right={'-5px'}
        onPress={onClose}
      >
        {({ isPressed }) => (
          <Center
            width={'20px'}
            height={'20px'}
            borderRadius={'full'}
            backgroundColor={'white'}
            opacity={isPressed ? 0.5 : 1}
          >
            <Text>X</Text>
          </Center>
        )}
      </Pressable>

      <Text textAlign={'center'} width={'95px'} color={'white'} fontSize={'10'}>
        {text}
      </Text>
    </Center>
  )
}

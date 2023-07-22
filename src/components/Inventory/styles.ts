import { ICenterProps } from 'native-base'
import { StackProps } from '../../types/appRouter'

export default {
  badgeContainerStyles: {
    position: 'absolute',
    right: 0,
    top: '-10px',
    width: '16px',
    height: '16px',
    backgroundColor: 'white',
    borderRadius: 'full',
  } as ICenterProps,
  containerProps: {
    minWidth: '32px',
    height: '32px',
    backgroundColor: '#00000050',
    zIndex: 10,
    position: 'absolute',
    marginTop: '-32px',
    justifyContent: 'space-around',
    alignItems: 'center',
    right: '16px',
  } as unknown as StackProps,
}

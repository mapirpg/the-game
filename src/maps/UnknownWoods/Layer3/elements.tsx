import { headquarters } from './constants'

import { Empty } from '../../../sprites/Map/Empty'
import * as Fire from '../../../sprites/Map/Fire'

export const useLayer3Elements = () => {
  const mapSpots3 = headquarters

  const elements3 = {
    0: <Empty style={{ backgroundColor: '#ff000050' }} />,
    1: <Fire.Fire style={{ backgroundColor: '#ff000050' }} />,
  }

  return { elements3, mapSpots3 }
}

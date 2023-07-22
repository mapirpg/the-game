/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import { headquarters2 } from './constants'

import { Empty } from '../../../sprites/Map/Empty'
import { TargetProps } from '../../../types/target'
import { PineA1, PineB1, PineC1 } from '../../../sprites/Map/Trees'
import {
  CaveDoorA1,
  CaveDoorA2,
  CaveDoorA3,
  CaveDoorB1,
  CaveDoorB2,
  CaveDoorB3,
  CaveDoorC1,
  CaveDoorC2,
  CaveDoorC3,
} from '../../../sprites/Map/Door'
import { ravineBg } from '../styles'

export const useGroundElements2 = ({ targets }: { targets: TargetProps[] }) => {
  const [mapSpots2, setMapSpots2] = useState<number[][]>(headquarters2)

  const elements2: Record<number, React.ReactNode> = {
    0: <Empty />,
    1: <PineA1 />,
    2: <PineB1 />,
    3: <PineC1 />,
    4: <CaveDoorA1 />,
    5: <CaveDoorB1 />,
    6: <CaveDoorC1 />,
    7: <CaveDoorA2 />,
    8: <CaveDoorB2 />,
    9: <CaveDoorC2 />,
    10: <CaveDoorA3 />,
    11: <CaveDoorB3 />,
    12: <CaveDoorC3 />,
  }

  return { elements2, mapSpots2 }
}

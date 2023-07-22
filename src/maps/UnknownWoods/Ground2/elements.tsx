/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import { headquarters2 } from './constants'

import { Empty } from '../../../sprites/Map/Empty'
import { TargetProps } from '../../../types/target'
import { PineA1, PineB1, PineC1 } from '../../../sprites/Map/Trees'

export const useGroundElements2 = ({ targets }: { targets: TargetProps[] }) => {
  const [mapSpots2, setMapSpots2] = useState<number[][]>(headquarters2)

  const elements2: Record<number, React.ReactNode> = {
    0: <Empty />,
    45: <PineA1 />,
    46: <PineB1 />,
    47: <PineC1 />,
  }

  return { elements2, mapSpots2 }
}

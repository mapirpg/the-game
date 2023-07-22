/* eslint-disable prettier/prettier */
import * as Water from '../../../sprites/Map/Water'
import * as Stone from '../../../sprites/Map/Stone'
import * as Forest from '../../../sprites/Map/Forest'
import * as Ravine from '../../../sprites/Map/Ravine'
import * as Terrain from '../../../sprites/Map/Terrain'
import * as General from '../../../sprites/Objects/General'

import { useMemo, useState } from 'react'
import { defaultBg, waterBg } from '../styles'
import { TargetProps } from '../../../types/target'
import { allowTargets, headquarters } from './constants'
import { findModifiedSpot } from '../../../utils/findModifiedSpot'
import { PineA1, PineB1, PineC1 } from '../../../sprites/Map/Trees'

export const useGroundElements = ({ targets }: { targets: TargetProps[] }) => {
  const [mapSpots, setMapSpots] = useState<number[][]>(headquarters)

  const { chestOpen, eventSpots } = useMemo(() => {
    let eventSpots: Record<number, number> = {}

    allowTargets.forEach((target) => {
      const targetHealth = targets.find((t) => t.id === target)?.health

      if (targetHealth === 0) {
        const modifiedSpot = findModifiedSpot(target, mapSpots)

        if (modifiedSpot) {
          const newMapSpots = [...mapSpots]
          const { mainIndex, subIndex } = modifiedSpot
          newMapSpots[mainIndex][subIndex] = 0
          setMapSpots(newMapSpots)
        }
      }

      eventSpots = {
        ...eventSpots,
        [target]: targetHealth || 0,
      }
    })

    return {
      eventSpots,
      chestOpen: targets.find((target) => target.id === 36)?.active,
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targets])

  const elements: Record<number, React.ReactNode> = {
    0: <Terrain.Grass />,
    1: <Forest.WoodVLeft {...defaultBg} />,
    2: <Forest.WoodVMiddle {...defaultBg} />,
    3: <Forest.WoodVRight {...defaultBg} />,
    4: <Water.WaterfallTop />,
    5: <Water.WaterfallMiddle />,
    6: <Water.WaterfallBottom />,
    7: <Water.WaterSplashLeft />,
    8: <Water.WaterSplashMiddle />,
    9: <Water.WaterSplashRight />,
    10: <Water.Water />,
    11: <Water.WaterBorderLeft1 />,
    12: <Water.WaterBorderLeft2 />,
    13: <Water.WaterBorderRight1 />,
    14: <Water.WaterBorderRight2 />,
    15: <Ravine.WaterRavineBottomLeft />,
    16: <Ravine.WaterRavineBottomRight />,
    17: <Ravine.WaterRavineMiddleLeft />,
    18: <Ravine.WaterRavineTopLeft />,
    19: <Ravine.RavineBottomMiddle {...defaultBg} />,
    20: <Ravine.RavineBottomLeft {...defaultBg} />,
    21: <Ravine.RavineMiddleLeft {...defaultBg} />,
    22: <Ravine.RavineTopLeft />,
    23: <Ravine.RavineTopMiddle />,
    24: <Ravine.RavineMiddle />,
    25: <Stone.StoneInWater1 {...waterBg} />,
    26: <Ravine.RavineBottomRight />,
    27: <Ravine.RavineMiddleRight />,
    28: <Ravine.RavineTopRightBottomBorder />,
    29: <Ravine.RavineTopRightBorder />,
    30: <Ravine.WaterRavineMiddleRight />,
    31: <Ravine.WaterRavineTopRight />,
    32: <Forest.WoodVLeft {...defaultBg} />,
    33: <Forest.WoodVMiddle {...waterBg} />,
    34: <Forest.WoodVRight {...defaultBg} />,
    35: <Forest.WoodVMiddle {...defaultBg} />,
    36: chestOpen ? <General.ChestOpen {...defaultBg} />  : <General.ChestClosed {...defaultBg} />,
    37: eventSpots[37] > 0 ? <General.FlowerVase1 {...defaultBg} /> :  <Terrain.Grass />,
    38: eventSpots[38] > 0 ? <General.FlowerVase1 {...defaultBg} /> : <Terrain.Grass />,
    39: eventSpots[39] > 0 ? <General.FlowerVase1 {...defaultBg} /> : <Terrain.Grass />,
    40: eventSpots[40] > 0 ? <General.FlowerVase1 {...defaultBg} /> : <Terrain.Grass />,
    41: eventSpots[41] > 0 ? <General.FlowerVase1 {...defaultBg} /> : <Terrain.Grass />,
    42: eventSpots[42] > 0 ? <General.FlowerVase1 {...defaultBg} /> : <Terrain.Grass />,
    43: eventSpots[43] > 0 ? <General.FlowerVase1 {...defaultBg} /> : <Terrain.Grass />,
    45: <PineA1 {...defaultBg} />,
    46: <PineB1 {...defaultBg} />,
    47: <PineC1  {...defaultBg} />,
    48: <Terrain.Grass />,
    49: <Water.WaterBorderLeft2 />,
    50: <Water.WaterBorderRight2 />
  }

  return { elements, mapSpots }
}

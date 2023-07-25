/* eslint-disable prettier/prettier */
import * as Door from '../../../sprites/Map/Door'
import * as Fire from '../../../sprites/Map/Fire'
import * as Water from '../../../sprites/Map/Water'
import * as Stone from '../../../sprites/Map/Stone'
import * as Forest from '../../../sprites/Map/Forest'
import * as Ravine from '../../../sprites/Map/Ravine'
import * as Terrain from '../../../sprites/Map/Terrain'
import * as General from '../../../sprites/Objects/General'
import * as Build from '../../../sprites/Builds/Edification'

import { useMemo, useState } from 'react'
import { defaultBg, waterBg } from '../styles'
import { findSpot } from '../../../utils/findSpot'
import { TargetProps } from '../../../types/target'
import { allowTargets, headquarters } from './constants'
import { PineA1, PineB1, PineC1 } from '../../../sprites/Map/Trees'
import { findSpots } from '../../../utils/findSpots'

export const useGroundElements = ({ targets }: { targets: TargetProps[] }) => {
  const [mapSpots, setMapSpots] = useState<number[][]>(headquarters)


  const hideChest = () => {
    const frontHouses = findSpots(75, mapSpots)
    const BackHouses = findSpots(101, mapSpots)
    const innerSpots = [...frontHouses, ...BackHouses]
    const randomIndex = Math.floor(Math.random() * innerSpots.length)
    innerSpots[randomIndex]
    const newMapSpots = [...mapSpots]
    const { y, x } = innerSpots[randomIndex]
    newMapSpots[y][x -1] = 36
    setMapSpots(newMapSpots)
  }

  const { chestOpen, eventSpots } = useMemo(() => {
    let eventSpots: Record<number, number> = {}

    allowTargets.forEach((target) => {
      const targetHealth = targets.find((t) => t.id === target)?.health

      if (targetHealth === 0) {
        const modifiedSpot = findSpot(target, mapSpots)

        if (modifiedSpot) {
          const newMapSpots = [...mapSpots]
          const { y, x } = modifiedSpot
          newMapSpots[y][x] = 0
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
    50: <Water.WaterBorderRight2 />,
    51: <Door.CaveDoorB2 />,
    52: <Fire.Fire {...defaultBg} />,
    53: <Build.GreatWoodHouseA1 {...defaultBg} />,
    54: <Build.GreatWoodHouseA2 {...defaultBg} />,
    55: <Build.GreatWoodHouseA3 {...defaultBg} />,
    56: <Build.GreatWoodHouseA4 {...defaultBg} />,
    57: <Build.GreatWoodHouseA5 {...defaultBg} />,
    58: <Build.GreatWoodHouseB1 {...defaultBg} />,
    59: <Build.GreatWoodHouseB2 {...defaultBg} />,
    60: <Build.GreatWoodHouseB3 {...defaultBg} />,
    61: <Build.GreatWoodHouseB4 {...defaultBg} />,
    62: <Build.GreatWoodHouseB5 {...defaultBg} />,
    63: <Build.GreatWoodHouseC1 {...defaultBg} />,
    64: <Build.GreatWoodHouseC2 {...defaultBg} />,
    65: <Build.GreatWoodHouseC3 {...defaultBg} />,
    66: <Build.GreatWoodHouseC4 {...defaultBg} />,
    67: <Build.GreatWoodHouseC5 {...defaultBg} />,
    68: <Build.GreatWoodHouseD1 {...defaultBg} />,
    69: <Build.GreatWoodHouseD2 {...defaultBg} />,
    70: <Build.GreatWoodHouseD3 {...defaultBg} />,
    71: <Build.GreatWoodHouseD4 {...defaultBg} />,
    72: <Build.GreatWoodHouseD5 {...defaultBg} />,
    73: <Build.GreatWoodHouseE1 {...defaultBg} />,
    74: <Build.GreatWoodHouseE2 {...defaultBg} />,
    75: <Build.GreatWoodHouseE3 {...defaultBg} />,
    76: <Build.GreatWoodHouseE4 {...defaultBg} />,
    77: <Build.GreatWoodHouseE5 {...defaultBg} />,
    78: <Build.GreatWoodHouseBackA1 {...defaultBg} />,
    79: <Build.GreatWoodHouseBackA2 {...defaultBg} />,
    80: <Build.GreatWoodHouseBackA3 {...defaultBg} />,
    81: <Build.GreatWoodHouseBackA4 {...defaultBg} />,
    82: <Build.GreatWoodHouseBackA5 {...defaultBg} />,
    83: <Build.GreatWoodHouseBackB1 {...defaultBg} />,
    84: <Build.GreatWoodHouseBackB2 {...defaultBg} />,
    85: <Build.GreatWoodHouseBackB3 {...defaultBg} />,
    86: <Build.GreatWoodHouseBackB4 {...defaultBg} />,
    87: <Build.GreatWoodHouseBackB5 {...defaultBg} />,
    88: <Build.GreatWoodHouseBackC1 {...defaultBg} />,
    89: <Build.GreatWoodHouseBackC2 {...defaultBg} />,
    90: <Build.GreatWoodHouseBackC3 {...defaultBg} />,
    91: <Build.GreatWoodHouseBackC4 {...defaultBg} />,
    92: <Build.GreatWoodHouseBackC5 {...defaultBg} />,
    93: <Build.GreatWoodHouseBackD1 {...defaultBg} />,
    94: <Build.GreatWoodHouseBackD2 {...defaultBg} />,
    95: <Build.GreatWoodHouseBackD3 {...defaultBg} />,
    96: <Build.GreatWoodHouseBackD4 {...defaultBg} />,
    97: <Build.GreatWoodHouseBackD5 {...defaultBg} />,
    98: <Build.GreatWoodHouseBackE1 {...defaultBg} />,
    99: <Build.GreatWoodHouseBackE2 {...defaultBg} />,
    100: <Build.GreatWoodHouseBackE3 {...defaultBg} />,
    101: <Build.GreatWoodHouseBackE4 {...defaultBg} />,
    102: <Build.GreatWoodHouseBackE5 {...defaultBg} />,
    103: eventSpots[103] > 0 ? <General.FlowerVase1 {...defaultBg} /> :  <Terrain.Grass />,
    104: eventSpots[104] > 0 ? <General.FlowerVase1 {...defaultBg} /> :  <Terrain.Grass />,
    105: eventSpots[105] > 0 ? <General.FlowerVase1 {...defaultBg} /> :  <Terrain.Grass />,
    106: eventSpots[106] > 0 ? <General.FlowerVase1 {...defaultBg} /> :  <Terrain.Grass />,
    107: eventSpots[107] > 0 ? <General.FlowerVase1 {...defaultBg} /> :  <Terrain.Grass />,
    108: eventSpots[108] > 0 ? <General.FlowerVase1 {...defaultBg} /> :  <Terrain.Grass />,
    109: eventSpots[109] > 0 ? <General.FlowerVase1 {...defaultBg} /> :  <Terrain.Grass />,
    110: eventSpots[110] > 0 ? <General.FlowerVase1 {...defaultBg} /> :  <Terrain.Grass />,
    111: eventSpots[111] > 0 ? <General.FlowerVase1 {...defaultBg} /> :  <Terrain.Grass />,
    112: eventSpots[112] > 0 ? <General.FlowerVase1 {...defaultBg} /> :  <Terrain.Grass />,
    113: eventSpots[113] > 0 ? <General.FlowerVase1 {...defaultBg} /> :  <Terrain.Grass />,
    114: eventSpots[114] > 0 ? <General.FlowerVase1 {...defaultBg} /> :  <Terrain.Grass />,
    115: eventSpots[115] > 0 ? <General.FlowerVase1 {...defaultBg} /> :  <Terrain.Grass />,
    116: <Forest.WoodVLeft {...defaultBg} />,
    117: <Forest.WoodVMiddle {...defaultBg} />,
    118: <Forest.WoodVRight {...defaultBg} />,
    119: <Forest.WoodVMiddle {...defaultBg} />,
    120: <Forest.WoodVMiddle {...defaultBg} />,
    121: <Forest.WoodVMiddle {...defaultBg} />,
    122: <Forest.WoodHMiddle {...defaultBg}  />,
    123: <Forest.WoodHLeft {...defaultBg} />,
    124: <Forest.WoodHRight {...defaultBg} />,
    125: <Forest.WoodVMiddle {...defaultBg} />,
  }

  return { elements, mapSpots, hideChest }
}

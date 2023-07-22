/* eslint-disable prettier/prettier */
import * as Water from '../../sprites/Map/Water'
import * as Stone from '../../sprites/Map/Stone'
import * as Forest from '../../sprites/Map/Forest'
import * as Ravine from '../../sprites/Map/Ravine'
import * as Terrain from '../../sprites/Map/Terrain'
import * as General from '../../sprites/Objects/General'

import { defaultBg, waterBg } from './styles'
import { TargetProps } from '../../types/target'

export const elements = ({
  targets
}: {
  targets: TargetProps[]
}) => {
  const chestOpen = targets.find((target) => target.id === 36)?.active
  const vase1Health = targets.find((target) => target.id === 37)?.health

  const components: Record<number, React.ReactNode> = {
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
    35: <Forest.WoodVMiddle {...defaultBg}/>,
    36: chestOpen ? <General.ChestOpen {...defaultBg}/> : <General.ChestClosed {...defaultBg} />,
    37: vase1Health && vase1Health > 0 ? <General.FlowerVase1 {...defaultBg} /> : <Terrain.Grass />,
  }
  return components
}

import { keyframes, styled } from 'styled-components'
import { base } from '../base'

export const Water = styled.div`
  ${base.world}
  background-position: -48px -114px;
`

const topWaterfallAnimation = keyframes`
  0% {
    background-position: -288px -98px;
  }
  33% {
    background-position: -304px -98px;
  }
  80% {
    background-position: -320px -98px;
  }
`

export const WaterfallTop = styled.div`
  ${base.world}
  animation: ${topWaterfallAnimation} 2s infinite;
  animation-timing-function: steps(1, end);
`

const middleWaterfallAnimation = keyframes`
  0% {
    background-position: -304px -114px;
  }
  33% {
    background-position: -320px -114px;
  }
  80% {
    background-position: -304px -114px;
  }
`

export const WaterfallMiddle = styled.div`
  ${base.world}
  animation: ${middleWaterfallAnimation} 1s infinite;
  animation-timing-function: steps(1, end);
`

const bottomWaterfallAnimation = keyframes`
  0% {
    background-position: -320px -128px;
  }
  33% {
    background-position: -304px -128px;
  }
  80% {
    background-position: -288px -128px;
  }
`

export const WaterfallBottom = styled.div`
  ${base.world}
  animation: ${bottomWaterfallAnimation} 1s infinite;
  animation-timing-function: steps(1, end);
`

const leftSplashWaterAnimation = keyframes`
  0% {
    background-position: -272px -144px;
  }
  33% {
    background-position: -272px -160px;
  }
  80% {
    background-position: -288px -176px;
  }
`

export const WaterSplashLeft = styled.div`
  ${base.world}
  animation: ${leftSplashWaterAnimation} 2s infinite;
  animation-timing-function: steps(1, end);
`

const middleSplashWaterAnimation = keyframes`
  0% {
    background-position: -288px -144px;
  }
  33% {
    background-position: -288px -160px;
  }
  80% {
    background-position: -304px -176px;
  }
`

export const WaterSplashMiddle = styled.div`
  ${base.world}
  animation: ${middleSplashWaterAnimation} 2s infinite;
  animation-timing-function: steps(1, end);
`

const rightSplashWaterAnimation = keyframes`
  0% {
    background-position: -304px -144px;
  }
  33% {
    background-position: -304px -160px;
  }
  80% {
    background-position: -320px -176px;
  }
`

export const WaterSplashRight = styled.div`
  ${base.world}
  animation: ${rightSplashWaterAnimation} 2s infinite;
  animation-timing-function: steps(1, end);
`

export const WaterBorderLeft1 = styled.div`
  ${base.world}
  background-position: -32px -112px;
`

export const WaterBorderLeft2 = styled.div`
  ${base.world}
  background-position: -64px -112px;
  rotate: 180deg;
`

export const WaterBorderRight1 = styled.div`
  ${base.world}
  background-position: -32px -112px;
  rotate: 180deg;
`

export const WaterBorderRight2 = styled.div`
  ${base.world}
  background-position: -64px -112px;
`

import { Directions } from './global'

export interface PlayerProps {
  top: number
  left: number
  direction?: Directions
}

export type MoveProps = {
  direction?: Directions
  mapSpots: number[][]
  allowSlots?: number[]
}

export type InteractProps = {
  event: number
  dir?: Directions
  doIt: () => void
  mapSpots: number[][]
  allowEvents?: number[]
}

export type AttackPropps = {
  doIt: () => void
  target: number
  mapSpots: number[][]
  allowTargets: number[]
}

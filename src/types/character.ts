import { IDirections } from './global'

export interface PlayerProps {
  top: number
  left: number
  direction?: IDirections
}

export type MoveProps = {
  direction?: IDirections
  mapSpots: number[][]
  allowSlots?: number[]
}

export type InteractProps = {
  event: number
  dir?: IDirections
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

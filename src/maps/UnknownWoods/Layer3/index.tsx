import React from 'react'
import { Environment } from '../../../components/Environment'
import { IBoxProps } from 'native-base'

interface Props extends IBoxProps {
  mapSpots: number[][]
  elements: Record<number, React.ReactNode>
}

export const Layer3 = ({ elements, mapSpots, ...props }: Props) => {
  return <Environment {...props} elements={elements} mapSpots={mapSpots} />
}

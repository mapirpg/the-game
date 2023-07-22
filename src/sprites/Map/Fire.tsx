import { keyframes, styled } from 'styled-components'
import { base } from '../base'

const fireAnimation = keyframes`
  0% { background-position: -64px -48px; }
  16.67% { background-position: -80px -48px; }
  33.33% { background-position: -96px -48px; }
  50% { background-position: -112px -48px; }
  66.67% { background-position: -128px -48px; }
  83.33% { background-position: -144px -48px; }
  100% { background-position: -160px -48px; }
`

export const Fire = styled.div`
  ${base.objects}
  animation: ${fireAnimation} 0.8s steps(6) infinite;
  animation-timing-function: steps(1, end);
`

import world from '../assets/world.png'
import objects from '../assets/objects.png'
import weapons from '../assets/weapons.png'

export const base = {
  world: `
    width: 16px;
    height: 16px;
    background-image: url(${world});
    background-size: 640px 576px;
    background-repeat: no-repeat;
  `,
  objects: `
    width: 16px;
    height: 16px;
    background-image: url(${objects});
    background-size: 528px 320px;
  `,
  weapons: `
    width: 32px;
    height: 32px;
    background-image: url(${weapons});
    background-size: 320px 320px;
  `,
}

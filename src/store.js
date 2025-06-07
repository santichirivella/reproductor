import { atom } from 'nanostores'

export const $cancionActual = atom(null)
export const $pausar = () => { $cancionActual.set(null); 
}
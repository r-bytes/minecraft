import create from "zustand"
import { nanoid } from "nanoid"

export const useStore = create((set) => ({
    texture: "dirt",
    cubes: [{
        key: nanoid(),
        pos: [2,.5,0],
        texture: "dirt",
    },
    {
        key: nanoid(),
        pos: [1,.5,0],
        texture: "wood",
    }],
    

    addCubes: (x, y, z) => {
        set((prev) => ({
            cubes: [
                ...prev.cubes,
                {
                    key: nanoid(),
                    pos: [x, y, z],
                    texture: prev.texture
                }
            ]
        }))
    },
    removeCubes: () => {},
    setTexture: () => {},
    saveWorld: () => {},
    resetWorld: () => {},
}))
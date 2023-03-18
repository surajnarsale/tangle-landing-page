import create from 'zustand'

type BearState = {
  bears: number

  increasePopulation: (by: number) => void
  decreasePopulation: (by: number) => void
  removeAllBears: () => void
}

export const useBearStore = create<BearState>((set) => ({
  bears: 0,
  increasePopulation: (by) => set((state) => ({ bears: state.bears + by })),
  decreasePopulation: (by) => set((state) => ({ bears: state.bears - by })),
  removeAllBears: () => set({ bears: 0 }),
}))

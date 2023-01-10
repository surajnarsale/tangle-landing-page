import { useBearStore } from '@/store/bear.store'

const ZustandPlayground = () => {
  const [bears, increasePopulation, decreasePopulation] = useBearStore((state) => [
    state.bears,
    state.increasePopulation,
    state.decreasePopulation,
  ])

  return (
    <>
      <h1>{bears} around here ...</h1>
      <button onClick={() => increasePopulation(5)}>Increase</button>
      <button onClick={() => decreasePopulation(1)}>Decrease</button>
    </>
  )
}

export default ZustandPlayground

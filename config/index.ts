import { devConfig } from './dev'
import { prodConfig } from './prod'

// TODO: change config once backend is deployed
export interface Config {
  env: string
  graphqlBaseUrl: string
}

type Base = 'production' | 'dev' | 'staging'

// change this to switch env
const base: Base = 'dev'

export const getConfig = () => {
  if (base.toString() === 'production') return prodConfig
  return devConfig
}

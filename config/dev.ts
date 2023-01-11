import type { Config } from '@/config/index'

export const devConfig: Config = {
  env: 'dev',
  graphqlBaseUrl: process.env.WORDPRESS_API_URL!,
}

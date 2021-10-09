import { ComponentType } from 'react'

import { NextPage } from 'next'

export type Page<P = unknown> = NextPage<P> & {
  layout?: ComponentType
}

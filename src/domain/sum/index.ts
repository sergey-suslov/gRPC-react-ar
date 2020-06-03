import { sum } from './sum'

export interface SumResponse {
  result: number
}

export type SumRequestType = (a: number, b: number) => Promise<SumResponse | Error | undefined>

export const sumRequest = sum

import { promisify } from '../common/promisify'
import { GatewayServiceClient } from '../../proto/SumServiceClientPb'
import { AddRequest } from '../../proto/sum_pb'
import { SumRequestType } from '.'
import { constructError } from '../common/construct-error'

const gatewayServiceClient = new GatewayServiceClient('http://localhost:8080')

export const sum: SumRequestType = async (a, b) => {
  try {
    const request = new AddRequest()
    request.setA(a)
    request.setB(b)
    const sumNumbers = promisify(gatewayServiceClient.add, gatewayServiceClient)
    const result = await sumNumbers(request, null)
    return { result: result.getResult() }
  } catch (e) {
    console.log(e)
    return constructError(e)
  }
}

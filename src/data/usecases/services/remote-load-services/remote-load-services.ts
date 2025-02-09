import { LoadServices, LoadServicesResult } from '@/domain/usecases'
import { HttpClient } from '@/data/protocols'
import { _mockServices } from '@/domain/tests'

export class RemoteLoadServices implements LoadServices {
  constructor(private readonly url: string, private readonly httpClient: HttpClient<LoadServicesResult>) {}

  async load(): Promise<LoadServicesResult> {
    return new Promise<LoadServicesResult>((resolve) => {
      setTimeout(() => resolve(_mockServices), 1500)
    })
    // const { statusCode, body } = await this.httpClient.request({
    //   url: `${this.url}/services`,
    //   method: 'get',
    // })

    // switch (statusCode) {
    //   case HttpStatusCode.ok:
    //     if (!body) {
    //       throw new UnexpectedError()
    //     }
    //     return body
    //   default:
    //     throw new UnexpectedError()
    // }
  }
}

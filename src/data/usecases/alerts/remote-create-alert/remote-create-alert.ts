import { CreateAlert, CreateAlertParams, CreateAlertResult } from '@/domain/usecases'
import { HttpClient } from '@/data/protocols'
import { _mockAlerts } from '@/domain/tests'

export class RemoteCreateAlert implements CreateAlert {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<CreateAlertResult>,
  ) {}

  async create(params: CreateAlertParams): Promise<CreateAlertResult> {
    return _mockAlerts[0]
    // const { statusCode, body } = await this.httpClient.request({
    //   url: `${this.url}/alerts`,
    //   method: 'post',
    //   body: params
    // })

    // switch (statusCode) {
    //   case HttpStatusCode.created:
    //     if (!body) {
    //       throw new UnexpectedError()
    //     }
    //     return body
    //   default:
    //     throw new UnexpectedError()
    // }
  }
}

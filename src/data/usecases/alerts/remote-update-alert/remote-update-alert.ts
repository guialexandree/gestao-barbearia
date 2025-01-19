import { UnexpectedError } from '@/domain/errors'
import { UpdateAlert, UpdateAlertParams, UpdateAlertResult } from '@/domain/usecases'
import { HttpClient, HttpStatusCode } from '@/data/protocols'

export class RemoteUpdateAlert implements UpdateAlert {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<UpdateAlertResult>,
  ) {}

  async update(params: UpdateAlertParams): Promise<UpdateAlertResult> {
    const { id, ...bodyParams } = params
    const { statusCode, body } = await this.httpClient.request({
      url: `${this.url}/alerts/${id}`,
      method: 'patch',
      body: bodyParams
    })

    switch (statusCode) {
      case HttpStatusCode.ok:
        if (!body) {
          throw new UnexpectedError()
        }
        return body
      default:
        throw new UnexpectedError()
    }
  }
}

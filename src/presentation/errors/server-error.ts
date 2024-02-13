export class ServerError extends Error {
  constructor () {
    super('Interna server error')
    this.name = 'ServerError'
  }
}

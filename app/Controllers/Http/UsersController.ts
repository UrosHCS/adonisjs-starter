import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async home(ctx: HttpContextContract) {
    return {
      query: ctx.request.qs(),
    }
  }

  public async me(ctx: HttpContextContract) {
    return ctx.auth.user
  }
}

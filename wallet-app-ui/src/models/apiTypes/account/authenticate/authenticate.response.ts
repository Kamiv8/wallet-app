export class AuthenticateResponse {
  constructor(public token: string, public refreshToken: string) {}
}

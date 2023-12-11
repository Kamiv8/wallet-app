
export class AuthenticateDto {
  constructor(public token: string, public refreshToken: string) {}
}
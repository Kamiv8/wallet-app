
export class RegisterCommand {
  constructor(
    public username: string,
    public email: string,
    public password: string,
    public confirmPassword: string,
    public iconType: number
  ) {}
}
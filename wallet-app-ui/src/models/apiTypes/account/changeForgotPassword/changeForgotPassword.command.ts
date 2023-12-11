export class ChangeForgotPasswordCommand {
  constructor(public Email: string, public Token: string, public Password: string, public ConfirmPassword: string) {
  }
}
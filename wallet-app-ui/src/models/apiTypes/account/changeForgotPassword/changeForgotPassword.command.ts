export class ChangeForgotPasswordCommand {
  constructor(
    public Password: string,
    public ConfirmPassword: string,
    public Email?: string,
    public Token?: string,
  ) {}
}

export class ChangePasswordCommand {
  constructor(public oldPassword: string, public newPassword: string) {}
}

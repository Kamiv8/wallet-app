export class AddUserNoteCommand {
  constructor(
    public title: string,
    public text: string,
    public textColor: string,
    public backgroundColor: string,
  ) {}
}

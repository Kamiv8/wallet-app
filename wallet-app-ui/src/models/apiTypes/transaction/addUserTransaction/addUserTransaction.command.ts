export class AddUserTransactionCommand {
  constructor(
    public title: string,
    public price: number,
    public currencyId: string,
    public categoryId: string,
    public date: Date,
    public isDefault: boolean,
    public isTemplate?: boolean,
    public description?: string,
    public textColor?: string,
    public backgroundColor?: string,
  ) {}
}

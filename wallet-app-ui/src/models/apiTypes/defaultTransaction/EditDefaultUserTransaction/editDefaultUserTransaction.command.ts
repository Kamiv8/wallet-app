export class EditDefaultUserTransactionCommand {
  constructor(
    public id: string,
    public title: string,
    public price: number,
    public currencyId: string,
    public categoryId: string,
    public textColor: string,
    public backgroundColor: string,
    public description?: string,
  ) {}
}

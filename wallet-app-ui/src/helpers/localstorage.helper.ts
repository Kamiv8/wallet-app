import { LocalstorageEnum } from '../types/enums/localstorage.enum';

export class LocalstorageHelper {
  public static getItem(key: LocalstorageEnum): string {
    if (!this.isItemExist(key)) return '';
    return localStorage.getItem(LocalstorageEnum[key])!;
  }

  public static getItems(keys: Array<LocalstorageEnum>): Array<string> {
    const res = [] as Array<string>;
    keys.forEach((key) => {
      res.push(this.getItem(key));
    });
    return res;
  }

  public static getItemNumber(key: LocalstorageEnum): number {
    if (!this.isItemExist(key)) return 0;
    return +localStorage.getItem(LocalstorageEnum[key])!;
  }

  public static setItem(key: LocalstorageEnum, value: string): void {
    localStorage.setItem(LocalstorageEnum[key], value);
  }

  public static removeItem(key: LocalstorageEnum): void {
    localStorage.removeItem(LocalstorageEnum[key]);
  }

  private static isItemExist(key: LocalstorageEnum): boolean {
    return !!localStorage.getItem(LocalstorageEnum[key]);
  }
}

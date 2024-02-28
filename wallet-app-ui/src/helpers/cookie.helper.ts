import Cookies from 'js-cookie';
import { CustomString } from '../overrides/string.override';

export class CookieHelper {
  public static setCookie(name: string, value: string, expires = 5): void {
    Cookies.set(name, value, { expires });
  }

  public static getCookie(name: string) {
    return Cookies.get(name) ?? CustomString.Empty;
  }
}

export class DateHelper {
  public static GetMonthAndDay(date: Date): string {
    const dateString: string = date.toDateString();
    const [, month, day] = dateString.split(' ');
    return `${month} ${day}`;
  }
}

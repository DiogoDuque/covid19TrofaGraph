import Entry from "./Entry";

function strToDate(dateStr: string): Date {
  const parts = dateStr.split('-');
  return new Date(Number(parts[2]), Number(parts[1])-1, Number(parts[0]));
}

export function dateToStr(date: Date): string {
  return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
}

export default class DateEntry extends Entry<string> {
  _date: Date;

  constructor(date: string, count: string|number) {
    super(date, typeof count === 'number' ? count : parseInt(count));
    if(isNaN(this._y))
      this._y = 0;

    this._date = strToDate(date);
  }

  get dateStr(): string {
    return this._x;
  }

  get date(): Date {
    return this._date;
  }

  get count(): number {
    return this._y;
  }

  buildNewWith(x: string, y: number): DateEntry {
    return new DateEntry(x, y);
  }
}
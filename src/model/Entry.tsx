function strToDate(dateStr: string): Date {
  const parts = dateStr.split('-');
  return new Date(Number(parts[2]), Number(parts[1]), Number(parts[0]));
}

export function dateToStr(date: Date): string {
  return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
}

export default class Entry {
  _dateStr: string;
  _date: Date;
  _count: number;

  constructor(date: string, count: string|number) {
    this._dateStr = date;
    this._date = strToDate(date);

    this._count = typeof count === 'number' ? count : parseInt(count);

    if(isNaN(this._count))
      this._count = 0;
  }

  get dateStr(): string {
    return this._dateStr;
  }

  get date(): Date {
    return this._date;
  }

  get count(): number {
    return this._count;
  }
}
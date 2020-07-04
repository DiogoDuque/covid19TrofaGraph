export default class Entry {
  _dateStr: string;
  // _date: Date;
  _count: number;

  constructor(date: string, count: string|number) {
    this._dateStr = date;
    // this._date = strToDate(date);

    this._count = typeof count === 'number' ? count : parseInt(count);

    if(isNaN(this._count))
      this._count = 0;
  }

  get dateStr(): string {
    return this._dateStr;
  }


  get count(): number {
    return this._count;
  }
}
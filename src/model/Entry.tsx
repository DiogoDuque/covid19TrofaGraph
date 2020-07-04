
function strToDate(str: string) {
  const dateParts = str.split('-');
  return new Date(
    parseInt(dateParts[2]),   // year
    parseInt(dateParts[1])-1, // month, zero-indexed
    parseInt(dateParts[0]),   // day
    );
}

export default class Entry {
  _dateStr: string;
  _date: Date;
  _count: number;

  constructor(date: string, count: string) {
    this._dateStr = date;
    this._date = strToDate(date);
    this._count = parseInt(count);

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
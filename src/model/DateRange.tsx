
export default class DateRange {
  private _startDate: Date;
  private _endDate: Date;

  constructor(startDate: Date, endDate: Date = new Date()) {
    this._startDate = startDate;
    this._endDate = endDate;
  }

  get startDate() {
    return this._startDate;
  }

  get endDate() {
    return this._endDate;
  }

  get range() {
    return (this.endDate.getTime() - this.startDate.getTime())/(24*60*60*1000)
  }

  static fromRelativeRange(range: number) {
    const endDate: Date = new Date();
    const startDate: Date = new Date();
    startDate.setTime(startDate.getTime() - range*24*60*60*1000);
    return new this(startDate, endDate);
  }
}

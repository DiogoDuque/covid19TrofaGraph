
export default class Entry<X> {
  protected _x: X;
  protected _y: number;

  constructor(x: X, y: number) {
    this._x = x;
    this._y = y;
  }

  
  public get x() : X {
    return this._x;
  }
  
  public get y() : number {
    return this._y;
  }

  buildNewWith(x: X, y: number): Entry<X> {
    throw new Error('Method buildNewWith() is not implemented!');
  }
}
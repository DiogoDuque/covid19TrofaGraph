import Entry from "./Entry";

export default class PortugalEntries {
  _confirmedPt: Entry[];
  _confirmedNorth: Entry[];
  _newConfirmedPt: Entry[];

  constructor(confirmedPt: Entry[] = [], confirmedNorth: Entry[] = [], newConfirmedPt: Entry[] = []) {
    this._confirmedPt = confirmedPt;
    this._confirmedNorth = confirmedNorth;
    this._newConfirmedPt = newConfirmedPt;
  }

  get confirmedPt(): Entry[] {
    return this._confirmedPt;
  }

  get confirmedNorth(): Entry[] {
    return this._confirmedNorth;
  }

  get newConfirmedPt(): Entry[] {
    return this._newConfirmedPt;
  }
}

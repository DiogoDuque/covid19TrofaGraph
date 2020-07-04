import Entry from "./Entry";

export default class PortugalEntries {
  _confirmedPt: Entry[];
  _confirmedNorth: Entry[];

  constructor(confirmedPt: Entry[] = [], confirmedNorth: Entry[] = []) {
    this._confirmedPt = confirmedPt;
    this._confirmedNorth = confirmedNorth;
  }

  get confirmedPt(): Entry[] {
    return this._confirmedPt;
  }

  get confirmedNorth(): Entry[] {
    return this._confirmedNorth;
  }
}

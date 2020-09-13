import Entry from "./Entry";

export default class PortugalEntries {
  _confirmedPt: Entry[];
  _confirmedNorth: Entry[];
  _newConfirmedPt: Entry[];
  _activePt: Entry[];

  constructor(confirmedPt: Entry[] = [], confirmedNorth: Entry[] = [], newConfirmedPt: Entry[] = [], ptActiveEntries: Entry[] = []) {
    this._confirmedPt = confirmedPt;
    this._confirmedNorth = confirmedNorth;
    this._newConfirmedPt = newConfirmedPt;
    this._activePt = ptActiveEntries;
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

  get activePt(): Entry[] {
    return this._activePt;
  }
}

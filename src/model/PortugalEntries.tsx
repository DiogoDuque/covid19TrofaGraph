import Entry from "./Entry";

export default class PortugalEntries {
  _confirmedPt: Entry[];
  _confirmedNorth: Entry[];
  _newConfirmedPt: Entry[];
  _activePt: Entry[];
  _hospitalized: Entry[];
  _icu: Entry[];

  constructor(confirmedPt: Entry[] = [], confirmedNorth: Entry[] = [], newConfirmedPt: Entry[] = [],
    ptActiveEntries: Entry[] = [], hospitalizedEntries: Entry[] = [], icuEntries: Entry[] = []) {
    this._confirmedPt = confirmedPt;
    this._confirmedNorth = confirmedNorth;
    this._newConfirmedPt = newConfirmedPt;
    this._activePt = ptActiveEntries;
    this._hospitalized = hospitalizedEntries;
    this._icu = icuEntries;
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

  get hospitalized(): Entry[] {
    return this._hospitalized;
  }

  get hospitalizedIcu(): Entry[] {
    return this._icu;
  }
}

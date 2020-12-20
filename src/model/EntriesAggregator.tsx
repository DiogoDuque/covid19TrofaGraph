import Entry from './Entry';

export const KEY = {
  CONFIRMED_PT: 'CONFIRMED_PT',
  CONFIRMED_NORTH: 'CONFIRMED_NORTH',
  NEWCASES_PT: 'NEWCASES_PT',
  ACTIVE_PT: 'ACTIVE_PT',
  HOSPITALIZED: 'HOSPITALIZED',
  HOSPITALIZED_NURSERY: 'HOSPITALIZED_NURSERY',
  HOSPITALIZED_ICU: 'HOSPITALIZED_ICU',
  TOWN_INCIDENCE: 'TOWN_INCIDENCE',
  TOWN_INCIDENCE_TENDENCY: 'TOWN_INCIDENCE_TENDENCY',
}

export class EntriesAggregator {
  _name: string;
  constructor(name: string) {
    this._name = name;
  }
  getAll(key: string): Entry[] {
    console.warn(`The EntriesAggregator '${this._name}' was not properly instantiated and is trying to call getAll!`);
    return [];
  }
  getLast(key: string): Entry {
    console.warn(`The EntriesAggregator '${this._name}' was not properly instantiated and is trying to call getLastEntry!`);
    return new Entry('', 0);
  }
}

class EntriesAggregatorImpl extends EntriesAggregator {
  _aggregationMap: {[key: string]: Entry[]};

  constructor(builder: EntriesAggregatorBuilder) {
    super(builder.name);
    this._aggregationMap = builder._aggregator;
  }

  getAll(key: string): Entry[] {
    return this._aggregationMap[key] || [];
  }

  getLast(key: string): Entry {
    const entries = this._aggregationMap[key];
    return entries[entries.length - 1];
  }
}

export class EntriesAggregatorBuilder {
  _name: string;
  _aggregator: {[key: string]: Entry[]};

  constructor(name: string) {
    this._name = name;
    this._aggregator = {};
  }

  get name() {
    return this._name;
  }

  addEntry(key: string, entry: Entry) {
    const current = this._aggregator[key] || [];
    this._aggregator[key] = [...current, entry];
    return this;
  }

  build() {
    return new EntriesAggregatorImpl(this);
  }
}
import Entry from './Entry';

export const KEY = {
  CONFIRMED_PT: 'confirmados',
  CONFIRMED_NORTH: 'confirmados_arsnorte',
  CONFIRMED_CENTER: 'confirmados_arscentro',
  CONFIRMED_LISBOA_TEJO: 'confirmados_arslvt',
  CONFIRMED_ALENTEJO: 'confirmados_arsalentejo',
  CONFIRMED_ALGARVE: 'confirmados_arsalgarve',
  NEWCASES_PT: 'confirmados_novos',
  ACTIVE_PT: 'ativos',
  HOSPITALIZED: 'internados',
  HOSPITALIZED_NURSERY: 'internados_enfermaria',
  HOSPITALIZED_ICU: 'internados_uci',
  TOWN_INCIDENCE_14: 'incidencia',
  TOWN_CONFIRMED_14: 'confirmados_14',
}

export default class EntriesAggregator {
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
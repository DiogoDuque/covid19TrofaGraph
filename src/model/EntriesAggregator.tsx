import { POPULATION_PT } from '../config/demographicValues';
import { convertDailyCountToDailyIncidency, mergeEntryValuesBySum } from '../utils/EntriesOps';
import DateEntry from './DateEntry';
import Entry from './Entry';

const CONFIRMED_KEYS = {
  CONFIRMED_0_9_F: 'confirmados_0_9_f',
  CONFIRMED_0_9_M: 'confirmados_0_9_m',
  CONFIRMED_10_19_F: 'confirmados_10_19_f',
  CONFIRMED_10_19_M: 'confirmados_10_19_m',
  CONFIRMED_20_29_F: 'confirmados_20_29_f',
  CONFIRMED_20_29_M: 'confirmados_20_29_m',
  CONFIRMED_30_39_F: 'confirmados_30_39_f',
  CONFIRMED_30_39_M: 'confirmados_30_39_m',
  CONFIRMED_40_49_F: 'confirmados_40_49_f',
  CONFIRMED_40_49_M: 'confirmados_40_49_m',
  CONFIRMED_50_59_F: 'confirmados_50_59_f',
  CONFIRMED_50_59_M: 'confirmados_50_59_m',
  CONFIRMED_60_69_F: 'confirmados_60_69_f',
  CONFIRMED_60_69_M: 'confirmados_60_69_m',
  CONFIRMED_70_79_F: 'confirmados_70_79_f',
  CONFIRMED_70_79_M: 'confirmados_70_79_m',
  CONFIRMED_80_PLUS_F: 'confirmados_80_plus_f',
  CONFIRMED_80_PLUS_M: 'confirmados_80_plus_m',
};

const CONFIRMED_EXTRA_KEYS = {
  CONFIRMED_0_9: 'confirmados_0_9',
  CONFIRMED_10_19: 'confirmados_10_19',
  CONFIRMED_20_29: 'confirmados_20_29',
  CONFIRMED_30_39: 'confirmados_30_39',
  CONFIRMED_40_49: 'confirmados_40_49',
  CONFIRMED_50_59: 'confirmados_50_59',
  CONFIRMED_60_69: 'confirmados_60_69',
  CONFIRMED_70_79: 'confirmados_70_79',
  CONFIRMED_80_PLUS: 'confirmados_80_plus',
};

const DEAD_KEYS = {
  DEAD_0_9_F: 'obitos_0_9_f',
  DEAD_0_9_M: 'obitos_0_9_m',
  DEAD_10_19_F: 'obitos_10_19_f',
  DEAD_10_19_M: 'obitos_10_19_m',
  DEAD_20_29_F: 'obitos_20_29_f',
  DEAD_20_29_M: 'obitos_20_29_m',
  DEAD_30_39_F: 'obitos_30_39_f',
  DEAD_30_39_M: 'obitos_30_39_m',
  DEAD_40_49_F: 'obitos_40_49_f',
  DEAD_40_49_M: 'obitos_40_49_m',
  DEAD_50_59_F: 'obitos_50_59_f',
  DEAD_50_59_M: 'obitos_50_59_m',
  DEAD_60_69_F: 'obitos_60_69_f',
  DEAD_60_69_M: 'obitos_60_69_m',
  DEAD_70_79_F: 'obitos_70_79_f',
  DEAD_70_79_M: 'obitos_70_79_m',
  DEAD_80_PLUS_F: 'obitos_80_plus_f',
  DEAD_80_PLUS_M: 'obitos_80_plus_m',
};

const DEAD_EXTRA_KEYS = {
  DEAD_0_9: 'obitos_0_9',
  DEAD_10_19: 'obitos_10_19',
  DEAD_20_29: 'obitos_20_29',
  DEAD_30_39: 'obitos_30_39',
  DEAD_40_49: 'obitos_40_49',
  DEAD_50_59: 'obitos_50_59',
  DEAD_60_69: 'obitos_60_69',
  DEAD_70_79: 'obitos_70_79',
  DEAD_80_PLUS: 'obitos_80_plus',
};

export const KEY = {
  // data.csv
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
  DEAD_PT: 'obitos',
  ...CONFIRMED_KEYS,
  ...DEAD_KEYS,

  // data.csv extra
  ...CONFIRMED_EXTRA_KEYS,
  ...DEAD_EXTRA_KEYS,
  INCIDENCE_PT: 'incidencia_pt',
  TRANSMISSIBILITY_PT: 'rt_nacional',
  TRANSMISSIBILITY_PT_CONTINENT: 'rt_continente',

  // data_concelhos_new.csv
  TOWN_INCIDENCE_14: 'incidencia',
  TOWN_CONFIRMED_14: 'confirmados_14',
  TOWN: 'concelho',

  //vacinas.csv
  VACCINE_DOSE_1: 'doses1',
  VACCINE_DOSE_2: 'doses2',
}

export default class EntriesAggregator<X, E extends Entry<X>> {
  _name: string;
  constructor(name: string) {
    this._name = name;
  }
  getAll(key: string): E[] {
    console.warn(`The EntriesAggregator '${this._name}' was not properly instantiated and is trying to call getAll!`);
    return [];
  }
  getLast(key: string): any {
    console.warn(`The EntriesAggregator '${this._name}' was not properly instantiated and is trying to call getLastEntry!`);
    return null;
  }
}

class EntriesAggregatorImpl<X, E extends Entry<X>> extends EntriesAggregator<X, E> {
  _aggregationMap: {[key: string]: E[]};

  constructor(builder: EntriesAggregatorBuilder<X, E>) {
    super(builder.name);
    this._aggregationMap = builder._aggregator;
  }

  getAll(key: string): E[] {
    return this._aggregationMap[key] || [];
  }

  getLast(key: string): E {
    const entries = this._aggregationMap[key];
    return entries[entries.length - 1];
  }
}

export class EntriesAggregatorBuilder<X, E extends Entry<X>> {
  _name: string;
  _aggregator: {[key: string]: E[]};

  constructor(name: string) {
    this._name = name;
    this._aggregator = {};
  }

  get name(): string {
    return this._name;
  }

  addEntry(key: string, entry: E) {
    const current = this._aggregator[key] || [];
    this._aggregator[key] = [...current, entry];
    return this;
  }

  addEntries(key: string, entries: E[]) {
    const current = this._aggregator[key] || [];
    this._aggregator[key] = [...current, ...entries];
    return this;
  }

  build(): EntriesAggregatorImpl<X, E> {
    return new EntriesAggregatorImpl(this);
  }
}

export class PtDataEntriesAggregatorBuilder extends EntriesAggregatorBuilder<string, DateEntry> {
  addByAgeGroup(extraKeys: Object) {
    Object.entries(extraKeys).forEach(([, v]) => {
      const entriesM: DateEntry[] = this._aggregator[`${v}_m`];
      const entriesF: DateEntry[] = this._aggregator[`${v}_f`];
      this.addEntries(v, mergeEntryValuesBySum(entriesM, entriesF) as DateEntry[]);
    });
  }

  preProcess() {
    this.addByAgeGroup(DEAD_EXTRA_KEYS);
    this.addByAgeGroup(CONFIRMED_EXTRA_KEYS);
    
    const incidence: DateEntry[] = convertDailyCountToDailyIncidency(this._aggregator[KEY.NEWCASES_PT], POPULATION_PT) as DateEntry[];
    this.addEntries(KEY.INCIDENCE_PT, incidence);
  }

  build(): EntriesAggregatorImpl<string, DateEntry> {
    this.preProcess();
    return new EntriesAggregatorImpl(this);
  }
}
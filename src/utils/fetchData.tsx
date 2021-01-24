import { Readable } from 'stream';
import Csv from 'csv-parser';
import Entry from '../model/Entry';
import { EntriesAggregatorBuilder, KEY } from '../model/EntriesAggregator';

function _getDataFromSource(sourceFile: string): Promise<Response> {
  const url = 'https://raw.githubusercontent.com/dssg-pt/covid19pt-data/master/' + sourceFile;
  const headers: Headers = new Headers({
    //'Content-Type': 'application/x-www-form-urlencoded',
    //'Origin': 'https://github.com',
    //'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    Accept: 'application/vnd.github.v3+json',
    // 'Access-Control-Allow-Origin': '*',
  });
  console.log('[_getDataFromSource] Fetching ' + sourceFile);
  return fetch(url, { method: 'GET', headers });
}

export function getTownData(town: string, callback: Function) {
  const filename = 'data_concelhos_new.csv';
  _getDataFromSource(filename)
    .then((response: Response) => {
      if (response && response.status === 200)
        return response.text();
    })
    .then(responseData => {
      const builder = new EntriesAggregatorBuilder(filename);
      const stream = new Readable();
      stream.push(responseData);
      stream.push(null);
      stream
        .pipe(Csv())
        .on('data', data =>
          data.concelho === town
          && [
            KEY.TOWN_INCIDENCE_14,
            KEY.TOWN_CONFIRMED_14
          ].forEach(key => builder.addEntry(key, new Entry(data.data, data[key])))
        )
        .on('end', () => callback(builder.build()));
    })
    .catch(err => console.error(err));
}

export function getPortugalData(callback: Function) {
  const filename = 'data.csv';
  _getDataFromSource(filename)
    .then((response: Response) => {
      if (response && response.status === 200)
        return response.text();
    })
    .then(responseData => {
      const builder = new EntriesAggregatorBuilder(filename);
      const stream = new Readable();
      stream.push(responseData);
      stream.push(null);
      stream
        .pipe(Csv())
        .on('data', data => {
          [
            KEY.CONFIRMED_PT,
            KEY.CONFIRMED_NORTH,
            KEY.CONFIRMED_CENTER,
            KEY.CONFIRMED_LISBOA_TEJO,
            KEY.CONFIRMED_ALENTEJO,
            KEY.CONFIRMED_ALGARVE,
            KEY.NEWCASES_PT,
            KEY.ACTIVE_PT,
            KEY.HOSPITALIZED,
            KEY.HOSPITALIZED_NURSERY,
            KEY.HOSPITALIZED_ICU,
            KEY.DEAD_PT,
          ].forEach(key => builder.addEntry(key, new Entry(data.data, data[key])))
        })
        .on('end', () => callback(builder.build()));
    })
    .catch(err => console.error(err));
}

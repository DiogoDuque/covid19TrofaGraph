import { Readable } from 'stream';
import Csv from 'csv-parser';
import Entry from '../model/Entry';
import { EntriesAggregatorBuilder, KEY } from '../model/EntriesAggregator';

function _getDataFromSource(sourceFile: string): Promise<Response> {
  const url = 'https://raw.githubusercontent.com/dssg-pt/covid19pt-data/master/'+sourceFile;
  const headers: Headers = new Headers({
    //'Content-Type': 'application/x-www-form-urlencoded',
    //'Origin': 'https://github.com',
    //'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    Accept: 'application/vnd.github.v3+json',
    // 'Access-Control-Allow-Origin': '*',
  });
  console.log('[_getDataFromSource] Fetching '+sourceFile);
  return fetch(url, { method: 'GET', headers });
}

export function getTownData(town: string, callback: Function) {
  _getDataFromSource('data_concelhos_incidencia.csv')
    .then((response: Response) => {
      if (response && response.status === 200)
        return response.text();
    })
    .then(responseData => {
      const entries: Entry[] = [];
      const stream = new Readable();
      stream.push(responseData);
      stream.push(null);
      stream
        .pipe(Csv())
        .on('data', data => entries.push(new Entry(data.data, data[town])))
        .on('end', () => callback(entries));
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
          builder
            .addEntry(KEY.CONFIRMED_PT, new Entry(data.data, data.confirmados))
            .addEntry(KEY.CONFIRMED_NORTH, new Entry(data.data, data.confirmados_arsnorte))
            .addEntry(KEY.NEWCASES_PT, new Entry(data.data, data.confirmados_novos))
            .addEntry(KEY.ACTIVE_PT, new Entry(data.data, data.ativos))
            .addEntry(KEY.HOSPITALIZED, new Entry(data.data, data.internados))
            .addEntry(KEY.HOSPITALIZED_ICU, new Entry(data.data, data.internados_uci))
        })
        .on('end', () => callback(builder.build()));
    })
    .catch(err => console.error(err));
}

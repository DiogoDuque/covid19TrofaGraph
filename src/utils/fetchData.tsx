import { Readable } from 'stream';
import Csv from 'csv-parser';
import Entry from '../model/Entry';
import PortugalEntries from '../model/PortugalEntries';

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
  _getDataFromSource('data.csv')
    .then((response: Response) => {
      if (response && response.status === 200)
        return response.text();
    })
    .then(responseData => {
      const ptConfirmedEntries: Entry[] = [];
      const northConfirmedEntries: Entry[] = [];
      const ptNewConfirmedEntries: Entry[] = [];
      const ptActiveEntries: Entry[] = [];
      const hospitalizedEntries: Entry[] = [];
      const hospitalizedIcuEntries: Entry[] = [];
      const stream = new Readable();
      stream.push(responseData);
      stream.push(null);
      stream
        .pipe(Csv())
        .on('data', data => {
          ptConfirmedEntries.push(new Entry(data.data, data.confirmados));
          northConfirmedEntries.push(new Entry(data.data, data.confirmados_arsnorte));
          ptNewConfirmedEntries.push(new Entry(data.data, data.confirmados_novos));
          ptActiveEntries.push(new Entry(data.data, data.ativos));
          hospitalizedEntries.push(new Entry(data.data, data.internados));
          hospitalizedIcuEntries.push(new Entry(data.data, data.internados_uci));
        })
        .on('end', () => callback(new PortugalEntries(ptConfirmedEntries, northConfirmedEntries, ptNewConfirmedEntries, ptActiveEntries, hospitalizedEntries, hospitalizedIcuEntries)));
    })
    .catch(err => console.error(err));
}

export default {
  getTownData,
  getPortugalData,
}

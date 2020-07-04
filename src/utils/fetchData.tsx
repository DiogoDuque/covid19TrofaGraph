import { Readable } from 'stream';
import Csv from 'csv-parser';
import Entry from '../model/Entry';
import PortugalEntries from '../model/PortugalEntries';

function _getDataFromSource(sourceFile: string): Promise<Response> {
  const url = 'https://cors-anywhere.herokuapp.com/https://github.com/dssg-pt/covid19pt-data/raw/master/'+sourceFile;
  const headers: Headers = new Headers({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Origin': 'https://github.com',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    // 'Access-Control-Allow-Origin': '*',
  });
  console.log('Fetching '+sourceFile);
  return fetch(url, { method: 'GET', headers });
}

export function getTownData(town: string, callback: Function) {
  _getDataFromSource('data_concelhos.csv')
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
      const northConfirmedEntries: Entry[] = [];
      const ptConfirmedEntries: Entry[] = [];
      const stream = new Readable();
      stream.push(responseData);
      stream.push(null);
      stream
        .pipe(Csv())
        .on('data', data => {
          northConfirmedEntries.push(new Entry(data.data, data.confirmados_arsnorte));
          ptConfirmedEntries.push(new Entry(data.data, data.confirmados));
        })
        .on('end', () => callback(new PortugalEntries(ptConfirmedEntries, northConfirmedEntries)));
    })
    .catch(err => console.error(err));
}

export default {
  getTownData,
  getPortugalData,
}
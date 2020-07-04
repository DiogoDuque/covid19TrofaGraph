import { Readable } from 'stream';
import Csv from 'csv-parser';
import Entry from '../model/Entry';

export function getTownData(town: string, callback: Function) {
    const url: string = 'https://cors-anywhere.herokuapp.com/https://github.com/dssg-pt/covid19pt-data/raw/master/data_concelhos.csv';
      const headers: Headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Origin': 'https://github.com',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        // 'Access-Control-Allow-Origin': '*',
      });
  
      fetch(url, { method: 'GET', headers })
        .then((response: Response) => {
          if(response && response.status === 200)
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

export default {
    getTownData,
}
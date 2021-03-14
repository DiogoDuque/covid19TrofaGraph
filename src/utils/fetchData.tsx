import { Readable } from 'stream';
import Csv from 'csv-parser';
import DateEntry from '../model/DateEntry';
import { EntriesAggregatorBuilder, PtDataEntriesAggregatorBuilder, KEY } from '../model/EntriesAggregator';

function makeRequest(filename: string): Promise<Response> {
  const url = 'https://raw.githubusercontent.com/dssg-pt/covid19pt-data/master/' + filename;
    const headers: Headers = new Headers({
      Accept: 'application/vnd.github.v3+json',
    });
    console.log('[getDataFromSource] Fetching ' + filename);
    return fetch(url, { method: 'GET', headers })
}

function getDataFromSource(builder: EntriesAggregatorBuilder<string, DateEntry>,
    callback: Function, filterFunc: Function = ()=>true) {
  makeRequest(builder.name)
  .then((response: Response) => {
    if (response && response.status === 200)
      return response.text();
  })
  .then(responseData => {
    const stream = new Readable();
    stream.push(responseData);
    stream.push(null);
    stream
      .pipe(Csv())
      .on('data', data =>
        filterFunc(data)
        && Object.values(KEY)
        .forEach(key => data[key] && builder.addEntry(key, new DateEntry(data.data, data[key])))
      )
      .on('end', () => callback(builder.build()));
  })
  .catch(err => console.error(err));;
}

export function getTownData(town: string, callback: Function) {
  const filename = 'data_concelhos_new.csv';
  getDataFromSource(
    new EntriesAggregatorBuilder(filename),
    callback,
    (data: any) => data.concelho === town
  );
}

export function getPortugalData(callback: Function) {
  const filename = 'data.csv';
  getDataFromSource(
    new PtDataEntriesAggregatorBuilder(filename),
    callback
  );
}

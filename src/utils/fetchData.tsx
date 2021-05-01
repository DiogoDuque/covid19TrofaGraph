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

function defaultParseData(builder: EntriesAggregatorBuilder<string, DateEntry>, data: any) {
  Object.values(KEY)
    .filter(key => data[key])
    .forEach(key => builder.addEntry(key, new DateEntry(data.data, data[key])));
}

function getDataFromSource(builder: EntriesAggregatorBuilder<string, DateEntry>,
  callback: Function, parseData: Function) {
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
        .on('data', data => parseData(builder, data))
        .on('end', () => {
          console.log('[getDataFromSource] Parsed ' + builder.name);
          callback(builder.build());
        });
    })
    .catch(err => console.error(err));;
}

export function getTownData(town: string, callback: Function) {
  const filename = 'data_concelhos_new.csv';
  const townEntries: { [key: string]: EntriesAggregatorBuilder<string, DateEntry> } = {};
  const townRegionMap: { [key: string]: string } = {};

  const parseData = (_b: EntriesAggregatorBuilder<string, DateEntry>, data: any) => {
    const town = data[KEY.TOWN];
    const region = data[KEY.REGION];
    if (!townEntries[town]) {
      townEntries[town] = new EntriesAggregatorBuilder<string, DateEntry>(`${filename}:${town}`);
      townRegionMap[town] = region;
    }
    defaultParseData(townEntries[town], data);
  };

  const onEnd = (_b: any) => callback(
    Object.fromEntries(Object.entries(townEntries).map(
      ([k, b]) => [k, b.build()]
    )),
    townRegionMap,
  );

  getDataFromSource(
    new EntriesAggregatorBuilder(filename),
    onEnd,
    parseData
  );
}

export function getPortugalData(callback: Function) {
  const filename = 'data.csv';
  getDataFromSource(
    new PtDataEntriesAggregatorBuilder(filename),
    callback,
    defaultParseData
  );
}

export function getVaccineData(callback: Function) {
  const filename = 'vacinas.csv';
  getDataFromSource(
    new EntriesAggregatorBuilder(filename),
    callback,
    defaultParseData
  );
}

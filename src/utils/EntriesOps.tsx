import Entry from "../model/Entry";


export function getAdaptativePointRadius(entries: Entry[]): number {
  const width = window.screen.availWidth;
  const count = entries.length;
  const densityRatio = count/width;
  const densityValue = densityRatio*12;
  const retVal = Math.max(4-densityValue, 1);
  return retVal;
}

function getDateLimitFromRange(dateRange: number): Date {
  const dateLimit = new Date();
  dateLimit.setDate(dateLimit.getDate() - dateRange);
  return dateLimit;
}

export function getEntriesLineGenerator(entries: Entry[]): (v: number) => Entry[] {
  return v => entries.map(e => new Entry(e.dateStr, v));
}

export function getEntriesSince(dateRange: number, entries: Entry[]): Entry[] {
  const dateLimit = getDateLimitFromRange(dateRange);
  return entries.filter(e => e.date >= dateLimit);
}

export function derivateEntryValues(entries: Entry[]): Entry[] {
  let prevEntry = entries[0];
  const newCasesEntries = [new Entry(prevEntry.dateStr, 0)];

  for(let i=1; i<entries.length; i++) {
    const currEntry = entries[i];
    newCasesEntries.push(new Entry(currEntry.dateStr, currEntry.count - prevEntry.count));
    prevEntry = currEntry;
  }

  return newCasesEntries;
}

export function smoothEntryValues(entries: Entry[], strength: number = 7): Entry[] {
  return entries.map((entry, index) => {
    const startIndex = Math.max(0, index-strength);
    const finishIndex = Math.min(entries.length, index+strength);
    const relevantEntries = entries.slice(startIndex, finishIndex);
    const sum = relevantEntries.reduce((acc, e) => acc + e.count, 0);
    return new Entry(entry.dateStr, Math.round(sum / relevantEntries.length));
  });
}

export function convertDailyCountToDailyIncidency(entries: Entry[], populationSize: number): Entry[] {
  return entries.map(entry => {
    const incidency = Math.round(entry.count * 100000 / populationSize);
    return new Entry(entry.dateStr, incidency);
  });
}

function mergeEntryValues(entries1: Entry[], entries2: Entry[], mergeOp: (e1: Entry, e2: Entry) => Entry) {
  if((entries1.length !== entries2.length) || (entries1[0].dateStr !== entries2[0].dateStr)) {
    console.error(`The two Entry[] don't seem mergeable!\n${entries1}\n${entries2}`);
    return [];
  }

  const entries: Entry[] = [];
  for(let i=0; i<entries1.length; i++) {
    entries.push(mergeOp(entries1[i], entries2[i]));
  }
  return entries;
}

export function mergeEntryValuesBySum(entries1: Entry[], entries2: Entry[]) {
  return mergeEntryValues(entries1, entries2, (e1, e2) => new Entry(e1.dateStr, e1.count + e2.count));
}

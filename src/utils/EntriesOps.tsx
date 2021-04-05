import Entry from "../model/Entry";
import DateEntry from "../model/DateEntry";
import DateRange from "../model/DateRange";

export function getEntriesLineGenerator<X>(entries: Entry<X>[]): (v: number) => Entry<X>[] {
  return v => entries.map(e => e.buildNewWith(e.x, v));
}

export function getEntriesSince(dateRange: DateRange, entries: DateEntry[]): DateEntry[] {
  const dateLimit = dateRange.startDate;
  return entries.filter(e => e.date >= dateLimit);
}

export function derivateEntryValues<X>(entries: Entry<X>[]): Entry<X>[] {
  let prevEntry = entries[0];
  const newCasesEntries = [prevEntry.buildNewWith(prevEntry.x, 0)];

  for(let i=1; i<entries.length; i++) {
    const currEntry = entries[i];
    newCasesEntries.push(prevEntry.buildNewWith(currEntry.x, currEntry.y - prevEntry.y));
    prevEntry = currEntry;
  }

  return newCasesEntries;
}

export function smoothEntryValues<X>(entries: Entry<X>[], strength: number = 7): Entry<X>[] {
  return entries.map((entry, index) => {
    const startIndex = Math.max(0, index-strength);
    const finishIndex = Math.min(entries.length, index+strength);
    const relevantEntries = entries.slice(startIndex, finishIndex);
    const sum = relevantEntries.reduce((acc, e) => acc + e.y, 0);
    return entry.buildNewWith(entry.x, Math.round(sum / relevantEntries.length));
  });
}

export function convertDailyCountToDailyIncidency<X>(entries: Entry<X>[], populationSize: number): Entry<X>[] {
  return entries.map(entry => {
    const incidency = Math.round(entry.y * 100000 / populationSize);
    return entry.buildNewWith(entry.x, incidency);
  });
}

export function convertDailyIncidencyToBiweeklyIncidency<X>(entries: Entry<X>[], xWhitelist: X[] = []): Entry<X>[] {
  return entries
  .map((entry, index) => {
    if(index < 13)
      return entry; // value does not matter, as it will be filtered out after.
    return entry.buildNewWith(
      entry.x,
      entries.slice(index-13, index+1).reduce((acc, e) => acc + e.y, 0)
    );
  })
  .filter((_entry, index) => index >= 13)
  .filter(e => xWhitelist.includes(e.x));
}

function mergeEntryValues<E extends Entry<string>>(entries1: E[], entries2: E[], mergeOp: (e1: E, e2: E) => E) {
  if((entries1.length !== entries2.length) || (entries1[0].x !== entries2[0].x)) {
    console.error(`The two Entry[] don't seem mergeable!\n${entries1}\n${entries2}`);
    return [];
  }

  const entries: E[] = [];
  for(let i=0; i<entries1.length; i++) {
    entries.push(mergeOp(entries1[i], entries2[i]));
  }
  return entries;
}

export function mergeEntryValuesBySum(entries1: Entry<string>[], entries2: Entry<string>[]): Entry<string>[] {
  return mergeEntryValues(entries1, entries2, (e1, e2) => e1.buildNewWith(e1.x, e1.y + e2.y));
}

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

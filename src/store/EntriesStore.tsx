import { Store } from "pullstate";
import DateRange from "../model/DateRange";
import EntriesAggregator from "../model/EntriesAggregator";
import Entry from "../model/Entry";

const EMPTY_TOWN_ENTRIES: {[key: string]: EntriesAggregator<unknown, Entry<unknown>>} = {};

const EntriesStore = new Store({
  portugalEntries: new EntriesAggregator('DUMMY-PT'),
  townEntries: EMPTY_TOWN_ENTRIES,
  vaccineEntries: new EntriesAggregator('DUMMY-VAC'),
  dateRange: DateRange.fromRelativeRange(60),
});

export default EntriesStore;

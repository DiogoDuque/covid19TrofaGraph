import { Store } from "pullstate";
import DateEntry from "../model/DateEntry";
import DateRange from "../model/DateRange";
import EntriesAggregator from "../model/EntriesAggregator";

const EMPTY_TOWN_ENTRIES: {[key: string]: EntriesAggregator<string, DateEntry>} = {};

const EntriesStore = new Store({
  portugalEntries: new EntriesAggregator('DUMMY-PT'),
  townEntries: EMPTY_TOWN_ENTRIES,
  vaccineEntries: new EntriesAggregator('DUMMY-VAC'),
  dateRange: DateRange.fromRelativeRange(60),
});

export default EntriesStore;

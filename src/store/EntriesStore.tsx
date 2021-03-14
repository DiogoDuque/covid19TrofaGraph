import { Store } from "pullstate";
import EntriesAggregator from "../model/EntriesAggregator";

const EntriesStore = new Store({
  portugalEntries: new EntriesAggregator('DUMMY-PT'),
  trofaEntries: new EntriesAggregator('DUMMY-TRF'),
  vaccineEntries: new EntriesAggregator('DUMMY-VAC'),
  dateRange: 60,
});

export default EntriesStore;

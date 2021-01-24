import { Store } from "pullstate";
import EntriesAggregator from "../model/EntriesAggregator";

const EntriesStore = new Store({
  portugalEntries: new EntriesAggregator('DUMMY'),
  trofaEntries: new EntriesAggregator('DUMMY'),
  dateRange: 60,
});

export default EntriesStore;

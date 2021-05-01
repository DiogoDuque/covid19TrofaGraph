import React from "react";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { chartGroupWrapper } from "../../utils/chartUtils";
import MultiLineChart from "../chart/MultiLineChart";
import { themeYellow, themeBlueTransparent, severityTheme1, themeGreenTransparent } from "../../config/themes";
import { KEY, regionToKey } from "../../model/EntriesAggregator";
import EntriesStore from "../../store/EntriesStore";
import GeneralStore from "../../store/GeneralStore";
import { convertDailyCountToDailyIncidency, convertDailyIncidencyToBiweeklyIncidency, derivateEntryValues, getEntriesLineGenerator } from "../../utils/EntriesOps";
import { CircularProgress } from "@material-ui/core";
import { regionToPopulation } from "../../config/demographicValues";

const TownCharts = () => {
  const styles = GeneralStore.useState(s => s.styles);
  const currTown = GeneralStore.useState(s => s.currentTown);
  const currRegion = EntriesStore.useState(s => s.townRegionMap[currTown]) || '';
  const allTownEntries = EntriesStore.useState(s => s.townEntries);
  const currTownEntries = allTownEntries[currTown];
  const ptEntries = EntriesStore.useState(s => s.portugalEntries);
  const regionEntries = ptEntries.getAll(regionToKey(currRegion));
  const dateRange = EntriesStore.useState(s => s.dateRange);

  if(!currTownEntries)
    return <CircularProgress/>;

  const townEntriesIncidence14 = currTownEntries.getAll(KEY.TOWN_INCIDENCE_14);
  const daysToConsider = townEntriesIncidence14.map(e => e.x);
  const regionEntriesIncidence14 = convertDailyIncidencyToBiweeklyIncidency(
    convertDailyCountToDailyIncidency(derivateEntryValues(regionEntries), regionToPopulation(currRegion)),
    daysToConsider
  );
  const ptEntriesIncidence14 = convertDailyIncidencyToBiweeklyIncidency(
    ptEntries.getAll(KEY.INCIDENCE_PT),
    daysToConsider,
  );
  const townLineGenerator = getEntriesLineGenerator(townEntriesIncidence14);
  const town = currTown; //currTown[0] + currTown.slice(1).toLowerCase();

  return (
    <div>
      <Autocomplete
        id="town-name-autocomplete"
        options={Object.keys(allTownEntries)}
        value={currTown}
        renderInput={(params) => <TextField {...params} label="Cidade" variant="outlined" />}
        onChange={(_e, value) => value && GeneralStore.update(s => { s.currentTown = value })}
      />
      { chartGroupWrapper(`Evolução - ${town}`, styles,

        <MultiLineChart
          dataArray={[
            townEntriesIncidence14,
            regionEntriesIncidence14,
            ptEntriesIncidence14,
            townLineGenerator(120),
          ]}
          dateRange={dateRange}
          labels={[
            `Incidência - ${town} (a 14 dias p/ 100k hab.)`,
            `Incidência - ${currRegion} (a 14 dias p/ 100k hab.)`,
            'Incidência - Portugal (a 14 dias p/ 100k hab.)',
            'Risco elevado',
          ]}
          themes={[themeYellow, themeGreenTransparent, themeBlueTransparent, severityTheme1]}
        />,
      )}
    </div>
  );
}

export default TownCharts;

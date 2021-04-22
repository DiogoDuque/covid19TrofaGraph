import React from "react";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { chartGroupWrapper } from "../../utils/chartUtils";
import MultiLineChart from "../chart/MultiLineChart";
import { themeYellow, themeBlueTransparent, severityTheme1 } from "../../config/themes";
import { KEY } from "../../model/EntriesAggregator";
import EntriesStore from "../../store/EntriesStore";
import GeneralStore from "../../store/GeneralStore";
import { convertDailyIncidencyToBiweeklyIncidency, getEntriesLineGenerator } from "../../utils/EntriesOps";
import { CircularProgress } from "@material-ui/core";

const TownCharts = () => {
  const styles = GeneralStore.useState(s => s.styles);
  const currTown = GeneralStore.useState(s => s.currentTown);
  const allTownEntries = EntriesStore.useState(s => s.townEntries);
  const currTownEntries = allTownEntries[currTown];
  const ptEntries = EntriesStore.useState(s => s.portugalEntries);
  const dateRange = EntriesStore.useState(s => s.dateRange);

  if(!currTownEntries)
    return <CircularProgress/>;

  const townEntriesIncidence14 = currTownEntries.getAll(KEY.TOWN_INCIDENCE_14);
  const ptEntriesIncidence14 = convertDailyIncidencyToBiweeklyIncidency(
    ptEntries.getAll(KEY.INCIDENCE_PT),
    townEntriesIncidence14.map(e => e.x)
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
            ptEntriesIncidence14,
            townLineGenerator(120),
          ]}
          dateRange={dateRange}
          labels={[
            `Incidência - ${town} (a 14 dias p/ 100k hab.)`,
            'Incidência em Portugal (a 14 dias p/ 100k hab.)',
            'Risco elevado',
          ]}
          themes={[themeYellow, themeBlueTransparent, severityTheme1]}
        />,
      )}
    </div>
  );
}

export default TownCharts;

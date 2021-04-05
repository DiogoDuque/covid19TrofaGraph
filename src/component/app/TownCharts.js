import React from "react";
import { chartGroupWrapper } from "../../utils/chartUtils";
import MultiLineChart from "../chart/MultiLineChart";
import { themeYellow, themeBlueTransparent, severityTheme1 } from "../../config/themes";
import { KEY } from "../../model/EntriesAggregator";
import EntriesStore from "../../store/EntriesStore";
import GeneralStore from "../../store/GeneralStore";
import { convertDailyIncidencyToBiweeklyIncidency, getEntriesLineGenerator } from "../../utils/EntriesOps";

const TownCharts = () => {
  const styles = GeneralStore.useState(s => s.styles);
  const currTown = GeneralStore.useState(s => s.currentTown);
  const townEntries = EntriesStore.useState(s => s.townEntries[currTown]);
  const ptEntries = EntriesStore.useState(s => s.portugalEntries);
  const dateRange = EntriesStore.useState(s => s.dateRange);

  const townEntriesIncidence14 = townEntries.getAll(KEY.TOWN_INCIDENCE_14);
  const ptEntriesIncidence14 = convertDailyIncidencyToBiweeklyIncidency(
    ptEntries.getAll(KEY.INCIDENCE_PT),
    townEntriesIncidence14.map(e => e.x)
  );
  const townLineGenerator = getEntriesLineGenerator(townEntriesIncidence14);
  const town = currTown[0] + currTown.slice(1).toLowerCase();

  return chartGroupWrapper(`Evolução - ${town}`, styles,
  
    <MultiLineChart
      dataArray={[
        townEntriesIncidence14,
        ptEntriesIncidence14,
        townLineGenerator(120*14),
      ]}
      dateRange={dateRange}
      labels={[
        `Incidência - ${town} (a 14 dias p/ 100k hab.)`,
        'Incidência em Portugal (a 14 dias p/ 100k hab.)',
        'Risco elevado',
      ]}
      themes={[themeYellow, themeBlueTransparent, severityTheme1]}
    />,
  );
}

export default TownCharts;

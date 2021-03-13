import React from "react";
import { chartGroupWrapper } from "../../utils/chartUtils";
import MultiLineChart from "../chart/MultiLineChart";
import { themeYellow, themeBlueTransparent } from "../../config/themes";
import { KEY } from "../../model/EntriesAggregator";
import EntriesStore from "../../store/EntriesStore";
import GeneralStore from "../../store/GeneralStore";
import { convertDailyIncidencyToBiweeklyIncidency } from "../../utils/EntriesOps";

const TrofaCharts = () => {
  const styles = GeneralStore.useState(s => s.styles);
  const trofaEntries = EntriesStore.useState(s => s.trofaEntries);
  const ptEntries = EntriesStore.useState(s => s.portugalEntries);
  const dateRange = EntriesStore.useState(s => s.dateRange);

  const trofaEntriesIncidence14 = trofaEntries.getAll(KEY.TOWN_INCIDENCE_14);
  const ptEntriesIncidence14 = convertDailyIncidencyToBiweeklyIncidency(
    ptEntries.getAll(KEY.INCIDENCE_PT),
    trofaEntriesIncidence14.map(e => e.x)
  );

  return chartGroupWrapper('Evolução na Trofa', styles,
  
    <MultiLineChart
      dataArray={[
        trofaEntriesIncidence14,
        ptEntriesIncidence14,
      ]}
      dateRange={dateRange}
      labels={[
        'Incidência na Trofa (a 14 dias p/ 100k hab.)',
        'Incidência em Portugal (a 14 dias p/ 100k hab.)',
      ]}
      themes={[themeYellow, themeBlueTransparent]}
    />,
  );
}

export default TrofaCharts;

import React from "react";
import { chartGroupWrapper } from "../../utils/chartUtils";
import MultiLineChart from "../chart/MultiLineChart";
import { themeYellow } from "../../config/themes";
import { KEY } from "../../model/EntriesAggregator";
import EntriesStore from "../../store/EntriesStore";
import GeneralStore from "../../store/GeneralStore";

const TrofaCharts = () => {
  const styles = GeneralStore.useState(s => s.styles);
  const trofaEntries = EntriesStore.useState(s => s.trofaEntries);
  const dateRange = EntriesStore.useState(s => s.dateRange);

  return chartGroupWrapper('Evolução na Trofa', styles,
  
    <MultiLineChart
      dataArray={[
        trofaEntries.getAll(KEY.TOWN_INCIDENCE_14),
      ]}
      dateRange={dateRange}
      labels={[
        'Incidência na Trofa (a 14 dias p/ 100k hab.)',
      ]}
      themes={[themeYellow]}
    />,
  );
}

export default TrofaCharts;

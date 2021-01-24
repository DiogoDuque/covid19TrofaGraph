import React from "react";
import { chartGroupWrapper } from "../../utils/chartUtils";
import { getEntriesLineGenerator } from '../../utils/EntriesOps';
import MultiLineChart from "../chart/MultiLineChart";
import { themeYellow, severityTheme1, severityTheme2, severityTheme3 } from "../../config/themes";
import { KEY } from "../../model/EntriesAggregator";
import EntriesStore from "../../store/EntriesStore";
import GeneralStore from "../../store/GeneralStore";

const TrofaCharts = () => {
  const styles = GeneralStore.useState(s => s.styles);
  const trofaEntries = EntriesStore.useState(s => s.trofaEntries);
  const dateRange = EntriesStore.useState(s => s.dateRange);

  const trofaLineGenerator = getEntriesLineGenerator(trofaEntries.getAll(KEY.TOWN_INCIDENCE_14));
  return chartGroupWrapper('Evolução na Trofa', styles,
  
    // #### TROFA ####
    <MultiLineChart
      dataArray={[
        trofaEntries.getAll(KEY.TOWN_INCIDENCE_14), trofaLineGenerator(240),
        trofaLineGenerator(480), trofaLineGenerator(960),
      ]}
      dateRange={dateRange}
      labels={[
        'Incidência na Trofa (a 14 dias p/ 100k hab.)', 'Risco elevado',
        'Risco muito elevado', 'Risco extremamente elevado'
      ]}
      themes={[themeYellow, severityTheme1, severityTheme2, severityTheme3]}
    />,
  );
}

export default TrofaCharts;

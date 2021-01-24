import React from "react";
import { chartGroupWrapper } from "../../utils/chartUtils";
import { smoothEntryValues } from '../../utils/EntriesOps';
import MultiLineChart from "../chart/MultiLineChart";
import { themeRed, themeGreyTransparent } from "../../config/themes";
import { KEY } from "../../model/EntriesAggregator";
import EntriesStore from "../../store/EntriesStore";
import GeneralStore from "../../store/GeneralStore";

const PortugalCharts = () => {
  const styles = GeneralStore.useState(s => s.styles);
  const ptEntries = EntriesStore.useState(s => s.portugalEntries);
  const dateRange = EntriesStore.useState(s => s.dateRange);

  return chartGroupWrapper('Evolução em Portugal', styles,

    // #### PORTUGAL ####
    <MultiLineChart
      dataArray={[ptEntries.getAll(KEY.NEWCASES_PT), smoothEntryValues(ptEntries.getAll(KEY.NEWCASES_PT))]}
      dateRange={dateRange}
      labels={['Casos novos em Portugal', '']}
      themes={[themeRed, themeGreyTransparent]}
    />,
  );
}

export default PortugalCharts;

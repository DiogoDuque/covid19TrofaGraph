import React from "react";
import { chartGroupWrapper } from "../../utils/chartUtils";
import { smoothEntryValues, derivateEntryValues } from '../../utils/EntriesOps';
import MultiLineChart from "../chart/MultiLineChart";
import { themeRed, themeDark, themeGreyTransparent } from "../../config/themes";
import { KEY } from "../../model/EntriesAggregator";
import EntriesStore from "../../store/EntriesStore";
import GeneralStore from "../../store/GeneralStore";

const PortugalCharts = () => {
  const styles = GeneralStore.useState(s => s.styles);
  const ptEntries = EntriesStore.useState(s => s.portugalEntries);
  const dateRange = EntriesStore.useState(s => s.dateRange);

  const deathEntries = derivateEntryValues(ptEntries.getAll(KEY.DEAD_PT));

  return chartGroupWrapper('Evolução em Portugal', styles,

    <MultiLineChart
      dataArray={[ptEntries.getAll(KEY.NEWCASES_PT), smoothEntryValues(ptEntries.getAll(KEY.NEWCASES_PT))]}
      dateRange={dateRange}
      labels={['Casos novos em Portugal', '']}
      themes={[themeRed, themeGreyTransparent]}
    />,

    <MultiLineChart
    dataArray={[deathEntries, smoothEntryValues(deathEntries)]}
    dateRange={dateRange}
    labels={['Mortes em Portugal', '']}
    themes={[themeDark, themeGreyTransparent]}
  />,
  );
}

export default PortugalCharts;

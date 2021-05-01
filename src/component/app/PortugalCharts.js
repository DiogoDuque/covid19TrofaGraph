import React from "react";
import { chartGroupWrapper } from "../../utils/chartUtils";
import { smoothEntryValues, derivateEntryValues, getEntriesLineGenerator } from '../../utils/EntriesOps';
import MultiLineChart from "../chart/MultiLineChart";
import {
  themeRed, themeBlue, themeBlueLightNoBG, themeDark, themeGreyTransparent, severityTheme1
} from "../../config/themes";
import { KEY } from "../../model/EntriesAggregator";
import EntriesStore from "../../store/EntriesStore";
import GeneralStore from "../../store/GeneralStore";

const PortugalCharts = () => {
  const styles = GeneralStore.useState(s => s.styles);
  const ptEntries = EntriesStore.useState(s => s.portugalEntries);
  const dateRange = EntriesStore.useState(s => s.dateRange);

  const deathEntries = derivateEntryValues(ptEntries.getAll(KEY.DEAD_PT));

  const ptLineGenerator = getEntriesLineGenerator(ptEntries.getAll(KEY.INCIDENCE_PT));

  return chartGroupWrapper('Evolução em Portugal', styles,

    <MultiLineChart
      dataArray={[
        ptEntries.getAll(KEY.NEWCASES_PT), smoothEntryValues(ptEntries.getAll(KEY.NEWCASES_PT)),
        
      ]}
      dateRange={dateRange}
      labels={['Casos novos em Portugal', 'Tendência']}
      themes={[themeRed, themeGreyTransparent]}
    />,

    <MultiLineChart
      dataArray={[
        ptEntries.getAll(KEY.INCIDENCE_PT), smoothEntryValues(ptEntries.getAll(KEY.INCIDENCE_PT))
        
      ]}
      dateRange={dateRange}
      labels={['Incidência em Portugal (p/ 100k hab.)', 'Tendência']}
      themes={[themeBlue, themeGreyTransparent]}
    />,

    <MultiLineChart
      dataArray={[
        ptEntries.getAll(KEY.TRANSMISSIBILITY_PT_CONTINENT), ptLineGenerator(1)
      ]}
      dateRange={dateRange}
      labels={['R(t) em Portugal Continental', 'R(t)=1']}
      themes={[themeBlueLightNoBG, severityTheme1]}
      zeroBased={false}
    />,

    <MultiLineChart
    dataArray={[deathEntries, smoothEntryValues(deathEntries)]}
    dateRange={dateRange}
    labels={['Mortes em Portugal', 'Tendência']}
    themes={[themeDark, themeGreyTransparent]}
  />,
  );
}

export default PortugalCharts;

import React from "react";
import { chartGroupWrapper } from "../../utils/chartUtils";
import { getEntriesLineGenerator, smoothEntryValues, derivateEntryValues } from '../../utils/EntriesOps';
import MultiLineChart from "../chart/MultiLineChart";
import {
  themeRed, themeYellow, themeYellowNoBG, themeCyanNoBG, themeMagentaNoBG, themeBlueNoBG, themeGreenNoBG,
  themeGreyTransparent, severityTheme1, severityTheme2, severityTheme3
} from "../../config/themes";
import { KEY } from "../../model/EntriesAggregator";
import EntriesStore from "../../store/EntriesStore";
import GeneralStore from "../../store/GeneralStore";

const NewCasesCharts = () => {
  const styles = GeneralStore.useState(s => s.styles);
  const trofaEntries = EntriesStore.useState(s => s.trofaEntries);
  const ptEntries = EntriesStore.useState(s => s.portugalEntries);
  const dateRange = EntriesStore.useState(s => s.dateRange);

  const trofaLineGenerator = getEntriesLineGenerator(trofaEntries.getAll(KEY.TOWN_INCIDENCE_14));
  const northEntries = derivateEntryValues(ptEntries.getAll(KEY.CONFIRMED_NORTH));
  const centerEntries = derivateEntryValues(ptEntries.getAll(KEY.CONFIRMED_CENTER));
  const lisbonEntries = derivateEntryValues(ptEntries.getAll(KEY.CONFIRMED_LISBOA_TEJO));
  const alentejoEntries = derivateEntryValues(ptEntries.getAll(KEY.CONFIRMED_ALENTEJO));
  const algarveEntries = derivateEntryValues(ptEntries.getAll(KEY.CONFIRMED_ALGARVE));
  return chartGroupWrapper('Casos novos', styles,

    // #### PORTUGAL ####
    <MultiLineChart
      dataArray={[ptEntries.getAll(KEY.NEWCASES_PT), smoothEntryValues(ptEntries.getAll(KEY.NEWCASES_PT))]}
      dateRange={dateRange}
      labels={['Casos novos em Portugal', '']}
      themes={[themeRed, themeGreyTransparent]}
    />,

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

    // #### ZONAS DE PORTUGAL ####
    <MultiLineChart
    dataArray={[northEntries, centerEntries, lisbonEntries, alentejoEntries, algarveEntries]}
      dateRange={dateRange}
      labels={[
        'Casos novos no Norte', 'Casos novos no Centro', 'Casos novos em Lisboa/V.Tejo',
        'Casos novos no Alentejo', 'Casos novos no Algarve']}
      themes={[themeYellowNoBG, themeMagentaNoBG, themeCyanNoBG, themeBlueNoBG, themeGreenNoBG]}
    />,

    // #### NORTE ####
    <MultiLineChart
    dataArray={[northEntries, smoothEntryValues(northEntries)]}
      dateRange={dateRange}
      labels={['Casos novos no Norte', '']}
      themes={[themeYellow, themeGreyTransparent]}
    />
  );
}

export default NewCasesCharts;

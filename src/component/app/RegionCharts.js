import React from "react";
import { chartGroupWrapper } from "../../utils/chartUtils";
import { smoothEntryValues, derivateEntryValues } from '../../utils/EntriesOps';
import MultiLineChart from "../chart/MultiLineChart";
import {
  themeYellow, themeYellowNoBG, themeCyanNoBG, themeMagentaNoBG, themeBlueNoBG,
  themeGreenNoBG, themeGreyTransparent
} from "../../config/themes";
import { KEY } from "../../model/EntriesAggregator";
import EntriesStore from "../../store/EntriesStore";
import GeneralStore from "../../store/GeneralStore";

const RegionCharts = () => {
  const styles = GeneralStore.useState(s => s.styles);
  const ptEntries = EntriesStore.useState(s => s.portugalEntries);
  const dateRange = EntriesStore.useState(s => s.dateRange);

  const northEntries = derivateEntryValues(ptEntries.getAll(KEY.CONFIRMED_NORTH));
  const centerEntries = derivateEntryValues(ptEntries.getAll(KEY.CONFIRMED_CENTER));
  const lisbonEntries = derivateEntryValues(ptEntries.getAll(KEY.CONFIRMED_LISBOA_TEJO));
  const alentejoEntries = derivateEntryValues(ptEntries.getAll(KEY.CONFIRMED_ALENTEJO));
  const algarveEntries = derivateEntryValues(ptEntries.getAll(KEY.CONFIRMED_ALGARVE));
  return chartGroupWrapper('Evolução regional', styles,

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

export default RegionCharts;

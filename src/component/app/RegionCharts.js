import React from "react";
import { chartGroupWrapper } from "../../utils/chartUtils";
import { derivateEntryValues, convertDailyCountToDailyIncidency } from '../../utils/EntriesOps';
import MultiLineChart from "../chart/MultiLineChart";
import {
  themeYellowNoBG, themeCyanNoBG, themeMagentaNoBG, themeBlueNoBG, themeGreenNoBG
} from "../../config/themes";
import { KEY } from "../../model/EntriesAggregator";
import {
  POPULATION_NORTH, POPULATION_CENTER, POPULATION_LISBOA, POPULATION_ALENTEJO, POPULATION_ALGARVE
} from '../../config/demographicValues';
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
  const northDailyIncidencyEntries = convertDailyCountToDailyIncidency(northEntries, POPULATION_NORTH);
  const centerDailyIncidencyEntries = convertDailyCountToDailyIncidency(centerEntries, POPULATION_CENTER);
  const lisbonDailyIncidencyEntries = convertDailyCountToDailyIncidency(lisbonEntries, POPULATION_LISBOA);
  const alentejoDailyIncidencyEntries = convertDailyCountToDailyIncidency(alentejoEntries, POPULATION_ALENTEJO);
  const algarveDailyIncidencyEntries = convertDailyCountToDailyIncidency(algarveEntries, POPULATION_ALGARVE);

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

    // #### INCIDENCIA NAS ZONAS DE PORTUGAL ####
    <MultiLineChart
      dataArray={[
        northDailyIncidencyEntries, centerDailyIncidencyEntries, lisbonDailyIncidencyEntries,
        alentejoDailyIncidencyEntries, algarveDailyIncidencyEntries
      ]}
      dateRange={dateRange}
      labels={[
        'Incidência no Norte (a 1 dia p/ 100k hab.)', 'Incidência no Centro (a 1 dia p/ 100k hab.)',
        'Incidência em Lisboa/V.Tejo (a 1 dia p/ 100k hab.)', 'Incidência no Alentejo (a 1 dia p/ 100k hab.)',
        'Incidência no Algarve (a 1 dia p/ 100k hab.)']}
      themes={[themeYellowNoBG, themeMagentaNoBG, themeCyanNoBG, themeBlueNoBG, themeGreenNoBG]}
    />,
  );
}

export default RegionCharts;

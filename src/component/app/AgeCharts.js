import React from "react";
import { chartGroupWrapper } from "../../utils/chartUtils";
import { derivateEntryValues, convertDailyCountToDailyIncidency, mergeEntryValuesBySum } from '../../utils/EntriesOps';
import MultiLineChart from "../chart/MultiLineChart";
import {
  themeYellowNoBG, themeCyanNoBG, themeBlueNoBG, themeGreenNoBG, themeRedNoBG,
  themeYellowDarkNoBG, themeMagentaDarkNoBG, themeMagentaLightNoBG
} from "../../config/themes";
import { KEY } from "../../model/EntriesAggregator";
import {
  POPULATION_0_9, POPULATION_10_19, POPULATION_20_29, POPULATION_30_39, POPULATION_40_49,
  POPULATION_50_59, POPULATION_60_69, POPULATION_70_PLUS,
} from '../../config/demographicValues';
import EntriesStore from "../../store/EntriesStore";
import GeneralStore from "../../store/GeneralStore";

const AgeCharts = () => {
  const styles = GeneralStore.useState(s => s.styles);
  const ptEntries = EntriesStore.useState(s => s.portugalEntries);
  const dateRange = EntriesStore.useState(s => s.dateRange);

  const new0_9 = derivateEntryValues(ptEntries.getAll(KEY.CONFIRMED_0_9));
  const new10_19 = derivateEntryValues(ptEntries.getAll(KEY.CONFIRMED_10_19));
  const new20_29 = derivateEntryValues(ptEntries.getAll(KEY.CONFIRMED_20_29));
  const new30_39 = derivateEntryValues(ptEntries.getAll(KEY.CONFIRMED_30_39));
  const new40_49 = derivateEntryValues(ptEntries.getAll(KEY.CONFIRMED_40_49));
  const new50_59 = derivateEntryValues(ptEntries.getAll(KEY.CONFIRMED_50_59));
  const new60_69 = derivateEntryValues(ptEntries.getAll(KEY.CONFIRMED_60_69));
  const new70_plus = mergeEntryValuesBySum(
    derivateEntryValues(ptEntries.getAll(KEY.CONFIRMED_70_79)),
    derivateEntryValues(ptEntries.getAll(KEY.CONFIRMED_80_PLUS)));

  const newDailyIncidency0_9 = convertDailyCountToDailyIncidency(new0_9, POPULATION_0_9);
  const newDailyIncidency10_19 = convertDailyCountToDailyIncidency(new10_19, POPULATION_10_19);
  const newDailyIncidency20_29 = convertDailyCountToDailyIncidency(new20_29, POPULATION_20_29);
  const newDailyIncidency30_39 = convertDailyCountToDailyIncidency(new30_39, POPULATION_30_39);
  const newDailyIncidency40_49 = convertDailyCountToDailyIncidency(new40_49, POPULATION_40_49);
  const newDailyIncidency50_59 = convertDailyCountToDailyIncidency(new50_59, POPULATION_50_59);
  const newDailyIncidency60_69 = convertDailyCountToDailyIncidency(new60_69, POPULATION_60_69);
  const newDailyIncidency70_plus = convertDailyCountToDailyIncidency(new70_plus, POPULATION_70_PLUS);

  const dead0_9 = derivateEntryValues(ptEntries.getAll(KEY.DEAD_0_9));
  const dead10_19 = derivateEntryValues(ptEntries.getAll(KEY.DEAD_10_19));
  const dead20_29 = derivateEntryValues(ptEntries.getAll(KEY.DEAD_20_29));
  const dead30_39 = derivateEntryValues(ptEntries.getAll(KEY.DEAD_30_39));
  const dead40_49 = derivateEntryValues(ptEntries.getAll(KEY.DEAD_40_49));
  const dead50_59 = derivateEntryValues(ptEntries.getAll(KEY.DEAD_50_59));
  const dead60_69 = derivateEntryValues(ptEntries.getAll(KEY.DEAD_60_69));
  const dead70_plus = mergeEntryValuesBySum(
    derivateEntryValues(ptEntries.getAll(KEY.DEAD_70_79)),
    derivateEntryValues(ptEntries.getAll(KEY.DEAD_80_PLUS)));
 
  const themes = [
    themeMagentaLightNoBG, themeMagentaDarkNoBG, themeBlueNoBG, themeCyanNoBG,
    themeGreenNoBG, themeYellowNoBG, themeYellowDarkNoBG, themeRedNoBG,
  ];


  return chartGroupWrapper('Evolução por idade', styles,

  // #### CASOS NOVOS POR IDADE ####
  <MultiLineChart
  dataArray={[new0_9, new10_19, new20_29, new30_39, new40_49, new50_59, new60_69, new70_plus]}
    dateRange={dateRange}
    labels={
      ['0-9', '10-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70+']
      .map(a => `Casos novos nos ${a} anos`)
    }
    themes={themes}
  />,

  // #### INCIDENCIA DE CASOS NOVOS POR IDADE ####
  <MultiLineChart
    dataArray={[
      newDailyIncidency0_9, newDailyIncidency10_19, newDailyIncidency20_29, newDailyIncidency30_39,
      newDailyIncidency40_49, newDailyIncidency50_59, newDailyIncidency60_69, newDailyIncidency70_plus]}
    dateRange={dateRange}
    labels={
      ['0-9', '10-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70+']
      .map(a => `Incidência nos ${a} anos (p/ 100k pax na faixa)`)
    }
    themes={themes}
  />,

  // #### CASOS NOVOS POR IDADE ####
  <MultiLineChart
  dataArray={[dead0_9, dead10_19, dead20_29, dead30_39, dead40_49, dead50_59, dead60_69, dead70_plus]}
    dateRange={dateRange}
    labels={
      ['0-9', '10-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70+']
      .map(a => `Mortes nos ${a} anos`)
    }
    themes={themes}
  />,
  );
}

export default AgeCharts;

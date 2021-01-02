import React from "react";
import PropTypes from 'prop-types';
import { chartGroupWrapper } from "../../utils/chartUtils";
import { getEntriesLineGenerator, smoothEntryValues, derivateEntryValues } from '../../utils/EntriesOps';
import MultiLineChart from "../chart/MultiLineChart";
import {
  themeYellow, themeYellowNoBG, themeCyanNoBG, themeMagentaNoBG, themeBlueNoBG, themeGreenNoBG,
  themeGreyTransparent, severityTheme1, severityTheme2, severityTheme3
} from "../../config/themes";
import EntriesAggregator, { KEY } from "../../model/EntriesAggregator";

const NewCasesCharts = ({ trofaEntries, ptEntries, dateRange, classes }) => {
  const trofaLineGenerator = getEntriesLineGenerator(trofaEntries.getAll(KEY.TOWN_INCIDENCE_14));
  const northEntries = derivateEntryValues(ptEntries.getAll(KEY.CONFIRMED_NORTH));
  const centerEntries = derivateEntryValues(ptEntries.getAll(KEY.CONFIRMED_CENTER));
  const lisbonEntries = derivateEntryValues(ptEntries.getAll(KEY.CONFIRMED_LISBOA_TEJO));
  const alentejoEntries = derivateEntryValues(ptEntries.getAll(KEY.CONFIRMED_ALENTEJO));
  const algarveEntries = derivateEntryValues(ptEntries.getAll(KEY.CONFIRMED_ALGARVE));
  return chartGroupWrapper('Casos novos', classes,

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

    // #### NORTE ####
    <MultiLineChart
    dataArray={[northEntries, smoothEntryValues(northEntries)]}
      dateRange={dateRange}
      labels={['Casos novos no Norte', '']}
      themes={[themeYellow, themeGreyTransparent]}
    />,

    // #### RESTO DE PORTUGAL ####
    <MultiLineChart
    dataArray={[northEntries, centerEntries, lisbonEntries, alentejoEntries, algarveEntries]}
      dateRange={dateRange}
      labels={[
        'Casos novos no Norte', 'Casos novos no Centro', 'Casos novos em Lisboa/V.Tejo',
        'Casos novos no Alentejo', 'Casos novos no Algarve']}
      themes={[themeYellowNoBG, themeMagentaNoBG, themeCyanNoBG, themeBlueNoBG, themeGreenNoBG]}
    />,

    // #### PORTUGAL ####
    <MultiLineChart
      dataArray={[ptEntries.getAll(KEY.NEWCASES_PT), smoothEntryValues(ptEntries.getAll(KEY.NEWCASES_PT))]}
      dateRange={dateRange}
      labels={['Casos novos em Portugal', '']}
      themes={[themeYellow, themeGreyTransparent]}
    />
  );
}

NewCasesCharts.propTypes = {
  trofaEntries: PropTypes.instanceOf(EntriesAggregator).isRequired,
  ptEntries: PropTypes.instanceOf(EntriesAggregator).isRequired,
  dateRange: PropTypes.number.isRequired,
  classes: PropTypes.any.isRequired,
};

export default NewCasesCharts;

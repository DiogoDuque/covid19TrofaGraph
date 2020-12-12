import React from "react";
import PropTypes from 'prop-types';
import { chartGroupWrapper } from "../utils/chartUtils";
import { getEntriesLineGenerator, smoothEntryValues } from '../utils/EntriesOps';
import MultiLineChart from "./templates/MultiLineChart";
import { themeYellow, themeGreyTransparent, severityTheme1, severityTheme2, severityTheme3 } from "../config/themes";
import Entry from "../model/Entry";
import PortugalEntries from "../model/PortugalEntries";

const NewCasesCharts = ({ trofaEntries, northEntries, ptEntries, dateRange, classes }) => {
  const trofaLineGenerator = getEntriesLineGenerator(trofaEntries);
  return chartGroupWrapper('Casos novos', classes,

    // #### TROFA ####
    <MultiLineChart
      dataArray={[
        trofaEntries, trofaLineGenerator(240),
        trofaLineGenerator(480), trofaLineGenerator(960),
      ]}
      dateRange={dateRange}
      labels={[
        'Casos novos na Trofa [por 100k hab.]', 'Risco elevado',
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

    // #### PORTUGAL ####
    <MultiLineChart
      dataArray={[ptEntries.newConfirmedPt, smoothEntryValues(ptEntries.newConfirmedPt)]}
      dateRange={dateRange}
      labels={['Casos novos em Portugal', '']}
      themes={[themeYellow, themeGreyTransparent]}
    />
  );
}

NewCasesCharts.propTypes = {
  trofaEntries: PropTypes.arrayOf(PropTypes.instanceOf(Entry)).isRequired,
  northEntries: PropTypes.arrayOf(PropTypes.instanceOf(Entry)).isRequired,
  ptEntries: PropTypes.instanceOf(PortugalEntries).isRequired,
  dateRange: PropTypes.number.isRequired,
  classes: PropTypes.any.isRequired,
};

export default NewCasesCharts;

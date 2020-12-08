import React from "react";
import PropTypes from 'prop-types';
import { chartGroupWrapper, getEntriesLineGenerator } from "../utils/chartUtils";
import DefaultLineChart from "./templates/DefaultLineChart";
import MultiLineChart from "./templates/MultiLineChart";
import { themeYellow, severityTheme1, severityTheme2, severityTheme3 } from "../config/themes";
import Entry from "../model/Entry";
import PortugalEntries from "../model/PortugalEntries";

const NewCasesCharts = ({ trofaEntries, northEntries, ptEntries, dateRange, classes }) => {
  const trofaLineGenerator = getEntriesLineGenerator(trofaEntries);
  return chartGroupWrapper('Casos novos', classes,
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
    <DefaultLineChart
      data={northEntries}
      dateRange={dateRange}
      label="Casos novos no Norte"
      theme={themeYellow}
    />,
    <DefaultLineChart
      data={ptEntries.newConfirmedPt}
      dateRange={dateRange}
      label="Casos novos em Portugal"
      theme={themeYellow}
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

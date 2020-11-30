import React from "react";
import PropTypes from 'prop-types';
import { chartGroupWrapper } from "../utils/chartUtils";
import DefaultLineChart from "./templates/DefaultLineChart";
import { themeYellow } from "../config/themes";
import Entry from "../model/Entry";
import PortugalEntries from "../model/PortugalEntries";

const NewCasesCharts = ({ trofaEntries, northEntries, ptEntries, classes }) => {
  return chartGroupWrapper('Casos novos', classes,
    <DefaultLineChart
      data={trofaEntries}
      datapointsCount={14}
      dateRange={90}
      label="Casos novos na Trofa [por 100k hab.]"
      theme={themeYellow}
    />,
    <DefaultLineChart
      data={northEntries}
      datapointsCount={90}
      label="Casos novos no Norte"
      theme={themeYellow}
    />,
    <DefaultLineChart
      data={ptEntries.newConfirmedPt}
      datapointsCount={90}
      label="Casos novos em Portugal"
      theme={themeYellow}
    />
  );
}

NewCasesCharts.propTypes = {
  trofaEntries: PropTypes.arrayOf(PropTypes.instanceOf(Entry)).isRequired,
  northEntries: PropTypes.arrayOf(PropTypes.instanceOf(Entry)).isRequired,
  ptEntries: PropTypes.instanceOf(PortugalEntries).isRequired,
  classes: PropTypes.any.isRequired,
};

export default NewCasesCharts;

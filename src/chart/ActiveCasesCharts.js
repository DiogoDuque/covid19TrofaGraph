import React from "react";
import PropTypes from 'prop-types';
import { chartGroupWrapper, derivateEntryValues } from "../utils/chartUtils";
import DefaultLineChart from "./templates/DefaultLineChart";
import { themeMagenta } from "../config/themes";
import PortugalEntries from "../model/PortugalEntries";

const ActiveCasesCharts = ({ ptEntries, classes }) => {
  return chartGroupWrapper('Casos ativos', classes,
    <DefaultLineChart
      data={ptEntries.activePt}
      datapointsCount={30}
      label="Casos ativos em Portugal"
      theme={themeMagenta}
    />,
    <DefaultLineChart
      data={derivateEntryValues(ptEntries.activePt)}
      datapointsCount={30}
      label="Variação de casos ativos em Portugal"
      theme={themeMagenta}
      zeroBased={false}
    />
  );
}

ActiveCasesCharts.propTypes = {
  ptEntries: PropTypes.instanceOf(PortugalEntries).isRequired,
  classes: PropTypes.any.isRequired,
};

export default ActiveCasesCharts;

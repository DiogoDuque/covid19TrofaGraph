import React from "react";
import PropTypes from 'prop-types';
import { chartGroupWrapper } from "../utils/chartUtils";
import DefaultLineChart from "./templates/DefaultLineChart";
import { themeCyan } from "../config/themes";
import Entry from "../model/Entry";
import PortugalEntries from "../model/PortugalEntries";

const ConfirmedCasesCharts = ({ trofaEntries, ptEntries, classes }) => {
  return chartGroupWrapper('Casos confirmados', classes,
    <DefaultLineChart
      data={trofaEntries}
      datapointsCount={14}
      dateRange={90}
      label="Casos confirmados na Trofa"
      theme={themeCyan}
    />,
    <DefaultLineChart
      data={ptEntries.confirmedNorth}
      datapointsCount={90}
      label="Casos confirmados no Norte"
      theme={themeCyan}
    />,
    <DefaultLineChart
      data={ptEntries.confirmedPt}
      datapointsCount={90}
      label="Casos confirmados em Portugal"
      theme={themeCyan}
    />
  );
}

ConfirmedCasesCharts.propTypes = {
  trofaEntries: PropTypes.arrayOf(PropTypes.instanceOf(Entry)).isRequired,
  ptEntries: PropTypes.instanceOf(PortugalEntries).isRequired,
  classes: PropTypes.any.isRequired,
};

export default ConfirmedCasesCharts;

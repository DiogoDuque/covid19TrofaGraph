import React from "react";
import PropTypes from 'prop-types';
import { Typography, Grid } from "@material-ui/core";
import { chartWrapper } from "../utils/chartUtils";
import DefaultLineChart from "./DefaultLineChart";
import { themeCyan } from "../config/themes";
import Entry from "../model/Entry";
import PortugalEntries from "../model/PortugalEntries";

const ConfirmedCasesCharts = ({ trofaEntries, ptEntries, classes }) => {
  return (
    <div>
      <Typography variant="h3" style={{ textAlign: 'center' }} gutterBottom>
        Casos confirmados
      </Typography>
      <Grid container spacing={3}>
        {chartWrapper(<DefaultLineChart
          data={trofaEntries}
          datapointsCount={14}
          dateRange={90}
          label="Casos confirmados na Trofa"
          theme={themeCyan}
        />, classes)}
        {chartWrapper(<DefaultLineChart
          data={ptEntries.confirmedNorth}
          datapointsCount={30}
          label="Casos confirmados no Norte"
          theme={themeCyan}
        />, classes)}
        {chartWrapper(<DefaultLineChart
          data={ptEntries.confirmedPt}
          datapointsCount={30}
          label="Casos confirmados em Portugal"
          theme={themeCyan}
        />, classes)}
        {chartWrapper(<DefaultLineChart
          data={ptEntries.confirmedPt}
          datapointsCount={90}
          label="Casos confirmados em Portugal"
          theme={themeCyan}
        />, classes)}
      </Grid>
    </div>
  );
}

ConfirmedCasesCharts.propTypes = {
  trofaEntries: PropTypes.arrayOf(PropTypes.instanceOf(Entry)).isRequired,
  ptEntries: PropTypes.instanceOf(PortugalEntries).isRequired,
  classes: PropTypes.any.isRequired,
};

export default ConfirmedCasesCharts;

import React from "react";
import PropTypes from 'prop-types';
import { Typography, Grid } from "@material-ui/core";
import { chartWrapper } from "../utils/chartUtils";
import DefaultLine from "./DefaultLine";
import { themeYellow } from "../config/themes";
import Entry from "../model/Entry";
import PortugalEntries from "../model/PortugalEntries";

const NewCasesCharts = ({ trofaEntries, northEntries, ptEntries, classes }) => {
  return (
    <div>
      <Typography variant="h3" style={{ textAlign: 'center' }} gutterBottom>
        Casos novos
      </Typography>
      <Grid container spacing={3}>
        {chartWrapper(<DefaultLine
          data={trofaEntries}
          datapointsCount={30}
          label="Casos novos na Trofa"
          theme={themeYellow}
        />, classes)}
        {chartWrapper(<DefaultLine
          data={northEntries}
          datapointsCount={30}
          label="Casos novos no Norte"
          theme={themeYellow}
        />, classes)}
        {chartWrapper(<DefaultLine
          data={ptEntries.newConfirmedPt}
          datapointsCount={30}
          label="Casos novos em Portugal"
          theme={themeYellow}
        />, classes)}
        {chartWrapper(<DefaultLine
          data={ptEntries.newConfirmedPt}
          datapointsCount={90}
          label="Casos novos em Portugal"
          theme={themeYellow}
        />, classes)}
      </Grid>
    </div>
  );
}

NewCasesCharts.propTypes = {
  trofaEntries: PropTypes.arrayOf(PropTypes.instanceOf(Entry)).isRequired,
  northEntries: PropTypes.arrayOf(PropTypes.instanceOf(Entry)).isRequired,
  ptEntries: PropTypes.instanceOf(PortugalEntries).isRequired,
  classes: PropTypes.any.isRequired,
};

export default NewCasesCharts;

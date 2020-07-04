import React from "react";
import PropTypes from 'prop-types';
import { Typography, Grid } from "@material-ui/core";
import { chartWrapper } from "../utils/chartUtils";
import DefaultLine from "./DefaultLine";
import { themeYellow } from "../config/themes";
import Entry from "../model/Entry";
import PortugalEntries from "../model/PortugalEntries";

function processCaseCount2NewCases(entries) {
  const newCasesEntries = [];
  let prevEntry = entries[0];
  for(let i=1; i<entries.length; i++) {
    const currEntry = entries[i];
    newCasesEntries.push(new Entry(currEntry.dateStr, currEntry.count - prevEntry.count));
    prevEntry = currEntry;
  }
  return newCasesEntries;
}

const NewCasesCharts = ({ trofaEntries, ptEntries, classes }) => {
  trofaEntries = processCaseCount2NewCases(trofaEntries);

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
          data={ptEntries.confirmedNorth}
          datapointsCount={30}
          label="Casos novos no Norte"
          theme={themeYellow}
        />, classes)}
        {chartWrapper(<DefaultLine
          data={ptEntries.confirmedPt}
          datapointsCount={30}
          label="Casos novos em Portugal"
          theme={themeYellow}
        />, classes)}
        {chartWrapper(<DefaultLine
          data={ptEntries.confirmedPt}
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
  ptEntries: PropTypes.instanceOf(PortugalEntries).isRequired,
  classes: PropTypes.any.isRequired,
};

export default NewCasesCharts;

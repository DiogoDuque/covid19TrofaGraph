import React from "react";
import PropTypes from 'prop-types';
import { Typography, Grid } from "@material-ui/core";
import { chartWrapper } from "../utils/chartUtils";
import DefaultLine from "./DefaultLine";
import { themeMagenta } from "../config/themes";
import Entry from "../model/Entry";
import PortugalEntries from "../model/PortugalEntries";

const CaseVariationCharts = ({ trofaEntries, ptEntries, classes }) => {
  return (
    <div>
      <Typography variant="h3" style={{ textAlign: 'center' }} gutterBottom>
        Variação de casos
      </Typography>
      <Grid container spacing={3}>
        {chartWrapper(<DefaultLine
          data={trofaEntries}
          datapointsCount={30}
          label="Variação de casos na Trofa"
          theme={themeMagenta}
          zeroBased={false}
        />, classes)}
        {chartWrapper(<DefaultLine
          data={[]}
          datapointsCount={30}
          label="Variação de casos no Norte"
          theme={themeMagenta}
          zeroBased={false}
        />, classes)}
        {chartWrapper(<DefaultLine
          data={[]}
          datapointsCount={30}
          label="Variação de casos em Portugal"
          theme={themeMagenta}
          zeroBased={false}
        />, classes)}
        {chartWrapper(<DefaultLine
          data={[]}
          datapointsCount={90}
          label="Variação de casos em Portugal"
          theme={themeMagenta}
          zeroBased={false}
        />, classes)}
      </Grid>
    </div>
  );
}

CaseVariationCharts.propTypes = {
  trofaEntries: PropTypes.arrayOf(PropTypes.instanceOf(Entry)).isRequired,
  ptEntries: PropTypes.instanceOf(PortugalEntries).isRequired,
  classes: PropTypes.any.isRequired,
};

export default CaseVariationCharts;

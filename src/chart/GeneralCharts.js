import React from "react";
import PropTypes from 'prop-types';
import { chartGroupWrapper } from "../utils/chartUtils";
import DefaultLineChart from "./templates/DefaultLineChart";
import MultiLineChart from "./templates/MultiLineChart";
import { themeMagenta, themeMagentaDark, themeMagentaLight } from "../config/themes";
import { EntriesAggregator, KEY } from "../model/EntriesAggregator";

const GeneralCharts = ({ ptEntries, dateRange, classes }) => {
  return chartGroupWrapper('Casos ativos', classes,
    <DefaultLineChart
      data={ptEntries.getAll(KEY.ACTIVE_PT)}
      dateRange={dateRange}
      label="Casos ativos em Portugal"
      theme={themeMagenta}
      zeroBased={true}
    />,
    <MultiLineChart
      dataArray={[ptEntries.getAll(KEY.HOSPITALIZED), ptEntries.getAll(KEY.HOSPITALIZED_ICU)]}
      dateRange={dateRange}
      labels={["Internados em Portugal", "Internados em UCI em Portugal"]}
      themes={[themeMagentaLight, themeMagentaDark]}
      zeroBased={true}
    />
  );
}

GeneralCharts.propTypes = {
  ptEntries: PropTypes.instanceOf(EntriesAggregator).isRequired,
  dateRange: PropTypes.number.isRequired,
  classes: PropTypes.any.isRequired,
};

export default GeneralCharts;

import React from "react";
import PropTypes from 'prop-types';
import { chartGroupWrapper } from "../../utils/chartUtils";
import DefaultLineChart from "../chart/DefaultLineChart";
import MultiLineChart from "../chart/MultiLineChart";
import { themeMagenta, themeMagentaDark, themeMagentaLight } from "../../config/themes";
import EntriesAggregator, { KEY } from "../../model/EntriesAggregator";

const GeneralCharts = ({ ptEntries, dateRange }) => {
  return chartGroupWrapper('Casos ativos',
    <DefaultLineChart
      data={ptEntries.getAll(KEY.ACTIVE_PT)}
      dateRange={dateRange}
      label="Casos ativos em Portugal"
      theme={themeMagenta}
      zeroBased={true}
    />,
    <MultiLineChart
      dataArray={[ptEntries.getAll(KEY.HOSPITALIZED_NURSERY), ptEntries.getAll(KEY.HOSPITALIZED_ICU)]}
      dateRange={dateRange}
      labels={["Internados em Enfermaria em Portugal", "Internados em UCI em Portugal"]}
      themes={[themeMagentaLight, themeMagentaDark]}
      zeroBased={true}
    />
  );
}

GeneralCharts.propTypes = {
  ptEntries: PropTypes.instanceOf(EntriesAggregator).isRequired,
  dateRange: PropTypes.number.isRequired,
};

export default GeneralCharts;

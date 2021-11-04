import React from "react";
import { chartGroupWrapper } from "../../utils/chartUtils";
import DefaultLineChart from "../chart/DefaultLineChart";
import MultiLineChart from "../chart/MultiLineChart";
import { themeMagenta, themeMagentaDark, themeMagentaLight } from "../../config/themes";
import { KEY } from "../../model/EntriesAggregator";
import EntriesStore from "../../store/EntriesStore";
import GeneralStore from "../../store/GeneralStore";
import { POPULATION_PT } from "../../config/demographicValues";

const GeneralCharts = () => {
  const styles = GeneralStore.useState(s => s.styles);
  const ptEntries = EntriesStore.useState(s => s.portugalEntries);
  const dateRange = EntriesStore.useState(s => s.dateRange);

  return chartGroupWrapper('Casos ativos', styles,
    <DefaultLineChart
      data={ptEntries.getAll(KEY.ACTIVE_PT)}
      dateRange={dateRange}
      label="Casos ativos em Portugal"
      theme={themeMagenta}
    />,
    <MultiLineChart
      dataArray={[ptEntries.getAll(KEY.HOSPITALIZED_NURSERY), ptEntries.getAll(KEY.HOSPITALIZED_ICU)]}
      dateRange={dateRange}
      labels={["Internados em Enfermaria em Portugal", "Internados em UCI em Portugal"]}
      themes={[themeMagentaLight, themeMagentaDark]}
    />,
  );
}

export default GeneralCharts;

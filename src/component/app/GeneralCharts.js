import React from "react";
import { chartGroupWrapper } from "../../utils/chartUtils";
import DefaultLineChart from "../chart/DefaultLineChart";
import MultiLineChart from "../chart/MultiLineChart";
import { themeMagenta, themeMagentaDark, themeMagentaLight } from "../../config/themes";
import { KEY } from "../../model/EntriesAggregator";
import EntriesStore from "../../store/EntriesStore";
import GeneralStore from "../../store/GeneralStore";
import { POPULATION_PT } from "../../config/demographicValues";

const vaccineEntryToPercentage = e => e.buildNewWith(e.x, parseFloat(Number(100 * e.y / POPULATION_PT).toFixed(2)));

const GeneralCharts = () => {
  const styles = GeneralStore.useState(s => s.styles);
  const ptEntries = EntriesStore.useState(s => s.portugalEntries);
  const vaccineEntries = EntriesStore.useState(s => s.vaccineEntries);
  const dateRange = EntriesStore.useState(s => s.dateRange);
  const vaccine1Perc = vaccineEntries.getAll(KEY.VACCINE_DOSE_1).map(vaccineEntryToPercentage);
  const vaccine2Perc = vaccineEntries.getAll(KEY.VACCINE_DOSE_2).map(vaccineEntryToPercentage);

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
    <MultiLineChart
      dataArray={[vaccine1Perc, vaccine2Perc]}
      dateRange={dateRange}
      labels={["% de vacinados com 1 dose", "% de vacinados com 2 doses"]}
      themes={[themeMagentaLight, themeMagentaDark]}
      zeroBased={false}
    />,
  );
}

export default GeneralCharts;

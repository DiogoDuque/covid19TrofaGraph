import React from 'react';
import { cardGroupWrapper } from '../../utils/chartUtils';
import { KEY } from '../../model/EntriesAggregator';
import InfoCard from '../card/InfoCard';
import EntriesStore from "../../store/EntriesStore";
import GeneralStore from "../../store/GeneralStore";

const vaccineEntryToPercentage = e => e.buildNewWith(e.x, parseFloat(Number(100 * e.y / POPULATION_PT).toFixed(2)));

const SummaryCards = () => {
  const ptEntries = EntriesStore.useState(s => s.portugalEntries);
  let currTown = GeneralStore.useState(s => s.currentTown);
  const townEntries = EntriesStore.useState(s => s.townEntries[currTown]);
  const town = currTown[0] + currTown.slice(1).toLowerCase();
  const vaccineEntries = EntriesStore.useState(s => s.vaccineEntries);
  const last2ndVaccineEntry = vaccineEntries.getLast(KEY.VACCINE_DOSE_2);

  return cardGroupWrapper(
    <InfoCard title="Casos ativos em Portugal" entry={ptEntries.getLast(KEY.ACTIVE_PT)} />,
    <InfoCard title="Casos novos em Portugal" entry={ptEntries.getLast(KEY.NEWCASES_PT)} />,
    <InfoCard title="R(t) em Portugal Continental" entry={ptEntries.getLast(KEY.TRANSMISSIBILITY_PT_CONTINENT)} />,
    <InfoCard title="% de vacinados com 2 doses" entry={vaccineEntryToPercentage(last2ndVaccineEntry)} />,
    <InfoCard title={`Incidência - ${town}`} entry={townEntries.getLast(KEY.TOWN_INCIDENCE_14)} />,
    <InfoCard title={`Casos novos - ${town} (14d)`} entry={townEntries.getLast(KEY.TOWN_CONFIRMED_14)} />,
  );
}

export default SummaryCards;

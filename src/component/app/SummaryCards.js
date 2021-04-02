import React from 'react';
import { cardGroupWrapper } from '../../utils/chartUtils';
import { KEY } from '../../model/EntriesAggregator';
import InfoCard from '../card/InfoCard';
import EntriesStore from "../../store/EntriesStore";
import GeneralStore from "../../store/GeneralStore";

const SummaryCards = () => {
  const ptEntries = EntriesStore.useState(s => s.portugalEntries);
  let currTown = GeneralStore.useState(s => s.currentTown);
  const townEntries = EntriesStore.useState(s => s.townEntries[currTown]);
  const town = currTown[0] + currTown.slice(1).toLowerCase();

  return cardGroupWrapper(
    <InfoCard title="Casos ativos em Portugal" entry={ptEntries.getLast(KEY.ACTIVE_PT)} />,
    <InfoCard title="Casos novos em Portugal" entry={ptEntries.getLast(KEY.NEWCASES_PT)} />,
    <InfoCard title={`Incidência na ${town}`} entry={townEntries.getLast(KEY.TOWN_INCIDENCE_14)} />,
    <InfoCard title={`Casos novos (14d) na ${town}`} entry={townEntries.getLast(KEY.TOWN_CONFIRMED_14)} />,
  );
}

export default SummaryCards;

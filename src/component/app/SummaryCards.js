import React from 'react';
import { cardGroupWrapper } from '../../utils/chartUtils';
import { KEY } from '../../model/EntriesAggregator';
import InfoCard from '../card/InfoCard';
import EntriesStore from "../../store/EntriesStore";

const SummaryCards = () => {
  const ptEntries = EntriesStore.useState(s => s.portugalEntries);
  const trofaEntries = EntriesStore.useState(s => s.trofaEntries);

  return cardGroupWrapper(
    <InfoCard title="Casos ativos em Portugal" entry={ptEntries.getLast(KEY.ACTIVE_PT)} />,
    <InfoCard title="Casos novos em Portugal" entry={ptEntries.getLast(KEY.NEWCASES_PT)} />,
    <InfoCard title="Incidência na Trofa" entry={trofaEntries.getLast(KEY.TOWN_INCIDENCE_14)} />,
    <InfoCard title="Casos novos (14d) na Trofa" entry={trofaEntries.getLast(KEY.TOWN_CONFIRMED_14)} />,
  );
}

export default SummaryCards;
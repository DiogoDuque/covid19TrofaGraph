import React from 'react';
import PropTypes from 'prop-types';
import { cardGroupWrapper } from '../../utils/chartUtils';
import EntriesAggregator, { KEY } from '../../model/EntriesAggregator';
import InfoCard from '../card/InfoCard';

const SummaryCards = ({ ptEntries, trofaEntries }) => {
  return cardGroupWrapper(
    <InfoCard title="Casos ativos em Portugal" entry={ptEntries.getLast(KEY.ACTIVE_PT)} />,
    <InfoCard title="Casos novos em Portugal" entry={ptEntries.getLast(KEY.NEWCASES_PT)} />,
    <InfoCard title="Incidência na Trofa" entry={trofaEntries.getLast(KEY.TOWN_INCIDENCE_14)} />,
    <InfoCard title="Casos novos (14d) na Trofa" entry={trofaEntries.getLast(KEY.TOWN_CONFIRMED_14)} />,
  );
}

SummaryCards.propTypes = {
  ptEntries: PropTypes.instanceOf(EntriesAggregator).isRequired,
  trofaEntries: PropTypes.instanceOf(EntriesAggregator).isRequired,
};

export default SummaryCards;

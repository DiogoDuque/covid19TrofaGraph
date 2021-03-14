import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';
import EntriesAggregator, { KEY } from './model/EntriesAggregator';
import { getTownData, getPortugalData, getVaccineData } from './utils/fetchData';
import TextCard from './component/card/TextCard';
import MyHeader from './component/app/MyHeader';
import MyFooter from './component/app/MyFooter';
import SummaryCards from './component/app/SummaryCards';
import GeneralCharts from './component/app/GeneralCharts';
import NewCasesCharts from './component/app/PortugalCharts';
import RegionCharts from './component/app/RegionCharts';
import TrofaCharts from './component/app/TrofaCharts';
import EntriesStore from './store/EntriesStore';
import GeneralStore from './store/GeneralStore';
import DateEntry from './model/DateEntry';
import AgeCharts from './component/app/AgeCharts';

const useStyles = makeStyles(() => ({
  root: {
    'backgroundColor': '#f5f5f5',
    flexGrow: 1,
    'align-items': 'center',
    'justify-content': 'center',
    padding: 15,
    paddingRight: 30,
  },
  chartContainer: {
    position: 'relative',
    margin: 'auto',
    height: '50vh',
    width: '90vw',
  },
  progress: {
    float: 'none',
    margin: '0 auto',
  },
  appBar: {
    marginBottom: 20,
    backgroundColor: '#e0e0e0',
  },
  formControl: {
    margin: 10,
    minWidth: 80,
  },
}));

function getTabContent(tab: number) {
  switch (tab) {
    case 0:
      return (
        <div>
          <GeneralCharts />
          <br />
          <TrofaCharts />
          <br />
          <NewCasesCharts />
        </div>
      );
    case 1:
      return (
        <div>
          <RegionCharts />
          <br />
          <AgeCharts />
        </div>
      );
    case 2:
      return <SummaryCards />;
    default:
      return (<p>Bug? ¯\_(ツ)_/¯</p>);
  }
}

const App: () => JSX.Element = (): JSX.Element => {
  // ========== DEFINITIONS ==========
  const styles = useStyles();
  GeneralStore.update(s => {s.styles = styles});

  const [isFetching, setIsFetching]: [boolean, Function] = useState(true);
  const [renderTime, setRenderTime]: [number, Function] = useState(0);
  const ptEntries = EntriesStore.useState(s => s.portugalEntries);
  const trofaEntries = EntriesStore.useState(s => s.trofaEntries);
  let lastTownUpdate: string = "";
  let lastPtUpdate: string = "";
  const tab: number = GeneralStore.useState(s => s.tab);
  let tabContent = getTabContent(tab);

  const isPtDataReady = ptEntries.getAll(KEY.CONFIRMED_PT).length > 0;
  const isTrofaDataReady = trofaEntries.getAll(KEY.TOWN_INCIDENCE_14).length > 0;


  // ========== LOGIC ==========
  useEffect(() => {
    getTownData('TROFA', (e: EntriesAggregator<string, DateEntry>) => EntriesStore.update(s => {s.trofaEntries = e}));
    getPortugalData((e: EntriesAggregator<string, DateEntry>) => EntriesStore.update(s => {s.portugalEntries = e}));
    getVaccineData((e: EntriesAggregator<string, DateEntry>) => EntriesStore.update(s => {s.vaccineEntries = e}));
  }, []);

  if (!isFetching) {
    lastTownUpdate = trofaEntries.getLast(KEY.TOWN_INCIDENCE_14).x;
    lastPtUpdate = ptEntries.getLast(KEY.CONFIRMED_PT).x;
    if(!renderTime) setRenderTime(performance.now());
  }

  if (isFetching && isTrofaDataReady && isPtDataReady)
    setIsFetching(false);


  // ========== RENDER ==========
  return (
    <div className={styles.root}>
      { isFetching
        ? <CircularProgress className={styles.progress} />
        : <div>
            <MyHeader />
            <TextCard>
              A última atualização destes dados ocorreu nas seguintes datas: {`Portugal/Norte => ${lastPtUpdate}, Trofa => ${lastTownUpdate}`}. Esta página carregou em {renderTime}ms.
              </TextCard>

            <br />
            {tabContent}
            <br />

            <MyFooter />
          </div>
      }
    </div>
  );
}

export default App;

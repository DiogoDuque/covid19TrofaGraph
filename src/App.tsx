import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';
import EntriesAggregator, { KEY } from './model/EntriesAggregator';
import { getTownData, getPortugalData } from './utils/fetchData';
import NewCasesCharts from './component/app/NewCasesCharts';
import GeneralCharts from './component/app/GeneralCharts';
import TextCard from './component/card/TextCard';
import MyHeader from './component/app/MyHeader';
import MyFooter from './component/app/MyFooter';
import SummaryCards from './component/app/SummaryCards';
import EntriesStore from './store/EntriesStore';
import GeneralStore from './store/GeneralStore';

const useStyles = makeStyles(() => ({
  root: {
    'backgroundColor': '#f5f5f5',
    flexGrow: 1,
    display: 'flex',
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
    maxWidth: 500,
    marginBottom: 20,
    backgroundColor: '#e0e0e0',
  },
  formControl: {
    margin: 10,
    // minWidth: 120,
  },
}));

const App: () => JSX.Element = (): JSX.Element => {
  // ========== DEFINITIONS ==========
  const styles = useStyles();
  GeneralStore.update(s => {s.styles = styles});

  const [isFetching, setIsFetching]: [boolean, Function] = useState(true);
  const ptEntries = EntriesStore.useState(s => s.portugalEntries);
  const trofaEntries = EntriesStore.useState(s => s.trofaEntries);
  let lastTownUpdate: string = "";
  let lastPtUpdate: string = "";
  const tab: number = GeneralStore.useState(s => s.tab);
  let tabContent = null;


  // ========== LOGIC ==========
  useEffect(() => {
    getTownData('TROFA', (e: EntriesAggregator) => EntriesStore.update(s => {s.trofaEntries = e}));
    getPortugalData((e: EntriesAggregator) => EntriesStore.update(s => {s.portugalEntries = e}));
  }, []);

  if (!isFetching) {
    lastTownUpdate = trofaEntries.getLast(KEY.TOWN_INCIDENCE_14).dateStr;
    lastPtUpdate = ptEntries.getLast(KEY.CONFIRMED_PT).dateStr;
  }

  if (isFetching && trofaEntries.getAll(KEY.TOWN_INCIDENCE_14).length > 0 && ptEntries.getAll(KEY.CONFIRMED_PT).length > 0)
    setIsFetching(false);
  
  switch (tab) {
    case 0:
      tabContent = <SummaryCards />;
      break;
    case 1:
      tabContent = (
        <div>
          <GeneralCharts />
          <br />
          <NewCasesCharts />
        </div>
      );
      break;
    default:
      tabContent=<p>Bug? ¯\_(ツ)_/¯</p>
      break;
  }


  // ========== RENDER ==========
  return (
    <div className={styles.root}>
      { isFetching
        ? <CircularProgress className={styles.progress} />
        : <div>
            <MyHeader />
            <TextCard>
              A última atualização destes dados ocorreu nas seguintes datas: {`Portugal/Norte => ${lastPtUpdate}, Trofa => ${lastTownUpdate}`}.
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

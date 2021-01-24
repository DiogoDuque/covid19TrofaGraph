import React, { useState, useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import EntriesAggregator, { KEY } from './model/EntriesAggregator';
import { getTownData, getPortugalData } from './utils/fetchData';
import NewCasesCharts from './component/app/NewCasesCharts';
import GeneralCharts from './component/app/GeneralCharts';
import TextCard from './component/card/TextCard';
import MyHeader from './component/app/MyHeader';
import MyFooter from './component/app/MyFooter';
import SummaryCards from './component/app/SummaryCards';
import styles from './config/styles';


const App: () => JSX.Element = (): JSX.Element => {
  // ========== DEFINITIONS ==========
  const [isFetching, setIsFetching]: [boolean, Function] = useState(true);
  const [dateRange, setDateRange]: [number, Function] = useState(60);

  const [trofaEntries, setTrofaEntries]: [EntriesAggregator, Function] = useState(new EntriesAggregator('DUMMY'));
  const [ptEntries, setPtEntries]: [EntriesAggregator, Function] = useState(new EntriesAggregator('DUMMY'));

  let lastTownUpdate: string = "";
  let lastPtUpdate: string = "";


  // ========== LOGIC ==========
  useEffect(() => {
    getTownData('TROFA', setTrofaEntries);
    getPortugalData(setPtEntries);
  }, []);

  if (!isFetching) {
    lastTownUpdate = trofaEntries.getLast(KEY.TOWN_INCIDENCE_14).dateStr;
    lastPtUpdate = ptEntries.getLast(KEY.CONFIRMED_PT).dateStr;
  }

  if (isFetching && trofaEntries.getAll(KEY.TOWN_INCIDENCE_14).length > 0 && ptEntries.getAll(KEY.CONFIRMED_PT).length > 0)
    setIsFetching(false);


  // ========== RENDER ==========
  return (
    <div className={styles.root}>
      { isFetching
        ? <CircularProgress className={styles.progress} />
        : <div>
            <MyHeader dateRange={dateRange} setDateRange={setDateRange}
              lastPtUpdate={lastPtUpdate} lastTownUpdate={lastTownUpdate} />
            <TextCard>
              A última atualização destes dados ocorreu nas seguintes datas: {`Portugal/Norte => ${lastPtUpdate}, Trofa => ${lastTownUpdate}`}.
              </TextCard>

            <br />

            <SummaryCards ptEntries={ptEntries} trofaEntries={trofaEntries} />
            <br/>
            <GeneralCharts ptEntries={ptEntries} dateRange={dateRange} />
            <br />
            <NewCasesCharts trofaEntries={trofaEntries} dateRange={dateRange} ptEntries={ptEntries} />
            <br />

            <MyFooter />
          </div>
      }
    </div>
  );
}

export default App;

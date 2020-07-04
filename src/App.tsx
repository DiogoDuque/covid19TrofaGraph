import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PortugalEntries from './model/PortugalEntries';
import Entry from './model/Entry';
import { getTownData, getPortugalData } from './utils/fetchData';
import ConfirmedCasesCharts from './chart/ConfirmedCasesCharts';
import NewCasesCharts from './chart/NewCasesCharts';
import { derivateEntryValues } from './utils/chartUtils';
import CaseVariationCharts from './chart/CaseVariationCharts';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginLeft: 10,
    marginRight: 30,
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
}));

const App: () => JSX.Element = (): JSX.Element => {
  const classes = useStyles();
  const [isFetching, setIsFetching]: [boolean, Function] = useState(true);

  const [trofaEntries, setTrofaEntries]: [Entry[], Function] = useState([]);
  const [ptEntries, setPtEntries]: [PortugalEntries, Function] = useState(new PortugalEntries());

  useEffect(() => {
    getTownData('TROFA', setTrofaEntries);
    getPortugalData(setPtEntries);
  }, []);
  
  if(isFetching && trofaEntries.length > 0 && ptEntries.confirmedPt.length > 0)
    setIsFetching(false);

  return (
    isFetching
    ? <CircularProgress className={classes.progress} />
    :
    <div className={classes.root}>
      <ConfirmedCasesCharts trofaEntries={trofaEntries} ptEntries={ptEntries} classes={classes} />
      <NewCasesCharts trofaEntries={derivateEntryValues(trofaEntries)} ptEntries={ptEntries} classes={classes} />
      <CaseVariationCharts trofaEntries={derivateEntryValues(derivateEntryValues(trofaEntries))} ptEntries={ptEntries} classes={classes} />
    </div>
  );
}

export default App;

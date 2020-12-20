import React, { useState, useEffect } from 'react';
import { AppBar, CircularProgress, FormControl, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { EntriesAggregator, KEY } from './model/EntriesAggregator';
import { getTownData, getPortugalData } from './utils/fetchData';
import NewCasesCharts from './chart/NewCasesCharts';
import GeneralCharts from './chart/GeneralCharts';

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
    maxWidth: 170,
    marginBottom: 20,
    backgroundColor: '#e0e0e0',
  },
  formControl: {
    margin: 10,
    // minWidth: 120,
  },
}));

const App: () => JSX.Element = (): JSX.Element => {
  const classes = useStyles();
  const [isFetching, setIsFetching]: [boolean, Function] = useState(true);
  const [dateRange, setDateRange]: [number, Function] = useState(60);

  const [trofaEntries, setTrofaEntries]: [EntriesAggregator, Function] = useState(new EntriesAggregator('DUMMY'));
  const [ptEntries, setPtEntries]: [EntriesAggregator, Function] = useState(new EntriesAggregator('DUMMY'));

  let lastTownUpdate: string = "";
  let lastPtUpdate: string = "";


  if (!isFetching) {
    lastTownUpdate = trofaEntries.getLast(KEY.TOWN_INCIDENCE).dateStr;
    lastPtUpdate = ptEntries.getLast(KEY.CONFIRMED_PT).dateStr;
  }

  useEffect(() => {
    getTownData('TROFA', setTrofaEntries);
    getPortugalData(setPtEntries);
  }, []);

  if (isFetching && trofaEntries.getAll(KEY.TOWN_INCIDENCE).length > 0 && ptEntries.getAll(KEY.CONFIRMED_PT).length > 0)
    setIsFetching(false);

  return (
    <div className={classes.root}>
      { isFetching
        ? <CircularProgress className={classes.progress} />
        : <div>
          <AppBar position="sticky" className={classes.appBar}>
            <FormControl className={classes.formControl}>
              <InputLabel id="time-label">Tempo</InputLabel>
              <Select
                labelId="time-label"
                id="time-select"
                value={dateRange}
                onChange={e => setDateRange(e.target.value)}
              >
                <MenuItem value={30}>30 dias</MenuItem>
                <MenuItem value={60}>60 dias</MenuItem>
                <MenuItem value={90}>90 dias</MenuItem>
                <MenuItem value={999999}>Desde sempre</MenuItem>
              </Select>
            </FormControl>
          </AppBar>

          <Card>
            <CardContent>
              <Typography variant="body2" component="p">
                A última atualização destes dados ocorreu nas seguintes datas: {`Portugal/Norte => ${lastPtUpdate}, Trofa => ${lastTownUpdate}`}.
              <br />
                {/*The last update on this data occurred at the following times: {`Portugal/North => ${lastPtUpdate}, Trofa => ${lastTownUpdate}`}.*/}
              </Typography>
            </CardContent>
          </Card>

          <br />
          <GeneralCharts ptEntries={ptEntries} dateRange={dateRange} classes={classes} />
          <br />
          <NewCasesCharts trofaEntries={trofaEntries} dateRange={dateRange} ptEntries={ptEntries} classes={classes} />
          <br />

          <Card>
            <CardContent>
              <Typography variant="body2" component="p">
                Os dados aqui apresentados são extraídos do repositório <a href="https://github.com/dssg-pt/covid19pt-data">dssg-pt/covid19pt-data</a>.
              <br />
              O código para este dashboard pode ser consultado <a href="https://github.com/DiogoDuque/covid19TrofaGraph">aqui</a>.
              <br />
                {/*The data hereby presented is extracted from the <a href="https://github.com/dssg-pt/covid19pt-data">dssg-pt/covid19pt-data</a> repository.*/}
              </Typography>
            </CardContent>
          </Card>
        </div>
      }
    </div>
  );
}

export default App;

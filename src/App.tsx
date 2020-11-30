import React, { useState, useEffect } from 'react';
import { CircularProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PortugalEntries from './model/PortugalEntries';
import Entry from './model/Entry';
import { getTownData, getPortugalData } from './utils/fetchData';
import NewCasesCharts from './chart/NewCasesCharts';
import { derivateEntryValues } from './utils/chartUtils';
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
}));

const App: () => JSX.Element = (): JSX.Element => {
  const classes = useStyles();
  const [isFetching, setIsFetching]: [boolean, Function] = useState(true);

  const [trofaNewEntries, setTrofaEntries]: [Entry[], Function] = useState([]);
  const [ptEntries, setPtEntries]: [PortugalEntries, Function] = useState(new PortugalEntries());

  let lastTownUpdate: string = "";
  let lastPtUpdate: string = "";
  let northNewEntries: Entry[] = [];


  if(!isFetching) {
    lastTownUpdate = trofaNewEntries[trofaNewEntries.length-1].dateStr;
    lastPtUpdate = ptEntries.confirmedPt[ptEntries.confirmedPt.length -1].dateStr;
    northNewEntries = derivateEntryValues(ptEntries.confirmedNorth);
  }

  useEffect(() => {
    getTownData('TROFA', setTrofaEntries);
    getPortugalData(setPtEntries);
  }, []);
  
  if(isFetching && trofaNewEntries.length > 0 && ptEntries.confirmedPt.length > 0)
    setIsFetching(false);

  return (
    <div className={classes.root}>
    { isFetching
      ? <CircularProgress className={classes.progress} />
      : <div>
        <Card>
          <CardContent>
            <Typography variant="body2" component="p">
              A última atualização destes dados ocorreu nas seguintes datas: {`Portugal/Norte => ${lastPtUpdate}, Trofa => ${lastTownUpdate}`}.
              <br/>
              {/*The last update on this data occurred at the following times: {`Portugal/North => ${lastPtUpdate}, Trofa => ${lastTownUpdate}`}.*/}
            </Typography>
          </CardContent>
        </Card>

        <br/>
        <GeneralCharts ptEntries={ptEntries} classes={classes} />
        <br/>
        <NewCasesCharts trofaEntries={trofaNewEntries} northEntries={northNewEntries} ptEntries={ptEntries} classes={classes} />
        <br/>

        <Card>
          <CardContent>
            <Typography variant="body2" component="p">
              Os dados aqui apresentados são extraídos do repositório <a href="https://github.com/dssg-pt/covid19pt-data">dssg-pt/covid19pt-data</a>.
              <br/>
              O código para este dashboard pode ser consultado <a href="https://github.com/DiogoDuque/covid19TrofaGraph">aqui</a>.
              <br/>
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

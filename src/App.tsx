import React, { useState, useEffect } from 'react';
import { CircularProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PortugalEntries from './model/PortugalEntries';
import Entry from './model/Entry';
import { getTownData, getPortugalData } from './utils/fetchData';
import ConfirmedCasesCharts from './chart/ConfirmedCasesCharts';
import NewCasesCharts from './chart/NewCasesCharts';
import CaseVariationCharts from './chart/CaseVariationCharts';
import { derivateEntryValues } from './utils/chartUtils';

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

  let lastTownUpdate: string = "";
  let lastPtUpdate: string = "";
  let trofaNewEntries: Entry[] = [];
  let northNewEntries: Entry[] = [];
  let trofaVariationEntries: Entry[] = [];
  let northVariationEntries: Entry[] = [];
  let ptVariationEntries: Entry[] = [];


  if(!isFetching) {
    lastTownUpdate = trofaEntries[trofaEntries.length-1].dateStr;
    lastPtUpdate = ptEntries.confirmedPt[ptEntries.confirmedPt.length -1].dateStr;
    trofaNewEntries = derivateEntryValues(trofaEntries);
    northNewEntries = derivateEntryValues(ptEntries.confirmedNorth);
    trofaVariationEntries = derivateEntryValues(trofaNewEntries);
    northVariationEntries = derivateEntryValues(northNewEntries);
    ptVariationEntries = derivateEntryValues(ptEntries.newConfirmedPt);
  }

  useEffect(() => {
    getTownData('TROFA', setTrofaEntries);
    getPortugalData(setPtEntries);
  }, []);
  
  if(isFetching && trofaEntries.length > 0 && ptEntries.confirmedPt.length > 0)
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

          <ConfirmedCasesCharts trofaEntries={trofaEntries} ptEntries={ptEntries} classes={classes} />
          <NewCasesCharts trofaEntries={trofaNewEntries} northEntries={northNewEntries} ptEntries={ptEntries} classes={classes} />
          <CaseVariationCharts trofaEntries={trofaVariationEntries} northEntries={northVariationEntries} nationalEntries={ptVariationEntries} classes={classes} />

        <Card>
        <CardContent>
          <Typography variant="body2" component="p">
            Os dados aqui apresentados são extraídos do repositório <a href="https://github.com/dssg-pt/covid19pt-data">dssg-pt/covid19pt-data</a>.
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

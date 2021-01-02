import React from 'react';
import { Typography, Card, CardContent } from '@material-ui/core';


const MyFooter = () => (
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
);

export default MyFooter;

import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const TextCard = ({ children }) => (
  <Card>
    <CardContent>
      <Typography variant="body2" component="p">
        { children }
      </Typography>
    </CardContent>
  </Card>
);

export default TextCard;

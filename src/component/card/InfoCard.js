import React from "react";
import PropTypes from 'prop-types';
import { Typography, Card, CardContent } from '@material-ui/core';
import Entry from "../../model/Entry";

const InfoCard = ({title, entry}) => {

  return (
    <Card elevation={4}>
      <CardContent>
        <Typography style={{ fontSize: 15, fontWeight: 'bold' }} color="textSecondary" gutterBottom>
            {title}
        </Typography>
        <Typography variant="h5" component="h2">
          {entry.count}
        </Typography>
        <Typography style={{ fontSize: 11 }} color="textSecondary">
          {`Última atualização: ${entry.dateStr}`}
        </Typography>
      </CardContent>
    </Card>
  );
}

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  entry: PropTypes.instanceOf(Entry).isRequired,
};

export default InfoCard;
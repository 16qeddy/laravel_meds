import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';

export default function MedCard(props) {
  let bold = {
    fontWeight: 'bold'
  };

  if(props.data.length === 0){
    return null;
  }
  return (
    <div className="medCardContainer">
      <Card variant="outlined">
        <CardActionArea>
        <CardContent className="medCard">
            <Typography variant="h5" component="h2">
              {props.data.name}
            </Typography>
            <Typography variant="body2" component="p" display="block">
              <span style={bold}>RXCUI: </span>{props.data.rxcui}
            </Typography>
            <Typography variant="body2" component="p" display="block">
            <span style={bold}>Synonym: </span>{props.data.synonym}
            </Typography>
            <Typography variant="body2" component="p" display="block">
            <span style={bold}>TTY: </span>{props.data.ttyLong} {`(${props.data.tty})`}
            </Typography>
            <Typography variant="body2" component="p" display="block">
            <span style={bold}>NDCS: </span>{props.data.ndcs.join(', ').slice(0, -2)}
            </Typography>
        </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}

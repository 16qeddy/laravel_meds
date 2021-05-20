import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function MedCard(props) {
  if(props.data.length === 0){
    return null;
  }
  return (
      <Card variant="outlined">
      <CardContent className="medCard">
        <div>
          <Typography variant="h5" component="h2">
            RXCUI: {props.data.rxcui}
          </Typography>
          <Typography variant="body2" component="p">
            Name: {props.data.name}
          </Typography>
          <Typography variant="body2" component="p">
            Synonym: {props.data.synonym}
          </Typography>
          <Typography variant="body2" component="p">
            TTY: {props.data.ttyLong} {`(${props.data.tty})`}
          </Typography>
        </div>
        <div>
          <Typography variant="body2" component="p">
            NDCS: {props.data.ndcs.map((item, index)=>{
              return <li key={index}>{item}</li>
            })}
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}

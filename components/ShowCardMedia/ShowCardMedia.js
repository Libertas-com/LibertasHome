import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useText } from '~/theme/common';

const useStyles = makeStyles({
  root: {
    padding: '12px 12px',
  },
  media: {
    height: '100px',
  },
});

export default function ImgMediaCard({title, content, imageUrl, imageTitle}) {
  const text = useText();
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={imageUrl}
        title={imageTitle}
      />
      <CardContent>
        <Typography gutterBottom display="block" className={text.title4}>
          {title}
        </Typography>
        <Typography display="block" className={text.subtitle6}>
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}

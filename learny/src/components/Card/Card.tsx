import React, { useState } from 'react';
import { contentSelector, updateContentPiece } from '../../reducers';
import styles from './Card.module.scss';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { MediaContent } from '../../types/MediaContent';
import MUICard from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface Props {
  name: string;
  recommendedBy: string;
  id: string;
  update: (id: string, newName: string) => void;
}

function Card({ name, recommendedBy, id, update }: Props) {
  const [isBeingEdited, setIsBeingEdited] = useState(false);
  return (
    <MUICard variant="outlined" className={styles['lrny-Card']}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Content Piece
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {recommendedBy}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => setIsBeingEdited(!isBeingEdited)}>
          {isBeingEdited ? 'Cancel' : 'Edit'}
        </Button>
      </CardActions>
    </MUICard>
  );
}

export { Card };

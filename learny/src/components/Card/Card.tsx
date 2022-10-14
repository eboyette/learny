import React, { useState } from 'react';
import { contentSelector, updateContentPiece } from '../../reducers';
import styles from './Card.module.scss';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import MUICard from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { MediaContent } from '../../types/MediaContent';
import { EditForm } from '../EditForm';

interface Props {
  contentPiece: MediaContent;
  update: (newName: string) => void;
}

function Card({ contentPiece, update }: Props) {
  const [isBeingEdited, setIsBeingEdited] = useState(false);
  const { name, whoRecommended } = contentPiece;
  return (
    <MUICard variant="outlined" className={styles['lrny-Card']}>
      <CardContent>
        {isBeingEdited ? (
          <EditForm contentPiece={contentPiece} />
        ) : (
          <>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Content Piece
            </Typography>
            <Typography variant="h5" component="div">
              {name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {whoRecommended}
            </Typography>
          </>
        )}
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

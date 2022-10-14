import React, { useState } from 'react';
import { contentSelector, updateContentPiece } from '../../reducers';
import styles from './CardList.module.scss';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { MediaContent } from '../../types/MediaContent';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function CardList() {
  const { contentPieces } = useSelector(contentSelector);
  const dispatch = useDispatch();

  function updateContent(id: string, updatedContent: Partial<MediaContent>) {
    dispatch(updateContentPiece({ id, updatedContent }));
  }

  return (
    <div className={styles.row}>
      {contentPieces.map((contentPiece) => {
        return (
          <Card variant="outlined" className={styles['lrny-Card']}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Content Piece
              </Typography>
              <Typography variant="h5" component="div">
                {contentPiece.name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {contentPiece.whoRecommended}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() =>
                  updateContent(contentPiece.id, { name: 'Ramsey show' })
                }
              >
                Edit
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}

export { CardList };

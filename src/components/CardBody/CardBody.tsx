import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { MediaContent } from '../../types/MediaContent';
import { Button, CardActions } from '@mui/material';

interface Props {
  contentPiece: MediaContent;
  isBeingEdited: boolean;
  onEditToggle: () => void;
}

function CardBody({ contentPiece, isBeingEdited, onEditToggle }: Props) {
  const { name, whoRecommended } = contentPiece;

  return (
    <>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Content Piece
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {whoRecommended}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" onClick={onEditToggle}>
          {isBeingEdited ? 'Cancel' : 'Edit'}
        </Button>
      </CardActions>
    </>
  );
}

export { CardBody };

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
import { CardBody } from '../CardBody';

interface Props {
  contentPiece: MediaContent;
  update: (newName: string) => void;
}

function Card({ contentPiece, update }: Props) {
  const [isBeingEdited, setIsBeingEdited] = useState(false);
  const dispatch = useDispatch();

  function updateContent(updatedContent: Partial<MediaContent>) {
    dispatch(updateContentPiece({ id: contentPiece.id, updatedContent }));
    setIsBeingEdited(false);
  }

  function toggleEdit() {
    setIsBeingEdited(!isBeingEdited);
  }

  return (
    <MUICard variant="outlined" className={styles['lrny-Card']}>
      {isBeingEdited ? (
        <EditForm
          contentPiece={contentPiece}
          isBeingEdited={isBeingEdited}
          onUpdate={updateContent}
          onEditToggle={toggleEdit}
        />
      ) : (
        <CardBody
          contentPiece={contentPiece}
          isBeingEdited={isBeingEdited}
          onEditToggle={toggleEdit}
        />
      )}
    </MUICard>
  );
}

export { Card };

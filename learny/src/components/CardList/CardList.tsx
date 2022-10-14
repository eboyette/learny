import React, { useState } from 'react';
import { contentSelector, updateContentPiece } from '../../reducers';
import styles from './CardList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { MediaContent } from '../../types/MediaContent';
import { Card } from '../Card';

function CardList() {
  const { contentPieces } = useSelector(contentSelector);
  const dispatch = useDispatch();

  function updateContent(id: string, updatedContent: Partial<MediaContent>) {
    dispatch(updateContentPiece({ id, updatedContent }));
  }

  return (
    <div className={styles.row}>
      {contentPieces.map((contentPiece) => (
        <Card
          contentPiece={contentPiece}
          update={(newName: string) => {
            updateContent(contentPiece.id, { name: newName });
          }}
        />
      ))}
    </div>
  );
}

export { CardList };

import React, { useState } from 'react';
import {
  contentSelector,
  updateContentPiece
} from '../../reducers/contentSlice';
import styles from './Counter.module.scss';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { MediaContent } from '../../types/MediaContent';

function Counter() {
  const {contentPieces} = useSelector(contentSelector);
  const dispatch = useDispatch();

  function updateContent(id: string, updatedContent: Partial<MediaContent>) {
    dispatch(updateContentPiece({id, updatedContent}));
  }


  return (
    <div>
      <div className={styles.row}>
        {contentPieces.map((contentPiece) => {
          return <>
          {contentPiece.name}
          <Button onClick={() => updateContent(contentPiece.id, {name: 'Ramsey show'})}>Change name</Button>
          </>
        })}
      </div>
    </div>
  );
}

export {Counter};

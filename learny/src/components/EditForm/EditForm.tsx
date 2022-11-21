import React from 'react';
import { updateContentPiece } from '../../reducers';
// import styles from './CardList.module.scss';
import { useDispatch } from 'react-redux';
import { MediaContent } from '../../types/MediaContent';
import { Formik, Field, Form } from 'formik';

interface Props {
  contentPiece: MediaContent;
}

function EditForm({ contentPiece }: Props) {
  const { id } = contentPiece;
  const dispatch = useDispatch();

  function updateContent(updatedContent: Partial<MediaContent>) {
    dispatch(updateContentPiece({ id, updatedContent }));
  }

  return (
    <Formik
      initialValues={contentPiece}
      onSubmit={({ name, whoRecommended }) => {
        updateContent({ name, whoRecommended });
      }}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field id="name" name="name" />

        <label htmlFor="whoRecommended">Who Recommended</label>
        <Field id="whoRecommended" name="whoRecommended" placeholder="Doe" />

        <button type="submit">Save</button>
      </Form>
    </Formik>
  );
}

export { EditForm };

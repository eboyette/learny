import React from 'react';
import { MediaContent } from '../../types/MediaContent';
import { Formik, Field, Form } from 'formik';
import { Button, CardActions, CardContent } from '@mui/material';

interface Props {
  contentPiece: MediaContent;
  isBeingEdited: boolean;
  onUpdate: (updatedContent: Partial<MediaContent>) => void;
  onEditToggle: () => void;
}

function EditForm({
  contentPiece,
  isBeingEdited,
  onUpdate,
  onEditToggle,
}: Props) {
  return (
    <>
      <Formik initialValues={contentPiece} onSubmit={onUpdate}>
        <Form>
          <CardContent>
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" />
            <br />

            <label htmlFor="whoRecommended">Who Recommended</label>
            <Field
              id="whoRecommended"
              name="whoRecommended"
              placeholder="Doe"
            />
          </CardContent>
          <CardActions>
            <Button size="small" onClick={onEditToggle}>
              {isBeingEdited ? 'Cancel' : 'Edit'}
            </Button>
            {isBeingEdited && (
              <Button size="small" type="submit">
                Save
              </Button>
            )}
          </CardActions>
        </Form>
      </Formik>
    </>
  );
}

export { EditForm };

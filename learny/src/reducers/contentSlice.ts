import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { MediaContent } from "../types/MediaContent";

export interface ContentState {
  contentPieces: MediaContent[]
}

const initialState: ContentState = {
  contentPieces: [
    {
      id: 'banana',
      contentType: 'book',
      whoRecommended: 'some dude',
      name: 'JRE',
      url: 'www.google.com',
      isInProgress: true,
    }
  ]
};

interface UpdateAction {
  updatedContent: Partial<MediaContent>;
  id: string;
}

const contentSlice = createSlice({
  name: 'Content',
  initialState,
  reducers: {
    updateContentPiece: (state, action: PayloadAction<UpdateAction>) => {
      state.contentPieces = state.contentPieces.map((contentPiece) => {
        if(contentPiece.id === action.payload.id) {
          contentPiece = {...contentPiece, ...action.payload.updatedContent};
        }
        return contentPiece;
      })
    },
  },
});

const { updateContentPiece } = contentSlice.actions;

const contentReducer = contentSlice.reducer;
const contentSelector = (state: RootState) => state.content;

export {contentReducer, contentSelector, updateContentPiece}

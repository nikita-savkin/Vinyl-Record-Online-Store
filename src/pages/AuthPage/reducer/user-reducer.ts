import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { User as FirebaseUser } from 'firebase/auth';
import { authStateChanged } from '@widgets/Header/service/signout-service';

interface User {
  displayName: string;
  email: string;
}

interface userState {
  currentUser: User | null;
}

const initialState: userState = {
  currentUser: null,
};

export const fetchUser = createAsyncThunk('user/setCurrentUser', async (): Promise<User | null> => {
  return await new Promise((resolve: any, reject: any) => {
    try {
      authStateChanged((firebaseUser: FirebaseUser | null) => {
        if (firebaseUser) {
          const currentUser = {
            displayName: firebaseUser.displayName,
            email: firebaseUser.email,
          };

          resolve(currentUser);
        }

        resolve(null);
      });
    } catch (e) {
      reject(e);
    }
  });
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });
  },
});

export default userSlice.reducer;

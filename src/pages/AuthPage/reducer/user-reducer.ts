import { User as FirebaseUser } from 'firebase/auth';
import { authStateChanged } from '@widgets/Header/service/signout-service';
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

interface User {
  displayName: string | null;
  email: string | null;
}

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (build) => ({
    fetchUser: build.query<User | null, void>({
      async queryFn(): Promise<{ data: User | null }> {
        const currentUser = await new Promise<User | null>((resolve: any, reject: any) => {
          try {
            authStateChanged((firebaseUser: FirebaseUser | null) => {
              if (firebaseUser) {
                const currentUser: User = {
                  displayName: firebaseUser.displayName,
                  email: firebaseUser.email,
                };

                resolve(currentUser);
              }

              resolve(null);
            });
          } catch (e) {
            console.error(e);
            reject(e);
          }
        });

        return { data: currentUser };
      },
    }),
  }),
});

export const { useFetchUserQuery } = userApi;

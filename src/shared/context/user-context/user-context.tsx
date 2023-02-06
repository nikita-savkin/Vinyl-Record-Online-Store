import { ReactNode, createContext, useState, Dispatch, SetStateAction, useEffect } from 'react';
import { User } from 'firebase/auth';
import { authStateChanged } from '@widgets/Header/service/signout-service';

export interface UserContextType {
  currentUser: User | null;
  setCurrentUser: Dispatch<SetStateAction<User | null>>;
}

export const UserContext = createContext<UserContextType>({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const authState = authStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      }
    });

    return authState;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;

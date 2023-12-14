import { User } from "@supabase/supabase-js";
import { ReactNode, createContext, FC, useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

interface AuthContextProps {
  currentUser: User | null | undefined;
}

export const AuthContext = createContext<AuthContextProps>({
  currentUser: null,
});

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(null);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_IN") {
          console.log("sign in");
          setCurrentUser(session?.user);
        }

        if (event === "SIGNED_OUT") {
          console.log("sign out");
          setCurrentUser(null);
        }
      }
    );

    return () => {
      authListener.subscription;
    };
  }, []);

  const contextValue: AuthContextProps = {
    currentUser,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

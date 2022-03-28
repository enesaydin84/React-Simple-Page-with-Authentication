import { useState } from "react";
import { useEffect } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setisPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async (email, password, displayName) => {
    setError(null);
    setisPending(true);

    try {
      //sign the user out
      await projectAuth.signOut();

      // dispatch logout action
      dispatch({ type: "LOGOUT" });

      if (!isCancelled) {
        setisPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message);
        setError(err.message);
        setisPending(false);
      }
    }
  };
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);
  return { logout, error, isPending };
};

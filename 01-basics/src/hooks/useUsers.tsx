import { useEffect, useRef, useState } from "react";
import { User } from "../interfaces/reqres.response";
import { loadUsersActions } from "../actions/load-users.action";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const currentPageRef = useRef(1);

  useEffect(() => {
    loadUsersActions(1).then(setUsers);
    }, []);	

    const nextPage = async() => {

      currentPageRef.current ++;
      const users = await loadUsersActions(currentPageRef.current);

      if (users.length > 0) {
        setUsers(users);
      } else {
        currentPageRef.current --;
      }
    };

    const prevPage = async() => {

      if (currentPageRef.current > 1) {

        currentPageRef.current --;

        const users = await loadUsersActions(currentPageRef.current);
        setUsers(users);
      }
    };

  return {
    users,
    nextPage,
    prevPage,
      };
    };
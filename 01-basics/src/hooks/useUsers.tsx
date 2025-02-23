import React, { useEffect, useState } from "react";
import { User } from "../interfaces/reqres.response";
import { loadUsersActions } from "../actions/load-users.action";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    loadUsersActions(1).then(setUsers);
    }, []);	

  return {
    users,
  };
};

import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [load, setLoad] = useState(true);

  const fetchUser = async () => {
    try {
      const response = await fetch('/api/user/me', {
        headers: {
          token: localStorage.getItem('token'),
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      if (data && data.user) {
        setIsAuth(true);
        setUser(data.user);
        setLoad(false);
      } else {
        console.log('No user data found');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setLoad(false);
    }
  };

  useEffect(()=>{
     fetchUser();
  },[])

  return (
    <UserContext.Provider value={{ user, setUser, isAuth, setIsAuth, load,setLoad }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserData = () => useContext(UserContext);

import React, { useReducer } from 'react';
import { MainCv } from './components/ui/MainCv';

// import MainCv from './components/ui/MainCv';

import { InfoContext } from './reducer/InfoContext';
import { personInfoReducer } from './reducer/personInfoReducer';

export const App = () => {
  const [info, dispatch] = useReducer(personInfoReducer, {
    info: {
      name: '',
      lastName: '',
      title: '',
      address: '',
      phoneNumber: '',
      email: '',
    },
    experience: {},
  });
  return (
    <InfoContext.Provider value={{ info, dispatch }}>
      <MainCv />
    </InfoContext.Provider>
  );
};

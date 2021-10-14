import React, { useState } from 'react';
import { LanguageContext, LanguageConsumer } from '../utils/RootNavigator';


export const LanguageProvider = (props) => {
  const [ language, setLanguage ] = useState('english');

  return (
    <LanguageContext.Provider
      value={{
        language: language,
        changeLanguage: setLanguage
      }}>
      {props.children}
    </LanguageContext.Provider>
  );
};


export const TranslatableText = (props) => {
  return(
    <LanguageConsumer>
      {({ language }) => {return props.dictionary[language]}}
    </LanguageConsumer>
  );
};

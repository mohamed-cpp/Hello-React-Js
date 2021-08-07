import React, {useState, useEffect} from 'react';
import {IntlProvider} from 'react-intl';
import Arabic from '../../lang/ar.json';
import English from '../../lang/en.json';
import Cookies from 'js-cookie'
import { useHistory } from "react-router-dom"
export const Context = React.createContext()

const query = new URLSearchParams(window.location.search).get('lang')
let local
if(query){
  local = query
}else{
  local = Cookies.get('i18n') ? Cookies.get('i18n') : navigator.language.split(/[-_]/)[0]
}



let lang;
if (local === 'en') {
  lang = English
}else {
  lang = Arabic
}

const Wrapper = (props) => {
  const history = useHistory()
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);

  useEffect(() => {
    history.listen((location) => {
      window.history.pushState(null, '', '?lang=' + locale)
    });
  });
  useEffect(() => {
    window.history.pushState(null, '', '?lang=' + locale)
  },[locale]);

  function selectLanguage(newLocale) {
      if(!newLocale){
        newLocale = locale === 'en' ? 'ar' : 'en'
      }
      // const newLocale = e.target.value;
      setLocale(newLocale);
      if (newLocale === 'en') {
          setMessages(English);
      } else {
        setMessages(Arabic);
      }
      Cookies.set('i18n', newLocale)
  }
  return (
      <Context.Provider value = {{locale, selectLanguage}}>
          <IntlProvider messages={messages} locale={locale}>
              {props.children}
          </IntlProvider>
      </Context.Provider>

  );
}

export default Wrapper;
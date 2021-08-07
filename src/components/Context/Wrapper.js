import React, {useState} from 'react';
import {IntlProvider} from 'react-intl';
import Arabic from '../../lang/ar.json';
import English from '../../lang/en.json';
import Cookies from 'js-cookie'

export const Context = React.createContext()

const local = Cookies.get('i18n') ? Cookies.get('i18n') : navigator.language.split(/[-_]/)[0]

let lang;
if (local === 'en') {
  lang = English
}else {
  lang = Arabic
}

const Wrapper = (props) => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);

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
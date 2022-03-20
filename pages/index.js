import React, { useState, useContext } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { IntlProvider } from 'react-intl';
import { FormattedMessage } from 'react-intl';
import German from '../lang/de.json';
import Arabic from '../lang/ar.json';
import English from '../lang/en.json';

const Context = React.createContext();
const locale = typeof window !== 'undefined' ? navigator.language : 'en';
let lang;

if (locale === 'ar') {
  lang = Arabic;
} else {
  if (locale === 'de') {
    lang = German;
  } else {
    lang = English;
  }
}

export default function Home() {
  const [locale, setLocale] = useState(lang);
  const [messages, setMessages] = useState(lang);
  function selectLanguage(e) {
    const newLocale = e.target.value;
    setLocale(newLocale);
    if (newLocale === 'ar') {
      setMessages(Arabic);
    } else {
      if (newLocale === 'de') {
        setMessages(German);
      } else {
        setMessages(English);
      }
    }
  }

  return (
    <IntlProvider locale={locale} messages={messages}>
      <div className={styles.container}>
        <Head>
          <title>Next.js React intl demo</title>
        </Head>

        <main className={styles.main}>
          <p>
            <select value={locale} onChange={selectLanguage}>
              <option value="en">English</option>
              <option value="de">German</option>
              <option value="ar">Arabic</option>
            </select>
          </p>
          <p>
            <FormattedMessage
              id="app.header"
              defaultMessage="Edit the files and save to reload"
              values={{
                fileName: 'src/App.js',
                code: (word) => <code>{word}</code>,
              }}
            />
          </p>
          <h1>
            <FormattedMessage id="app.content" defaultMessage="Learn Next.js" />
          </h1>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://lokalise.com?utm_source=stackblitz-nextjs-react-intl-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FormattedMessage
              id="app.channel.plug"
              defaultMessage="Tutorial brought to you by Lokalise"
              values={{ blogName: 'Lokalise' }}
            />
          </a>
        </footer>
      </div>
    </IntlProvider>
  );
}

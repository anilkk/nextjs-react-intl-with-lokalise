import React, { useState } from 'react';
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
          <title>
            <FormattedMessage
              id="app.title"
              defaultMessage="Next.js React intl demo"
            />
          </title>
        </Head>

        <main className={styles.main}>
          <h1>
            <FormattedMessage id="app.content" defaultMessage="Learn Next.js" />
          </h1>
          <p>
            <FormattedMessage
              id="app.header"
              defaultMessage="Edit the files and save to reload"
              values={{
                fileName: 'pages/index.js',
                code: (word) => <code>{word}</code>,
              }}
            />
          </p>
          <p>
            <FormattedMessage
              id="app.change.language.dropdown.label"
              defaultMessage="Change language"
            />
            :
            <select value={locale} onChange={selectLanguage}>
              <option value="en">
                {/* <FormattedMessage
                  id="app.change.language.dropdown.label.english"
                  defaultMessage="English"
                /> */}
                English
              </option>
              <option value="de">
                <FormattedMessage
                  id="app.change.language.dropdown.label.german"
                  defaultMessage="German"
                />
                German
              </option>
              <option value="ar">
                <FormattedMessage
                  id="app.change.language.dropdown.label.arabic"
                  defaultMessage="Arabic"
                />
                Arabic
              </option>
            </select>
          </p>
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

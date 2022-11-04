import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Grid, Paper } from '@material-ui/core'

import { Plain, SitelenPona } from './components/TextFields'
import { translate } from './utils/translate'

import './styles.css'

function App() {
  const [plainText, setPlainText] = useState('')
  const [sitelenText, setSitelenText] = useState('')
  const [EmojiText, setEmojiText] = useState('')
  const [JapanText, setJapanText] = useState('')

  const onChangePlainText = (plainText) => {
    setPlainText(plainText)
    setSitelenText(translate(plainText, 'Plain', 'SP'))
    setEmojiText(translate(plainText, 'Plain', 'U6'))
    setJapanText(translate(plainText, 'Plain', 'Japanese'))
  }

  const onChangeSitelenText = (SitelenText) => {
    setSitelenText(SitelenText)
    setPlainText(translate(plainText, 'SP', 'Plain'))
    setEmojiText(translate(plainText, 'SP', 'U6'))
    setJapanText(translate(plainText, 'SP', 'Japanese'))
  }

  const onChangeEmojiText = (EmojiText) => {
    setEmojiText(EmojiText)
    setPlainText(translate(EmojiText, 'U6', 'Plain'))
    setSitelenText(translate(EmojiText, 'U6', 'SP'))
    setJapanText(translate(EmojiText, 'U6', 'Japanese'))
  }

  const onChangeJapanText = (JapanText) => {
    setJapanText(JapanText)
    setPlainText(translate(JapanText, 'Japanese', 'Plain'))
    setSitelenText(translate(JapanText, 'Japanese', 'SP'))
    setEmojiText(translate(JapanText, 'Japanese', 'U6'))
  }

  return (
    <div className="App">
      <Grid container justify="center" spacing={40}>
        <Grid item xs={12}>
          <h1>toki pona converter</h1>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <Grid container justify="center" spacing={40} direction="column">
              <Grid item>
                <h2>
                  <a href="https://tokipona.org/">toki pona</a>
                </h2>
                <Plain value={plainText} onChange={onChangePlainText} />
              </Grid>
              <Grid item>
                <h2>
                  <a href="https://jan-ne.github.io/tp/sp">sitelen pona</a>
                </h2>
                <SitelenPona value={sitelenText} onChange={onChangeSitelenText} className="toki" />
              </Grid>
              <Grid item>
                <h2>
                  <a href="https://github.com/holtzermann17/toki-pona-emoji/blob/master/word_list.md">
                    toki-pona-emoji
                  </a>
                </h2>
                <SitelenPona value={EmojiText} onChange={onChangeEmojiText} />
              </Grid>
              <Grid item>
                <h2>Japanese Kanji Pona</h2>
                <SitelenPona value={JapanText} onChange={onChangeJapanText} />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <a href="https://ilapaj.com/">ilapaj</a>
      </Grid>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

import { Emoji } from '../components/TextFields'
import { dictionary } from './dictionary'

const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value)
}

export const translate = (text, from, to) => {
  const textSplited = from === 'Plain' ? text.match(/\w+|\n+|[^\s\w]+/g) : Array.from(text)

  if (!textSplited) {
    return ''
  }

  if (to === 'Plain') {
    return textSplited
      .map((word) => {
        const resp = getKeyByValue(dictionary[from], word)
        if (resp === undefined) {
          return '_'
        }
        return dictionary[to][resp]
      })
      .join(' ')
      .replace(/\n\s/g, '\n')
      .replace(/\s\.\s/g, '.')
  }

  return textSplited
    .map((word) => {
      const resp = getKeyByValue(dictionary[from], word)
      if (resp === undefined) {
        return '_'
      }
      return dictionary[to][resp]
    })
    .join('')
}

export const textToSitelen = (text) => {
  const textSplited = text.split(' ')

  return textSplited
    .map((word) => {
      if (dictionary[word] === undefined) {
        return '...'
      }
      const emoji = dictionary[word]['SP']
      return emoji
    })
    .join('')
}

export const EmojiToText = (text) => {
  const textSplited = text.split(' ')

  return textSplited
    .map((word) => {
      if (dictionary[word] === undefined) {
        return '...'
      }
      const emoji = dictionary[word]['U6']
      return emoji
    })
    .join('')
}

export const textToCypher = (text, shift) => {
  const textSplited = text.split('')

  return textSplited
    .map((char) => {
      const position = alphabet.indexOf(char)
      return position >= 0 ? alphabet[position + shift] : ' '
    })
    .join('')
}

export const cypherToText = (text, shift) => {
  const textSplited = text.split('')

  return textSplited
    .map((char) => {
      const position = alphabet.indexOf(char)
      return position >= 0 ? alphabet[position - shift] : ' '
    })
    .join('')
}

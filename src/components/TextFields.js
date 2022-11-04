import React, { useState, useEffect } from 'react'
import { TextField } from '@material-ui/core'

export const Plain = ({ onChange, value, shift }) => {
  const changeValue = (e) => {
    const value = e.target.value
    onChange(value)
  }

  return (
    <TextField
      multiline
      style={{ width: '80%' }}
      rows={5}
      value={value}
      onChange={changeValue}
      placeholder={'Enter Plain text'}
    />
  )
}

export const SitelenPona = ({ onChange, value, shift }) => {
  const changeValue = (e) => {
    const value = e.target.value
    onChange(value)
  }

  return (
    <TextField
      multiline
      style={{ width: '80%' }}
      rows={5}
      value={value}
      onChange={changeValue}
      placeholder={'Enter cypher text'}
    />
  )
}

export const Emoji = ({ onChange, value, shift }) => {
  const changeValue = (e) => {
    const value = e.target.value
    onChange(value)
  }

  return (
    <TextField
      multiline
      style={{ width: '80%' }}
      rows={5}
      value={value}
      onChange={changeValue}
      placeholder={'Enter Kanji text'}
    />
  )
}

export const A = ({ onChange, value, shift }) => {
  const changeValue = (e) => {
    const value = e.target.value
    onChange(value)
  }

  return (
    <TextField
      multiline
      style={{ width: '80%' }}
      rows={5}
      value={value}
      onChange={changeValue}
      placeholder={'Enter Kanji text'}
    />
  )
}

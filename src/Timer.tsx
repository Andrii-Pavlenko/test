import React from 'react'
import { Message } from 'semantic-ui-react';
import { UseTimer } from './hooks'

const Timer = () => {
  const initTimer = UseTimer(10);

  return (
    <Message>
      {initTimer}
    </Message>
  )
}

export default Timer

import React from 'react'
import { Message } from 'semantic-ui-react'

export const MessageExamplePositive = (input) => (
  <Message positive>
    <p>
        {input}
    </p>
  </Message>
)

export const MessageExampleNegative = (input) => (
    <Message negative>
      <p>
          {input}
      </p>
    </Message>
  )
  

import React, { Component } from 'react'
import { List, Image} from 'semantic-ui-react'
  
  
function Comments() {
//we want this to return the componet to build up comments depending on 'note' being reviewed.
  return(<List>
    <List.Item>
      <Image avatar src='/images/avatar/small/rachel.png' />
      <List.Content>
        <List.Header as='a'>Rachel</List.Header>
        <List.Description>
          Last seen watching{' '}
          <a>
            <b>Arrested Development</b>
          </a>{' '}
          just now.
        </List.Description>
      </List.Content>
    </List.Item>
    </List>)
}
  
export default Comments;
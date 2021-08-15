import React, { Component } from 'react'
import { List, Image} from 'semantic-ui-react'
  
  
function Comments(props) {
//we want this to return the componet to build up comments depending on 'note' being reviewed.
  const { body, username, createdAt } = props.note
  
  return (<List>
    <List.Item>
      <Image avatar src='/images/avatar/small/rachel.png' />
      <List.Content>
        <List.Header as='a'>{username} {createdAt}</List.Header>
        <List.Description>
          {body}
        </List.Description>
      </List.Content>
    </List.Item>
    </List>)
}
  
export default Comments;
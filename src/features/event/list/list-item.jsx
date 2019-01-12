import React from 'react';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import EventListAttendee from './list-attendee';

export default function ListItem(props) {
  const { event, deleteEvent } = props;
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src={event.hostPhotoURL} />
            <Item.Content>
              <Item.Header as="a">{event.title}</Item.Header>
              <Item.Description>
                Created by <span>{event.hostedBy}</span>
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" /> {event.date} |
          <Icon name="marker" /> {event.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees &&
            event.attendees.map(attendee => (
              <EventListAttendee key={attendee.id} attendee={attendee} />
            ))}
        </List>
      </Segment>
      <Segment clearing>
        <span>{event.description}</span>
        <Button
          onClick={deleteEvent(event.id)}
          as="a"
          color="red"
          floated="right"
          content="Delete"
        />
        <Button
          as={Link}
          to={`/collection/${event.id}`}
          color="teal"
          floated="right"
          content="View"
        />
      </Segment>
    </Segment.Group>
  );
}

import React from 'react'
import { Grid, Header, Image, Segment } from 'semantic-ui-react'
import LazyLoad from 'react-lazyload'

const UserDetailedPhotos = ({ photos }) => {
  return (
    <Grid.Column width={16}>
      <Segment attached>
        <Header icon="photo" content="Photos" />

        <Image.Group>
          {photos &&
            photos.map(photo => (
              <LazyLoad
                key={photo.id}
                height={150}
                offset={-40}
                placeholder={<Image src="/assets/user.png" />}>
                <Image style={{ maxHeight: '300px', verticalAlign: 'top' }} src={photo.url} />
              </LazyLoad>
            ))}
        </Image.Group>
      </Segment>
    </Grid.Column>
  )
}

export default UserDetailedPhotos

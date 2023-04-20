import React, { useState } from 'react'
import { Title } from '../../ui/Title'
import { Description } from '../../ui/Description'
import { Button } from '../../ui/Button'
import { ModalBig } from '../ModalBig'

export const Test = () => {
  const [modal, setModal] = useState(false);

    // scroll disable
    modal ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';

  const handler = () => {
    setModal(true);
  }

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <Title content='Test' />

      <Description content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consequatur, voluptatibus culpa ut odio rerum autem dicta laboriosam blanditiis modi expedita nemo hic? Beatae, fugit. Quam sed consequatur, assumenda laboriosam odit voluptatum quos commodi eaque repellendus ducimus excepturi numquam cum mollitia voluptas natus consequuntur, sunt ipsum exercitationem tempore totam ad?' />

      <Description content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consequatur, voluptatibus culpa ut odio rerum autem dicta laboriosam blanditiis modi expedita nemo hic? Beatae, fugit. Quam sed consequatur, assumenda laboriosam odit voluptatum quos commodi eaque repellendus ducimus excepturi numquam cum mollitia voluptas natus consequuntur, sunt ipsum exercitationem tempore totam ad?' />

      <Button content='Click' onClick={handler} />

      
        <ModalBig setModalStatus={setModal} isOpen={modal} />
      

      <Description content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consequatur, voluptatibus culpa ut odio rerum autem dicta laboriosam blanditiis modi expedita nemo hic? Beatae, fugit. Quam sed consequatur, assumenda laboriosam odit voluptatum quos commodi eaque repellendus ducimus excepturi numquam cum mollitia voluptas natus consequuntur, sunt ipsum exercitationem tempore totam ad?' />

      <Description content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consequatur, voluptatibus culpa ut odio rerum autem dicta laboriosam blanditiis modi expedita nemo hic? Beatae, fugit. Quam sed consequatur, assumenda laboriosam odit voluptatum quos commodi eaque repellendus ducimus excepturi numquam cum mollitia voluptas natus consequuntur, sunt ipsum exercitationem tempore totam ad?' />

      <Description content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consequatur, voluptatibus culpa ut odio rerum autem dicta laboriosam blanditiis modi expedita nemo hic? Beatae, fugit. Quam sed consequatur, assumenda laboriosam odit voluptatum quos commodi eaque repellendus ducimus excepturi numquam cum mollitia voluptas natus consequuntur, sunt ipsum exercitationem tempore totam ad?' />

    </>
  )
}

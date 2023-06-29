import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

import LojaProdutos from './LojaProdutos'

function Loja(){

    const [modal, setModal] = useState(false)

    const toggle = () => setModal(!modal)

    return(

        <div>
            <Button color="primary" size="sm" className='shadow' onClick={toggle}>
                Loja
            </Button>
            <Modal isOpen={modal} toggle={toggle} centered size='xl' backdrop='static'>
                <ModalHeader toggle={toggle} className='border-0 cronnos-font-12'><span className='cronnos-font-14 fw-bold'>Produtos disponíveis</span></ModalHeader>
                <ModalBody>
                    <div class="container">
                        <LojaProdutos/>
                    </div>
                </ModalBody>
                <ModalFooter className='border-0'/>
            </Modal>
        </div>

    )
}

export default Loja
import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

import FormNovoProduto from './FormNovoProduto'

function ModalNovoProduto({refrashTable, setRefrashTable}) {

    const [modal, setModal] = useState(false)

    const toggle = () => setModal(!modal)

    return (
        <div>
            <Button color="primary" size="sm" className='shadow' onClick={toggle}>
                Novo produto
            </Button>
            <Modal isOpen={modal} toggle={toggle} centered size='lg' backdrop='static'>
                <ModalHeader toggle={toggle} className='border-0 cronnos-font-12'><span className='cronnos-font-14 fw-bold'>Cadastrar novo produto</span></ModalHeader>
                <ModalBody>
                    <FormNovoProduto refrashTable={refrashTable} setRefrashTable={setRefrashTable}/>
                </ModalBody>
                <ModalFooter className='border-0'/>
            </Modal>
        </div>
    )
}

export default ModalNovoProduto
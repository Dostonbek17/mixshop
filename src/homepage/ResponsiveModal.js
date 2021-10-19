import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import {FaSearch} from 'react-icons/fa';

const ResponsiveModal = () => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="responsivemodal">
      <Button onClick={toggle}>
        <FaSearch />
      </Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Search</ModalHeader>
        <ModalBody>
        <div className="searchSec">
                   <form>
                       <input type="text" className="searchInput" placeholder="Search For Products, Brands & Categories" />
                       <button type="button" className="searchBtn">
                          <FaSearch />
                       </button>
                   </form>
               </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ResponsiveModal;
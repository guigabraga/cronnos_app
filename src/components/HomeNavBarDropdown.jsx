import React, { useState } from 'react'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Button
} from 'reactstrap'
//Icones:
import { TiChevronRight } from 'react-icons/ti'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function HomeNavBarDropdown({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className='d-flex'>
        <UncontrolledDropdown group>
            <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
                <DropdownToggle tag="span">
                    <a type='button'><TiChevronRight className='rotate-90'/></a>
                </DropdownToggle>
                <DropdownMenu {...args} className='shadow'>
                    <Link to='/login' className='text-decoration-none cronnos-font-12 fw-semibold'>
                      <DropdownItem>
                        Sair
                      </DropdownItem>
                    </Link>
                </DropdownMenu>
            </Dropdown>
        </UncontrolledDropdown>
    </div>
  )
}

HomeNavBarDropdown.propTypes = {
  direction: PropTypes.string,
};

export default HomeNavBarDropdown;
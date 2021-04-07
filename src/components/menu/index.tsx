import React, { useCallback, useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

import Theme from 'theme';

import Button from '../button';

type MenuProps = {
  toggleButtonContent: string | React.ReactElement | React.ReactElement[];
  children: React.ReactElement | React.ReactElement[];
  toggleButtonColor?: string;
  isToggleButtonSmall?: boolean;
  isDropdown?: boolean;
};

type StyledMenuProps = {
  isOpen: boolean;
  isDropdown?: boolean;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledMenu = styled.ul`
  width: 100%;
  max-height: ${({ isOpen, isDropdown }: StyledMenuProps) => !isDropdown && (isOpen ? '200px' : 0)};
  margin-top: ${({ isOpen, isDropdown }: StyledMenuProps) => !isDropdown && (isOpen ? '15px' : 0)};
  padding: 0;
  overflow: hidden;
  background-color: ${Theme.colors.extraLightGray};
  border-radius: 15px;
  transition: margin-top 0.2s, max-height 0.2s ease-in-out;
  ${({ isOpen, isDropdown }: StyledMenuProps) =>
    isDropdown &&
    `
      position: absolute;
      width: max-content;
      z-index: 2;
      display: flex;
      flex-direction: column;
      top: 70px;
      align-items: center;
      background-color: white;
      box-shadow: 0 0 0.7em rgba(0, 0, 0, 0.3);
      visibility: ${isOpen ? 'visible' : 'hidden'};
      opacity: ${isOpen ? 1 : 0};
      transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;
  `}
`;

const Menu = ({
  toggleButtonContent,
  children,
  toggleButtonColor = Theme.colors.primary,
  isToggleButtonSmall = false,
  isDropdown = false,
}: MenuProps): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const menuTogglerRef = useRef(null);
  const menuRef = useRef(null);

  const handleOutsideClick = useCallback((event) => {
    const path = event.path || (event.composedPath && event.composedPath());

    if (!path.includes(menuRef.current) && !path.includes(menuTogglerRef.current)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return (
    <Container>
      <Button
        handleClick={() => setIsOpen(!isOpen)}
        ref={menuTogglerRef}
        color={toggleButtonColor}
        isSmall={isToggleButtonSmall}
      >
        {toggleButtonContent}
      </Button>
      <StyledMenu ref={menuRef} isOpen={isOpen} isDropdown={isDropdown}>
        {children}
      </StyledMenu>
    </Container>
  );
};

Menu.defaultProps = {
  toggleButtonColor: Theme.colors.primary,
  isToggleButtonSmall: false,
  isDropdown: false,
};

export default Menu;
export { MenuProps };

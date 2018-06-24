import React, { Component } from 'react'
import Portal from './BPortal';
import styled from 'styled-components';


export default class Modal extends Component {
  render() {
      const { children, toggle, on } = this.props;
    return (
      <Portal>
        { on &&
            <ModalWrapper>
              <ModalCard>
                <CloseButton onClick={toggle}>
                  x
                </CloseButton>
                <div>{children}</div>
              </ModalCard>
              <Background onClick={toggle}/>
            </ModalWrapper>
        }
      </Portal>
    );
  }
}

const ModalWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
`;

const ModalCard = styled.div`
    position: relative;
    background: white;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 2px 2px 10px rgba(0,0,0, 0.3);
    z-index:10;
    min-width: 540px;
    min-height: 360px;
    display: flex;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    border:none;
    background: transparent;
    padding:10px;
`;

const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left 0;
    background: black;
    opacity: 0.4;
`;

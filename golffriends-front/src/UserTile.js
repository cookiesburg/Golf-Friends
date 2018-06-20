import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Toggle from './Toggle';
import Modal from './Modal';
import RoundHistory from './RoundHistory';
import ScoreForm from './ScoreForm';
import DelUserBtn from './DelUserBtn';
import EditUserBtn from './EditUserBtn';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

class UserTile extends Component {

  render() {
    return(
      <div>
        <Tile>
          <TopRow>
            <EditUserBtn user={this.props.user}/>

            <DelUserBtn user={this.props.user.id}/>
          </TopRow>
          <Name>{this.props.user.name}</Name>
          <ButtonBar>

            <ButtonWrapper>
              <Toggle>
                {({on, toggle}) => (
                  <Fragment>
                    <Modal on={on} toggle={toggle}>
                      <RoundHistory user={this.props.user} />
                    </Modal>
                    <ModalButton onClick={toggle}>SCORES</ModalButton>
                  </Fragment>
                )}
              </Toggle>
            </ButtonWrapper>

            <ButtonWrapper>
            <Toggle>
              {({on, toggle}) => (
                <Fragment>
                  <Modal on={on} toggle={toggle}>
                    <ScoreForm user={this.props.user} />
                  </Modal>
                  <ModalButton onClick={toggle}>POST</ModalButton>
                </Fragment>
              )}
            </Toggle>
            </ButtonWrapper>

          </ButtonBar>
        </Tile>
      </div>
    );
  }
}

export default UserTile;

const Tile = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 150px;
  background: #222;
  cursor: default;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  border: 3px solid black;
  color: white;
  margin-top: 30px;
  margin-bottom: 30px;
  transition: all .4s ease;
    :hover {
      box-shadow: 0 0 3rem gray;
    }
`;
const TopRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: white;
`;
const Name = styled.div`
  display: flex;
  flex-grow: 5;
  justify-content: center;
  align-items: center;
  letter-spacing: 3px;
`;
const ButtonBar = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;

`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  background: var(--base);
  justify-content: center;
  align-items: center;
`;
const ModalButton = styled.button`
  flex-grow: 1;
  height: 100%;
  border: none;
  letter-spacing: 2px;
  transition: all .4s ease;
    :hover {
      box-shadow: 0 0 3rem black;
      cursor: pointer;
    }
`;

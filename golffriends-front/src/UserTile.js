import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Toggle from './Toggle';
import Modal from './Modal';
import RoundHistory from './RoundHistory';
import ScoreForm from './ScoreForm';
import DelUserBtn from './DelUserBtn';

class UserTile extends Component {
  state = {
    scores: [],
  };

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/scores')
    .then(response => {
      const scores = response.data.filter(score => score.user_id === this.props.user.id);
      this.setState({ scores, })
    })
    .catch(error => console.log(error))
  }

  render() {
    return(
      <div>
        <Tile>
          <TopRow><DelUserBtn user={this.props.user.id}/></TopRow>
          <Name>{this.props.user.name}</Name>
          <ButtonBar>

            <ButtonWrapper>
              <Toggle>
                {({on, toggle}) => (
                  <Fragment>
                    <Modal on={on} toggle={toggle}>
                      <RoundHistory scores={this.state.scores} />
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
  box-shadow: 0 0 15px black;
  color: white;
  margin-top: 30px;
  margin-bottom: 30px;
  transition: all .4s ease;
    :hover {
      box-shadow: 0 0 1rem #ffc600;
    }
`;
const TopRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
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

export {UserTile, Tile};

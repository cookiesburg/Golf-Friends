import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Toggle from './Toggle';
import Modal from './Modal';
import RoundHistory from './scores/RoundHistory';
import ScoreForm from './scores/ScoreForm';
import DelUserBtn from './users/DelUserBtn';
import EditUserBtn from './users/EditUserBtn';
import { Form } from './utilities/Form';

class UserTile extends Component {
  render() {
    return(
      <div>
        <Tile >
          <div className='topRow'>
            <EditUserBtn user={this.props.user}/>
          </div>
          <div className='name'>
            {this.props.user.name}
          </div>
          <div className='buttonBar'>
            <Toggle>
              {({on, toggle}) => (
                <Fragment>
                  <Modal on={on} toggle={toggle}>
                    <RoundHistory user={this.props.user} />
                  </Modal>
                  <button onClick={toggle}>SCORES</button>
                </Fragment>
              )}
            </Toggle>
            <Toggle>
              {({on, toggle}) => (
                <Fragment>
                  <Modal on={on} toggle={toggle}>
                    <ScoreForm user={this.props.user} toggle={toggle}/>
                  </Modal>
                  <button onClick={toggle}>POST</button>
                </Fragment>
              )}
            </Toggle>
          </div>
        </Tile>
      </div>
    );
  }
}

export default UserTile;

const Tile = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  height: 220px;
  background: gray;
  cursor: default;
  font-size: 25px;
  color: white;
  margin-top: 30px;
  margin-bottom: 30px;
  transition: all .4s ease;
  border-radius: 8px;
  text-transform: uppercase;
    :hover {
      box-shadow: 0 0 3rem gray;
    }
    .topRow {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      font-size: 12px;
      color: white;
    }
    .name {
      display: flex;
      flex-grow: 5;
      justify-content: left;
      margin-left: 20px;
      align-items: center;
      text-align: left;
      letter-spacing: 2px;
      font-size: 18px;
    }
    .buttonBar {
      display: flex;
      flex-direction: column;
      align-items: left;
      margin-left: 20px;
      margin-bottom: 20px;

       button {
         width: 40%;
         margin-bottom: 10px;
         font-size: 10px;
         padding: 3px;
         border-radius: 8px;
         font-weight: bold;
         border:3px solid gray;

         :hover {
           cursor: pointer;
           background: var(--base);
         }
       }
    }
`;

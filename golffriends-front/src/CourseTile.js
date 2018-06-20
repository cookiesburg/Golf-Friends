return(
  <div>
    <CourseTile>
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
                  <RoundHistory scores={this.state.scores} handicap={this.state.handicap} />
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
    </CourseTile>
  </div>
);

import React, {
  PropTypes,
  Component
}                         from 'react';
import {
  AnimatedView,
  Panel,
  TeamMates,
  TeamMember,
  TeamMateAddButton
}                         from '../../components';
import shallowCompare     from 'react-addons-shallow-compare';
import Highlight          from 'react-highlight';


class TeamMatesView extends Component {

  state = {
    members: [
      {
        picture: './public/img/26115.jpg',
        firstname: 'Damon',
        lastname: 'Parker',
        profile: 'Admin',
        profileColor: 'danger'
      },
      {
        picture: './public/img/26115.jpg',
        firstname: 'Joe',
        lastname: 'Waston',
        profile: 'Member',
        profileColor: 'warning'
      },
      {
        picture: './public/img/26115.jpg',
        firstname: 'Jannie',
        lastname: 'Davis',
        profile: 'Editor',
        profileColor: 'warning'
      },
      {
        picture: './public/img/26115.jpg',
        firstname: 'Emma',
        lastname: 'Welson',
        profile: 'Editor',
        profileColor: 'success'
      },
      {
        picture: './public/img/26115.jpg',
        firstname: 'Emma',
        lastname: 'Welson',
        profile: 'Editor',
        profileColor: 'info'
      }
    ]
  };

  componentWillMount() {
    const { actions: { enterTeamMatesView } } = this.props;
    enterTeamMatesView();
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillUnmount() {
    const { actions: { leaveTeamMatesView } } = this.props;
    leaveTeamMatesView();
    clearTimeout(this.enterAnimationTimer);
  }

  render() {
    const { members } = this.state;

    const source = `
      // import
      import {
        Panel,
        TeamMates,
        TeamMember,
        TeamMateAddButton
      } from './_SOMEWHERE_/components';

      // team members (in state for example):
      state = {
        members: [
          {
            picture: './public/img/26115.jpg',
            firstname: 'Damon',
            lastname: 'Parker',
            profile: 'Admin',
            profileColor: 'danger'
          },
          {
            picture: './public/img/26115.jpg',
            firstname: 'Joe',
            lastname: 'Waston',
            profile: 'Member',
            profileColor: 'warning'
          },
          {
            picture: './public/img/26115.jpg',
            firstname: 'Jannie',
            lastname: 'Davis',
            profile: 'Editor',
            profileColor: 'warning'
          },
          {
            picture: './public/img/26115.jpg',
            firstname: 'Emma',
            lastname: 'Welson',
            profile: 'Editor',
            profileColor: 'success'
          },
          {
            picture: './public/img/26115.jpg',
            firstname: 'Emma',
            lastname: 'Welson',
            profile: 'Editor',
            profileColor: 'info'
          }
        ]
      };

      // in render():
      <Panel
        hasTitle={true}
        title={'Teammates'}>
        <TeamMates>
          {
            members.map(
              (member, memberIndex) => {
                return (
                  <TeamMember
                    key={memberIndex}
                    picture={member.picture}
                    firstname={member.firstname}
                    lastname={member.lastname}
                    profile={member.profile}
                    profileColor={member.profileColor}
                  />
                );
              }
            )
          }
        </TeamMates>
        <TeamMateAddButton />
      </Panel>
      `;

    return(
      <AnimatedView>
        {/* preview: */}
        <div className="row">
          <div className="col-xs-12">
            <Panel
              hasTitle={true}
              title={'Teammates'}>
              <TeamMates>
                {
                  members.map(
                    (member, memberIndex) => {
                      return (
                        <TeamMember
                          key={memberIndex}
                          picture={member.picture}
                          firstname={member.firstname}
                          lastname={member.lastname}
                          profile={member.profile}
                          profileColor={member.profileColor}
                        />
                      );
                    }
                  )
                }
              </TeamMates>
              <TeamMateAddButton />
            </Panel>
          </div>
        </div>
        {/* source: */}
        <div className="row">
          <div className="col-xs-12">
            <Panel
              title="Source"
              hasTitle={true}>
              <Highlight className="javascript">
                {source}
              </Highlight>
            </Panel>
          </div>
        </div>
      </AnimatedView>
    );
  }
}

TeamMatesView.propTypes= {
  actions: PropTypes.shape({
    enterTeamMatesView: PropTypes.func.isRequired,
    leaveTeamMatesView: PropTypes.func.isRequired
  })
};

export default TeamMatesView;

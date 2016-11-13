import React, {
  PropTypes,
  Component
}                         from 'react';
import cx                 from 'classnames';
import {
  Panel,
  TeamMates,
  TeamMember,
  TeamMateAddButton
}                         from '../../components';
import shallowCompare     from 'react-addons-shallow-compare';
import Highlight          from 'react-highlight';


class TeamMatesView extends Component {

  state = {
    animated: true,
    viewEnters: false,
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
    const { actions: { enterTwitterFeed } } = this.props;
    enterTwitterFeed();
  }

  componentDidMount() {
    this.enterAnimationTimer = setTimeout(
      () => this.setState({viewEnters: true}),
      500
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillUnmount() {
    const { actions: { leaveTwitterFeed } } = this.props;
    leaveTwitterFeed();
    clearTimeout(this.enterAnimationTimer);
  }

  render() {
    const {
      animated,
      viewEnters,
      members
    } = this.state;

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
      <section className={
        cx({
          'content':       true,
          'animatedViews': animated,
          'invisible':     !viewEnters,
          'view-enter':    viewEnters
        })
      }>
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
      </section>
    );
  }
}

TeamMatesView.propTypes= {
  actions: PropTypes.shape({
    enterTwitterFeed: PropTypes.func.isRequired,
    leaveTwitterFeed: PropTypes.func.isRequired
  })
};

export default TeamMatesView;

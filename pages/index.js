import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserActions from '~/actions/user';
import { Row, Col } from '~/components/Grid';
import UserForm from '~/components/UserForm';

class Index extends Component {
  static async getInitialProps(ctx) {
    const { store } = ctx;

    const userId = 1;
    const user = await store.dispatch(UserActions.get(userId, ctx));

    return {
      user,
      meta: {
        title: 'project-name',
        description:
          'This is an example of a meta description for project-name page.',
      },
    };
  }

  static propTypes = {
    /**
     * Current information of the user, if logged in
     */
    user: PropTypes.object,
    /**
     * Meta attributes, e.g. title, description etc.
     */
    meta: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: '',
      },
    };
  }

  render() {
    return (
      <Row>
        <Col>
          <h1>project-name</h1>
          <p>Hello {this.props.user.email}</p>
          <UserForm data={this.state.user} />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(Index);

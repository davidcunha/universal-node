import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from '~/components/Grid';
import ThumbsUp from '~/shared/media/images/icons/thumbs-up.svg';

class About extends Component {
  static async getInitialProps() {
    return {
      meta: {
        title: 'About',
        description: 'This is an example of a meta description for about page.',
      },
    };
  }

  static propTypes = {
    /**
     * Meta attributes, e.g. title, description etc.
     */
    meta: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Row>
        <Col>
          <h1>HELLO WORLD!</h1>
          <p>BRINGING AMAZING DIGITAL PRODUCTS TO LIFE.</p>
          <ThumbsUp />
        </Col>
      </Row>
    );
  }
}

export default About;

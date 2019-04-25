import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

/**
 * Custom Head:
 * Dynamically set `<head>` attributes for SEO
 */
class CustomHead extends PureComponent {
  static propTypes = {
    meta: PropTypes.object,
  };

  static defaultProps = {
    meta: {},
  };

  render() {
    const { meta } = this.props;
    return (
      <Head>
        {meta.title && <title>project-name - {meta.title}</title>}
        {meta.description && (
          <meta
            key="description"
            name="description"
            content={meta.description}
          />
        )}
      </Head>
    );
  }
}

export default CustomHead;

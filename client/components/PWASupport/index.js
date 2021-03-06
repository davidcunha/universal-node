import React from 'react';

class PWASupport extends React.PureComponent {
  componentDidMount() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then(() => console.log('service worker registered.'))
        .catch(err => console.dir(err));
    }
  }

  render() {
    return null;
  }
}

export default PWASupport;

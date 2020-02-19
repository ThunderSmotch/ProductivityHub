import * as React from 'react';

/** @jsx jsx */
import { jsx } from '@emotion/core';

// eslint-disable-next-line
//set the app to load help.html on load
export default class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <webview src="index.html" />
        </div>
      </div>
    );
  }
}

import * as React from 'react';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
// set the css for the app
const stylePage = css`
  position: fixed;
  height: 100%;
  width: calc(100% - 60px);
  height: 100%;
`;

// eslint-disable-next-line
//set the app to load help.html on load
export default class App extends React.Component {
  render() {
    return (
      <div css={stylePage}>
        <div>
          <webview src="index.html" />
        </div>
      </div>
    );
  }
}

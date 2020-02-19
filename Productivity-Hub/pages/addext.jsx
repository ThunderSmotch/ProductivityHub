import * as React from 'react';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
// setting the css for the page
const stylePage = css`
  position: fixed;
  height: 100%;
`;

// eslint-disable-next-line
// setting the webview for todoist
export default class App extends React.Component {
  render() {
    return (
      <div css={stylePage}>
        <div>
          <webview src="https://todoist.com" preload="../src/preload.js" enableremotemodule="true" contexttype="all" plugins="true" nodeintegration="true" allowpopups="true" webpreferences="javascript=yes" />
        </div>
      </div>
    );
  }
}

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import generateDocs from '@loggi/markdown-docs';
import Logo from '@loggi/ui/components/logo';
import './index.scss';


function LoggiDocsLogo() {
  return (<div style={{alignSelf: 'center'}}>
    <Logo type="loggi" height={50} />
  </div>);
}

const config = {
  logo: LoggiDocsLogo,
  files: require.context('@loggi/markdown-docs/loader!./docs', true, /\.md$/),
  // ordering: {
  //   root: ['overview', 'principles', 'components', 'editorial'],
  //   overview: ['about', 'contributing', 'supported-devices']
  // },
  onIterateMarkdown: (Tag, props, children) => {
    return null;
  },
  setEvalContext: (context) => {
  }
};


const LoggiDocs = generateDocs(config);
ReactDOM.render(LoggiDocs, document.getElementById('container'));

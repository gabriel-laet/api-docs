import 'babel-polyfill';
import 'whatwg-fetch';
import 'codemirror-graphql/mode';

import React from 'react';
import ReactDOM from 'react-dom';
import GraphiQL from 'graphiql';
import Codemirror from 'react-codemirror';
import generateDocs from '@loggi/markdown-docs';
import Logo from '@loggi/ui/components/logo';
import './index.scss';


function LoggiDocsLogo() {
  return (<div style={{alignSelf: 'center'}}>
    <Logo type="loggi" height={50} />
  </div>);
}


function graphQLFetcher(graphQLParams) {
  return fetch('https://staging.loggi.com/public-graphql', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json());
}

const codemirrorSettings = {
  options: {
    mode: 'graphql',
    readOnly: true
  }
};


const config = {
  logo: LoggiDocsLogo,
  files: require.context('@loggi/markdown-docs/loader!./docs', true, /\.md$/),
  ordering: {
    root: ['overview', 'resources'],
    overview: ['welcome', 'environments', 'getting-access', 'http-request-examples', 'quick-graphql-tips'],
    // resources: []
  },
  onMarkdownIterate: (Tag, props, children) => {
    if (Tag === 'code' && props['data-language'] === 'graphql') {
      return (
        <Codemirror
          value={children[0]}
          {...codemirrorSettings} />
      );
    }
    if (Tag === 'code' && props['data-language'] === 'graphiql') {
      return <GraphiQL fetcher={graphQLFetcher} query={children[0]} />;
    }
    return null;
  },

  setEvalContext: (context) => {
    context.GraphiQL = (props) => <GraphiQL fetcher={graphQLFetcher} {...props} />;
  }
};


const LoggiDocs = generateDocs(config);
ReactDOM.render(LoggiDocs, document.getElementById('container'));

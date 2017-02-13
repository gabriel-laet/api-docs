import 'babel-polyfill';
import 'whatwg-fetch';
import 'codemirror-graphql/mode';

import React from 'react';
import ReactDOM from 'react-dom';
import GraphiQL from 'graphiql';
import Codemirror from 'react-codemirror';
import View from '@loggi/ui/components/view';
import ViewContainer from '@loggi/ui/components/view-container';
import Col from '@loggi/ui/components/col';
import Button from '@loggi/ui/components/button';
import screens from '@loggi/ui/components/utils/screens';
import generateDocs from '@loggi/markdown-docs';
import Logo from '@loggi/ui/components/logo';
import './index.scss';


function LoggiDocsLogo() {
  return (<div style={{alignSelf: 'center'}}>
    <Logo type="loggi" height={40} />
  </div>);
}


function graphQLFetcher(graphQLParams) {
  return fetch('https://staging.loggi.com/public-graphql', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(graphQLParams)
  }).then(response => response.json());
}


class CustomGraphiQL extends React.Component {
  constructor(props) {
    super(props);
    this._graphiql = null;
    this._onLoadRef = this._onLoadRef.bind(this);
    this._onToggleDocs = this._onToggleDocs.bind(this);
    this._run = this._run.bind(this);
    this._docs = this._docs.bind(this);
    this.state = {
      docsOpened: false
    };
  }

  _onLoadRef(instance) {
    if (instance) {
      this._graphiql = instance;
      this._graphiql.setState({editorFlex: 1});
    }
  }

  _run() {
    this._graphiql.handleRunQuery();
  }

  _docs() {
    this._graphiql.handleToggleDocs();
  }

  _onToggleDocs(opened) {
    this.setState({docsOpened: opened});
  }

  componentWillUnmount() {
    this._graphiql = null;
  }

  render() {
    const {docsOpened} = this.state;
    return (
      <View style={{marginBottom: 80, width: '80%', height: docsOpened ? 600 : 300}}>
        <ViewContainer fluid>
          <Col gutter={{right: 'half'}}>
            <Button
              style="outline"
              size="small"
              value="Run"
              onClick={this._run}
            />
          </Col>
          <Col>
            <Button
              style="outline"
              size="small"
              value="Docs"
              onClick={this._docs}
            />
          </Col>
        </ViewContainer>
        <GraphiQL
          ref={this._onLoadRef}
          fetcher={graphQLFetcher}
          onToggleDocs={this._onToggleDocs}
          {...this.props} />
      </View>
    );
  }
}

function getGraphiQL(props) {
  return <CustomGraphiQL {...props} />;
}

const codemirrorSettings = {
  options: {
    mode: 'graphql',
    readOnly: true
  }
};


const isMobile = screens.getScreen() < screens.sizes.md;
const config = {
  logo: LoggiDocsLogo,
  files: require.context('@loggi/markdown-docs/loader!./docs', true, /\.md$/),
  ordering: {
    root: ['introduction', 'corp-overview', 'other-resources', 'help'],
    introduction: ['welcome', 'environments', 'getting-access', 'authorization', 'quick-graphql-tips'],
    'corp-overview': ['generate-a-quote', 'confirm-an-order', 'search-an-order', 'order-follow-up', 'cancel-order', 'share-an-order', 'rating-an-order'],
    help: ['support', 'terms-of-use']
  },
  onMarkdownIterate: (Tag, props, children) => {
    if (Tag === 'code' && (props['data-language'] === 'graphql' || (isMobile && props['data-language'] === 'graphiql'))) {
      return (
        <Codemirror
          value={children[0]}
          {...codemirrorSettings} />
      );
    }

    if (Tag === 'pre' && children[0].type === CustomGraphiQL) {
      props.className = null;
      return <View {...props}>{children}</View>;
    }

    if (Tag === 'code' && props['data-language'] === 'graphiql') {
      return getGraphiQL({query: children[0]});
    }
    return null;
  },

  setEvalContext: (context) => {
    context.GraphiQL = (props) => getGraphiQL(props);
  }
};


const LoggiDocs = generateDocs(config);
ReactDOM.render(LoggiDocs, document.getElementById('container'));

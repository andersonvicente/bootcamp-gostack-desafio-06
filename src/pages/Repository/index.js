import React, { Component } from 'react';

import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';

import { Container, Header } from './styles';

export default class Repository extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('repository').name,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  state = {
    repository: [],
  };

  componentDidMount() {
    const { navigation } = this.props;

    const repository = navigation.getParam('repository');

    this.setState({ repository });
  }

  render() {
    const { repository } = this.state;

    return (
      <Container>
        <WebView source={{ uri: repository.html_url }} style={{ flex: 1 }} />
      </Container>
    );
  }
}

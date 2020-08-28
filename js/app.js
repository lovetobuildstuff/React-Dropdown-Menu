import Menu from './components/menu';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Menu />
    )
  }

};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
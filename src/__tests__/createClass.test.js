import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import ClassCreate from '../components/swimClass/createClass';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <ClassCreate />
        </Router>
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

  /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import { StackNavigator } from 'react-navigation'
import SearchPage from './SearchPage';
import SearchResults from './SearchResults';
import PropertyView from './PropertyView';
import FBAccountKitStarter from './AccountKitSample'

const App = StackNavigator({
  Home : { screen : FBAccountKitStarter },
  NextPage: { screen : SearchPage },
  Results : { screen: SearchResults },
  Property: { screen: PropertyView},
});
export default App;

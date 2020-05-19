import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen48316Navigator from '../features/BlankScreen48316/navigator';
import Messaging48315Navigator from '../features/Messaging48315/navigator';
import Messaging48314Navigator from '../features/Messaging48314/navigator';
import Messaging48313Navigator from '../features/Messaging48313/navigator';
import Messaging48312Navigator from '../features/Messaging48312/navigator';
import Messaging48311Navigator from '../features/Messaging48311/navigator';
import Messaging48310Navigator from '../features/Messaging48310/navigator';
import BlankScreen48276Navigator from '../features/BlankScreen48276/navigator';
import BlankScreen48272Navigator from '../features/BlankScreen48272/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
BlankScreen48316: { screen: BlankScreen48316Navigator },
Messaging48315: { screen: Messaging48315Navigator },
Messaging48314: { screen: Messaging48314Navigator },
Messaging48313: { screen: Messaging48313Navigator },
Messaging48312: { screen: Messaging48312Navigator },
Messaging48311: { screen: Messaging48311Navigator },
Messaging48310: { screen: Messaging48310Navigator },
BlankScreen48276: { screen: BlankScreen48276Navigator },
BlankScreen48272: { screen: BlankScreen48272Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

import React from 'react'
import { observer, inject } from 'mobx-react'
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom'
import Home from './components/landing/Home'
import Swiper from './components/swiper/Swiper'
import BagRecommendations from './components/bag/Recommendations/BagRecommendations'
import SimpleBottomNavigation from './components/Navbar/Navbar'
{/* <BagRecommendations.screen name="Recommendations" component={BagRecommendations} options={{gestureEnabled: false}} /> */}
const App = inject('UserStore')(
	observer(props => {
		return (
			<Router>
				<Switch>
					<Route exact path={'/'} render={props => <Home {...props} />} />
					<Route
						exact
						path={'/bagRecommendations'}
						render={props => <BagRecommendations />}
					/>
					<Route exact path={'/swiper'} render={props => <Swiper />} />
					<Redirect to="/" from="*" />
				</Switch>
				{props.UserStore.isLoggedIn && <SimpleBottomNavigation />}
			</Router>
		)
	}),
)

export default App

import React, { useState, useEffect } from 'react'
import './style.css'
import Login from './Login'
import Register from './SignUp'
import { observer, inject } from 'mobx-react'

const Home = inject('UserStore')(
	observer(props => {
		const [isLogginActive, setIsLogginActive] = useState(true)

		useEffect(() => {
			if (localStorage.getItem('user')) {
				props.UserStore.setUser(JSON.parse(localStorage.getItem('user')))
				redirectUser()
			}
		}, [])

		const redirectUser = () => {
			function swiper() {
				props.history.push('/swiper')
			}
			setTimeout(swiper, 1000)
		}

		return (
			<div className="homeContainer">
				{isLogginActive ? (
					<>
						<Login redirectUser={redirectUser} />
						<div className="text" onClick={() => setIsLogginActive(false)}>
							Click here to Register
						</div>
					</>
				) : (
					<>
						<Register redirectUser={redirectUser} />
						<div className="text" onClick={() => setIsLogginActive(true)}>
							Already have an account ? Log-In
						</div>
					</>
				)}
			</div>
		)
	}),
)

export default Home

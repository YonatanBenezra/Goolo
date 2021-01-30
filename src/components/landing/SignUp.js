import React, { useState } from 'react'
import {
	Box,
	Grid,
	TextField,
	CssBaseline,
	Button,
	Avatar,
	Typography,
	Container,
} from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'
import { observer, inject } from 'mobx-react'
import Alert from '@material-ui/lab/Alert'
import { BASE_URL } from '../../config'
import Axios from 'axios'
const useStyles = makeStyles(theme => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}))

const SignUp = inject('UserStore')(
	observer(props => {
		const classes = useStyles()
		const [state, setState] = useState({
			name: '',
			gender: 'male',
			email: '',
			password: '',
		})
		const [alert, setAlert] = useState(false)
		const handleChange = e => {
			setState({
				...state,
				[e.target.name]: e.target.value,
			})
		}

		const handleSignUp = async () => {
			try {
				const { data, status } = await Axios.post(`${BASE_URL}/user`, state)
				if (status === 200) {
					props.UserStore.setUser(data)
					props.redirectUser()
				}
			} catch (err) {
				setAlert(true)
			}
		}
		return (
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<div className={classes.paper}>
					<Avatar className={classes.avatar} />
					<Typography component="h1" variant="h5">
						Sign up
					</Typography>
					<form className={classes.form} noValidate>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									autoComplete="name"
									name="name"
									variant="outlined"
									required
									fullWidth
									id="name"
									label="Full Name"
									autoFocus
									onChange={handleChange}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									select
									label="Select Gender"
									value={state.gender}
									name="gender"
									onChange={handleChange}
									SelectProps={{
										native: true,
									}}
									variant="outlined"
									style={{ minWidth: '190px' }}
								>
									<option key={'male'} value="male">
										{' '}
										Male{' '}
									</option>
									<option key={'female'} value="female">
										{' '}
										Female{' '}
									</option>
								</TextField>
							</Grid>
							<Grid item xs={12}>
								<TextField
									variant="outlined"
									required
									fullWidth
									id="email"
									label="Email Address"
									name="email"
									autoComplete="email"
									onChange={handleChange}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									variant="outlined"
									required
									fullWidth
									name="password"
									label="password"
									type="password"
									id="password"
									autoComplete="current-password"
									onChange={handleChange}
								/>
							</Grid>
							<Grid item xs={12}></Grid>
						</Grid>
						<Button
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
							onClick={handleSignUp}
						>
							Sign Up
						</Button>
						{alert && <Alert severity="error">your email already exists</Alert>}
					</form>
				</div>
				<Box mt={5}></Box>
			</Container>
		)
	}),
)

export default SignUp

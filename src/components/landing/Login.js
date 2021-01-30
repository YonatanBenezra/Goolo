import React, { useState } from 'react'
import {
	Avatar,
	Button,
	CssBaseline,
	TextField,
	FormControlLabel,
	Checkbox,
	Grid,
	Box,
	Typography,
	Container,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Alert from '@material-ui/lab/Alert'
import { observer, inject } from 'mobx-react'
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
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}))

const SignIn = inject('UserStore')(
	observer(props => {
		const classes = useStyles()
		const [state, setState] = useState({
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

		const handleSignIn = async () => {
			try {
				const { data } = await Axios.get(
					`${BASE_URL}/user/${state.email}/${state.password}`,
				)
				props.UserStore.setUser(data)
				console.log(data)
				// localStorage.setItem('user', data)
				localStorage.setItem('user', JSON.stringify(data))
				props.redirectUser()
			} catch (err) {
				console.log(err)
				setAlert(true)
			}
		}

		return (
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<div className={classes.paper}>
					<Avatar className={classes.avatar}></Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<form className={classes.form} noValidate>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
							onChange={handleChange}
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							onChange={handleChange}
						/>
						<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/>
						<Button
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
							onClick={handleSignIn}
						>
							Sign In
						</Button>
						{alert && <Alert severity="error">wrong email or password</Alert>}
						<Grid container>
							<Grid item></Grid>
						</Grid>
					</form>
				</div>
				<Box mt={8}></Box>
			</Container>
		)
	}),
)
export default SignIn

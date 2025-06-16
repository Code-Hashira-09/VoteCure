import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";	
import './styles.css';

const Login = () => {
	const [data, setData] = useState({ voter_id: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			// const url = "https://ap-south-1.aws.data.mongodb-api.com/app/data-uwwir/endpoint/data/v1";
			const url = "http://localhost:5000/api/signin";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("access_token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={'login_container'}>
			<div className={"login_form_container"}>
				<div className={"left"}>
					<form className={"form_container"} onSubmit={handleSubmit}>
						<h1>Log in</h1>
						{/* <h1>Login to Your Account</h1> */}
						<input
							type="voter_id"
							placeholder="Voter_id"
							name="voter_id"
							onChange={handleChange}
							value={data.voter_id}
							className={"input"}
							required
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							className={"input"}
							required
						/>
						{error && <div className={"error_msg"}>{error}</div>}
						<Link to="/">
						<button type="submit" className={"green_btn"}>
							Sign In
						</button>
						</Link>
					</form> 	
				</div>
				<div className={"right"}>
					<h1>New Here ?</h1>
						<button type="button" className={"white_btn"}>
					<Link to="/Signup">
						Sign Up
					</Link>
					</button>
				</div>
			</div>
		</div>
	);
};
export default Login;
// @ts-ignore
import WavingFlag from '@garvae/react-waving-flag';
import './App.css';
import flag from './assets/flag.jpg';
import React from 'react';

function App() {
	const [radio, setRadio] = React.useState('');
	const handleClick = (value: string) => {
		if (value === radio) {
			setRadio('');
			return;
		}
		setRadio(value);
	};
	return (
		<>
			<div className="App">
				<div className="w-100 d-flex justify-content-center align-items-center">
					<WavingFlag
						flag={flag}
						height={130}
						fromLeft={false}
						width={180}
						curvature={5.5}
						animationSpeed={0.7}
					/>
				</div>
				<h2 className="text-center" style={{ color: '#1A2856' }}>
					{' '}
					Service Now Form
				</h2>
				<form>
					<div className="form-group align-left">
						<label htmlFor="text">Open On Behalf Of User</label>
						<div className="input-group">
							<div className="input-group-prepend">
								<div className="input-group-text">
									<i className="fa fa-address-card"></i>
								</div>
							</div>
							<input
								id="text"
								name="text"
								defaultValue={'Kim Jack'}
								placeholder="Kim Jack"
								type="text"
								className="form-control"
							/>
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="text1">Contact Number</label>
						<div className="input-group">
							<div className="input-group-prepend">
								<div className="input-group-text">
									<i className="fa fa-phone"></i>
								</div>
							</div>
							<input
								id="text1"
								name="text1"
								placeholder="416-555-5555"
								defaultValue={'416-555-5555'}
								type="text"
								required={true}
								className="form-control"
							/>
						</div>
					</div>
					<div className="form-check ml-1">
						<input
							name="radio"
							id="radio_0"
							onClick={() => handleClick('duck')}
							type="checkbox"
							defaultValue={'fish'}
							className="form-check-input checkbox-1x"
							checked={radio === 'duck'}
							value="duck"
						/>
						<label htmlFor="radio_0" className="form-check-label mb-3">
							Select this button if This is a MyBis, Sxe or AS400 Issue
						</label>
					</div>
					<div className="mb-2 form-check ml-1">
						<input
							checked={radio === 'fish'}
							onClick={() => handleClick('fish')}
							name="radio"
							id="radio_1"
							type="checkbox"
							className="form-check-input checkbox-1x"
							value="fish"
						/>
						<label htmlFor="radio_1" className="form-check-label mb-3">
							Select this Button if this is an Ecom Issue.
						</label>
					</div>
					<div className="m-group">
						<label htmlFor="textarea1">
							Please briefly describe your Issue.
						</label>
						<textarea
							id="textarea1"
							name="textarea1"
							cols={40}
							rows={2}
							required={true}
							className="form-control"
						></textarea>
					</div>
					<div className="form-group">
						<label htmlFor="">
							Is there any extra information you'd like to add?
						</label>
						<textarea
							id=""
							name=""
							cols={40}
							rows={5}
							className="mb-3 form-control"
						></textarea>
					</div>

					{/* <div className="form-check ml-1">
						<input
							name="checkbox"
							id="checkbox_0"
							type="checkbox"
							className="form-check-input checkbox-1x"
							value="rabbit"
						/>
						<label htmlFor="checkbox_0" className="form-check-label mb-3">
							This is a <strong>MyBis</strong>, <strong>Sxe</strong> or{' '}
							<strong>AS400</strong> Issue
						</label>
					</div> */}
					<div className="form-group">
						<button name="submit" type="submit" className="btn btn-primary">
							Submit
						</button>
					</div>
				</form>
			</div>
		</>
	);
}

export default App;

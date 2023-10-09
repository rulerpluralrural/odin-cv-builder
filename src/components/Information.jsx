// eslint-disable-next-line no-unused-vars
import React from "react";

const inputStyle = "border-2 border-slate-500 rounded-sm py-1 px-2 text-lg";

export default function Information({
	name,
	setName,
	email,
	setEmail,
	phoneNumber,
	setPhoneNumber,
	address,
	setAddress,
}) {
	const handleName = (e) => {
		setName(e.target.value);

	};
	const handleEmail = (e) => {
		setEmail(e.target.value);
	};
	const handlePhoneNumber = (e) => {
		setPhoneNumber(e.target.value);
	};
	const handleAddress = (e) => {
		setAddress(e.target.value);
	};

	return (
		<div>
			<h1 className="font-bold text-2xl bg-slate-600 text-white">
				Personal Details
			</h1>
			<h3>Full Name:</h3>
			<input
				type="text"
				value={name}
				className={inputStyle}
				onChange={handleName}
			/>
			<h3>Email Address:</h3>
			<input
				type="email"
				value={email}
				className={inputStyle}
				onChange={handleEmail}
			/>
			<h3>Phone Number:</h3>
			<input
				type="tel"
				value={phoneNumber}
				className={inputStyle}
				onChange={handlePhoneNumber}
			/>
			<h3>Address:</h3>
			<input
				type="text"
				value={address}
				className={inputStyle}
				onChange={handleAddress}
			/>
		</div>
	);
}

// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const inputStyle =
	"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:border-blue-500 focus:border-[1px] block w-full p-2.5 dark:bg-gray-200 dark:border-gray-100 dark:placeholder-gray-400 dark:text-black dark:focus:border-blue-500 outline-none";

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

	const [openInfo, setOpenInfo] = useState(true)

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
	const handleInfo = () => {
		setOpenInfo(!openInfo)
	}

	return (
		<div className="p-4">
			<div className="flex justify-between items-center w-full bg-slate-900 text-white px-5 py-3 font-bold text-2xl">
				<h1 className={`${openInfo ? "text-yellow-300" : ""} transition-colors`}>
					Personal Details
				</h1>
				<FontAwesomeIcon icon={faChevronDown}  className={`cursor-pointer ${openInfo ? "rotate-[-90deg] text-yellow-300" : ""} transition-all`} onClick={handleInfo}/>
			</div>
			<div className={`${openInfo ? "max-h-[670px]" : "max-h-[0]"} transition-[max-height] duration-500 ease-in-out overflow-hidden`}>
				<h3 className="text-lg py-2 font-medium">Full Name:</h3>
				<input
					type="text"
					value={name}
					className={inputStyle}
					onChange={handleName}
				/>
				<h3 className="text-lg py-2 font-medium">Email Address:</h3>
				<input
					type="email"
					value={email}
					className={inputStyle}
					onChange={handleEmail}
				/>
				<h3 className="text-lg py-2 font-medium">Phone Number:</h3>
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
		</div>
	);
}

// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Profile({ profile, setProfile }) {
	const [openProfile, setOpenProfile] = useState(true)

	const handleProfile = (e) => {
		setProfile(e.target.value);
	};
	const toggleProfile = () => {
		setOpenProfile(!openProfile)
	}
	return (
		<div className="p-4">
			<div className=" w-full bg-slate-900 text-white px-5 py-3 font-bold text-2xl flex justify-between items-center">
				<h1 className={`${openProfile ? "text-yellow-300" : ""} transition-colors`}>Profile</h1>
				<FontAwesomeIcon icon={faChevronDown}  className={`cursor-pointer ${openProfile ? "rotate-[-90deg] text-yellow-300" : ""} transition-all`} onClick={toggleProfile}/>
			</div>
			<div className={`${openProfile ? "max-h-[400px]" : "max-h-[0]"} transition-[max-height] duration-500 ease-in-out overflow-hidden`}>
				<textarea
					value={profile}
					onChange={handleProfile}
					className="block p-2.5 w-full text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-200 focus:ring-blue-500 focus:border-blue-500 mt-4 outline-none h-40"
				/>
			</div>
		</div>
	);
}

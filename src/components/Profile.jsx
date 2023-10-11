// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

/**@param {{profile:string, setProfile:function, currentOpenTab: string, setCurrentOpenTab:function}} props*/
export default function Profile({
	profile,
	setProfile,
	currentOpenTab,
	setCurrentOpenTab,
}) {
	const handleProfile = (e) => {
		setProfile(e.target.value);
	};
	const toggleTab = () => {
		if (currentOpenTab === "profile") {
			setCurrentOpenTab("");
		} else {
			setCurrentOpenTab("profile");
		}
	};
	return (
		<div className="p-4 pt-0">
			<div className=" w-full bg-slate-900 text-white px-5 py-3 font-bold text-2xl flex justify-between items-center">
				<h1
					className={`${
						currentOpenTab === "profile" ? "text-yellow-300" : ""
					} transition-colors`}
				>
					Profile
				</h1>
				<FontAwesomeIcon
					icon={faChevronDown}
					className={`cursor-pointer ${
						currentOpenTab === "profile"
							? "rotate-[-90deg] text-yellow-300"
							: ""
					} transition-all`}
					onClick={toggleTab}
				/>
			</div>
			<div
				className={`${
					currentOpenTab === "profile" ? "max-h-[400px]" : "max-h-[0]"
				} transition-[max-height] duration-500 ease-in-out overflow-hidden`}
			>
				<textarea
					value={profile}
					onChange={handleProfile}
					className="block p-2.5 w-full text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-200 focus:ring-blue-500 focus:border-blue-500 mt-4 outline-none h-40"
				/>
			</div>
		</div>
	);
}

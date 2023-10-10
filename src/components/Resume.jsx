// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSquarePhoneFlip,
	faEnvelope,
	faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const header = "font-semibold bg-black text-white p-2 text-2xl";

export default function Resume({
	name,
	email,
	phoneNumber,
	address,
	profile,
	skills,
}) {
	return (
		<div className="bg-white shadow-[5px_5px_15px_5px] shadow-slate-400">
			<div className="bg-black text-white h-50 text-center py-10">
				<div>
					<h3 className=" text-center text-1xl">Curriculum Vitae</h3>
					<h1 className="text-5xl">{name}</h1>
				</div>
			</div>
			<div className=" grid grid-cols-2 gap-1 mt-7 ">
				<div className="p-3 text-1xl flex flex-col justify-evenly gap-8 ">
					<div>
						<h1 className={`${header}`}>Profile</h1>
						<p className="p-3 text-lg break-words">{profile}</p>
					</div>
					<div>
						<h1 className={`${header}`}>Contact</h1>
						<p className="p-2 text-lg flex items-center">
							<FontAwesomeIcon icon={faEnvelope} className="mr-4 h-6" />{" "}
							<span>{email}</span>
						</p>
						<p className="p-2 text-lg flex items-center">
							<FontAwesomeIcon icon={faSquarePhoneFlip} className="mr-4 h-6" />{" "}
							<span>{phoneNumber}</span>
						</p>
						<p className="p-2 text-lg flex items-center">
							<FontAwesomeIcon icon={faMapLocationDot} className="mr-4 h-6" />{" "}
							<span>{address}</span>
						</p>
					</div>
					<div>
						<h1 className={`${header}`}>Skills</h1>
						<div className="p-2 text-lg flex flex-wrap gap-2">
							{skills.map((skill, index) => {
								return <p key={index}>{index === skills.length-1 ? skill + "" : skill + ","}</p>;
							})}
						</div>
					</div>
				</div>
				<div></div>
			</div>
		</div>
	);
}

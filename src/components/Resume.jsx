// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSquarePhoneFlip,
	faEnvelope,
	faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function Resume({ name, email, phoneNumber, address, profile, }) {
	return (
		<div className="border-l-2 border-slate-800 h-screen">
			<div className="bg-black text-white h-50 text-center py-10">
				<div>
					<h3 className=" text-center text-1xl">Curriculum Vitae</h3>
					<h1 className="text-5xl">{name}</h1>
				</div>
			</div>
			<div className=" grid grid-cols-2">
				<div className="p-3 text-1xl">
					<div>
						<h1 className="text-3xl font-semibold bg-black text-white px-2 py-1">
							Profile
						</h1>
						<p>{profile}</p>
					</div>
					<div>
						<h1 className="text-3xl font-semibold bg-black text-white px-2 py-1">
							Contact
						</h1>
						<p>
							<FontAwesomeIcon icon={faEnvelope} /> <span>{email}</span>
						</p>
						<p>
							<FontAwesomeIcon icon={faSquarePhoneFlip} />{" "}
							<span>{phoneNumber}</span>
						</p>
						<p>
							<FontAwesomeIcon icon={faMapLocationDot} /> <span>{address}</span>
						</p>
					</div>
					<div>
						<h1>Skills</h1>
					</div>
				</div>
				<div></div>
			</div>
		</div>
	);
}

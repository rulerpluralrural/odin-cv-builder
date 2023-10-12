// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSquarePhoneFlip,
	faEnvelope,
	faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const header = "font-semibold bg-black text-white p-2 text-2xl text-center";
/**@param {{name:string, email:string, phoneNumber:string, address:string, profile: string, skills:array, education:array, experience:array}} props*/
export default function Resume({
	name,
	email,
	phoneNumber,
	address,
	profile,
	skills,
	education,
	experience,
}) {
	return (
		<div className="bg-white shadow-[5px_5px_15px_5px] shadow-slate-400 h-full">
			<div className="bg-black text-white h-50 text-center py-10">
				<div>
					<h3 className=" text-center text-1xl">Curriculum Vitae</h3>
					<h1 className="text-5xl">{name}</h1>
				</div>
			</div>
			<div className=" grid grid-cols-[300px_1fr] gap-8 mt-7 px-10 py-5 pb-10">
				<div className="text-1xl flex flex-col gap-8">
					<div>
						<h1 className={`${header}`}>Profile</h1>
						<p className="px-1 text-lg break-words break-all spacing tracking-wider mt-8 text-justify">
							{profile}
						</p>
					</div>
					<div>
						<h1 className={`${header}`}>Contact</h1>
						<p className="p-2 text-lg flex items-center mt-3">
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
						<div className="p-2 text-lg flex flex-wrap gap-2 mt-3">
							{skills.map((item, index) => {
								return (
									<p key={index}>
										{index === skills.length - 1 ? item + "" : item + ","}
									</p>
								);
							})}
						</div>
					</div>
				</div>
				<div>
					<div>
						<h1 className={`${header}`}>Education</h1>
						<div className="text-lg my-8 flex flex-col gap-2">
							{education.map((item, index) => {
								return (
									<div key={index}>
										<h1 className="text-bold text-2xl font-serif font-bold tracking-wide">
											{item.degree}
										</h1>
										<div className="flex justify-between items-center px-2">
											<h1>{item.school}</h1>
											<div className="flex gap-2 items-center italic">
												<p>{item.start.replace(/-/g, '/')}</p>
												<span>-</span>
												<p>{item.end.replace(/-/g, '/')}</p>
											</div>
										</div>
										<h1 className="px-2">{item.location}</h1>
									</div>
								);
							})}
						</div>
						<h1 className={`${header}`}>Work Experiences</h1>
						<div className="text-lg mt-8 flex flex-col gap-2">
							{experience.map((item, index) => {
								return (
									<div key={index}>
										<h1 className="text-bold text-2xl font-serif font-bold tracking-wide">
											{item.position}
										</h1>
										<div className="flex justify-between items-center px-2">
											<h1>{item.company}</h1>
											<div className="flex gap-2 items-center italic">
												<p>{item.start.replace(/-/g, '/')}</p>
												<span>-</span>
												<p>{item.end.replace(/-/g, '/')}</p>
											</div>
										</div>
										<h1 className="px-3 py-2 text-justify">{item.description}</h1>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Information from "./components/Information";
import Resume from "./components/Resume";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Education from "./components/Education";

export default function App() {
	const [name, setName] = useState("John Smith");
	const [email, setEmail] = useState("testemail69@email.com");
	const [phoneNumber, setPhoneNumber] = useState("+639 99696969");
	const [currentOpenTab, setCurrentOpenTab] = useState("profile");
	const [address, setAddress] = useState("69 St. Mexico Pampanga");
	const [profile, setProfile] = useState(
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dui enim, bibendum a nulla in, condimentum placerat massa. Nullam a congue elit. Aenean erat lectus, interdum vitae massa vel, pulvinar rhoncus ipsum. Ut purus augue, maximus a neque in, pretium egestas ipsum. Praesent a leo a mi pellentesque mollis sed ut ex. Sed accumsan enim vitae odio tempus pulvinar."
	);
	const [skills, setSkills] = useState([
		"Photography",
		"Microsoft Word",
		"Microsoft Excel",
		"Problem Solving",
	]);
	const [education, setEducation] = useState([
		{
			school: "Example City University ",
			degree: "Test Bachelors Degree",
			location: "Example City",
			start: "1969-08-09",
			end: "1996-08-06",
		},
		{
			school: "Example City 2 University",
			degree: "Test Masters Degree",
			location: "Example City 2",
			start: "1997-06-10",
			end: "2002-07-11"
		}
	])
	

	return (
		<div className="grid grid-cols-[700px_1fr] gap-5 p-5 h-full">
			<div className="bg-white shadow-[5px_5px_15px_5px] shadow-slate-400">
				<Information
					name={name}
					setName={setName}
					email={email}
					setEmail={setEmail}
					phoneNumber={phoneNumber}
					setPhoneNumber={setPhoneNumber}
					address={address}
					setAddress={setAddress}
				/>
				<Profile
					profile={profile}
					setProfile={setProfile}
					currentOpenTab={currentOpenTab}
					setCurrentOpenTab={setCurrentOpenTab}
				/>
				<Skills
					skills={skills}
					setSkills={setSkills}
					currentOpenTab={currentOpenTab}
					setCurrentOpenTab={setCurrentOpenTab}
				/>
				<Education
					currentOpenTab={currentOpenTab}
					setCurrentOpenTab={setCurrentOpenTab}
					education={education}
					setEducation={setEducation}
				/>
			</div>
			<Resume
				name={name}
				email={email}
				phoneNumber={phoneNumber}
				address={address}
				profile={profile}
				skills={skills}
				education={education}
			/>
		</div>
	);
}

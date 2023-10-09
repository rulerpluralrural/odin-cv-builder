// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Information from "./components/Information";
import Resume from "./components/Resume";
import Profile from "./components/Profile";
import Skills from "./components/Skills";

export default function App() {
	const [name, setName] = useState("John Smith");
	const [email, setEmail] = useState("testemail69@email.com");
	const [phoneNumber, setPhoneNumber] = useState("+63 99696969");
	const [address, setAddress] = useState("69 St. Mexico Pampanga");
	const [profile, setProfile] = useState(
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dui enim, bibendum a nulla in, condimentum placerat massa. Nullam a congue elit. Aenean erat lectus, interdum vitae massa vel, pulvinar rhoncus ipsum. Ut purus augue, maximus a neque in, pretium egestas ipsum. Praesent a leo a mi pellentesque mollis sed ut ex. Sed accumsan enim vitae odio tempus pulvinar."
	);
	const [skills, setSkills] = useState(["Photography", "Microsoft Word", "Microsoft Excel", "Problem Solving"])

	return (
		<div className="grid grid-cols-2">
			<div>
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
				<Profile profile={profile} setProfile={setProfile} />
				<Skills skills={skills} setSkills={setSkills}/>
			</div>
			<Resume
				name={name}
				email={email}
				phoneNumber={phoneNumber}
				address={address}
				profile={profile}
			/>
		</div>
	);
}

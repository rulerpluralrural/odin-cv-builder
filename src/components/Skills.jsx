// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSquarePlus,
	faPenToSquare,
	faSquareMinus,
} from "@fortawesome/free-solid-svg-icons";

const iconStyle = "cursor-pointer text-3xl p-2 text-slate-900";

export default function Skills({ skills, setSkills }) {
	const handleSkills = (e) => {
		setSkills(e.target.value);
	};
	return (
		<div className="mt-3 flex justify-evenly items-center">
            <h1>Skills</h1>
			<div>
				<input
					type="text"
					value={""}
					onChange={handleSkills}
					className="border-2 border-slate-500 px-3 py-2"
				/>
			</div>
			<div>
				<FontAwesomeIcon icon={faSquarePlus} className={`${iconStyle} hover:text-green-800`} />
				<FontAwesomeIcon icon={faSquareMinus} className={`${iconStyle} hover:text-red-800`} /> 
                <FontAwesomeIcon icon={faPenToSquare} className={`${iconStyle} hover:text-blue-500`}  />
			</div>
		</div>
	);
}

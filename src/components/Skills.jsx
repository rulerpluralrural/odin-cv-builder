// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPenToSquare,
	faTrash,
	faChevronDown,
	faPlus,
	faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
/**@param {{skills: array, setSkills: function, currentOpenTab: string, setCurrentOpenTab: function}} props*/
export default function Skills({
	skills,
	setSkills,
	currentOpenTab,
	setCurrentOpenTab,
}) {
	const [addingSkill, setAddingSkill] = useState(false);
	const [newSkill, setNewSkill] = useState("");

	const removeSkill = (index) => {
		return () => {
			setSkills(skills.slice(0, index).concat(skills.slice(index + 1)));
		};
	};

	const editSkill = (index) => {
		return (e) => {
			skills[index] = e.target.value;
			setSkills([...skills]);
		};
	};

	const getSkill = (e) => {
		setNewSkill(e.target.value);
	};

	const addSkill = () => {
		if (newSkill !== "") skills.push(newSkill);
		setNewSkill("");
		setAddingSkill(false);
	};

	const toggleAddingSkill = () => {
		setAddingSkill(!addingSkill);
	};

	const toggleTab = () => {
		if (currentOpenTab === "skills") {
			setCurrentOpenTab("");
		} else {
			setCurrentOpenTab("skills");
		}
	};

	return (
		<div className="p-4 pt-0">
			<div className=" w-full bg-slate-900 text-white px-5 py-3 font-bold text-2xl flex justify-between items-center">
				<h1
					className={`${
						currentOpenTab === "skills" ? "text-yellow-400" : ""
					} transition-colors`}
				>
					Skills
				</h1>
				<FontAwesomeIcon
					icon={faChevronDown}
					className={`cursor-pointer ${
						currentOpenTab === "skills" ? "rotate-[-90deg] text-yellow-400" : ""
					} transition-all`}
					onClick={toggleTab}
				/>
			</div>
			<div
				className={`${
					currentOpenTab === "skills" ? "max-h-[700px]" : "max-h-[0]"
				} transition-[max-height] duration-500 ease-in-out overflow-hidden`}
			>
				<div className="flex flex-wrap gap-2 mt-3">
					{skills.map((skill, index) => {
						return (
							<Skill
								key={index}
								skill={skill}
								removeSkill={removeSkill(index)}
								editSkill={editSkill(index)}
							/>
						);
					})}
				</div>
				<div className="flex justify-center">
					{addingSkill && (
						<div className="mt-3 bg-slate-200 rounded-sm flex justify-center items-center px-3 py-1 border-[1px] border-slate-300">
							<input
								type="text"
								className="w-60 h-8 focus:border-[1px] focus:border-blue-500 outline-none bg-slate-200 text-lg px-2 py-2"
								value={newSkill}
								onChange={getSkill}
							/>
							<FontAwesomeIcon
								icon={faCircleChevronRight}
								className="cursor-pointer w-10 hover:text-green-500 "
								onClick={addSkill}
							/>
						</div>
					)}
				</div>
				<div className="flex justify-center items-center p-2">
					<div
						className="flex justify-around items-center w-10 h-10 border-2 border-gray-700 text-gray-700 rounded-full p-1 cursor-pointer hover:bg-green-300 transition-all "
						onClick={toggleAddingSkill}
					>
						<FontAwesomeIcon icon={faPlus} />
					</div>
				</div>
			</div>
		</div>
	);
}

function Skill({ skill, removeSkill, editSkill }) {
	const [editing, setEditing] = useState(false);

	const toggleEdit = () => {
		setEditing(!editing);
	};

	return (
		<div className="flex justify-center items-center gap-2 h-10 w-auto	p-3 border-[1px] border-slate-300 cursor-pointer bg-slate-200">
			{!editing ? (
				<h1>{skill}</h1>
			) : (
				<input
					type="text"
					className="border-[1px] border-slate-500 bg-slate-200 px-2"
					defaultValue={skill}
					onChange={editSkill}
				/>
			)}
			<FontAwesomeIcon
				icon={faTrash}
				className="hover:text-red-400"
				onClick={removeSkill}
			/>
			<FontAwesomeIcon
				icon={faPenToSquare}
				className={`hover:text-green-400 ${editing ? "text-green-400" : ""}`}
				onClick={toggleEdit}
			/>
		</div>
	);
}

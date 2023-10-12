// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronDown,
	faPenToSquare,
	faTrash,
	faPlus,
} from "@fortawesome/free-solid-svg-icons";

const buttonStyle =
	"border-[1px] border-slate-400 rounded-md bg-slate-200 px-5 py-1 text-base hover:bg-slate-300 transition-colors focus:border-2 focus:border-blue-500 focus:bg-slate-300 outline-none";
const inputStyle =
	"w-full px-3 py-1 text-base border-[1px] border-slate-400 rounded-sm bg-slate-200 block focus:border-2 focus:border-blue-500 outline-none";

/**@param {{currentOpenTab: string, setCurrentOpenTab: function, experience: Array, setExperience: function}} props*/
export default function Experience({
	currentOpenTab,
	setCurrentOpenTab,
	experience,
	setExperience,
}) {
	const [addingExperience, setAddingExperience] = useState(true);

	const toggleTab = () => {
		if (currentOpenTab === "experience") {
			setCurrentOpenTab("");
		} else {
			setCurrentOpenTab("experience");
		}
	};

	const removeItem = (index) => {
		return () => {
			setExperience(
				experience.slice(0, index).concat(experience.slice(index + 1))
			);
		};
	};

	const editItem = (index) => {
		return (editedItem) => {
			experience[index] = editedItem;
			setExperience([...experience]);
		};
	};

	const toggleAddingItem = () => {
		setAddingExperience(!addingExperience);
	};

	const addItem = () => {
		return (newItem) => {
			setExperience([...experience, newItem]);
		};
	};

	return (
		<div className="p-4 pt-0">
			<div className="flex justify-between items-center w-full bg-slate-900 text-white px-5 py-3 font-bold text-2xl">
				<h1
					className={`${
						currentOpenTab === "experience" ? "text-yellow-300" : ""
					} transition-colors`}
				>
					Work Experience
				</h1>
				<FontAwesomeIcon
					icon={faChevronDown}
					className={`cursor-pointer ${
						currentOpenTab === "experience"
							? "rotate-[-90deg] text-yellow-300"
							: ""
					} transition-all`}
					onClick={toggleTab}
				/>
			</div>
			<div
				className={`${
					currentOpenTab === "experience" ? "max-h-[800px]" : "max-h-[0]"
				} transition-[max-height] duration-500 ease-in-out overflow-hidden flex flex-col items-center gap-2`}
			>
				<div className="mt-4 w-full flex flex-col justify-center items-center gap-3">
					{!addingExperience && (
						<NewInput
							addingExperience={addingExperience}
							setAddingExperience={setAddingExperience}
							addItem={addItem()}
						/>
					)}
					{experience.map((item, index) => {
						return (
							<Element
								key={index}
								index={index}
								company={item.company}
								position={item.position}
								description={item.description}
								start={item.start}
								end={item.end}
								removeItem={removeItem(index)}
								editItem={editItem(index)}
							/>
						);
					})}
				</div>
				<div
					className="flex justify-around items-center w-10 h-10 border-2 border-gray-700 text-gray-700 rounded-full p-1 cursor-pointer hover:bg-gray-300 transition-all "
					onClick={toggleAddingItem}
				>
					<FontAwesomeIcon icon={faPlus} />
				</div>
			</div>
		</div>
	);
}

// for editing existing object in experience array

function Element(props) {
	const [editing, setEditing] = useState(false);
	const [editedItem, setEditedItem] = useState({
		company: props.company,
		position: props.position,
		start: props.start,
		end: props.end,
		description: props.description,
	});

	const toggleEdit = () => {
		setEditing(!editing);
	};

	const editCompany = (e) => {
		setEditedItem({ ...editedItem, company: e.target.value });
	};

	const editPosition = (e) => {
		setEditedItem({ ...editedItem, position: e.target.value });
	};

	const editStartDate = (e) => {
		setEditedItem({ ...editedItem, start: e.target.value });
	};

	const editEndDate = (e) => {
		setEditedItem({ ...editedItem, end: e.target.value });
	};

	const editDescription = (e) => {
		setEditedItem({ ...editedItem, description: e.target.value });
	};

	const saveEdit = () => {
		props.editItem(editedItem);
		setEditing(!editing);
	};

	const cancelEdit = () => {
		setEditing(!editing);
	};

	return !editing ? (
		<div className="flex justify-between px-5 w-8/12 items-center p-2 border-2 border-slate-400 rounded-sm bg-slate-300 text-lg">
			<h1 className="font-medium">{props.company}</h1>{" "}
			<div className="flex gap-3 items-center p-1 rounded-md">
				<FontAwesomeIcon
					icon={faTrash}
					className="hover:text-red-400 cursor-pointer"
					onClick={props.removeItem}
				/>
				<FontAwesomeIcon
					icon={faPenToSquare}
					className="hover:text-green-400 cursor-pointer"
					onClick={toggleEdit}
				/>
			</div>
		</div>
	) : (
		<div className="w-full">
			<div className="flex flex-col items-start justify-around p-5 gap-4 border-[1px] border-slate-500 rounded-sm">
				<div className="w-full">
					<label htmlFor="school" className="inline-block">
						Company/Workplace:
					</label>
					<input
						type="text"
						defaultValue={props.company}
						className={inputStyle}
						onChange={editCompany}
					/>
				</div>
				<div className="w-full">
					<label htmlFor="degree" className="inline-block">
						Position:
					</label>
					<input
						type="text"
						defaultValue={props.position}
						className={inputStyle}
						onChange={editPosition}
					/>
				</div>
				<div className="w-full">
					<label htmlFor="degree" className="inline-block">
						Description/Achivements:
					</label>
					<textarea
						defaultValue={props.description}
						className={`${inputStyle} h-28 py-2`}
						onChange={editDescription}
					/>
				</div>
				<div className="flex justify-between items-center w-full">
					<div>
						<label htmlFor="degree" className="inline-block">
							Start Date:
						</label>
						<input
							type="date"
							defaultValue={props.start}
							className={inputStyle}
							onChange={editStartDate}
						/>
					</div>
					<div className=" self-end">
						<label htmlFor="degree" className="inline-block">
							End Date:
						</label>
						<input
							id="degree"
							type="date"
							defaultValue={props.end}
							className={`${inputStyle} w-[175px]`}
							onChange={editEndDate}
						/>
					</div>
				</div>
				<div className="flex justify-between w-full">
					<button
						className={`flex gap-2 items-center ${buttonStyle} `}
						onClick={props.removeItem}
					>
						<FontAwesomeIcon icon={faTrash} />
						<span>Delete</span>
					</button>
					<div className="flex gap-4 justify-center items-center">
						<button className={buttonStyle} onClick={cancelEdit}>
							Cancel
						</button>
						<button className={buttonStyle} onClick={saveEdit}>
							Save
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

// for adding new object in experience array

function NewInput(props) {
	const [newItem, setNewItem] = useState({
		company: "",
		position: "",
		start: "",
		end: "",
		description: "",
	});

	const newCompany = (e) => {
		setNewItem({ ...newItem, company: e.target.value });
	};

	const newPosition = (e) => {
		setNewItem({ ...newItem, position: e.target.value });
	};

	const newStartDate = (e) => {
		setNewItem({ ...newItem, start: e.target.value });
	};

	const newEndDate = (e) => {
		setNewItem({ ...newItem, end: e.target.value });
	};

	const newDescription = (e) => {
		setNewItem({ ...newItem, description: e.target.value });
	};

	const saveNewInput = () => {
		props.addItem(newItem);
		props.setAddingExperience(!props.addingExperience);
	};

	const cancelNewInput = () => {
		props.setAddingExperience(!props.addingExperience);
	};
	return (
		<div className="w-full mt-3">
			<div className="flex flex-col items-start justify-around p-5 gap-4 border-[1px] border-slate-500 rounded-sm">
				<div className="w-full">
					<label htmlFor="school" className="inline-block">
						Company:
					</label>
					<input
						type="text"
						defaultValue={newItem.company}
						className={inputStyle}
						onChange={newCompany}
					/>
				</div>
				<div className="w-full">
					<label htmlFor="degree" className="inline-block">
						Position:
					</label>
					<input
						type="text"
						defaultValue={newItem.position}
						className={inputStyle}
						onChange={newPosition}
					/>
				</div>
				<div className="w-full">
					<label htmlFor="degree" className="inline-block">
						Description/Achivements:
					</label>
					<textarea
						defaultValue={newItem.description}
						className={`${inputStyle} h-28 py-2`}
						onChange={newDescription}
					/>
				</div>
				<div className="flex justify-between items-center w-full">
					<div>
						<label htmlFor="degree" className="inline-block">
							Start Date:
						</label>
						<input
							type="date"
							defaultValue={newItem.start}
							className={inputStyle}
							onChange={newStartDate}
						/>
					</div>
					<div className=" self-end">
						<label htmlFor="degree" className="inline-block">
							End Date:
						</label>
						<input
							id="degree"
							type="date"
							defaultValue={newItem.end}
							className={`${inputStyle} w-[175px]`}
							onChange={newEndDate}
						/>
					</div>
				</div>
				<div className="flex justify-between w-full">
					<button
						className={`flex gap-2 items-center ${buttonStyle} `}
						onClick={props.removeItem}
					>
						<FontAwesomeIcon icon={faTrash} />
						<span>Delete</span>
					</button>
					<div className="flex gap-4 justify-center items-center">
						<button className={buttonStyle} onClick={cancelNewInput}>
							Cancel
						</button>
						<button className={buttonStyle} onClick={saveNewInput}>
							Save
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

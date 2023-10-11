// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronDown,
	faPenToSquare,
	faTrash,
} from "@fortawesome/free-solid-svg-icons";
/**@param {{currentOpenTab: string, setCurrentOpenTab: function, education: Array, setEducation: function}} props*/
export default function Education({
	currentOpenTab,
	setCurrentOpenTab,
	education,
	setEducation,
}) {
	const toggleTab = () => {
		if (currentOpenTab === "education") {
			setCurrentOpenTab("");
		} else {
			setCurrentOpenTab("education");
		}
	};

	const removeItem = (index) => {
		return () => {
			setEducation(
				education.slice(0, index).concat(education.slice(index + 1))
			);
		};
	};

    const editItem = (index) => {
        return (editedItem) => {
            education[index] = editedItem
            setEducation([...education])
        }
    }

	return (
		<div className="p-4 pt-0">
			<div className="flex justify-between items-center w-full bg-slate-900 text-white px-5 py-3 font-bold text-2xl">
				<h1
					className={`${
						currentOpenTab === "education" ? "text-yellow-300" : ""
					} transition-colors`}
				>
					Education
				</h1>
				<FontAwesomeIcon
					icon={faChevronDown}
					className={`cursor-pointer ${
						currentOpenTab === "education"
							? "rotate-[-90deg] text-yellow-300"
							: ""
					} transition-all`}
					onClick={toggleTab}
				/>
			</div>
			<div
				className={`${
					currentOpenTab === "education" ? "max-h-[800px]" : "max-h-[0]"
				} transition-[max-height] duration-500 ease-in-out overflow-hidden flex flex-col items-center gap-2 mt-4`}
			>
				{education.map((item, index) => {
					return (
						<Element
							key={index}
							index={index}
							school={item.school}
							degree={item.degree}
                            location={item.location}
							start={item.start}
							end={item.end}
							removeItem={removeItem(index)}
                            editItem={editItem(index)}
						/>
					);
				})}
			</div>
		</div>
	);
}

const buttonStyle =
	"border-[1px] border-slate-400 rounded-md bg-slate-200 px-5 py-1 text-base hover:bg-slate-300 transition-colors focus:border-2 focus:border-blue-500 focus:bg-slate-300 outline-none";
const inputStyle =
	"w-full px-3 py-1 text-base border-[1px] border-slate-400 rounded-sm bg-slate-200 block focus:border-2 focus:border-blue-500 outline-none";

function Element(props) {
	const [editing, setEditing] = useState(false);
	const [editedItem, setEditedItem] = useState({
		school: props.school,
		degree: props.degree,
		start: props.start,
		end: props.end,
        location: props.location
	});

	const toggleEdit = () => {
		setEditing(!editing);
	};

    const editSchool = (e) => {
        setEditedItem({...editedItem, school: e.target.value})
    }

    const editDegree = (e) => {
        setEditedItem({...editedItem, degree: e.target.value})
    }

    const editStartDate = (e) => {
        setEditedItem({...editedItem, start: e.target.value})
    }

    const editEndDate = (e) => {
        setEditedItem({...editedItem, end: e.target.value})
    }

    const editLocation = (e) => {
        setEditedItem({...editedItem, location: e.target.value})
    }

    const saveEdit = () => {
        props.editItem(editedItem)
        setEditing(!editing)
    }

    const cancelEdit = () => {
        setEditing(!editing)
    }

	return !editing ? (
		<div className="flex justify-between px-5 w-8/12 items-center p-2 border-[1px] border-slate-400 rounded-sm bg-slate-300 text-lg">
			<h1 className="font-medium">{props.school}</h1>{" "}
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
		<div className="w-full mb-5">
			<div className="flex flex-col items-start justify-around px-3 gap-4">
				<div className="w-full">
					<label htmlFor="school" className="inline-block">
						School:
					</label>
					<input
						type="text"
						defaultValue={props.school}
						className={inputStyle}
						onChange={editSchool}
					/>
				</div>
				<div className="w-full">
					<label htmlFor="degree" className="inline-block">
						Degree/Field:
					</label>
					<input
						type="text"
						defaultValue={props.degree}
						className={inputStyle}
						onChange={editDegree}
					/>
				</div>
                <div className="w-full">
					<label htmlFor="degree" className="inline-block">
						Location:
					</label>
					<input
						type="text"
						defaultValue={props.location}
						className={inputStyle}
						onChange={editLocation}
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

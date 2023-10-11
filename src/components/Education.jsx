// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Education({currentOpenTab, setCurrentOpenTab}) {

    const toggleTab = () => {
        if (currentOpenTab === "education") {
			setCurrentOpenTab("")
		} else {
			setCurrentOpenTab("education")
		}
    }
    
    return (
        <div className="p-4 pt-0">
            <div className="flex justify-between items-center w-full bg-slate-900 text-white px-5 py-3 font-bold text-2xl">
				<h1 className={`${currentOpenTab === "education" ? "text-yellow-300" : ""} transition-colors`}>
					Education
				</h1>
				<FontAwesomeIcon icon={faChevronDown}  className={`cursor-pointer ${currentOpenTab === "education" ? "rotate-[-90deg] text-yellow-300" : ""} transition-all`} onClick={toggleTab}/>
			</div>
        </div>
    )
}
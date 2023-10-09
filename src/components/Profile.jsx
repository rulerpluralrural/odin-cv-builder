// eslint-disable-next-line no-unused-vars
import React from "react";

export default function Profile({profile, setProfile}) {
    const handleProfile = (e) => {
        setProfile(e.target.value)
    }
	return (
		<div className="mt-3">
            <h1>Profile</h1>
			<textarea value={profile} onChange={handleProfile} className="border-2 border-slate-500 h-28 w-96"/>
		</div>
	);
}

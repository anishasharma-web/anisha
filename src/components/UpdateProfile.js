import { useState } from "react";

const UpdateProfile = ({ profileToUpdate }) => {

    const [updatedProfile, setUpdatedProfile] = useState(profileToUpdate);

    const handleUpdateProfile = (evt) => {
        console.log(evt.target);
        setUpdatedProfile({
            ...updatedProfile,
            [evt.target.name]: evt.target.value
        });
    };

    const submitUpdateProfile = (evt) => {
        evt.preventDefault();
    };

    return (
        <div>
            <h1>Update Profile</h1>
            <form onSubmit={submitUpdateProfile}>
                <input type="text" name="name" value={updatedProfile.name} onChange={handleUpdateProfile} />
                <br />
                <input type="text" name="username" value={updatedProfile.username} onChange={handleUpdateProfile} />
                <br />
                <input type="password" name="password" value={updatedProfile.password} onChange={handleUpdateProfile} />
                <br />
                <input type="tel" name="phone" value={updatedProfile.phone} onChange={handleUpdateProfile} />
                <br />
                <input type="email" name="email" value={updatedProfile.email} onChange={handleUpdateProfile} />
                <br />
                <input type="file" name="avatar" value={updatedProfile.avatar} onChange={handleUpdateProfile} />
                <br />
                <input type="submit" value="Save" />
            </form>
        </div>
    );

};

export default UpdateProfile;
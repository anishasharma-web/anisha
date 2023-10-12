import { useState } from "react";
import UpdateProfile from './UpdateProfile';

const UserProfile = () => {

    const [profile, setProfile] = useState(JSON.parse(localStorage.getItem('currentUser')));
    const [isEditing, setIsEditing] = useState(false);

    const shouldEdit = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div>
            <p>Profile</p>
            <div>
                {
                    (!isEditing && profile) &&
                    <div>
                        <h1>User Profile</h1>
                        <p>Name: {profile.name}</p>
                        <p>Username: {profile.username}</p>
                        <p>phone: {profile.phone}</p>
                        <p>Email: {profile.email}</p>
                        <p>Password: {profile.password}</p>
                        <p>Avatar:</p>
                        <img src={profile.avatar} alt="Avatar" />
                        <p></p>
                        <button onClick={shouldEdit} >Edit Profile</button>
                    </div>
                }
            </div>
            <div>
                {
                    isEditing &&
                    <div>
                        <UpdateProfile profileToUpdate={profile} ></UpdateProfile>
                        <p></p>
                        <button onClick={shouldEdit} >Cancel</button>
                    </div>
                }
            </div>
        </div>
    );
}

export default UserProfile;
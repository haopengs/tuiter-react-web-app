import React from "react";
import {useSelector} from "react-redux";

import "./index.css"
import {Link} from "react-router-dom";
const ProfileComponent = () =>{
    const profile = useSelector(state => state.profile)[0]
    // console.log(profile)
    return (
        <>
            <div className="">
                <div className={"row position-relative"}>
                    <img height={160} src={`/images/${profile.bannerPicture}`}/>
                    <img className="position-absolute top-50 rounded-circle pe-1 col-3 ms-2"
                         src={`/images/${profile.profilePicture}`}/>
                    <Link to="/tuiter/editProfile">
                        <b className={"wd-button col-3 rounded-pill btn border"}>Edit Profile</b>
                    </Link>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>

                <div>
                    <div className={"fs-4 fw-bold"}>{profile.firstName} &nbsp; {profile.lastName}</div>
                    <p>{profile.handle}</p>
                    <div>{profile.bio}</div>
                    <br/>
                    <div>
                        <span><i className="bi bi-geo-alt"></i> {profile.location}&nbsp;&nbsp;&nbsp;</span>
                        <span><i className="bi bi-balloon"></i> {profile.dateOfBirth}&nbsp;&nbsp;&nbsp;</span>
                        <span><i className="bi bi-calendar3"></i> Joined {profile.dateJoined}</span>
                    </div>
                    <br/>
                    <div>
                        <span><b>{profile.followingCount}</b> Following &nbsp;&nbsp;&nbsp;</span>
                        <span><b>{profile.followersCount}</b> Followers</span>
                    </div>


                </div>


            </div>
        </>
    )
}

export default ProfileComponent
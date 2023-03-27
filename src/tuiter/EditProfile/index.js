import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {updatePro, changeEdit} from "../reducers/profile-reducer";
import {useDispatch} from "react-redux";

import "./index.css"
import {Link, useNavigate} from "react-router-dom";
const EditProfileComponent = () =>{
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const profile = useSelector(state => state.profile)[0]
    const [curPro, setCurPro] = useState(profile)
    const [firstName, setFirstName] = useState(profile.firstName)
    const [lastName, setLastName] = useState(profile.lastName)
    const [bio, setBio] = useState(profile.bio)
    const [loc, setLoc] = useState(profile.location)
    const [web, setWeb] = useState(profile.website)
    const [birth, setBirth] = useState(profile.dateOfBirth)
    const [editing, setEditing] = useState(profile.editing)

    const handleName = (event) => {
        const name = event.target.value.split(" ")
        const firName = name[0]
        const lasName = name[1]
        setFirstName(firName)
        setLastName(lasName)
        // console.log(firstName)
        // console.log(lastName)
    }

    const  handleBio = (event) => {
        setBio(event.target.value)
    }

    const  handleLoc = (event) => {
        setLoc(event.target.value)

    }
    const  handleWeb = (event) => {
        setWeb(event.target.value)

    }

    const  handleBirth = (event) => {
        setBirth(event.target.value)

    }

    const  handleBirthSave = () => {
        setEditing(!editing)
    }


    const handleSave = () =>{
        // setCurPro({
        //     ...curPro,
        //     "firstName" : firstName,
        //     "lastName" :lastName,
        //     "bio": bio,
        //     "location": loc,
        //     "website":web,
        // })
        const updatedPro = {
            ...curPro,
            "firstName" : firstName,
            "lastName" :lastName,
            "bio": bio,
            "location": loc,
            "website":web,
            "dateOfBirth":birth
        }
        setCurPro(updatedPro)
        // console.log(firstName + lastName)
        console.log(curPro)
        // console.log(prePro)

        dispatch(updatePro(updatedPro))

        navigate('/tuiter/profile')
        // history.push("/tuiter/profile");
    }

    return (
        <>
            <div className="">


                <div className={"row position-relative"}>
                    <div className={"position-absolute top-0 wd-topBar"}>
                        <Link to="/tuiter/profile" className={"wd-btnX"}>X</Link>
                        <span className={"ms-4"}><b>Edit profile</b></span>
                        <button onClick={handleSave} className={"wd-btnSave rounded-pill float-end"}>Save</button>
                    </div>
                    <img height={160} src={`/images/${profile.bannerPicture}`}/>
                    <img className="position-absolute top-50 rounded-circle pe-1 col-3 ms-2"
                         src={`/images/${profile.profilePicture}`}/>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>

                <div>
                    <textarea onChange={handleName} className={"w-100"} placeholder={`Name\n${profile.firstName} ${profile.lastName}`}/>
                    <textarea onChange={handleBio} className={"w-100 wd-textHeight mt-4"} placeholder={`Bio\n${profile.bio}`}/>
                    <textarea onChange={handleLoc} className={"w-100 mt-4"} placeholder={`Location\n${profile.location}`}/>
                    <textarea onChange={handleWeb} className={"w-100 mt-4"} placeholder={`Website`}/>

                    <div className={"mt-5"}>
                        <div>
                            Birth date ·
                            <a
                                className="text-decoration-none"
                                onClick={() =>{
                                    dispatch(changeEdit(profile))
                                }}
                            >
                            {profile.editing ? "" : "Edit"}
                            </a>
                        </div>
                        {profile.editing ? (
                            <textarea
                                className="form-control w-75"
                                onChange={handleBirth}
                                type="text"
                                placeholder={profile.dateOfBirth}
                            />
                        ) : (
                            <label>{profile.dateOfBirth}</label>
                        )}
                        {/*<div>*/}
                        {/*    {profile.dateOfBirth}*/}
                        {/*</div>*/}
                    </div>

                    <div className={"mt-5"}>
                        Swith to professional
                        <div className={"float-end"}>
                            >
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default EditProfileComponent
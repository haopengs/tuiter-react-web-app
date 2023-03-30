import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faComment,faShare,faHeart, faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import {changeLikes, deleteTuit} from "../tuits/tuits-reducer";
import {useDispatch} from "react-redux";

import "./index.css"

const PostListItem = (
    {
        list={
            avatarIcon: "elon.jpg",
        }
    }
) => {
    const dispatch = useDispatch()
    const handleLike = (list) =>{
        // dispatch(changeLikes(list.liked))
        dispatch(changeLikes(list))
    }
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }



    return(

        <div className="p-3 border border-dark-subtle">
            <img className="float-start rounded-circle pe-1" width={50} height={50}
                 src={`/images/${list.image}`}/>
            <div className="">
                <i className="bi bi-x-lg float-end"
                   onClick={() => deleteTuitHandler(list._id)}></i>
                <span className=""><b>{list.userName}</b> </span>
                <FontAwesomeIcon icon={faCircleCheck} />
                <span className="text-secondary">&nbsp;{list.handle}</span>
                <span className="text-secondary">&nbsp;·&nbsp;{list.time}</span>
                <div className="ps-5">
                    <p> {list.tuit}</p>
                </div>
                <div className="mt-3 ps-5 row text-secondary">
                    <div className="col-3">
                        <FontAwesomeIcon icon={faComment} />
                        <span className="ps-3">{list.replies}</span>
                    </div>
                    <div className="col-3">
                        <FontAwesomeIcon icon={faShare} />
                        <span className="ms-3">{list.retuits}</span>
                    </div>
                    <div className="col-3">
                        <FontAwesomeIcon icon={faHeart}
                                         className={`${list.liked ? 'wd-red' : ''}`}
                                         onClick={() => handleLike(list)}/>
                        <span className="ms-3">{list.likes}</span>
                    </div>
                    <div className="col-3">
                        <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    </div>
                </div>
            </div>

        </div>
    );
};
export default PostListItem;


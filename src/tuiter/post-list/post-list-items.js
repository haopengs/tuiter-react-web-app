import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEllipsis, faCircleCheck, faLink, faComment,faShare,faHeart, faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";

const PostListItem = (
    {
        list={
            avatarIcon: "elon.jpg",
        }
    }
) => {
    const linkIcon = list.hyperL?'faLink':'';
    return(
        <div className="p-3 border-bottom border-secondary">
            <img className="float-start rounded-circle pe-1" width={50} height={50}
                 src={`/images/${list.avatarIcon}`}/>
            <div className="">
                <FontAwesomeIcon className="float-end" icon={faEllipsis} />
                <span className=""><b>{list.name}</b> </span>
                <FontAwesomeIcon icon={faCircleCheck} />
                <span className="text-secondary">&nbsp;@{list.userName}</span>
                <span className="text-secondary">&nbsp;·&nbsp;{list.time}</span>
                <div className="ps-5">
                    <b> {list.title}</b>
                    <a href="#" className="text-decoration-none">{list.call}</a>
                    <b> {list.titleRest}</b>

                </div>
                <div className="mt-3 ms-5">
                   <img className={`${list.textTitle? 'border border-secondary rounded-top-4 border-bottom-0' :'rounded-3'}`}
                         src={`/images/${list.image}`} height="300px" width="100%" />
                </div>
                <div
                    className={`${list.textTitle? 'ms-5 px-2 py-2 border border-secondary rounded-bottom-4 text-secondary' :'ms-5'}`}
                    >
                    <h6>{list.textTitle}</h6>
                    {list.textContent}
                    <div>
                        <a href="{list.hyperL}" className="text-decoration-none text-secondary">
                            <FontAwesomeIcon icon={`${linkIcon}`} />
                            {list.hyperL}</a>
                    </div>
                </div>
                <div className="mt-3 ps-5 row text-secondary">
                    <div className="col-3">
                        <FontAwesomeIcon icon={faComment} />
                        <span className="ps-3">{list.commentCount}</span>
                    </div>
                    <div className="col-3">
                        <FontAwesomeIcon icon={faShare} />
                        <span className="ms-3">{list.reTweetCount}</span>
                    </div>
                    <div className="col-3">
                        <FontAwesomeIcon icon={faHeart} />
                        <span className="ms-3">{list.likeCount}</span>
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


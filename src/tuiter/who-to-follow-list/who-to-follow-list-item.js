import React from "react";
const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png' }
    }
) => {
    return(
        <li className="list-group-item">
            <button className="btn btn-primary float-end my-2 rounded-pill">Follow</button>
            <img className="float-start rounded-circle" width={50} height={50}
                src={`/images/${who.avatarIcon}`}/>
            <div className="float-start ms-3">
                <span> <b>{who.userName}</b> <i className="fa-solid fa-circle-check"></i></span>
                <div>@{who.handle}</div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;
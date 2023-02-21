import React from "react";
const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div>{post.userName} . {post.time}</div>
                    <div className="fw-bolder">{post.topic}</div>
                    <div>{post.title}</div>
                </div>
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={`/images/${post.image}`}/>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;


// <div className="mt-2 px-3 border">
//     <img className="float-end rounded mt-2" width={80} height={70}
//          src={`/images/${post.image}`}/>
//     <div className="col-9 pt-2">
//
//         <span className=""><b>{post.userName}</b> </span>
//         <i className="fa-solid fa-circle-check"></i>
//         <span className="text-secondary">&nbsp;-&nbsp;{post.time}</span>
//         <div className="text-secondary">{post.topic}</div>
//         <div className=""><b> {post.title}</b></div>
//     </div>
// </div>
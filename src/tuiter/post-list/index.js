import React from "react";
import listsArr2 from "./lists.json"
import {useSelector} from "react-redux";
import PostListItem from "./post-list-items";

import "./index.css"

const PostList = () => {
    const listsArr = useSelector(state => state.tuits)
    return(
        <div>
            {
                listsArr.map(list =>
                    <PostListItem
                        key={list._id}
                        list={list}/> )
            }
        </div>
    );
};

export default PostList;
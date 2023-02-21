import React from "react";
import listsArr from "./lists.json"
import PostListItem from "./post-list-items";

const PostList = () => {
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
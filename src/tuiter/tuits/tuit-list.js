import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import PostListItem from "../post-list/post-list-items";
import {findTuitsThunk} from "../../service/tuits-thunks";
import "./index.css"

const TuitsList = () => {
    const {tuits, loading} = useSelector(state => state.tuits)
    // const listsArr = useSelector(state => state.tuits)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])
    return(
        <div>
            {loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }

            {
                tuits.map(list =>
                    <PostListItem
                        key={list._id}
                        list={list}/> )
            }
        </div>
    );
};

export default TuitsList;

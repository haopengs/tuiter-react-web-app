import WhoToFollowListItem from "./WhoToFollowListItem.js";
import whos from "./who.js"

const WhoToFollowList = () => {
    return (`
           <ul class="list-group">
                
                <li class="list-group-item"><b> Who to follow</b></li>
                ${
                    whos.map(who => {
                        return(WhoToFollowListItem(who));
                    }).join('')
                }
           </ul>
    `);
}

export default WhoToFollowList;

// function exploreComponent() {
//     $('#wd-test').append(`
//         ${WhoToFollowList()}
//    `);
// }
// $(exploreComponent);
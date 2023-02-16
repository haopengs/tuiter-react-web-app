import postListItems from "./postListItems.js";
import lists from "./lists.js";


const postList = () => {
    return(`
        ${
            lists.map(list => {
                return (postListItems(list))
            }).join('')
        } 
    `)
}

export default postList;

// function exploreComponent() {
//     $('#wd-test').append(`
//         ${postList()}
//    `);
// }
// $(exploreComponent);
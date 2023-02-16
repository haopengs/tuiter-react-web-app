import PostSummaryListItems from "./PostSummaryListItems.js";
import posts from "./posts.js";

const PostSummaryList = () => {
    return(`
       <div class="bg-secondary bg-opacity-10">
            ${
                posts.map(post => {
                    return(PostSummaryListItems(post));
                }).join('')
            }
       </div>
    `);
}

export default PostSummaryList;



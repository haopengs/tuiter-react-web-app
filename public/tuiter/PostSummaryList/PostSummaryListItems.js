const PostSummaryListItems = (post) => {
    return(`
        <div class="mt-2 px-3">
            <img class="float-end rounded mt-2" width="80px" height="70px"
                 src=${post.image}>
            <div class="col-9 pt-2">
                <div class="text-secondary">${post.topic}</div>
                <span class=""><b>${post.userName}</b> </span>
                <i class="fa-solid fa-circle-check"></i>
                <span class="text-secondary">&nbsp;-&nbsp;${post.time}</span>
                <div class=""><b> ${post.title}</b></div>
            </div>
        </div>

    `);
}

export default PostSummaryListItems;
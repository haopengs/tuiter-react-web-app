const PostSummaryListItems = (list) => {
    return(`
        <div class="p-3 border-bottom border-secondary">
            <img class="float-start rounded-circle pe-1" width="50px" height="50px"
                     src=${list.avatarIcon}>
            <div class="pt-2">
                <i class="fa-solid fa-ellipsis float-end"></i>
                <span class=""><b>${list.name}</b> </span>
                <i class="fa-solid fa-circle-check"></i>
                <span class="text-secondary">@${list.userName}</span>
                <span class="text-secondary">&nbsp;·&nbsp;${list.time}</span>
                <div class="ps-5">
                    <b> ${list.title}</b>
                    <a href="#" class="text-decoration-none">${list.call}</a> 
                    <b> ${list.titleRest}</b>
                    
                </div>
                <div class="mt-3 ms-5">
                    <img ${list.textTitle? 'class="border border-secondary rounded-top-4 border-bottom-0"'
                            : 'class="rounded-3"'}
                    src="${list.image}" height="300px" width="100%">
                </div>
                <div ${list.textTitle? 'class="ms-5 px-2 py-2 border border-secondary rounded-bottom-4 text-secondary"'
                        : 'class="ms-5"'}>
                     <h6>${list.textTitle}</h6>
                     ${list.textContent}
                     <div>
                         <a href="${list.hyperL}" class="text-decoration-none text-secondary">
                         
                         <i ${list.hyperL? 'class="fa-solid fa-link"' : ''}></i>
                            ${list.hyperL}</a> 
                     </div>
                </div>
                <div class="mt-3 ps-5 row text-secondary">
                    <div class="col-3">
                        <i class="fa-regular fa-comment-dots"></i>
                        <span class="ps-3">${list.commentCount}</span>
                    </div>
                    <div class="col-3">
                        <i class="fa-solid fa-retweet"></i>
                        <span class="ms-3">${list.reTweetCount}</span>
                    </div>
                    <div class="col-3">
                        <i class="fa-regular fa-heart"></i>
                        <span class="ms-3">${list.likeCount}</span>
                    </div>
                    <div class="col-3">
                        <i class="fa-solid fa-arrow-up-from-bracket"></i>
                    </div>
                </div>
            </div>
            
        </div>

    `);
}

export default PostSummaryListItems;
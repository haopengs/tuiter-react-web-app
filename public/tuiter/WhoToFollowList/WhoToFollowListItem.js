const whoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item">
                <button class="btn btn-primary float-end my-2 rounded-pill">Follow</button>
                <img class="float-start rounded-circle" width="50px" height="50px"
                     src=${who.avatarIcon}>
                <div class="float-start ms-3">
                    <span> <b>${who.userName}</b> <i class="fa-solid fa-circle-check"></i></span>
                    <div>@${who.handle}</div>
                </div>
        </li>
    `);
}

export default whoToFollowListItem;
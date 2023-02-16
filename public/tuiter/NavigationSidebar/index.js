const NavigationSidebar = (cur) => {
    return(`
        <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action"> <i class="fab fa-twitter fab fa-twitter "></i> </a>
            <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action ${cur == 'home'? 'active' : ''} ">
                <i class="fa-solid fa-house "></i>
                <span class="d-none d-lg-inline-block">Home</span>
            </a>
            <a href="../explore/index.html" class="list-group-item list-group-item-action ${cur == 'explore'? 'active' : ''}">
                <i class="fa-solid fa-hashtag"></i>
                <span class="d-none d-lg-inline-block">Explore</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <i class="fa-solid fa-bell"></i>
                <span class="d-none d-lg-inline-block">Notifications</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <i class="fa-solid fa-envelope"></i>
                <span class="d-none d-lg-inline-block">Messages</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <i class="fa-solid fa-bookmark"></i>
                <span class="d-none d-lg-inline-block">Bookmarks</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <i class="fa-solid fa-list-ul"></i>
                <span class="d-none d-lg-inline-block">Lists</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <i class="fa-solid fa-user"></i>
                <span class="d-none d-lg-inline-block">Profile</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <i class="fa-solid fa-circle-info"></i>
                <span class="d-none d-lg-inline-block">More</span>
            </a>
            
            <div class="d-grid mt-2">
             <a href="tweet.html"
                class="btn btn-primary btn-block rounded-pill">
                Tweet</a>
           </div>
    <!--        <li class="d-grid mt-1">-->
    <!--            <button type="submit" class="btn btn-primary rounded-pill" >Tweet</button>-->
    <!--        </li>-->
        </div>
 `);
}
export default NavigationSidebar;
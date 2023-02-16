const searchBar = () => {
    return(`
        <div class="col-11 ">
            <div class="position-relative">
                <i class="wd-icon-over-input fa-solid fa-magnifying-glass"></i>
                <input type="text" class="rounded-pill col-12 bg-white"
                       placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Search Twitter">
            </div>
        </div>
        <div class="col-1">
            <a href="explore-settings.html" >
                <img height="30px" width="30px"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQalQGfFQxU_Mk5EIGB80Oq1UOYB2xZ5bJ9Iw&usqp=CAU">
            </a>
        </div>
    `)
}

export default searchBar;
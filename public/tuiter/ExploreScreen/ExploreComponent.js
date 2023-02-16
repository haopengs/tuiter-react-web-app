import PostSummaryList from "../PostSummaryList/index.js";
import searchBar from "./SearchBar.js";
import navTab from "./NavTab.js";
import imgExplore from "./imgExplore.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
               ${searchBar()}
           </div>
           <ul class="nav mb-2 nav-tabs">
               ${navTab()}
           </ul>
           ${imgExplore()}
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;

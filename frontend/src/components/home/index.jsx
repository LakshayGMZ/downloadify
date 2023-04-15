import React from "react";
import SearchBar from "./searchBar";
import Header from "../header/Header";
import "./index.css"

function IndexPage() {
    return (
        <div id="MainContainer">
            <Header />
            <SearchBar />
            {/* <MainBox /> */}
        </div>
    )
}

export default IndexPage;
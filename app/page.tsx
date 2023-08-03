import React from "react";
import { LeftMenu } from "./leftBar";
import { MainPage } from "./main";
import { RightMenu } from "./rightBar";

function Home() {
    return (
        <div className="flex overflow-hidden min-h-screen">
            <LeftMenu />
            <MainPage />
            <RightMenu />
        </div>
    );
}

export default Home;
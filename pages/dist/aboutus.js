"use strict";
exports.__esModule = true;
var LandingPage_1 = require("@/components/templates/LandingPage");
var Aboutus_1 = require("@/components/Aboutus/Aboutus");
function Home() {
    return (React.createElement("div", { className: "max-w-screen" },
        React.createElement(LandingPage_1["default"], null,
            React.createElement(Aboutus_1["default"], null))));
}
exports["default"] = Home;

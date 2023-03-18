"use strict";
exports.__esModule = true;
var LandingPage_1 = require("@/components/templates/LandingPage");
var OurServices_1 = require("@/components/Services/OurServices");
var Hero_1 = require("@/components/Services/Hero");
var Workingadvantage_1 = require("@/components/Services/Workingadvantage");
var EnquiryForm_1 = require("@/components/molecules/EnquiryForm");
var Footer_1 = require("@/components/molecules/Footer");
function Home() {
    return (React.createElement("div", { className: "max-w-screen" },
        React.createElement(LandingPage_1["default"], null,
            React.createElement(Hero_1["default"], null),
            React.createElement(OurServices_1["default"], null),
            React.createElement(Workingadvantage_1["default"], null),
            React.createElement(EnquiryForm_1["default"], null),
            React.createElement(Footer_1["default"], null))));
}
exports["default"] = Home;

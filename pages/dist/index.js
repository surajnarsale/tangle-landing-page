"use strict";
exports.__esModule = true;
var Workingadvantage_1 = require("@/components/Services/Workingadvantage");
var ClientsBanner_1 = require("@/components/molecules/ClientsBanner");
var EnquiryForm_1 = require("@/components/molecules/EnquiryForm");
var Hero_1 = require("@/components/molecules/Hero");
var CapabilitiesList_1 = require("@/components/organisms/CapabilitiesList");
var WorkList_1 = require("@/components/organisms/WorkList");
var LandingPage_1 = require("@/components/templates/LandingPage");
function Home() {
    return (React.createElement("div", { className: "max-w-screen" },
        React.createElement(LandingPage_1["default"], null,
            React.createElement(Hero_1["default"], null),
            React.createElement(WorkList_1["default"], null),
            React.createElement(CapabilitiesList_1["default"], null),
            React.createElement(ClientsBanner_1["default"], null),
            React.createElement(Workingadvantage_1["default"], null),
            React.createElement(EnquiryForm_1["default"], null))));
}
exports["default"] = Home;

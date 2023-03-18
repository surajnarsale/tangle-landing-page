"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
require("@/styles/globals.css");
var react_query_1 = require("@tanstack/react-query");
var react_1 = require("react");
var react_2 = require("@apollo/client/react");
var apollo_1 = require("@/lib/apollo");
var local_1 = require("@next/font/local");
var melodrama = local_1["default"]({
    src: [
        {
            path: './fonts/melodrama/Melodrama-Regular.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: './fonts/melodrama/Melodrama-Semibold.woff2',
            weight: '600',
            style: 'normal'
        },
        {
            path: './fonts/melodrama/Melodrama-Bold.woff2',
            weight: '800',
            style: 'normal'
        },
    ],
    variable: '--font-melodrama'
});
var generalSans = local_1["default"]({
    src: [
        {
            path: './fonts/generalSans/GeneralSans-Regular.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: './fonts/generalSans/GeneralSans-Italic.woff2',
            weight: '400',
            style: 'italic'
        },
        {
            path: './fonts/generalSans/GeneralSans-Medium.woff2',
            weight: '500',
            style: 'normal'
        },
        {
            path: './fonts/generalSans/GeneralSans-MediumItalic.woff2',
            weight: '500',
            style: 'italic'
        },
        {
            path: './fonts/generalSans/GeneralSans-Bold.woff2',
            weight: '800',
            style: 'normal'
        },
    ],
    variable: '--font-generalSans'
});
function App(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    var queryClient = react_1.useState(function () { return new react_query_1.QueryClient(); })[0];
    return (React.createElement(react_2.ApolloProvider, { client: apollo_1.client },
        React.createElement("main", { className: melodrama.variable + " " + generalSans.variable + " font-generalSans" },
            React.createElement(react_query_1.QueryClientProvider, { client: queryClient },
                React.createElement(react_query_1.Hydrate, { state: pageProps.dehydratedState },
                    React.createElement(Component, __assign({}, pageProps)))))));
}
exports["default"] = App;

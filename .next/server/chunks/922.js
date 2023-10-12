"use strict";
exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 7922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MyLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
;// CONCATENATED MODULE: ./components/Header.js



/*Contact - ultimately what you want is for a lead to see your portfolio
and contact you so you should include your contact details (email
  address, telephone number, etc).*/ const linkStyle = {
    marginRight: 15
};
const Header = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-9951c4242e56d30e" + " " + "header",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    style: linkStyle,
                    className: "jsx-9951c4242e56d30e",
                    children: "Home"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/projects",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    style: linkStyle,
                    className: "jsx-9951c4242e56d30e",
                    children: "Projects"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/about",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    style: linkStyle,
                    className: "jsx-9951c4242e56d30e",
                    children: "About"
                })
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "9951c4242e56d30e",
                children: ".header.jsx-9951c4242e56d30e{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;border-bottom:rgba(0,0,0,.08)1px solid;text-transform:uppercase;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;background-color:#fde5ec;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}p.jsx-9951c4242e56d30e{color:white;background-color:#fcbaad;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;margin:15px;padding:5px}p.jsx-9951c4242e56d30e:hover{background-color:rgb(255,160,150);color:black}"
            })
        ]
    });
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: ./components/MyLayout.js
/* In our app, we'll use a common style across various pages. For this purpose, we can create a common Layout component and use it for each of our pages. Here's an example: 

Since Next.js is used to create server-rendered pages, adding a link using a normal <a> tag would cause a link that would be navigated to via the server. 
This is obviously not always necessary. 
To support client-side navigation (this takes place in the browser, without making a request to the server) we use Next.js’ Link API.*/ 

/*You can use this built-in component to append elements to the <head> element of the page. More info here: https://github.com/zeit/next.js/#populating-head 
Notice that we add the link for the stylesheet for using React-Bootstrap components to the <Head>. */ 

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: "1px solid #DDD"
};
/* Notice in the example below that we pass children and title as props to the Layout components.
If you remove {children}, the Layout cannot render the content we put inside the Layout element. 
Have a look at ./pages/index.js to see where we pass props through to this Layout Component. */ const Layout = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "stylesheet",
                    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
                    integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
                    crossOrigin: "anonymous"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: layoutStyle,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
                    props.children
                ]
            })
        ]
    });
/* harmony default export */ const MyLayout = (Layout);


/***/ })

};
;
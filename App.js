/**
 * <div id="parent">
 *  <div id="child">
 *      <h1></h1>
 *  </div>
 * </div>
 *  How to get these nested HTML in react???
 */ 

const parent=React.createElement(
    "div",
    {id:"parent"},
    [React.createElement(
        "div",
        {id:"child"},
        [React.createElement(
            "h1",
            {id:"heading"},
            "Pillu the Great (Inside h1 tag)!!"
        ),
        React.createElement(
            "h2",
            {id:"heading2"},
            "Don is a naughty boi but a good boi(Inside h2 tag)"
        )]
    ),
    React.createElement(
        "div",
        {id:"child2"},
        [React.createElement(
            "h1",
            {id:"heading3"},
            "Pillu loves to play tug-of-war!!"
        ),
        React.createElement(
            "h2",
            {id:"heading4"},
            "Don loves to play catch-catch"
        )]
    )]
)


/*const heading=React.createElement(
    "h1",
    {id: "heading",a:"xyz"},
    "Hello there folks"
);*/

//heading is an object

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);


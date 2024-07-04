// const heading = React.createElement('h1', { id: "heading" }, "hello namste javascript"); //its create javascript object
const root = ReactDOM.createRoot(document.getElementById('root'));


// console.log(heading);
// root.render(heading); //to takes this object crete h1 tag and put that h1 tag inside root element.means converting objects put it in h1 tag



/* <div id="parent">
    <div id="child1">
        <h1>I'm in h1 tag</h1>
        <h2>I'm in h1 tag</h2>
    </div>
     <div id="child2">
        <h1>I'm in h1 tag</h1>
        <h2>I'm in h1 tag</h2>
    </div>
</div> */

const parent = React.createElement(
    'div', { id: "parent" }, [
        React.createElement(
            'div', { id: "child" }, [React.createElement('h1', {}, "I'm in h1 tag"),
                React.createElement('h2', {}, "I'm in h1 tag"),
            ]),
        React.createElement(
            'div', { id: "child" }, [React.createElement('h1', {}, "I'm in h1 tag"),
                React.createElement('h2', {}, "I'm in h1 tag"),
            ]),
    ]

);

root.render(parent);
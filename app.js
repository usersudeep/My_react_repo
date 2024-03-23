const c = React.createElement("div", { id: "mani" },
    [React.createElement("div", { id: "mani5" },
        [React.createElement("h1", { id: "mani4" }, "header 1 of div1"), React.createElement("h2", { id: "mani3" }, "header 2 of div 1")])
        , React.createElement("div", { id: "mani2" },
            [React.createElement("h1", { id: "mani6" }, "header 1 of div 2"), React.createElement("h2", { id: "mani" }, "header 2 of div 2")])]);
const root = ReactDOM.createRoot(document.getElementById("Roo"));
root.render(c);
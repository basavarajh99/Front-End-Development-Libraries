const initial_state = `
  # heading
  ## heading2
  
  [visit this site](https://github.com/evilstreak/markdown-js)
  
  This is a inline \`<div></div>\`
  
  This is paragraph 
  **This is Bold Text**
  > Block Quotes!
  
  - list item 1
  - list item 2
  - list item 3
  
  
  
  This is a block of quote
  
  \`\`\`
  let x = 1;
  let y = 2;
  let z = x + y;
  \`\`\`
  
  ![React](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;
class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      text: initial_state };

  }

  handleChange(e) {
    this.setState({
      text: e.target.value });

  }
  render() {
    const { text } = this.state;
    const markdown = marked.parse(text, { breaks: true });
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "col-6" }, /*#__PURE__*/
      React.createElement("h2", { className: "text-center" }, "Editor"), /*#__PURE__*/
      React.createElement("textarea", { id: "editor", className: "form-control",
        value: text, onChange: this.handleChange.bind(this) })), /*#__PURE__*/


      React.createElement("div", { className: "col-6" }, /*#__PURE__*/
      React.createElement("h2", { className: "text-center" }, "Preview"), /*#__PURE__*/
      React.createElement("div", { className: "preview rounded",
        id: "preview", dangerouslySetInnerHTML: { __html: markdown } })))));





  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));
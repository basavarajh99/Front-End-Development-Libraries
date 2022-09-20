const api = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [
      {
        "quote": "Life isn’t about getting and having, it’s about giving and                          being.",
        "author": "Kevin Kruse" }],



      index: 0 };

  }

  componentDidMount() {
    fetch(api).
    then(res => res.json()).
    then(res => {
      this.setState({
        quotes: res.quotes },
      this.getRandomIndex);
    });
  }

  getRandomIndex() {
    const { quotes } = this.state;
    if (quotes.length > 0) {
      const index = Math.floor(Math.random() * quotes.length);
      this.setState({ index });
    }
  }

  render() {
    const { quotes, index } = this.state;
    const quote = quotes[index];
    const tweet = `https://twitter.com/intent/tweet?text=${quote.quote}-${quote.author}`;
    return /*#__PURE__*/(
      React.createElement("div", { className: "wrapper d-flex align-items-center justify-content-center" }, /*#__PURE__*/
      React.createElement("div", { className: "col-6 box p-4 rounded", id: "quote-box" },

      quote && /*#__PURE__*/
      React.createElement("div", { className: "mb-4" }, /*#__PURE__*/
      React.createElement("p", { id: "text" }, quote.quote), /*#__PURE__*/
      React.createElement("cite", { className: "d-block text-end",
        id: "author" }, "- ", quote.author)), /*#__PURE__*/



      React.createElement("div", { className: "d-flex justify-content-between" }, /*#__PURE__*/
      React.createElement("a", { href: tweet, className: "btn btn-sm btn-primary",
        id: "tweet-quote", target: "_blank" }, /*#__PURE__*/
      React.createElement("i", { className: "fab fa-twitter" }), " Twitter"), /*#__PURE__*/

      React.createElement("button", { className: "btn btn-sm btn-primary",
        onClick: this.getRandomIndex.bind(this) }, /*#__PURE__*/
      React.createElement("i", { className: "fas fa-random", id: "new-quote" }), "New quote")))));





  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));
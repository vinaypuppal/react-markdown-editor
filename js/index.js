"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var markdown = "#(GitHub-Flavored) Markdown Editor\n\nI\'m no good at writing sample / filler text, so go write something yourself.\n\n##Look, a list!\n\n* foo\n* bar\n* baz\n\n##And here\'s some code!\n\n```javascript\n\n$(document).ready(function(){\n\t$(\'div\').html(\'I am a div.\');\n});\n\n```\n\n##Look, an Image!\n\n![kitten](http://placekitten.com/g/200/300)\n\nThis is on GitHub (https://github.com/vinaypuppal/react-markdown-editor) so let me know if I've b0rked it somewhere.";

var Preview = function Preview(props) {
	return React.createElement(
		"div",
		{ className: "preview" },
		React.createElement("div", { dangerouslySetInnerHTML: { __html: marked(props.html, { sanitize: true }) } })
	);
};

var Editor = function Editor(props) {
	return React.createElement(
		"textarea",
		{ onChange: function onChange(e) {
				props.onChange(e.target.value);
			},
			className: "editor" },
		props.code
	);
};

var Container = function (_React$Component) {
	_inherits(Container, _React$Component);

	function Container(props) {
		_classCallCheck(this, Container);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Container).call(this, props));

		_this.state = {
			code: markdown
		};
		return _this;
	}

	_createClass(Container, [{
		key: "handelChange",
		value: function handelChange(code) {
			this.setState({ code: code });
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "container" },
				React.createElement(Editor, { code: this.state.code,
					onChange: this.handelChange.bind(this) }),
				React.createElement(Preview, { html: this.state.code })
			);
		}
	}]);

	return Container;
}(React.Component);

var Header = function Header() {
	return React.createElement(
		"header",
		null,
		React.createElement(
			"div",
			{ className: "center" },
			React.createElement(
				"h1",
				null,
				"Markdown Editor"
			)
		)
	);
};

var App = function App() {
	return React.createElement(
		"div",
		null,
		React.createElement(Header, null),
		React.createElement(
			"div",
			{ className: "info" },
			React.createElement(
				"p",
				null,
				"Edit Here"
			),
			React.createElement(
				"p",
				null,
				"Preview"
			)
		),
		React.createElement(Container, null)
	);
};

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
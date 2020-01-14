"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var Login = (function (_super) {
    __extends(Login, _super);
    function Login() {
        var _this = _super.call(this, {}) || this;
        _this.emailTextChanged = function (event) {
            _this.setState({
                email: event.target.value
            });
        };
        _this.passwordTextChanged = function (event) {
            _this.setState({
                password: event.target.value
            });
        };
        _this.state = {
            email: '',
            password: ''
        };
        return _this;
    }
    Login.prototype.render = function () {
        var _a = this.state, email = _a.email, password = _a.password;
        return (react_1.default.createElement("div", { className: "DN_Login_Container" },
            react_1.default.createElement(core_1.Card, { className: "card" },
                react_1.default.createElement("form", { className: "DN_Login_Form_Container" },
                    react_1.default.createElement(core_1.CardHeader, { title: "DevNet" }),
                    react_1.default.createElement(core_1.TextField, { id: "outlined-basic", className: "email_input", label: "Email", variant: "outlined", value: email, onChange: this.emailTextChanged }),
                    react_1.default.createElement(core_1.TextField, { id: "outlined-basic", type: "password", className: "password_input", label: "Password", variant: "outlined", value: password, onChange: this.passwordTextChanged }),
                    react_1.default.createElement(core_1.Button, { type: 'submit', className: "login_btn", variant: "contained", color: "primary" }, "Login")))));
    };
    return Login;
}(react_1.Component));
exports.default = Login;
//# sourceMappingURL=login.js.map
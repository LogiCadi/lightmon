"use strict";
exports.__esModule = true;
var HL = /** @class */ (function () {
    /**
     * 关键字高亮
     * @param root 查找根元素
     * @param style 默认背景高亮黄色
     */
    function HL(config) {
        var _a;
        if (!config.root)
            return;
        this.root = config.root;
        this.rootHTML = config.root.innerHTML;
        this.style = (_a = config.style) !== null && _a !== void 0 ? _a : "background-color: #FF0";
        this.stamp = Date.now();
        // console.log('HL new', this);
    }
    /** 标记keyword */
    HL.prototype.light = function (keyword) {
        var _this = this;
        var handler = function (root) {
            if (root.nodeName === "#text" &&
                root.parentNode.childNodes.length === 1) {
                root.parentNode.innerHTML = root.parentNode.innerHTML.replace(new RegExp(keyword, "g"), "<span class=\"HL\" style=\"" + _this.style + "\">" + keyword + "</span>");
            }
            else {
                for (var _i = 0, _a = root.childNodes; _i < _a.length; _i++) {
                    var node = _a[_i];
                    handler(node);
                }
            }
        };
        if (!this.root)
            return;
        // 重置HTML
        if (Date.now() - this.stamp > 200) {
            // console.log('HL reset');
            this.root.innerHTML = this.rootHTML;
        }
        if (!keyword)
            return;
        handler(this.root);
    };
    return HL;
}());
exports["default"] = HL;

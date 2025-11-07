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
define(["require", "exports", "@syncfusion/ej2-base/helpers/e2e"], function (require, exports, e2e_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PivotViewHelper = (function (_super) {
        __extends(PivotViewHelper, _super);
        function PivotViewHelper(id, wrapperFn) {
            var _this = _super.call(this) || this;
            _this.id = id;
            if (wrapperFn !== undefined) {
                _this.wrapperFn = wrapperFn;
            }
            return _this;
        }
        PivotViewHelper.prototype.getElement = function () {
            return this.selector('#' + this.id);
        };
        PivotViewHelper.prototype.getGridElement = function () {
            return this.selector('#' + this.id + '_grid');
        };
        PivotViewHelper.prototype.getFilterPopupElement = function () {
            return this.selector('#' + this.id + '_EditorTreeView');
        };
        PivotViewHelper.prototype.getAggregationContextMenuElement = function () {
            return this.selector('#' + this.id + 'valueFieldContextMenu');
        };
        PivotViewHelper.prototype.getValueSettingsDialogElement = function () {
            return this.selector('#' + this.id + '_ValueDialog');
        };
        PivotViewHelper.prototype.getDrillThroughPopupElement = function () {
            return this.selector('#' + this.id + '_drillthrough');
        };
        PivotViewHelper.prototype.getConditionalFormattingPopupElement = function () {
            return this.selector('#' + this.id + 'conditionalformatting');
        };
        PivotViewHelper.prototype.getFieldListIconElement = function () {
            return this.selector('#' + this.id + '_PivotFieldList');
        };
        PivotViewHelper.prototype.getFieldListPopupElement = function () {
            return this.selector('#' + this.id + '_PivotFieldList_Container');
        };
        PivotViewHelper.prototype.getCalculatedMemberPopupElement = function () {
            return this.selector('#' + this.id + '_PivotFieldListcalculateddialog');
        };
        PivotViewHelper.prototype.getFieldListFilterPopupElement = function () {
            return this.selector('#' + this.id + '_PivotFieldList_EditorTreeView');
        };
        PivotViewHelper.prototype.getFieldListAggregationContextMenuElement = function () {
            return this.selector('#' + this.id + '_PivotFieldListvalueFieldContextMenu');
        };
        PivotViewHelper.prototype.getFieldListValueSettingsPopupElement = function () {
            return this.selector('#' + this.id + '_PivotFieldList_Container_ValueDialog');
        };
        return PivotViewHelper;
    }(e2e_1.TestHelper));
    exports.PivotViewHelper = PivotViewHelper;
});

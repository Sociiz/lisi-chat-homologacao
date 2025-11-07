import * as events from '../../common/base/constant';
import { PivotCommon } from '../../common/base/pivot-common';
import { Browser } from '@syncfusion/ej2-base';
/**
 * Module for PivotCommon rendering
 */
/** @hidden */
var Common = /** @class */ (function () {
    function Common(parent) {
        this.parent = parent;
        this.parent.commonModule = this;
        this.addEventListener();
    }
    /**
     * For internal use only - Get the module name.
     *
     * @returns {string} - It returns string
     * @private
     */
    Common.prototype.getModuleName = function () {
        return 'common';
    };
    Common.prototype.initiateCommonModule = function () {
        if (!this.parent.pivotCommon) {
            var args = {
                pivotEngine: this.parent.dataType === 'olap' ? this.parent.olapEngineModule : this.parent.engineModule,
                dataSourceSettings: this.parent.dataSourceSettings.properties ?
                    this.parent.dataSourceSettings.properties : this.parent.dataSourceSettings,
                id: this.parent.element.id,
                element: this.parent.element,
                moduleName: this.parent.getModuleName(),
                enableRtl: this.parent.enableRtl,
                enableHtmlSanitizer: this.parent.enableHtmlSanitizer,
                isAdaptive: Browser.isDevice,
                renderMode: 'Popup',
                localeObj: this.parent.localeObj,
                dataType: this.parent.dataType,
                cssClass: this.parent.cssClass
            };
            this.parent.pivotCommon = new PivotCommon(args);
        }
        else {
            this.parent.pivotCommon.element = this.parent.element;
            this.parent.pivotCommon.engineModule = this.parent.dataType === 'olap' ?
                this.parent.olapEngineModule : this.parent.engineModule;
            this.parent.pivotCommon.parentID = this.parent.element.id;
            this.parent.pivotCommon.dataSourceSettings = this.parent.dataSourceSettings.properties ?
                this.parent.dataSourceSettings.properties : this.parent.dataSourceSettings;
            this.parent.pivotCommon.moduleName = this.parent.getModuleName();
            this.parent.pivotCommon.enableRtl = this.parent.enableRtl;
            this.parent.pivotCommon.isAdaptive = Browser.isDevice;
            this.parent.pivotCommon.renderMode = 'Popup';
            this.parent.pivotCommon.localeObj = this.parent.localeObj;
            this.parent.pivotCommon.dataType = this.parent.dataType;
            this.parent.pivotCommon.cssClass = this.parent.cssClass;
        }
        this.parent.pivotCommon.control = this.parent;
    };
    /**
     * @returns {void}
     * @hidden
     */
    Common.prototype.addEventListener = function () {
        if (this.parent.isDestroyed) {
            return;
        }
        this.parent.on(events.initialLoad, this.initiateCommonModule, this);
        this.parent.on(events.uiUpdate, this.initiateCommonModule, this);
    };
    /**
     * @returns {void}
     * @hidden
     */
    Common.prototype.removeEventListener = function () {
        if (this.parent.isDestroyed) {
            return;
        }
        this.parent.off(events.initialLoad, this.initiateCommonModule);
        this.parent.off(events.uiUpdate, this.initiateCommonModule);
    };
    /**
     * To destroy the groupingbar
     *
     * @returns {void}
     * @hidden
     */
    Common.prototype.destroy = function () {
        this.removeEventListener();
        if (this.parent.pivotCommon) {
            this.parent.pivotCommon.destroy();
            this.parent.pivotCommon = null;
        }
    };
    return Common;
}());
export { Common };

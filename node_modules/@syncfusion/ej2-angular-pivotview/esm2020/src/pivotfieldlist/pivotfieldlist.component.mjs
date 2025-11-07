import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ComponentBase, ComponentMixins, setValue } from '@syncfusion/ej2-angular-base';
import { PivotFieldList } from '@syncfusion/ej2-pivotview';
import * as i0 from "@angular/core";
export const inputs = ['aggregateTypes', 'allowCalculatedField', 'allowDeferLayoutUpdate', 'cssClass', 'currencyCode', 'dataSourceSettings', 'enableFieldSearching', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'loadOnDemandInMemberEditor', 'locale', 'maxNodeLimitInMemberEditor', 'renderMode', 'showValuesButton', 'spinnerTemplate', 'target'];
export const outputs = ['actionBegin', 'actionComplete', 'actionFailure', 'afterServiceInvoke', 'aggregateCellInfo', 'aggregateMenuOpen', 'beforeServiceInvoke', 'calculatedFieldCreate', 'created', 'dataBound', 'destroyed', 'enginePopulated', 'enginePopulating', 'fieldDragStart', 'fieldDrop', 'fieldRemove', 'load', 'memberEditorOpen', 'memberFiltering', 'onFieldDropped', 'onHeadersSort'];
export const twoWays = [];
/**
 * `ej-pivotfieldlist` represents the Angular PivotFieldList Component.
 * ```html
 * <ej-pivotfieldlist></ej-pivotfieldlist>
 * ```
 */
let PivotFieldListComponent = class PivotFieldListComponent extends PivotFieldList {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('PivotViewCalculatedField');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context = new ComponentBase();
    }
    ngOnInit() {
        this.context.ngOnInit(this);
    }
    ngAfterViewInit() {
        this.context.ngAfterViewInit(this);
    }
    ngOnDestroy() {
        this.context.ngOnDestroy(this);
    }
    ngAfterContentChecked() {
        this.context.ngAfterContentChecked(this);
    }
};
PivotFieldListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PivotFieldListComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
PivotFieldListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: PivotFieldListComponent, selector: "ejs-pivotfieldlist", inputs: { aggregateTypes: "aggregateTypes", allowCalculatedField: "allowCalculatedField", allowDeferLayoutUpdate: "allowDeferLayoutUpdate", cssClass: "cssClass", currencyCode: "currencyCode", dataSourceSettings: "dataSourceSettings", enableFieldSearching: "enableFieldSearching", enableHtmlSanitizer: "enableHtmlSanitizer", enablePersistence: "enablePersistence", enableRtl: "enableRtl", loadOnDemandInMemberEditor: "loadOnDemandInMemberEditor", locale: "locale", maxNodeLimitInMemberEditor: "maxNodeLimitInMemberEditor", renderMode: "renderMode", showValuesButton: "showValuesButton", spinnerTemplate: "spinnerTemplate", target: "target" }, outputs: { actionBegin: "actionBegin", actionComplete: "actionComplete", actionFailure: "actionFailure", afterServiceInvoke: "afterServiceInvoke", aggregateCellInfo: "aggregateCellInfo", aggregateMenuOpen: "aggregateMenuOpen", beforeServiceInvoke: "beforeServiceInvoke", calculatedFieldCreate: "calculatedFieldCreate", created: "created", dataBound: "dataBound", destroyed: "destroyed", enginePopulated: "enginePopulated", enginePopulating: "enginePopulating", fieldDragStart: "fieldDragStart", fieldDrop: "fieldDrop", fieldRemove: "fieldRemove", load: "load", memberEditorOpen: "memberEditorOpen", memberFiltering: "memberFiltering", onFieldDropped: "onFieldDropped", onHeadersSort: "onHeadersSort" }, usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
PivotFieldListComponent = __decorate([
    ComponentMixins([ComponentBase])
], PivotFieldListComponent);
export { PivotFieldListComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PivotFieldListComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-pivotfieldlist',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGl2b3RmaWVsZGxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3Bpdm90ZmllbGRsaXN0L3Bpdm90ZmllbGRsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBZ0MsdUJBQXVCLEVBQWlELE1BQU0sZUFBZSxDQUFDO0FBQ2hKLE9BQU8sRUFBRSxhQUFhLEVBQStCLGVBQWUsRUFBMEIsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDN0ksT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztBQUkzRCxNQUFNLENBQUMsTUFBTSxNQUFNLEdBQWEsQ0FBQyxnQkFBZ0IsRUFBQyxzQkFBc0IsRUFBQyx3QkFBd0IsRUFBQyxVQUFVLEVBQUMsY0FBYyxFQUFDLG9CQUFvQixFQUFDLHNCQUFzQixFQUFDLHFCQUFxQixFQUFDLG1CQUFtQixFQUFDLFdBQVcsRUFBQyw0QkFBNEIsRUFBQyxRQUFRLEVBQUMsNEJBQTRCLEVBQUMsWUFBWSxFQUFDLGtCQUFrQixFQUFDLGlCQUFpQixFQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzdWLE1BQU0sQ0FBQyxNQUFNLE9BQU8sR0FBYSxDQUFDLGFBQWEsRUFBQyxnQkFBZ0IsRUFBQyxlQUFlLEVBQUMsb0JBQW9CLEVBQUMsbUJBQW1CLEVBQUMsbUJBQW1CLEVBQUMscUJBQXFCLEVBQUMsdUJBQXVCLEVBQUMsU0FBUyxFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsaUJBQWlCLEVBQUMsa0JBQWtCLEVBQUMsZ0JBQWdCLEVBQUMsV0FBVyxFQUFDLGFBQWEsRUFBQyxNQUFNLEVBQUMsa0JBQWtCLEVBQUMsaUJBQWlCLEVBQUMsZ0JBQWdCLEVBQUMsZUFBZSxDQUFDLENBQUM7QUFDNVgsTUFBTSxDQUFDLE1BQU0sT0FBTyxHQUFhLEVBQUUsQ0FBQztBQUVwQzs7Ozs7R0FLRztJQVlVLHVCQUF1QixTQUF2Qix1QkFBd0IsU0FBUSxjQUFjO0lBMkJ2RCxZQUFvQixLQUFpQixFQUFVLFNBQW9CLEVBQVUsZ0JBQWlDLEVBQVUsUUFBa0I7UUFDdEksS0FBSyxFQUFFLENBQUM7UUFEUSxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBRXRJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7UUFDeEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxJQUFJLEVBQUUsQ0FBQztRQUNsRCxJQUFJO1lBQ0ksSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztZQUN4RCxJQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUN6QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTthQUNqQztTQUNKO1FBQUMsTUFBTSxHQUFHO1FBRWYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbkMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsT0FBTyxHQUFJLElBQUksYUFBYSxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVNLFFBQVE7UUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU0sZUFBZTtRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sV0FBVztRQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTSxxQkFBcUI7UUFFeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDO0NBSUosQ0FBQTtvSEEvRFksdUJBQXVCO3dHQUF2Qix1QkFBdUIsazVDQVB0QixFQUFFO0FBT0gsdUJBQXVCO0lBRG5DLGVBQWUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0dBQ3BCLHVCQUF1QixDQStEbkM7U0EvRFksdUJBQXVCOzJGQUF2Qix1QkFBdUI7a0JBWG5DLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsTUFBTSxFQUFFLE1BQU07b0JBQ2QsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLFFBQVEsRUFBRSxFQUFFO29CQUNaLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxPQUFPLEVBQUUsRUFFUjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NvbnRhaW5lclJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFF1ZXJ5TGlzdCwgUmVuZGVyZXIyLCBJbmplY3RvciwgVmFsdWVQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50QmFzZSwgSUNvbXBvbmVudEJhc2UsIGFwcGx5TWl4aW5zLCBDb21wb25lbnRNaXhpbnMsIFByb3BlcnR5Q29sbGVjdGlvbkluZm8sIHNldFZhbHVlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5pbXBvcnQgeyBQaXZvdEZpZWxkTGlzdCB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1waXZvdHZpZXcnO1xuXG5cblxuZXhwb3J0IGNvbnN0IGlucHV0czogc3RyaW5nW10gPSBbJ2FnZ3JlZ2F0ZVR5cGVzJywnYWxsb3dDYWxjdWxhdGVkRmllbGQnLCdhbGxvd0RlZmVyTGF5b3V0VXBkYXRlJywnY3NzQ2xhc3MnLCdjdXJyZW5jeUNvZGUnLCdkYXRhU291cmNlU2V0dGluZ3MnLCdlbmFibGVGaWVsZFNlYXJjaGluZycsJ2VuYWJsZUh0bWxTYW5pdGl6ZXInLCdlbmFibGVQZXJzaXN0ZW5jZScsJ2VuYWJsZVJ0bCcsJ2xvYWRPbkRlbWFuZEluTWVtYmVyRWRpdG9yJywnbG9jYWxlJywnbWF4Tm9kZUxpbWl0SW5NZW1iZXJFZGl0b3InLCdyZW5kZXJNb2RlJywnc2hvd1ZhbHVlc0J1dHRvbicsJ3NwaW5uZXJUZW1wbGF0ZScsJ3RhcmdldCddO1xuZXhwb3J0IGNvbnN0IG91dHB1dHM6IHN0cmluZ1tdID0gWydhY3Rpb25CZWdpbicsJ2FjdGlvbkNvbXBsZXRlJywnYWN0aW9uRmFpbHVyZScsJ2FmdGVyU2VydmljZUludm9rZScsJ2FnZ3JlZ2F0ZUNlbGxJbmZvJywnYWdncmVnYXRlTWVudU9wZW4nLCdiZWZvcmVTZXJ2aWNlSW52b2tlJywnY2FsY3VsYXRlZEZpZWxkQ3JlYXRlJywnY3JlYXRlZCcsJ2RhdGFCb3VuZCcsJ2Rlc3Ryb3llZCcsJ2VuZ2luZVBvcHVsYXRlZCcsJ2VuZ2luZVBvcHVsYXRpbmcnLCdmaWVsZERyYWdTdGFydCcsJ2ZpZWxkRHJvcCcsJ2ZpZWxkUmVtb3ZlJywnbG9hZCcsJ21lbWJlckVkaXRvck9wZW4nLCdtZW1iZXJGaWx0ZXJpbmcnLCdvbkZpZWxkRHJvcHBlZCcsJ29uSGVhZGVyc1NvcnQnXTtcbmV4cG9ydCBjb25zdCB0d29XYXlzOiBzdHJpbmdbXSA9IFtdO1xuXG4vKipcbiAqIGBlai1waXZvdGZpZWxkbGlzdGAgcmVwcmVzZW50cyB0aGUgQW5ndWxhciBQaXZvdEZpZWxkTGlzdCBDb21wb25lbnQuXG4gKiBgYGBodG1sXG4gKiA8ZWotcGl2b3RmaWVsZGxpc3Q+PC9lai1waXZvdGZpZWxkbGlzdD5cbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Vqcy1waXZvdGZpZWxkbGlzdCcsXG4gICAgaW5wdXRzOiBpbnB1dHMsXG4gICAgb3V0cHV0czogb3V0cHV0cyxcbiAgICB0ZW1wbGF0ZTogJycsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgcXVlcmllczoge1xuXG4gICAgfVxufSlcbkBDb21wb25lbnRNaXhpbnMoW0NvbXBvbmVudEJhc2VdKVxuZXhwb3J0IGNsYXNzIFBpdm90RmllbGRMaXN0Q29tcG9uZW50IGV4dGVuZHMgUGl2b3RGaWVsZExpc3QgaW1wbGVtZW50cyBJQ29tcG9uZW50QmFzZSB7XG4gICAgcHVibGljIGNvbnRleHQgOiBhbnk7XG4gICAgcHVibGljIHRhZ09iamVjdHM6IGFueTtcblx0YWN0aW9uQmVnaW46IGFueTtcblx0YWN0aW9uQ29tcGxldGU6IGFueTtcblx0YWN0aW9uRmFpbHVyZTogYW55O1xuXHRhZnRlclNlcnZpY2VJbnZva2U6IGFueTtcblx0YWdncmVnYXRlQ2VsbEluZm86IGFueTtcblx0YWdncmVnYXRlTWVudU9wZW46IGFueTtcblx0YmVmb3JlU2VydmljZUludm9rZTogYW55O1xuXHRjYWxjdWxhdGVkRmllbGRDcmVhdGU6IGFueTtcblx0Y3JlYXRlZDogYW55O1xuXHRkYXRhQm91bmQ6IGFueTtcblx0ZGVzdHJveWVkOiBhbnk7XG5cdGVuZ2luZVBvcHVsYXRlZDogYW55O1xuXHRlbmdpbmVQb3B1bGF0aW5nOiBhbnk7XG5cdGZpZWxkRHJhZ1N0YXJ0OiBhbnk7XG5cdGZpZWxkRHJvcDogYW55O1xuXHRmaWVsZFJlbW92ZTogYW55O1xuXHRsb2FkOiBhbnk7XG5cdG1lbWJlckVkaXRvck9wZW46IGFueTtcblx0bWVtYmVyRmlsdGVyaW5nOiBhbnk7XG5cdG9uRmllbGREcm9wcGVkOiBhbnk7XG5cdHB1YmxpYyBvbkhlYWRlcnNTb3J0OiBhbnk7XG5cblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ0VsZTogRWxlbWVudFJlZiwgcHJpdmF0ZSBzcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOlZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMubmdFbGUubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMgPSB0aGlzLmluamVjdGVkTW9kdWxlcyB8fCBbXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ1Bpdm90Vmlld0NhbGN1bGF0ZWRGaWVsZCcpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMob3V0cHV0cyk7XG4gICAgICAgIHRoaXMuYWRkVHdvV2F5LmNhbGwodGhpcywgdHdvV2F5cyk7XG4gICAgICAgIHNldFZhbHVlKCdjdXJyZW50SW5zdGFuY2UnLCB0aGlzLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICAgICAgICB0aGlzLmNvbnRleHQgID0gbmV3IENvbXBvbmVudEJhc2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5uZ09uSW5pdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbnRleHQubmdBZnRlclZpZXdJbml0KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb250ZXh0Lm5nT25EZXN0cm95KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNvbnRleHQubmdBZnRlckNvbnRlbnRDaGVja2VkKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3RlckV2ZW50czogKGV2ZW50TGlzdDogc3RyaW5nW10pID0+IHZvaWQ7XG4gICAgcHVibGljIGFkZFR3b1dheTogKHByb3BMaXN0OiBzdHJpbmdbXSkgPT4gdm9pZDtcbn1cblxuIl19
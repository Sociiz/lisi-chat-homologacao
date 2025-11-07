import { ElementRef, ViewContainerRef, Renderer2, Injector, QueryList } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { Splitter } from '@syncfusion/ej2-layouts';
import { PanesDirective } from './panesettings.directive';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * Represents the Angular Splitter Component
 * ```html
 * <ejs-splitter></ejs-splitter>
 * ```
 */
export declare class SplitterComponent extends Splitter implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    containerContext: any;
    tagObjects: any;
    beforeCollapse: any;
    beforeExpand: any;
    beforeSanitizeHtml: any;
    collapsed: any;
    created: any;
    expanded: any;
    resizeStart: any;
    resizeStop: any;
    resizing: any;
    childPaneSettings: QueryList<PanesDirective>;
    tags: string[];
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SplitterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SplitterComponent, "ejs-splitter", never, { "cssClass": "cssClass"; "enableHtmlSanitizer": "enableHtmlSanitizer"; "enablePersistence": "enablePersistence"; "enableReversePanes": "enableReversePanes"; "enableRtl": "enableRtl"; "enabled": "enabled"; "height": "height"; "locale": "locale"; "orientation": "orientation"; "paneSettings": "paneSettings"; "separatorSize": "separatorSize"; "width": "width"; }, { "beforeCollapse": "beforeCollapse"; "beforeExpand": "beforeExpand"; "beforeSanitizeHtml": "beforeSanitizeHtml"; "collapsed": "collapsed"; "created": "created"; "expanded": "expanded"; "resizeStart": "resizeStart"; "resizeStop": "resizeStop"; "resizing": "resizing"; }, ["childPaneSettings"], ["div"]>;
}

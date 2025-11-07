import { ElementRef, ViewContainerRef, Renderer2, Injector, QueryList } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { Timeline } from '@syncfusion/ej2-layouts';
import { ItemsDirective } from './items.directive';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * Represents the EJ2 Angular Timeline Component.
 * ```html
 * <div ejs-timeline [items]='timelineItems'></div>
 * ```
 */
export declare class TimelineComponent extends Timeline implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    containerContext: any;
    tagObjects: any;
    beforeItemRender: any;
    created: any;
    childItems: QueryList<ItemsDirective>;
    tags: string[];
    /**
     * Defines the template content for each timeline item. The template context will contain the item model.
     *
     * {% codeBlock src='timeline/template/index.md' %}{% endcodeBlock %}
     *
     * @default ''
     * @angulartype string | object
     * @reacttype string | function | JSX.Element
     * @vuetype string | function
     * @asptype string
     */
    template: any;
    content: any;
    oppositeContent: any;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimelineComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimelineComponent, "ejs-timeline", never, { "align": "align"; "cssClass": "cssClass"; "enablePersistence": "enablePersistence"; "enableRtl": "enableRtl"; "items": "items"; "locale": "locale"; "orientation": "orientation"; "reverse": "reverse"; "template": "template"; }, { "beforeItemRender": "beforeItemRender"; "created": "created"; }, ["template", "content", "oppositeContent", "childItems"], ["div"]>;
}

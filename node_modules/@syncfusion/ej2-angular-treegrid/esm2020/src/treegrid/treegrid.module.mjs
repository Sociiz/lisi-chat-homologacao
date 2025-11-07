import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackedColumnDirective, StackedColumnsDirective } from './stacked-column.directive';
import { ColumnDirective, ColumnsDirective } from './columns.directive';
import { AggregateColumnDirective, AggregateColumnsDirective } from './aggregate-columns.directive';
import { AggregateDirective, AggregatesDirective } from './aggregates.directive';
import { TreeGridComponent } from './treegrid.component';
import * as i0 from "@angular/core";
/**
 * NgModule definition for the TreeGrid component.
 */
export class TreeGridModule {
}
TreeGridModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeGridModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TreeGridModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeGridModule, declarations: [TreeGridComponent,
        StackedColumnDirective,
        StackedColumnsDirective,
        ColumnDirective,
        ColumnsDirective,
        AggregateColumnDirective,
        AggregateColumnsDirective,
        AggregateDirective,
        AggregatesDirective], imports: [CommonModule], exports: [TreeGridComponent,
        StackedColumnDirective,
        StackedColumnsDirective,
        ColumnDirective,
        ColumnsDirective,
        AggregateColumnDirective,
        AggregateColumnsDirective,
        AggregateDirective,
        AggregatesDirective] });
TreeGridModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeGridModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeGridModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        TreeGridComponent,
                        StackedColumnDirective,
                        StackedColumnsDirective,
                        ColumnDirective,
                        ColumnsDirective,
                        AggregateColumnDirective,
                        AggregateColumnsDirective,
                        AggregateDirective,
                        AggregatesDirective
                    ],
                    exports: [
                        TreeGridComponent,
                        StackedColumnDirective,
                        StackedColumnsDirective,
                        ColumnDirective,
                        ColumnsDirective,
                        AggregateColumnDirective,
                        AggregateColumnsDirective,
                        AggregateDirective,
                        AggregatesDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZWdyaWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3RyZWVncmlkL3RyZWVncmlkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RixPQUFPLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDcEcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDakYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBRXpEOztHQUVHO0FBMEJILE1BQU0sT0FBTyxjQUFjOzsyR0FBZCxjQUFjOzRHQUFkLGNBQWMsaUJBdEJuQixpQkFBaUI7UUFDakIsc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2QixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLHdCQUF3QjtRQUN4Qix5QkFBeUI7UUFDekIsa0JBQWtCO1FBQ2xCLG1CQUFtQixhQVZiLFlBQVksYUFhbEIsaUJBQWlCO1FBQ2pCLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQix3QkFBd0I7UUFDeEIseUJBQXlCO1FBQ3pCLGtCQUFrQjtRQUNsQixtQkFBbUI7NEdBR2QsY0FBYyxZQXhCZCxDQUFDLFlBQVksQ0FBQzsyRkF3QmQsY0FBYztrQkF6QjFCLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixZQUFZLEVBQUU7d0JBQ1YsaUJBQWlCO3dCQUNqQixzQkFBc0I7d0JBQ3RCLHVCQUF1Qjt3QkFDdkIsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLHdCQUF3Qjt3QkFDeEIseUJBQXlCO3dCQUN6QixrQkFBa0I7d0JBQ2xCLG1CQUFtQjtxQkFDdEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLGlCQUFpQjt3QkFDakIsc0JBQXNCO3dCQUN0Qix1QkFBdUI7d0JBQ3ZCLGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUNoQix3QkFBd0I7d0JBQ3hCLHlCQUF5Qjt3QkFDekIsa0JBQWtCO3dCQUNsQixtQkFBbUI7cUJBQ3RCO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTdGFja2VkQ29sdW1uRGlyZWN0aXZlLCBTdGFja2VkQ29sdW1uc0RpcmVjdGl2ZSB9IGZyb20gJy4vc3RhY2tlZC1jb2x1bW4uZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbHVtbkRpcmVjdGl2ZSwgQ29sdW1uc0RpcmVjdGl2ZSB9IGZyb20gJy4vY29sdW1ucy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQWdncmVnYXRlQ29sdW1uRGlyZWN0aXZlLCBBZ2dyZWdhdGVDb2x1bW5zRGlyZWN0aXZlIH0gZnJvbSAnLi9hZ2dyZWdhdGUtY29sdW1ucy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQWdncmVnYXRlRGlyZWN0aXZlLCBBZ2dyZWdhdGVzRGlyZWN0aXZlIH0gZnJvbSAnLi9hZ2dyZWdhdGVzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUcmVlR3JpZENvbXBvbmVudCB9IGZyb20gJy4vdHJlZWdyaWQuY29tcG9uZW50JztcblxuLyoqXG4gKiBOZ01vZHVsZSBkZWZpbml0aW9uIGZvciB0aGUgVHJlZUdyaWQgY29tcG9uZW50LlxuICovXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBUcmVlR3JpZENvbXBvbmVudCxcbiAgICAgICAgU3RhY2tlZENvbHVtbkRpcmVjdGl2ZSxcbiAgICAgICAgU3RhY2tlZENvbHVtbnNEaXJlY3RpdmUsXG4gICAgICAgIENvbHVtbkRpcmVjdGl2ZSxcbiAgICAgICAgQ29sdW1uc0RpcmVjdGl2ZSxcbiAgICAgICAgQWdncmVnYXRlQ29sdW1uRGlyZWN0aXZlLFxuICAgICAgICBBZ2dyZWdhdGVDb2x1bW5zRGlyZWN0aXZlLFxuICAgICAgICBBZ2dyZWdhdGVEaXJlY3RpdmUsXG4gICAgICAgIEFnZ3JlZ2F0ZXNEaXJlY3RpdmVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgVHJlZUdyaWRDb21wb25lbnQsXG4gICAgICAgIFN0YWNrZWRDb2x1bW5EaXJlY3RpdmUsXG4gICAgICAgIFN0YWNrZWRDb2x1bW5zRGlyZWN0aXZlLFxuICAgICAgICBDb2x1bW5EaXJlY3RpdmUsXG4gICAgICAgIENvbHVtbnNEaXJlY3RpdmUsXG4gICAgICAgIEFnZ3JlZ2F0ZUNvbHVtbkRpcmVjdGl2ZSxcbiAgICAgICAgQWdncmVnYXRlQ29sdW1uc0RpcmVjdGl2ZSxcbiAgICAgICAgQWdncmVnYXRlRGlyZWN0aXZlLFxuICAgICAgICBBZ2dyZWdhdGVzRGlyZWN0aXZlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBUcmVlR3JpZE1vZHVsZSB7IH0iXX0=
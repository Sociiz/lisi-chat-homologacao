import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart3DSeriesDirective, Chart3DSeriesCollectionDirective } from './series.directive';
import { Chart3DAxisDirective, Chart3DAxesDirective } from './axes.directive';
import { Chart3DRowDirective, Chart3DRowsDirective } from './rows.directive';
import { Chart3DColumnDirective, Chart3DColumnsDirective } from './columns.directive';
import { Chart3DSelectedDataIndexDirective, Chart3DSelectedDataIndexesDirective } from './selecteddataindexes.directive';
import { Chart3DComponent } from './chart3d.component';
import * as i0 from "@angular/core";
/**
 * NgModule definition for the Chart3D component.
 */
export class Chart3DModule {
}
Chart3DModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: Chart3DModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
Chart3DModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: Chart3DModule, declarations: [Chart3DComponent,
        Chart3DSeriesDirective,
        Chart3DSeriesCollectionDirective,
        Chart3DAxisDirective,
        Chart3DAxesDirective,
        Chart3DRowDirective,
        Chart3DRowsDirective,
        Chart3DColumnDirective,
        Chart3DColumnsDirective,
        Chart3DSelectedDataIndexDirective,
        Chart3DSelectedDataIndexesDirective], imports: [CommonModule], exports: [Chart3DComponent,
        Chart3DSeriesDirective,
        Chart3DSeriesCollectionDirective,
        Chart3DAxisDirective,
        Chart3DAxesDirective,
        Chart3DRowDirective,
        Chart3DRowsDirective,
        Chart3DColumnDirective,
        Chart3DColumnsDirective,
        Chart3DSelectedDataIndexDirective,
        Chart3DSelectedDataIndexesDirective] });
Chart3DModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: Chart3DModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: Chart3DModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        Chart3DComponent,
                        Chart3DSeriesDirective,
                        Chart3DSeriesCollectionDirective,
                        Chart3DAxisDirective,
                        Chart3DAxesDirective,
                        Chart3DRowDirective,
                        Chart3DRowsDirective,
                        Chart3DColumnDirective,
                        Chart3DColumnsDirective,
                        Chart3DSelectedDataIndexDirective,
                        Chart3DSelectedDataIndexesDirective
                    ],
                    exports: [
                        Chart3DComponent,
                        Chart3DSeriesDirective,
                        Chart3DSeriesCollectionDirective,
                        Chart3DAxisDirective,
                        Chart3DAxesDirective,
                        Chart3DRowDirective,
                        Chart3DRowsDirective,
                        Chart3DColumnDirective,
                        Chart3DColumnsDirective,
                        Chart3DSelectedDataIndexDirective,
                        Chart3DSelectedDataIndexesDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQzZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2hhcnQzZC9jaGFydDNkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM5RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM3RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN6SCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFdkQ7O0dBRUc7QUE4QkgsTUFBTSxPQUFPLGFBQWE7OzBHQUFiLGFBQWE7MkdBQWIsYUFBYSxpQkExQmxCLGdCQUFnQjtRQUNoQixzQkFBc0I7UUFDdEIsZ0NBQWdDO1FBQ2hDLG9CQUFvQjtRQUNwQixvQkFBb0I7UUFDcEIsbUJBQW1CO1FBQ25CLG9CQUFvQjtRQUNwQixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLGlDQUFpQztRQUNqQyxtQ0FBbUMsYUFaN0IsWUFBWSxhQWVsQixnQkFBZ0I7UUFDaEIsc0JBQXNCO1FBQ3RCLGdDQUFnQztRQUNoQyxvQkFBb0I7UUFDcEIsb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQixvQkFBb0I7UUFDcEIsc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2QixpQ0FBaUM7UUFDakMsbUNBQW1DOzJHQUc5QixhQUFhLFlBNUJiLENBQUMsWUFBWSxDQUFDOzJGQTRCZCxhQUFhO2tCQTdCekIsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFlBQVksRUFBRTt3QkFDVixnQkFBZ0I7d0JBQ2hCLHNCQUFzQjt3QkFDdEIsZ0NBQWdDO3dCQUNoQyxvQkFBb0I7d0JBQ3BCLG9CQUFvQjt3QkFDcEIsbUJBQW1CO3dCQUNuQixvQkFBb0I7d0JBQ3BCLHNCQUFzQjt3QkFDdEIsdUJBQXVCO3dCQUN2QixpQ0FBaUM7d0JBQ2pDLG1DQUFtQztxQkFDdEM7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLGdCQUFnQjt3QkFDaEIsc0JBQXNCO3dCQUN0QixnQ0FBZ0M7d0JBQ2hDLG9CQUFvQjt3QkFDcEIsb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLG9CQUFvQjt3QkFDcEIsc0JBQXNCO3dCQUN0Qix1QkFBdUI7d0JBQ3ZCLGlDQUFpQzt3QkFDakMsbUNBQW1DO3FCQUN0QztpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ2hhcnQzRFNlcmllc0RpcmVjdGl2ZSwgQ2hhcnQzRFNlcmllc0NvbGxlY3Rpb25EaXJlY3RpdmUgfSBmcm9tICcuL3Nlcmllcy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2hhcnQzREF4aXNEaXJlY3RpdmUsIENoYXJ0M0RBeGVzRGlyZWN0aXZlIH0gZnJvbSAnLi9heGVzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDaGFydDNEUm93RGlyZWN0aXZlLCBDaGFydDNEUm93c0RpcmVjdGl2ZSB9IGZyb20gJy4vcm93cy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2hhcnQzRENvbHVtbkRpcmVjdGl2ZSwgQ2hhcnQzRENvbHVtbnNEaXJlY3RpdmUgfSBmcm9tICcuL2NvbHVtbnMuZGlyZWN0aXZlJztcbmltcG9ydCB7IENoYXJ0M0RTZWxlY3RlZERhdGFJbmRleERpcmVjdGl2ZSwgQ2hhcnQzRFNlbGVjdGVkRGF0YUluZGV4ZXNEaXJlY3RpdmUgfSBmcm9tICcuL3NlbGVjdGVkZGF0YWluZGV4ZXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IENoYXJ0M0RDb21wb25lbnQgfSBmcm9tICcuL2NoYXJ0M2QuY29tcG9uZW50JztcblxuLyoqXG4gKiBOZ01vZHVsZSBkZWZpbml0aW9uIGZvciB0aGUgQ2hhcnQzRCBjb21wb25lbnQuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIENoYXJ0M0RDb21wb25lbnQsXG4gICAgICAgIENoYXJ0M0RTZXJpZXNEaXJlY3RpdmUsXG4gICAgICAgIENoYXJ0M0RTZXJpZXNDb2xsZWN0aW9uRGlyZWN0aXZlLFxuICAgICAgICBDaGFydDNEQXhpc0RpcmVjdGl2ZSxcbiAgICAgICAgQ2hhcnQzREF4ZXNEaXJlY3RpdmUsXG4gICAgICAgIENoYXJ0M0RSb3dEaXJlY3RpdmUsXG4gICAgICAgIENoYXJ0M0RSb3dzRGlyZWN0aXZlLFxuICAgICAgICBDaGFydDNEQ29sdW1uRGlyZWN0aXZlLFxuICAgICAgICBDaGFydDNEQ29sdW1uc0RpcmVjdGl2ZSxcbiAgICAgICAgQ2hhcnQzRFNlbGVjdGVkRGF0YUluZGV4RGlyZWN0aXZlLFxuICAgICAgICBDaGFydDNEU2VsZWN0ZWREYXRhSW5kZXhlc0RpcmVjdGl2ZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBDaGFydDNEQ29tcG9uZW50LFxuICAgICAgICBDaGFydDNEU2VyaWVzRGlyZWN0aXZlLFxuICAgICAgICBDaGFydDNEU2VyaWVzQ29sbGVjdGlvbkRpcmVjdGl2ZSxcbiAgICAgICAgQ2hhcnQzREF4aXNEaXJlY3RpdmUsXG4gICAgICAgIENoYXJ0M0RBeGVzRGlyZWN0aXZlLFxuICAgICAgICBDaGFydDNEUm93RGlyZWN0aXZlLFxuICAgICAgICBDaGFydDNEUm93c0RpcmVjdGl2ZSxcbiAgICAgICAgQ2hhcnQzRENvbHVtbkRpcmVjdGl2ZSxcbiAgICAgICAgQ2hhcnQzRENvbHVtbnNEaXJlY3RpdmUsXG4gICAgICAgIENoYXJ0M0RTZWxlY3RlZERhdGFJbmRleERpcmVjdGl2ZSxcbiAgICAgICAgQ2hhcnQzRFNlbGVjdGVkRGF0YUluZGV4ZXNEaXJlY3RpdmVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0M0RNb2R1bGUgeyB9Il19
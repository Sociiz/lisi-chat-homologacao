import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart3DModule } from './chart3d.module';
import { ColumnSeries3D, StackingColumnSeries3D, BarSeries3D, StackingBarSeries3D, Category3D, DateTime3D, DateTimeCategory3D, Logarithmic3D, Tooltip3D, Legend3D, DataLabel3D, Selection3D, Export3D, Highlight3D } from '@syncfusion/ej2-charts';
import * as i0 from "@angular/core";
export const ColumnSeries3DService = { provide: 'ChartsColumnSeries3D', useValue: ColumnSeries3D };
export const StackingColumnSeries3DService = { provide: 'ChartsStackingColumnSeries3D', useValue: StackingColumnSeries3D };
export const BarSeries3DService = { provide: 'ChartsBarSeries3D', useValue: BarSeries3D };
export const StackingBarSeries3DService = { provide: 'ChartsStackingBarSeries3D', useValue: StackingBarSeries3D };
export const Category3DService = { provide: 'ChartsCategory3D', useValue: Category3D };
export const DateTime3DService = { provide: 'ChartsDateTime3D', useValue: DateTime3D };
export const DateTimeCategory3DService = { provide: 'ChartsDateTimeCategory3D', useValue: DateTimeCategory3D };
export const Logarithmic3DService = { provide: 'ChartsLogarithmic3D', useValue: Logarithmic3D };
export const Tooltip3DService = { provide: 'ChartsTooltip3D', useValue: Tooltip3D };
export const Legend3DService = { provide: 'ChartsLegend3D', useValue: Legend3D };
export const DataLabel3DService = { provide: 'ChartsDataLabel3D', useValue: DataLabel3D };
export const Selection3DService = { provide: 'ChartsSelection3D', useValue: Selection3D };
export const Export3DService = { provide: 'ChartsExport3D', useValue: Export3D };
export const Highlight3DService = { provide: 'ChartsHighlight3D', useValue: Highlight3D };
/**
 * NgModule definition for the Chart3D component with providers.
 */
export class Chart3DAllModule {
}
Chart3DAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: Chart3DAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
Chart3DAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: Chart3DAllModule, imports: [CommonModule, Chart3DModule], exports: [Chart3DModule] });
Chart3DAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: Chart3DAllModule, providers: [
        ColumnSeries3DService,
        StackingColumnSeries3DService,
        BarSeries3DService,
        StackingBarSeries3DService,
        Category3DService,
        DateTime3DService,
        DateTimeCategory3DService,
        Logarithmic3DService,
        Tooltip3DService,
        Legend3DService,
        DataLabel3DService,
        Selection3DService,
        Export3DService,
        Highlight3DService
    ], imports: [[CommonModule, Chart3DModule], Chart3DModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: Chart3DAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, Chart3DModule],
                    exports: [
                        Chart3DModule
                    ],
                    providers: [
                        ColumnSeries3DService,
                        StackingColumnSeries3DService,
                        BarSeries3DService,
                        StackingBarSeries3DService,
                        Category3DService,
                        DateTime3DService,
                        DateTimeCategory3DService,
                        Logarithmic3DService,
                        Tooltip3DService,
                        Legend3DService,
                        DataLabel3DService,
                        Selection3DService,
                        Export3DService,
                        Highlight3DService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQzZC1hbGwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NoYXJ0M2QvY2hhcnQzZC1hbGwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU8vQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFDLGNBQWMsRUFBRSxzQkFBc0IsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxrQkFBa0IsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQTs7QUFHaFAsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUMsQ0FBQztBQUNqSCxNQUFNLENBQUMsTUFBTSw2QkFBNkIsR0FBa0IsRUFBRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFDLENBQUM7QUFDekksTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUMsQ0FBQztBQUN4RyxNQUFNLENBQUMsTUFBTSwwQkFBMEIsR0FBa0IsRUFBRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFDLENBQUM7QUFDaEksTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUMsQ0FBQztBQUNyRyxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBa0IsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBQyxDQUFDO0FBQ3JHLE1BQU0sQ0FBQyxNQUFNLHlCQUF5QixHQUFrQixFQUFFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQztBQUM3SCxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBa0IsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBQyxDQUFDO0FBQzlHLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFrQixFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFDLENBQUM7QUFDbEcsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFrQixFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDLENBQUM7QUFDL0YsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUMsQ0FBQztBQUN4RyxNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FBa0IsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBQyxDQUFDO0FBQ3hHLE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBa0IsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxDQUFDO0FBQy9GLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFrQixFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFDLENBQUM7QUFFeEc7O0dBRUc7QUF1QkgsTUFBTSxPQUFPLGdCQUFnQjs7NkdBQWhCLGdCQUFnQjs4R0FBaEIsZ0JBQWdCLFlBckJmLFlBQVksRUFBRSxhQUFhLGFBRWpDLGFBQWE7OEdBbUJSLGdCQUFnQixhQWpCZjtRQUNOLHFCQUFxQjtRQUNyQiw2QkFBNkI7UUFDN0Isa0JBQWtCO1FBQ2xCLDBCQUEwQjtRQUMxQixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLHlCQUF5QjtRQUN6QixvQkFBb0I7UUFDcEIsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixrQkFBa0I7S0FDckIsWUFuQlEsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDLEVBRWxDLGFBQWE7MkZBbUJSLGdCQUFnQjtrQkF0QjVCLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQztvQkFDdEMsT0FBTyxFQUFFO3dCQUNMLGFBQWE7cUJBQ2hCO29CQUNELFNBQVMsRUFBQzt3QkFDTixxQkFBcUI7d0JBQ3JCLDZCQUE2Qjt3QkFDN0Isa0JBQWtCO3dCQUNsQiwwQkFBMEI7d0JBQzFCLGlCQUFpQjt3QkFDakIsaUJBQWlCO3dCQUNqQix5QkFBeUI7d0JBQ3pCLG9CQUFvQjt3QkFDcEIsZ0JBQWdCO3dCQUNoQixlQUFlO3dCQUNmLGtCQUFrQjt3QkFDbEIsa0JBQWtCO3dCQUNsQixlQUFlO3dCQUNmLGtCQUFrQjtxQkFDckI7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgVmFsdWVQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENoYXJ0M0RTZXJpZXNEaXJlY3RpdmUsIENoYXJ0M0RTZXJpZXNDb2xsZWN0aW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9zZXJpZXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IENoYXJ0M0RBeGlzRGlyZWN0aXZlLCBDaGFydDNEQXhlc0RpcmVjdGl2ZSB9IGZyb20gJy4vYXhlcy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2hhcnQzRFJvd0RpcmVjdGl2ZSwgQ2hhcnQzRFJvd3NEaXJlY3RpdmUgfSBmcm9tICcuL3Jvd3MuZGlyZWN0aXZlJztcbmltcG9ydCB7IENoYXJ0M0RDb2x1bW5EaXJlY3RpdmUsIENoYXJ0M0RDb2x1bW5zRGlyZWN0aXZlIH0gZnJvbSAnLi9jb2x1bW5zLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDaGFydDNEU2VsZWN0ZWREYXRhSW5kZXhEaXJlY3RpdmUsIENoYXJ0M0RTZWxlY3RlZERhdGFJbmRleGVzRGlyZWN0aXZlIH0gZnJvbSAnLi9zZWxlY3RlZGRhdGFpbmRleGVzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDaGFydDNEQ29tcG9uZW50IH0gZnJvbSAnLi9jaGFydDNkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGFydDNETW9kdWxlIH0gZnJvbSAnLi9jaGFydDNkLm1vZHVsZSc7XG5pbXBvcnQge0NvbHVtblNlcmllczNELCBTdGFja2luZ0NvbHVtblNlcmllczNELCBCYXJTZXJpZXMzRCwgU3RhY2tpbmdCYXJTZXJpZXMzRCwgQ2F0ZWdvcnkzRCwgRGF0ZVRpbWUzRCwgRGF0ZVRpbWVDYXRlZ29yeTNELCBMb2dhcml0aG1pYzNELCBUb29sdGlwM0QsIExlZ2VuZDNELCBEYXRhTGFiZWwzRCwgU2VsZWN0aW9uM0QsIEV4cG9ydDNELCBIaWdobGlnaHQzRH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWNoYXJ0cydcblxuXG5leHBvcnQgY29uc3QgQ29sdW1uU2VyaWVzM0RTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzQ29sdW1uU2VyaWVzM0QnLCB1c2VWYWx1ZTogQ29sdW1uU2VyaWVzM0R9O1xuZXhwb3J0IGNvbnN0IFN0YWNraW5nQ29sdW1uU2VyaWVzM0RTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzU3RhY2tpbmdDb2x1bW5TZXJpZXMzRCcsIHVzZVZhbHVlOiBTdGFja2luZ0NvbHVtblNlcmllczNEfTtcbmV4cG9ydCBjb25zdCBCYXJTZXJpZXMzRFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNCYXJTZXJpZXMzRCcsIHVzZVZhbHVlOiBCYXJTZXJpZXMzRH07XG5leHBvcnQgY29uc3QgU3RhY2tpbmdCYXJTZXJpZXMzRFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNTdGFja2luZ0JhclNlcmllczNEJywgdXNlVmFsdWU6IFN0YWNraW5nQmFyU2VyaWVzM0R9O1xuZXhwb3J0IGNvbnN0IENhdGVnb3J5M0RTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzQ2F0ZWdvcnkzRCcsIHVzZVZhbHVlOiBDYXRlZ29yeTNEfTtcbmV4cG9ydCBjb25zdCBEYXRlVGltZTNEU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c0RhdGVUaW1lM0QnLCB1c2VWYWx1ZTogRGF0ZVRpbWUzRH07XG5leHBvcnQgY29uc3QgRGF0ZVRpbWVDYXRlZ29yeTNEU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c0RhdGVUaW1lQ2F0ZWdvcnkzRCcsIHVzZVZhbHVlOiBEYXRlVGltZUNhdGVnb3J5M0R9O1xuZXhwb3J0IGNvbnN0IExvZ2FyaXRobWljM0RTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzTG9nYXJpdGhtaWMzRCcsIHVzZVZhbHVlOiBMb2dhcml0aG1pYzNEfTtcbmV4cG9ydCBjb25zdCBUb29sdGlwM0RTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzVG9vbHRpcDNEJywgdXNlVmFsdWU6IFRvb2x0aXAzRH07XG5leHBvcnQgY29uc3QgTGVnZW5kM0RTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzTGVnZW5kM0QnLCB1c2VWYWx1ZTogTGVnZW5kM0R9O1xuZXhwb3J0IGNvbnN0IERhdGFMYWJlbDNEU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c0RhdGFMYWJlbDNEJywgdXNlVmFsdWU6IERhdGFMYWJlbDNEfTtcbmV4cG9ydCBjb25zdCBTZWxlY3Rpb24zRFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNTZWxlY3Rpb24zRCcsIHVzZVZhbHVlOiBTZWxlY3Rpb24zRH07XG5leHBvcnQgY29uc3QgRXhwb3J0M0RTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzRXhwb3J0M0QnLCB1c2VWYWx1ZTogRXhwb3J0M0R9O1xuZXhwb3J0IGNvbnN0IEhpZ2hsaWdodDNEU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c0hpZ2hsaWdodDNEJywgdXNlVmFsdWU6IEhpZ2hsaWdodDNEfTtcblxuLyoqXG4gKiBOZ01vZHVsZSBkZWZpbml0aW9uIGZvciB0aGUgQ2hhcnQzRCBjb21wb25lbnQgd2l0aCBwcm92aWRlcnMuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQ2hhcnQzRE1vZHVsZV0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBDaGFydDNETW9kdWxlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6W1xuICAgICAgICBDb2x1bW5TZXJpZXMzRFNlcnZpY2UsXG4gICAgICAgIFN0YWNraW5nQ29sdW1uU2VyaWVzM0RTZXJ2aWNlLFxuICAgICAgICBCYXJTZXJpZXMzRFNlcnZpY2UsXG4gICAgICAgIFN0YWNraW5nQmFyU2VyaWVzM0RTZXJ2aWNlLFxuICAgICAgICBDYXRlZ29yeTNEU2VydmljZSxcbiAgICAgICAgRGF0ZVRpbWUzRFNlcnZpY2UsXG4gICAgICAgIERhdGVUaW1lQ2F0ZWdvcnkzRFNlcnZpY2UsXG4gICAgICAgIExvZ2FyaXRobWljM0RTZXJ2aWNlLFxuICAgICAgICBUb29sdGlwM0RTZXJ2aWNlLFxuICAgICAgICBMZWdlbmQzRFNlcnZpY2UsXG4gICAgICAgIERhdGFMYWJlbDNEU2VydmljZSxcbiAgICAgICAgU2VsZWN0aW9uM0RTZXJ2aWNlLFxuICAgICAgICBFeHBvcnQzRFNlcnZpY2UsXG4gICAgICAgIEhpZ2hsaWdodDNEU2VydmljZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnQzREFsbE1vZHVsZSB7IH0iXX0=
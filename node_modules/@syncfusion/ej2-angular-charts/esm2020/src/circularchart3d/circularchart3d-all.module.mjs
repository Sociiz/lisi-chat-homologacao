import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircularChart3DModule } from './circularchart3d.module';
import { PieSeries3D, CircularChartTooltip3D, CircularChartLegend3D, CircularChartSelection3D, CircularChartDataLabel3D, CircularChartHighlight3D, CircularChartExport3D } from '@syncfusion/ej2-charts';
import * as i0 from "@angular/core";
export const PieSeries3DService = { provide: 'ChartsPieSeries3D', useValue: PieSeries3D };
export const CircularChartTooltip3DService = { provide: 'ChartsCircularChartTooltip3D', useValue: CircularChartTooltip3D };
export const CircularChartLegend3DService = { provide: 'ChartsCircularChartLegend3D', useValue: CircularChartLegend3D };
export const CircularChartSelection3DService = { provide: 'ChartsCircularChartSelection3D', useValue: CircularChartSelection3D };
export const CircularChartDataLabel3DService = { provide: 'ChartsCircularChartDataLabel3D', useValue: CircularChartDataLabel3D };
export const CircularChartHighlight3DService = { provide: 'ChartsCircularChartHighlight3D', useValue: CircularChartHighlight3D };
export const CircularChartExport3DService = { provide: 'ChartsCircularChartExport3D', useValue: CircularChartExport3D };
/**
 * NgModule definition for the CircularChart3D component with providers.
 */
export class CircularChart3DAllModule {
}
CircularChart3DAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CircularChart3DAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CircularChart3DAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CircularChart3DAllModule, imports: [CommonModule, CircularChart3DModule], exports: [CircularChart3DModule] });
CircularChart3DAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CircularChart3DAllModule, providers: [
        PieSeries3DService,
        CircularChartTooltip3DService,
        CircularChartLegend3DService,
        CircularChartSelection3DService,
        CircularChartDataLabel3DService,
        CircularChartHighlight3DService,
        CircularChartExport3DService
    ], imports: [[CommonModule, CircularChart3DModule], CircularChart3DModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CircularChart3DAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, CircularChart3DModule],
                    exports: [
                        CircularChart3DModule
                    ],
                    providers: [
                        PieSeries3DService,
                        CircularChartTooltip3DService,
                        CircularChartLegend3DService,
                        CircularChartSelection3DService,
                        CircularChartDataLabel3DService,
                        CircularChartHighlight3DService,
                        CircularChartExport3DService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY3VsYXJjaGFydDNkLWFsbC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2lyY3VsYXJjaGFydDNkL2NpcmN1bGFyY2hhcnQzZC1hbGwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUkvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNqRSxPQUFPLEVBQUMsV0FBVyxFQUFFLHNCQUFzQixFQUFFLHFCQUFxQixFQUFFLHdCQUF3QixFQUFFLHdCQUF3QixFQUFFLHdCQUF3QixFQUFFLHFCQUFxQixFQUFDLE1BQU0sd0JBQXdCLENBQUE7O0FBR3RNLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFrQixFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFDLENBQUM7QUFDeEcsTUFBTSxDQUFDLE1BQU0sNkJBQTZCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBQyxDQUFDO0FBQ3pJLE1BQU0sQ0FBQyxNQUFNLDRCQUE0QixHQUFrQixFQUFFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxRQUFRLEVBQUUscUJBQXFCLEVBQUMsQ0FBQztBQUN0SSxNQUFNLENBQUMsTUFBTSwrQkFBK0IsR0FBa0IsRUFBRSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsUUFBUSxFQUFFLHdCQUF3QixFQUFDLENBQUM7QUFDL0ksTUFBTSxDQUFDLE1BQU0sK0JBQStCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLFFBQVEsRUFBRSx3QkFBd0IsRUFBQyxDQUFDO0FBQy9JLE1BQU0sQ0FBQyxNQUFNLCtCQUErQixHQUFrQixFQUFFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxRQUFRLEVBQUUsd0JBQXdCLEVBQUMsQ0FBQztBQUMvSSxNQUFNLENBQUMsTUFBTSw0QkFBNEIsR0FBa0IsRUFBRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFDLENBQUM7QUFFdEk7O0dBRUc7QUFnQkgsTUFBTSxPQUFPLHdCQUF3Qjs7cUhBQXhCLHdCQUF3QjtzSEFBeEIsd0JBQXdCLFlBZHZCLFlBQVksRUFBRSxxQkFBcUIsYUFFekMscUJBQXFCO3NIQVloQix3QkFBd0IsYUFWdkI7UUFDTixrQkFBa0I7UUFDbEIsNkJBQTZCO1FBQzdCLDRCQUE0QjtRQUM1QiwrQkFBK0I7UUFDL0IsK0JBQStCO1FBQy9CLCtCQUErQjtRQUMvQiw0QkFBNEI7S0FDL0IsWUFaUSxDQUFDLFlBQVksRUFBRSxxQkFBcUIsQ0FBQyxFQUUxQyxxQkFBcUI7MkZBWWhCLHdCQUF3QjtrQkFmcEMsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUscUJBQXFCLENBQUM7b0JBQzlDLE9BQU8sRUFBRTt3QkFDTCxxQkFBcUI7cUJBQ3hCO29CQUNELFNBQVMsRUFBQzt3QkFDTixrQkFBa0I7d0JBQ2xCLDZCQUE2Qjt3QkFDN0IsNEJBQTRCO3dCQUM1QiwrQkFBK0I7d0JBQy9CLCtCQUErQjt3QkFDL0IsK0JBQStCO3dCQUMvQiw0QkFBNEI7cUJBQy9CO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFZhbHVlUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDaXJjdWxhckNoYXJ0M0RTZXJpZXNEaXJlY3RpdmUsIENpcmN1bGFyQ2hhcnQzRFNlcmllc0NvbGxlY3Rpb25EaXJlY3RpdmUgfSBmcm9tICcuL3Nlcmllcy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2lyY3VsYXJDaGFydDNEU2VsZWN0ZWREYXRhSW5kZXhEaXJlY3RpdmUsIENpcmN1bGFyQ2hhcnQzRFNlbGVjdGVkRGF0YUluZGV4ZXNEaXJlY3RpdmUgfSBmcm9tICcuL3NlbGVjdGVkZGF0YWluZGV4ZXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IENpcmN1bGFyQ2hhcnQzRENvbXBvbmVudCB9IGZyb20gJy4vY2lyY3VsYXJjaGFydDNkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaXJjdWxhckNoYXJ0M0RNb2R1bGUgfSBmcm9tICcuL2NpcmN1bGFyY2hhcnQzZC5tb2R1bGUnO1xuaW1wb3J0IHtQaWVTZXJpZXMzRCwgQ2lyY3VsYXJDaGFydFRvb2x0aXAzRCwgQ2lyY3VsYXJDaGFydExlZ2VuZDNELCBDaXJjdWxhckNoYXJ0U2VsZWN0aW9uM0QsIENpcmN1bGFyQ2hhcnREYXRhTGFiZWwzRCwgQ2lyY3VsYXJDaGFydEhpZ2hsaWdodDNELCBDaXJjdWxhckNoYXJ0RXhwb3J0M0R9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1jaGFydHMnXG5cblxuZXhwb3J0IGNvbnN0IFBpZVNlcmllczNEU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c1BpZVNlcmllczNEJywgdXNlVmFsdWU6IFBpZVNlcmllczNEfTtcbmV4cG9ydCBjb25zdCBDaXJjdWxhckNoYXJ0VG9vbHRpcDNEU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c0NpcmN1bGFyQ2hhcnRUb29sdGlwM0QnLCB1c2VWYWx1ZTogQ2lyY3VsYXJDaGFydFRvb2x0aXAzRH07XG5leHBvcnQgY29uc3QgQ2lyY3VsYXJDaGFydExlZ2VuZDNEU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c0NpcmN1bGFyQ2hhcnRMZWdlbmQzRCcsIHVzZVZhbHVlOiBDaXJjdWxhckNoYXJ0TGVnZW5kM0R9O1xuZXhwb3J0IGNvbnN0IENpcmN1bGFyQ2hhcnRTZWxlY3Rpb24zRFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNDaXJjdWxhckNoYXJ0U2VsZWN0aW9uM0QnLCB1c2VWYWx1ZTogQ2lyY3VsYXJDaGFydFNlbGVjdGlvbjNEfTtcbmV4cG9ydCBjb25zdCBDaXJjdWxhckNoYXJ0RGF0YUxhYmVsM0RTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzQ2lyY3VsYXJDaGFydERhdGFMYWJlbDNEJywgdXNlVmFsdWU6IENpcmN1bGFyQ2hhcnREYXRhTGFiZWwzRH07XG5leHBvcnQgY29uc3QgQ2lyY3VsYXJDaGFydEhpZ2hsaWdodDNEU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c0NpcmN1bGFyQ2hhcnRIaWdobGlnaHQzRCcsIHVzZVZhbHVlOiBDaXJjdWxhckNoYXJ0SGlnaGxpZ2h0M0R9O1xuZXhwb3J0IGNvbnN0IENpcmN1bGFyQ2hhcnRFeHBvcnQzRFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNDaXJjdWxhckNoYXJ0RXhwb3J0M0QnLCB1c2VWYWx1ZTogQ2lyY3VsYXJDaGFydEV4cG9ydDNEfTtcblxuLyoqXG4gKiBOZ01vZHVsZSBkZWZpbml0aW9uIGZvciB0aGUgQ2lyY3VsYXJDaGFydDNEIGNvbXBvbmVudCB3aXRoIHByb3ZpZGVycy5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBDaXJjdWxhckNoYXJ0M0RNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgQ2lyY3VsYXJDaGFydDNETW9kdWxlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6W1xuICAgICAgICBQaWVTZXJpZXMzRFNlcnZpY2UsXG4gICAgICAgIENpcmN1bGFyQ2hhcnRUb29sdGlwM0RTZXJ2aWNlLFxuICAgICAgICBDaXJjdWxhckNoYXJ0TGVnZW5kM0RTZXJ2aWNlLFxuICAgICAgICBDaXJjdWxhckNoYXJ0U2VsZWN0aW9uM0RTZXJ2aWNlLFxuICAgICAgICBDaXJjdWxhckNoYXJ0RGF0YUxhYmVsM0RTZXJ2aWNlLFxuICAgICAgICBDaXJjdWxhckNoYXJ0SGlnaGxpZ2h0M0RTZXJ2aWNlLFxuICAgICAgICBDaXJjdWxhckNoYXJ0RXhwb3J0M0RTZXJ2aWNlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBDaXJjdWxhckNoYXJ0M0RBbGxNb2R1bGUgeyB9Il19
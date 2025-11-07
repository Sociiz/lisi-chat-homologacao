import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccumulationChartModule } from './accumulationchart.module';
import { PieSeries, FunnelSeries, PyramidSeries, AccumulationTooltip, AccumulationLegend, AccumulationSelection, AccumulationHighlight, AccumulationDataLabel, AccumulationAnnotation } from '@syncfusion/ej2-charts';
import * as i0 from "@angular/core";
export const PieSeriesService = { provide: 'ChartsPieSeries', useValue: PieSeries };
export const FunnelSeriesService = { provide: 'ChartsFunnelSeries', useValue: FunnelSeries };
export const PyramidSeriesService = { provide: 'ChartsPyramidSeries', useValue: PyramidSeries };
export const AccumulationTooltipService = { provide: 'ChartsAccumulationTooltip', useValue: AccumulationTooltip };
export const AccumulationLegendService = { provide: 'ChartsAccumulationLegend', useValue: AccumulationLegend };
export const AccumulationSelectionService = { provide: 'ChartsAccumulationSelection', useValue: AccumulationSelection };
export const AccumulationHighlightService = { provide: 'ChartsAccumulationHighlight', useValue: AccumulationHighlight };
export const AccumulationDataLabelService = { provide: 'ChartsAccumulationDataLabel', useValue: AccumulationDataLabel };
export const AccumulationAnnotationService = { provide: 'ChartsAccumulationAnnotation', useValue: AccumulationAnnotation };
/**
 * NgModule definition for the AccumulationChart component with providers.
 */
export class AccumulationChartAllModule {
}
AccumulationChartAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccumulationChartAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AccumulationChartAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccumulationChartAllModule, imports: [CommonModule, AccumulationChartModule], exports: [AccumulationChartModule] });
AccumulationChartAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccumulationChartAllModule, providers: [
        PieSeriesService,
        FunnelSeriesService,
        PyramidSeriesService,
        AccumulationTooltipService,
        AccumulationLegendService,
        AccumulationSelectionService,
        AccumulationHighlightService,
        AccumulationDataLabelService,
        AccumulationAnnotationService
    ], imports: [[CommonModule, AccumulationChartModule], AccumulationChartModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccumulationChartAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, AccumulationChartModule],
                    exports: [
                        AccumulationChartModule
                    ],
                    providers: [
                        PieSeriesService,
                        FunnelSeriesService,
                        PyramidSeriesService,
                        AccumulationTooltipService,
                        AccumulationLegendService,
                        AccumulationSelectionService,
                        AccumulationHighlightService,
                        AccumulationDataLabelService,
                        AccumulationAnnotationService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjdW11bGF0aW9uY2hhcnQtYWxsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hY2N1bXVsYXRpb24tY2hhcnQvYWNjdW11bGF0aW9uY2hhcnQtYWxsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFJL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDckUsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixFQUFFLGtCQUFrQixFQUFFLHFCQUFxQixFQUFFLHFCQUFxQixFQUFFLHFCQUFxQixFQUFFLHNCQUFzQixFQUFDLE1BQU0sd0JBQXdCLENBQUE7O0FBR25OLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFrQixFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFDLENBQUM7QUFDbEcsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQWtCLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUMsQ0FBQztBQUMzRyxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBa0IsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBQyxDQUFDO0FBQzlHLE1BQU0sQ0FBQyxNQUFNLDBCQUEwQixHQUFrQixFQUFFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUMsQ0FBQztBQUNoSSxNQUFNLENBQUMsTUFBTSx5QkFBeUIsR0FBa0IsRUFBRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFDLENBQUM7QUFDN0gsTUFBTSxDQUFDLE1BQU0sNEJBQTRCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBQyxDQUFDO0FBQ3RJLE1BQU0sQ0FBQyxNQUFNLDRCQUE0QixHQUFrQixFQUFFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxRQUFRLEVBQUUscUJBQXFCLEVBQUMsQ0FBQztBQUN0SSxNQUFNLENBQUMsTUFBTSw0QkFBNEIsR0FBa0IsRUFBRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFDLENBQUM7QUFDdEksTUFBTSxDQUFDLE1BQU0sNkJBQTZCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBQyxDQUFDO0FBRXpJOztHQUVHO0FBa0JILE1BQU0sT0FBTywwQkFBMEI7O3VIQUExQiwwQkFBMEI7d0hBQTFCLDBCQUEwQixZQWhCekIsWUFBWSxFQUFFLHVCQUF1QixhQUUzQyx1QkFBdUI7d0hBY2xCLDBCQUEwQixhQVp6QjtRQUNOLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsb0JBQW9CO1FBQ3BCLDBCQUEwQjtRQUMxQix5QkFBeUI7UUFDekIsNEJBQTRCO1FBQzVCLDRCQUE0QjtRQUM1Qiw0QkFBNEI7UUFDNUIsNkJBQTZCO0tBQ2hDLFlBZFEsQ0FBQyxZQUFZLEVBQUUsdUJBQXVCLENBQUMsRUFFNUMsdUJBQXVCOzJGQWNsQiwwQkFBMEI7a0JBakJ0QyxRQUFRO21CQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSx1QkFBdUIsQ0FBQztvQkFDaEQsT0FBTyxFQUFFO3dCQUNMLHVCQUF1QjtxQkFDMUI7b0JBQ0QsU0FBUyxFQUFDO3dCQUNOLGdCQUFnQjt3QkFDaEIsbUJBQW1CO3dCQUNuQixvQkFBb0I7d0JBQ3BCLDBCQUEwQjt3QkFDMUIseUJBQXlCO3dCQUN6Qiw0QkFBNEI7d0JBQzVCLDRCQUE0Qjt3QkFDNUIsNEJBQTRCO3dCQUM1Qiw2QkFBNkI7cUJBQ2hDO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFZhbHVlUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBY2N1bXVsYXRpb25TZXJpZXNEaXJlY3RpdmUsIEFjY3VtdWxhdGlvblNlcmllc0NvbGxlY3Rpb25EaXJlY3RpdmUgfSBmcm9tICcuL3Nlcmllcy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQWNjdW11bGF0aW9uQW5ub3RhdGlvbkRpcmVjdGl2ZSwgQWNjdW11bGF0aW9uQW5ub3RhdGlvbnNEaXJlY3RpdmUgfSBmcm9tICcuL2Fubm90YXRpb25zLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBBY2N1bXVsYXRpb25DaGFydENvbXBvbmVudCB9IGZyb20gJy4vYWNjdW11bGF0aW9uY2hhcnQuY29tcG9uZW50JztcbmltcG9ydCB7IEFjY3VtdWxhdGlvbkNoYXJ0TW9kdWxlIH0gZnJvbSAnLi9hY2N1bXVsYXRpb25jaGFydC5tb2R1bGUnO1xuaW1wb3J0IHtQaWVTZXJpZXMsIEZ1bm5lbFNlcmllcywgUHlyYW1pZFNlcmllcywgQWNjdW11bGF0aW9uVG9vbHRpcCwgQWNjdW11bGF0aW9uTGVnZW5kLCBBY2N1bXVsYXRpb25TZWxlY3Rpb24sIEFjY3VtdWxhdGlvbkhpZ2hsaWdodCwgQWNjdW11bGF0aW9uRGF0YUxhYmVsLCBBY2N1bXVsYXRpb25Bbm5vdGF0aW9ufSBmcm9tICdAc3luY2Z1c2lvbi9lajItY2hhcnRzJ1xuXG5cbmV4cG9ydCBjb25zdCBQaWVTZXJpZXNTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzUGllU2VyaWVzJywgdXNlVmFsdWU6IFBpZVNlcmllc307XG5leHBvcnQgY29uc3QgRnVubmVsU2VyaWVzU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c0Z1bm5lbFNlcmllcycsIHVzZVZhbHVlOiBGdW5uZWxTZXJpZXN9O1xuZXhwb3J0IGNvbnN0IFB5cmFtaWRTZXJpZXNTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzUHlyYW1pZFNlcmllcycsIHVzZVZhbHVlOiBQeXJhbWlkU2VyaWVzfTtcbmV4cG9ydCBjb25zdCBBY2N1bXVsYXRpb25Ub29sdGlwU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c0FjY3VtdWxhdGlvblRvb2x0aXAnLCB1c2VWYWx1ZTogQWNjdW11bGF0aW9uVG9vbHRpcH07XG5leHBvcnQgY29uc3QgQWNjdW11bGF0aW9uTGVnZW5kU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c0FjY3VtdWxhdGlvbkxlZ2VuZCcsIHVzZVZhbHVlOiBBY2N1bXVsYXRpb25MZWdlbmR9O1xuZXhwb3J0IGNvbnN0IEFjY3VtdWxhdGlvblNlbGVjdGlvblNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNBY2N1bXVsYXRpb25TZWxlY3Rpb24nLCB1c2VWYWx1ZTogQWNjdW11bGF0aW9uU2VsZWN0aW9ufTtcbmV4cG9ydCBjb25zdCBBY2N1bXVsYXRpb25IaWdobGlnaHRTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzQWNjdW11bGF0aW9uSGlnaGxpZ2h0JywgdXNlVmFsdWU6IEFjY3VtdWxhdGlvbkhpZ2hsaWdodH07XG5leHBvcnQgY29uc3QgQWNjdW11bGF0aW9uRGF0YUxhYmVsU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c0FjY3VtdWxhdGlvbkRhdGFMYWJlbCcsIHVzZVZhbHVlOiBBY2N1bXVsYXRpb25EYXRhTGFiZWx9O1xuZXhwb3J0IGNvbnN0IEFjY3VtdWxhdGlvbkFubm90YXRpb25TZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzQWNjdW11bGF0aW9uQW5ub3RhdGlvbicsIHVzZVZhbHVlOiBBY2N1bXVsYXRpb25Bbm5vdGF0aW9ufTtcblxuLyoqXG4gKiBOZ01vZHVsZSBkZWZpbml0aW9uIGZvciB0aGUgQWNjdW11bGF0aW9uQ2hhcnQgY29tcG9uZW50IHdpdGggcHJvdmlkZXJzLlxuICovXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEFjY3VtdWxhdGlvbkNoYXJ0TW9kdWxlXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIEFjY3VtdWxhdGlvbkNoYXJ0TW9kdWxlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6W1xuICAgICAgICBQaWVTZXJpZXNTZXJ2aWNlLFxuICAgICAgICBGdW5uZWxTZXJpZXNTZXJ2aWNlLFxuICAgICAgICBQeXJhbWlkU2VyaWVzU2VydmljZSxcbiAgICAgICAgQWNjdW11bGF0aW9uVG9vbHRpcFNlcnZpY2UsXG4gICAgICAgIEFjY3VtdWxhdGlvbkxlZ2VuZFNlcnZpY2UsXG4gICAgICAgIEFjY3VtdWxhdGlvblNlbGVjdGlvblNlcnZpY2UsXG4gICAgICAgIEFjY3VtdWxhdGlvbkhpZ2hsaWdodFNlcnZpY2UsXG4gICAgICAgIEFjY3VtdWxhdGlvbkRhdGFMYWJlbFNlcnZpY2UsXG4gICAgICAgIEFjY3VtdWxhdGlvbkFubm90YXRpb25TZXJ2aWNlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBY2N1bXVsYXRpb25DaGFydEFsbE1vZHVsZSB7IH0iXX0=
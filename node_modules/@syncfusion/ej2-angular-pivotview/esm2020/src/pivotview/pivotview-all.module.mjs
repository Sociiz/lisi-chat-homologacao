import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PivotViewModule } from './pivotview.module';
import { GroupingBar, FieldList, CalculatedField, ConditionalFormatting, VirtualScroll, DrillThrough, Toolbar, PivotChart, PDFExport, ExcelExport, NumberFormatting, Grouping, Pager } from '@syncfusion/ej2-pivotview';
import * as i0 from "@angular/core";
export const GroupingBarService = { provide: 'PivotViewGroupingBar', useValue: GroupingBar };
export const FieldListService = { provide: 'PivotViewFieldList', useValue: FieldList };
export const CalculatedFieldService = { provide: 'PivotViewCalculatedField', useValue: CalculatedField };
export const ConditionalFormattingService = { provide: 'PivotViewConditionalFormatting', useValue: ConditionalFormatting };
export const VirtualScrollService = { provide: 'PivotViewVirtualScroll', useValue: VirtualScroll };
export const DrillThroughService = { provide: 'PivotViewDrillThrough', useValue: DrillThrough };
export const ToolbarService = { provide: 'PivotViewToolbar', useValue: Toolbar };
export const PivotChartService = { provide: 'PivotViewPivotChart', useValue: PivotChart };
export const PDFExportService = { provide: 'PivotViewPDFExport', useValue: PDFExport };
export const ExcelExportService = { provide: 'PivotViewExcelExport', useValue: ExcelExport };
export const NumberFormattingService = { provide: 'PivotViewNumberFormatting', useValue: NumberFormatting };
export const GroupingService = { provide: 'PivotViewGrouping', useValue: Grouping };
export const PagerService = { provide: 'PivotViewPager', useValue: Pager };
/**
 * NgModule definition for the PivotView component with providers.
 */
export class PivotViewAllModule {
}
PivotViewAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PivotViewAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PivotViewAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PivotViewAllModule, imports: [CommonModule, PivotViewModule], exports: [PivotViewModule] });
PivotViewAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PivotViewAllModule, providers: [
        GroupingBarService,
        FieldListService,
        CalculatedFieldService,
        ConditionalFormattingService,
        VirtualScrollService,
        DrillThroughService,
        ToolbarService,
        PivotChartService,
        PDFExportService,
        ExcelExportService,
        NumberFormattingService,
        GroupingService,
        PagerService
    ], imports: [[CommonModule, PivotViewModule], PivotViewModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PivotViewAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, PivotViewModule],
                    exports: [
                        PivotViewModule
                    ],
                    providers: [
                        GroupingBarService,
                        FieldListService,
                        CalculatedFieldService,
                        ConditionalFormattingService,
                        VirtualScrollService,
                        DrillThroughService,
                        ToolbarService,
                        PivotChartService,
                        PDFExportService,
                        ExcelExportService,
                        NumberFormattingService,
                        GroupingService,
                        PagerService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGl2b3R2aWV3LWFsbC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvcGl2b3R2aWV3L3Bpdm90dmlldy1hbGwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLHFCQUFxQixFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQTs7QUFHck4sTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUMsQ0FBQztBQUMzRyxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBa0IsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBQyxDQUFDO0FBQ3JHLE1BQU0sQ0FBQyxNQUFNLHNCQUFzQixHQUFrQixFQUFFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFDLENBQUM7QUFDdkgsTUFBTSxDQUFDLE1BQU0sNEJBQTRCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBQyxDQUFDO0FBQ3pJLE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFrQixFQUFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFDLENBQUM7QUFDakgsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQWtCLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUMsQ0FBQztBQUM5RyxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQWtCLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUMsQ0FBQztBQUMvRixNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBa0IsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBQyxDQUFDO0FBQ3hHLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFrQixFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFDLENBQUM7QUFDckcsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUMsQ0FBQztBQUMzRyxNQUFNLENBQUMsTUFBTSx1QkFBdUIsR0FBa0IsRUFBRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFDLENBQUM7QUFDMUgsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFrQixFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDLENBQUM7QUFDbEcsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFrQixFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDLENBQUM7QUFFekY7O0dBRUc7QUFzQkgsTUFBTSxPQUFPLGtCQUFrQjs7K0dBQWxCLGtCQUFrQjtnSEFBbEIsa0JBQWtCLFlBcEJqQixZQUFZLEVBQUUsZUFBZSxhQUVuQyxlQUFlO2dIQWtCVixrQkFBa0IsYUFoQmpCO1FBQ04sa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixzQkFBc0I7UUFDdEIsNEJBQTRCO1FBQzVCLG9CQUFvQjtRQUNwQixtQkFBbUI7UUFDbkIsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLHVCQUF1QjtRQUN2QixlQUFlO1FBQ2YsWUFBWTtLQUNmLFlBbEJRLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxFQUVwQyxlQUFlOzJGQWtCVixrQkFBa0I7a0JBckI5QixRQUFRO21CQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUM7b0JBQ3hDLE9BQU8sRUFBRTt3QkFDTCxlQUFlO3FCQUNsQjtvQkFDRCxTQUFTLEVBQUM7d0JBQ04sa0JBQWtCO3dCQUNsQixnQkFBZ0I7d0JBQ2hCLHNCQUFzQjt3QkFDdEIsNEJBQTRCO3dCQUM1QixvQkFBb0I7d0JBQ3BCLG1CQUFtQjt3QkFDbkIsY0FBYzt3QkFDZCxpQkFBaUI7d0JBQ2pCLGdCQUFnQjt3QkFDaEIsa0JBQWtCO3dCQUNsQix1QkFBdUI7d0JBQ3ZCLGVBQWU7d0JBQ2YsWUFBWTtxQkFDZjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBWYWx1ZVByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUGl2b3RWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9waXZvdHZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFBpdm90Vmlld01vZHVsZSB9IGZyb20gJy4vcGl2b3R2aWV3Lm1vZHVsZSc7XG5pbXBvcnQge0dyb3VwaW5nQmFyLCBGaWVsZExpc3QsIENhbGN1bGF0ZWRGaWVsZCwgQ29uZGl0aW9uYWxGb3JtYXR0aW5nLCBWaXJ0dWFsU2Nyb2xsLCBEcmlsbFRocm91Z2gsIFRvb2xiYXIsIFBpdm90Q2hhcnQsIFBERkV4cG9ydCwgRXhjZWxFeHBvcnQsIE51bWJlckZvcm1hdHRpbmcsIEdyb3VwaW5nLCBQYWdlcn0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLXBpdm90dmlldydcblxuXG5leHBvcnQgY29uc3QgR3JvdXBpbmdCYXJTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnUGl2b3RWaWV3R3JvdXBpbmdCYXInLCB1c2VWYWx1ZTogR3JvdXBpbmdCYXJ9O1xuZXhwb3J0IGNvbnN0IEZpZWxkTGlzdFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdQaXZvdFZpZXdGaWVsZExpc3QnLCB1c2VWYWx1ZTogRmllbGRMaXN0fTtcbmV4cG9ydCBjb25zdCBDYWxjdWxhdGVkRmllbGRTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnUGl2b3RWaWV3Q2FsY3VsYXRlZEZpZWxkJywgdXNlVmFsdWU6IENhbGN1bGF0ZWRGaWVsZH07XG5leHBvcnQgY29uc3QgQ29uZGl0aW9uYWxGb3JtYXR0aW5nU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1Bpdm90Vmlld0NvbmRpdGlvbmFsRm9ybWF0dGluZycsIHVzZVZhbHVlOiBDb25kaXRpb25hbEZvcm1hdHRpbmd9O1xuZXhwb3J0IGNvbnN0IFZpcnR1YWxTY3JvbGxTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnUGl2b3RWaWV3VmlydHVhbFNjcm9sbCcsIHVzZVZhbHVlOiBWaXJ0dWFsU2Nyb2xsfTtcbmV4cG9ydCBjb25zdCBEcmlsbFRocm91Z2hTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnUGl2b3RWaWV3RHJpbGxUaHJvdWdoJywgdXNlVmFsdWU6IERyaWxsVGhyb3VnaH07XG5leHBvcnQgY29uc3QgVG9vbGJhclNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdQaXZvdFZpZXdUb29sYmFyJywgdXNlVmFsdWU6IFRvb2xiYXJ9O1xuZXhwb3J0IGNvbnN0IFBpdm90Q2hhcnRTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnUGl2b3RWaWV3UGl2b3RDaGFydCcsIHVzZVZhbHVlOiBQaXZvdENoYXJ0fTtcbmV4cG9ydCBjb25zdCBQREZFeHBvcnRTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnUGl2b3RWaWV3UERGRXhwb3J0JywgdXNlVmFsdWU6IFBERkV4cG9ydH07XG5leHBvcnQgY29uc3QgRXhjZWxFeHBvcnRTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnUGl2b3RWaWV3RXhjZWxFeHBvcnQnLCB1c2VWYWx1ZTogRXhjZWxFeHBvcnR9O1xuZXhwb3J0IGNvbnN0IE51bWJlckZvcm1hdHRpbmdTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnUGl2b3RWaWV3TnVtYmVyRm9ybWF0dGluZycsIHVzZVZhbHVlOiBOdW1iZXJGb3JtYXR0aW5nfTtcbmV4cG9ydCBjb25zdCBHcm91cGluZ1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdQaXZvdFZpZXdHcm91cGluZycsIHVzZVZhbHVlOiBHcm91cGluZ307XG5leHBvcnQgY29uc3QgUGFnZXJTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnUGl2b3RWaWV3UGFnZXInLCB1c2VWYWx1ZTogUGFnZXJ9O1xuXG4vKipcbiAqIE5nTW9kdWxlIGRlZmluaXRpb24gZm9yIHRoZSBQaXZvdFZpZXcgY29tcG9uZW50IHdpdGggcHJvdmlkZXJzLlxuICovXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFBpdm90Vmlld01vZHVsZV0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBQaXZvdFZpZXdNb2R1bGVcbiAgICBdLFxuICAgIHByb3ZpZGVyczpbXG4gICAgICAgIEdyb3VwaW5nQmFyU2VydmljZSxcbiAgICAgICAgRmllbGRMaXN0U2VydmljZSxcbiAgICAgICAgQ2FsY3VsYXRlZEZpZWxkU2VydmljZSxcbiAgICAgICAgQ29uZGl0aW9uYWxGb3JtYXR0aW5nU2VydmljZSxcbiAgICAgICAgVmlydHVhbFNjcm9sbFNlcnZpY2UsXG4gICAgICAgIERyaWxsVGhyb3VnaFNlcnZpY2UsXG4gICAgICAgIFRvb2xiYXJTZXJ2aWNlLFxuICAgICAgICBQaXZvdENoYXJ0U2VydmljZSxcbiAgICAgICAgUERGRXhwb3J0U2VydmljZSxcbiAgICAgICAgRXhjZWxFeHBvcnRTZXJ2aWNlLFxuICAgICAgICBOdW1iZXJGb3JtYXR0aW5nU2VydmljZSxcbiAgICAgICAgR3JvdXBpbmdTZXJ2aWNlLFxuICAgICAgICBQYWdlclNlcnZpY2VcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFBpdm90Vmlld0FsbE1vZHVsZSB7IH0iXX0=
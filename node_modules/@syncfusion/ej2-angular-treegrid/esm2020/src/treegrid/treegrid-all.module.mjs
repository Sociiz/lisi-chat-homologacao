import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeGridModule } from './treegrid.module';
import { Filter, Page, Sort, Reorder, Toolbar, Aggregate, Resize, ColumnMenu, ExcelExport, PdfExport, CommandColumn, ContextMenu, Edit, Selection, VirtualScroll, DetailRow, RowDD, Freeze, ColumnChooser, Logger, InfiniteScroll } from '@syncfusion/ej2-treegrid';
import * as i0 from "@angular/core";
export const FilterService = { provide: 'TreeGridFilter', useValue: Filter };
export const PageService = { provide: 'TreeGridPage', useValue: Page };
export const SortService = { provide: 'TreeGridSort', useValue: Sort };
export const ReorderService = { provide: 'TreeGridReorder', useValue: Reorder };
export const ToolbarService = { provide: 'TreeGridToolbar', useValue: Toolbar };
export const AggregateService = { provide: 'TreeGridAggregate', useValue: Aggregate };
export const ResizeService = { provide: 'TreeGridResize', useValue: Resize };
export const ColumnMenuService = { provide: 'TreeGridColumnMenu', useValue: ColumnMenu };
export const ExcelExportService = { provide: 'TreeGridExcelExport', useValue: ExcelExport };
export const PdfExportService = { provide: 'TreeGridPdfExport', useValue: PdfExport };
export const CommandColumnService = { provide: 'TreeGridCommandColumn', useValue: CommandColumn };
export const ContextMenuService = { provide: 'TreeGridContextMenu', useValue: ContextMenu };
export const EditService = { provide: 'TreeGridEdit', useValue: Edit };
export const SelectionService = { provide: 'TreeGridSelection', useValue: Selection };
export const VirtualScrollService = { provide: 'TreeGridVirtualScroll', useValue: VirtualScroll };
export const DetailRowService = { provide: 'TreeGridDetailRow', useValue: DetailRow };
export const RowDDService = { provide: 'TreeGridRowDD', useValue: RowDD };
export const FreezeService = { provide: 'TreeGridFreeze', useValue: Freeze };
export const ColumnChooserService = { provide: 'TreeGridColumnChooser', useValue: ColumnChooser };
export const LoggerService = { provide: 'TreeGridLogger', useValue: Logger };
export const InfiniteScrollService = { provide: 'TreeGridInfiniteScroll', useValue: InfiniteScroll };
/**
 * NgModule definition for the TreeGrid component with providers.
 */
export class TreeGridAllModule {
}
TreeGridAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeGridAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TreeGridAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeGridAllModule, imports: [CommonModule, TreeGridModule], exports: [TreeGridModule] });
TreeGridAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeGridAllModule, providers: [
        FilterService,
        PageService,
        SortService,
        ReorderService,
        ToolbarService,
        AggregateService,
        ResizeService,
        ColumnMenuService,
        ExcelExportService,
        PdfExportService,
        CommandColumnService,
        ContextMenuService,
        EditService,
        SelectionService,
        VirtualScrollService,
        DetailRowService,
        RowDDService,
        FreezeService,
        ColumnChooserService,
        LoggerService,
        InfiniteScrollService
    ], imports: [[CommonModule, TreeGridModule], TreeGridModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeGridAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, TreeGridModule],
                    exports: [
                        TreeGridModule
                    ],
                    providers: [
                        FilterService,
                        PageService,
                        SortService,
                        ReorderService,
                        ToolbarService,
                        AggregateService,
                        ResizeService,
                        ColumnMenuService,
                        ExcelExportService,
                        PdfExportService,
                        CommandColumnService,
                        ContextMenuService,
                        EditService,
                        SelectionService,
                        VirtualScrollService,
                        DetailRowService,
                        RowDDService,
                        FreezeService,
                        ColumnChooserService,
                        LoggerService,
                        InfiniteScrollService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZWdyaWQtYWxsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmVlZ3JpZC90cmVlZ3JpZC1hbGwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU0vQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFDLE1BQU0sMEJBQTBCLENBQUE7O0FBR2pRLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBa0IsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQyxDQUFDO0FBQzNGLE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBa0IsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQztBQUNyRixNQUFNLENBQUMsTUFBTSxXQUFXLEdBQWtCLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUM7QUFDckYsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFrQixFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFDLENBQUM7QUFDOUYsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFrQixFQUFFLE9BQU8sRUFBRSxpQkFB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QWM7MkZBMEJULGlCQUFpQjtrQkE3QjdCLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGNBQWMsQ0FBQztvQkFDdkMsT0FBTyxFQUFFO3dCQUNMLGNBQWM7cUJBQ2pCO29CQUNELFNBQVMsRUFBQzt3QkFDTixhQUFhO3dCQUNiLFdBQVc7d0JBQ1gsV0FBVzt3QkFDWCxjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsZ0JBQWdCO3dCQUNoQixhQUFhO3dCQUNiLGlCQUFpQjt3QkFDakIsa0JBQWtCO3dCQUNsQixnQkFBZ0I7d0JBQ2hCLG9CQUFvQjt3QkFDcEIsa0JBQWtCO3dCQUNsQixXQUFXO3dCQUNYLGdCQUFnQjt3QkFDaEIsb0JBQW9CO3dCQUNwQixnQkFBZ0I7d0JBQ2hCLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixvQkFBb0I7d0JBQ3BCLGFBQWE7d0JBQ2IscUJBQXFCO3FCQUN4QjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBWYWx1ZVByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3RhY2tlZENvbHVtbkRpcmVjdGl2ZSwgU3RhY2tlZENvbHVtbnNEaXJlY3RpdmUgfSBmcm9tICcuL3N0YWNrZWQtY29sdW1uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDb2x1bW5EaXJlY3RpdmUsIENvbHVtbnNEaXJlY3RpdmUgfSBmcm9tICcuL2NvbHVtbnMuZGlyZWN0aXZlJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUNvbHVtbkRpcmVjdGl2ZSwgQWdncmVnYXRlQ29sdW1uc0RpcmVjdGl2ZSB9IGZyb20gJy4vYWdncmVnYXRlLWNvbHVtbnMuZGlyZWN0aXZlJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZURpcmVjdGl2ZSwgQWdncmVnYXRlc0RpcmVjdGl2ZSB9IGZyb20gJy4vYWdncmVnYXRlcy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVHJlZUdyaWRDb21wb25lbnQgfSBmcm9tICcuL3RyZWVncmlkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmVlR3JpZE1vZHVsZSB9IGZyb20gJy4vdHJlZWdyaWQubW9kdWxlJztcbmltcG9ydCB7RmlsdGVyLCBQYWdlLCBTb3J0LCBSZW9yZGVyLCBUb29sYmFyLCBBZ2dyZWdhdGUsIFJlc2l6ZSwgQ29sdW1uTWVudSwgRXhjZWxFeHBvcnQsIFBkZkV4cG9ydCwgQ29tbWFuZENvbHVtbiwgQ29udGV4dE1lbnUsIEVkaXQsIFNlbGVjdGlvbiwgVmlydHVhbFNjcm9sbCwgRGV0YWlsUm93LCBSb3dERCwgRnJlZXplLCBDb2x1bW5DaG9vc2VyLCBMb2dnZXIsIEluZmluaXRlU2Nyb2xsfSBmcm9tICdAc3luY2Z1c2lvbi9lajItdHJlZWdyaWQnXG5cblxuZXhwb3J0IGNvbnN0IEZpbHRlclNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdUcmVlR3JpZEZpbHRlcicsIHVzZVZhbHVlOiBGaWx0ZXJ9O1xuZXhwb3J0IGNvbnN0IFBhZ2VTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnVHJlZUdyaWRQYWdlJywgdXNlVmFsdWU6IFBhZ2V9O1xuZXhwb3J0IGNvbnN0IFNvcnRTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnVHJlZUdyaWRTb3J0JywgdXNlVmFsdWU6IFNvcnR9O1xuZXhwb3J0IGNvbnN0IFJlb3JkZXJTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnVHJlZUdyaWRSZW9yZGVyJywgdXNlVmFsdWU6IFJlb3JkZXJ9O1xuZXhwb3J0IGNvbnN0IFRvb2xiYXJTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnVHJlZUdyaWRUb29sYmFyJywgdXNlVmFsdWU6IFRvb2xiYXJ9O1xuZXhwb3J0IGNvbnN0IEFnZ3JlZ2F0ZVNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdUcmVlR3JpZEFnZ3JlZ2F0ZScsIHVzZVZhbHVlOiBBZ2dyZWdhdGV9O1xuZXhwb3J0IGNvbnN0IFJlc2l6ZVNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdUcmVlR3JpZFJlc2l6ZScsIHVzZVZhbHVlOiBSZXNpemV9O1xuZXhwb3J0IGNvbnN0IENvbHVtbk1lbnVTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnVHJlZUdyaWRDb2x1bW5NZW51JywgdXNlVmFsdWU6IENvbHVtbk1lbnV9O1xuZXhwb3J0IGNvbnN0IEV4Y2VsRXhwb3J0U2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1RyZWVHcmlkRXhjZWxFeHBvcnQnLCB1c2VWYWx1ZTogRXhjZWxFeHBvcnR9O1xuZXhwb3J0IGNvbnN0IFBkZkV4cG9ydFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdUcmVlR3JpZFBkZkV4cG9ydCcsIHVzZVZhbHVlOiBQZGZFeHBvcnR9O1xuZXhwb3J0IGNvbnN0IENvbW1hbmRDb2x1bW5TZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnVHJlZUdyaWRDb21tYW5kQ29sdW1uJywgdXNlVmFsdWU6IENvbW1hbmRDb2x1bW59O1xuZXhwb3J0IGNvbnN0IENvbnRleHRNZW51U2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1RyZWVHcmlkQ29udGV4dE1lbnUnLCB1c2VWYWx1ZTogQ29udGV4dE1lbnV9O1xuZXhwb3J0IGNvbnN0IEVkaXRTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnVHJlZUdyaWRFZGl0JywgdXNlVmFsdWU6IEVkaXR9O1xuZXhwb3J0IGNvbnN0IFNlbGVjdGlvblNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdUcmVlR3JpZFNlbGVjdGlvbicsIHVzZVZhbHVlOiBTZWxlY3Rpb259O1xuZXhwb3J0IGNvbnN0IFZpcnR1YWxTY3JvbGxTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnVHJlZUdyaWRWaXJ0dWFsU2Nyb2xsJywgdXNlVmFsdWU6IFZpcnR1YWxTY3JvbGx9O1xuZXhwb3J0IGNvbnN0IERldGFpbFJvd1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdUcmVlR3JpZERldGFpbFJvdycsIHVzZVZhbHVlOiBEZXRhaWxSb3d9O1xuZXhwb3J0IGNvbnN0IFJvd0REU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1RyZWVHcmlkUm93REQnLCB1c2VWYWx1ZTogUm93RER9O1xuZXhwb3J0IGNvbnN0IEZyZWV6ZVNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdUcmVlR3JpZEZyZWV6ZScsIHVzZVZhbHVlOiBGcmVlemV9O1xuZXhwb3J0IGNvbnN0IENvbHVtbkNob29zZXJTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnVHJlZUdyaWRDb2x1bW5DaG9vc2VyJywgdXNlVmFsdWU6IENvbHVtbkNob29zZXJ9O1xuZXhwb3J0IGNvbnN0IExvZ2dlclNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdUcmVlR3JpZExvZ2dlcicsIHVzZVZhbHVlOiBMb2dnZXJ9O1xuZXhwb3J0IGNvbnN0IEluZmluaXRlU2Nyb2xsU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1RyZWVHcmlkSW5maW5pdGVTY3JvbGwnLCB1c2VWYWx1ZTogSW5maW5pdGVTY3JvbGx9O1xuXG4vKipcbiAqIE5nTW9kdWxlIGRlZmluaXRpb24gZm9yIHRoZSBUcmVlR3JpZCBjb21wb25lbnQgd2l0aCBwcm92aWRlcnMuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgVHJlZUdyaWRNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgVHJlZUdyaWRNb2R1bGVcbiAgICBdLFxuICAgIHByb3ZpZGVyczpbXG4gICAgICAgIEZpbHRlclNlcnZpY2UsXG4gICAgICAgIFBhZ2VTZXJ2aWNlLFxuICAgICAgICBTb3J0U2VydmljZSxcbiAgICAgICAgUmVvcmRlclNlcnZpY2UsXG4gICAgICAgIFRvb2xiYXJTZXJ2aWNlLFxuICAgICAgICBBZ2dyZWdhdGVTZXJ2aWNlLFxuICAgICAgICBSZXNpemVTZXJ2aWNlLFxuICAgICAgICBDb2x1bW5NZW51U2VydmljZSxcbiAgICAgICAgRXhjZWxFeHBvcnRTZXJ2aWNlLFxuICAgICAgICBQZGZFeHBvcnRTZXJ2aWNlLFxuICAgICAgICBDb21tYW5kQ29sdW1uU2VydmljZSxcbiAgICAgICAgQ29udGV4dE1lbnVTZXJ2aWNlLFxuICAgICAgICBFZGl0U2VydmljZSxcbiAgICAgICAgU2VsZWN0aW9uU2VydmljZSxcbiAgICAgICAgVmlydHVhbFNjcm9sbFNlcnZpY2UsXG4gICAgICAgIERldGFpbFJvd1NlcnZpY2UsXG4gICAgICAgIFJvd0REU2VydmljZSxcbiAgICAgICAgRnJlZXplU2VydmljZSxcbiAgICAgICAgQ29sdW1uQ2hvb3NlclNlcnZpY2UsXG4gICAgICAgIExvZ2dlclNlcnZpY2UsXG4gICAgICAgIEluZmluaXRlU2Nyb2xsU2VydmljZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgVHJlZUdyaWRBbGxNb2R1bGUgeyB9Il19
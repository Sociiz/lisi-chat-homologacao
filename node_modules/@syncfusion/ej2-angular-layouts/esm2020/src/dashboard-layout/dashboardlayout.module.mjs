import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelDirective, PanelsDirective } from './panels.directive';
import { DashboardLayoutComponent } from './dashboardlayout.component';
import * as i0 from "@angular/core";
/**
 * NgModule definition for the DashboardLayout component.
 */
export class DashboardLayoutModule {
}
DashboardLayoutModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DashboardLayoutModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DashboardLayoutModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DashboardLayoutModule, declarations: [DashboardLayoutComponent,
        PanelDirective,
        PanelsDirective], imports: [CommonModule], exports: [DashboardLayoutComponent,
        PanelDirective,
        PanelsDirective] });
DashboardLayoutModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DashboardLayoutModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DashboardLayoutModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        DashboardLayoutComponent,
                        PanelDirective,
                        PanelsDirective
                    ],
                    exports: [
                        DashboardLayoutComponent,
                        PanelDirective,
                        PanelsDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkbGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kYXNoYm9hcmQtbGF5b3V0L2Rhc2hib2FyZGxheW91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFFdkU7O0dBRUc7QUFjSCxNQUFNLE9BQU8scUJBQXFCOztrSEFBckIscUJBQXFCO21IQUFyQixxQkFBcUIsaUJBVjFCLHdCQUF3QjtRQUN4QixjQUFjO1FBQ2QsZUFBZSxhQUpULFlBQVksYUFPbEIsd0JBQXdCO1FBQ3hCLGNBQWM7UUFDZCxlQUFlO21IQUdWLHFCQUFxQixZQVpyQixDQUFDLFlBQVksQ0FBQzsyRkFZZCxxQkFBcUI7a0JBYmpDLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixZQUFZLEVBQUU7d0JBQ1Ysd0JBQXdCO3dCQUN4QixjQUFjO3dCQUNkLGVBQWU7cUJBQ2xCO29CQUNELE9BQU8sRUFBRTt3QkFDTCx3QkFBd0I7d0JBQ3hCLGNBQWM7d0JBQ2QsZUFBZTtxQkFDbEI7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBhbmVsRGlyZWN0aXZlLCBQYW5lbHNEaXJlY3RpdmUgfSBmcm9tICcuL3BhbmVscy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRGFzaGJvYXJkTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9kYXNoYm9hcmRsYXlvdXQuY29tcG9uZW50JztcblxuLyoqXG4gKiBOZ01vZHVsZSBkZWZpbml0aW9uIGZvciB0aGUgRGFzaGJvYXJkTGF5b3V0IGNvbXBvbmVudC5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgRGFzaGJvYXJkTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBQYW5lbERpcmVjdGl2ZSxcbiAgICAgICAgUGFuZWxzRGlyZWN0aXZlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIERhc2hib2FyZExheW91dENvbXBvbmVudCxcbiAgICAgICAgUGFuZWxEaXJlY3RpdmUsXG4gICAgICAgIFBhbmVsc0RpcmVjdGl2ZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkTGF5b3V0TW9kdWxlIHsgfSJdfQ==
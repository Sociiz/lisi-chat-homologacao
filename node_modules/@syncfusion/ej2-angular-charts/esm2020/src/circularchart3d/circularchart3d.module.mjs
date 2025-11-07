import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircularChart3DSeriesDirective, CircularChart3DSeriesCollectionDirective } from './series.directive';
import { CircularChart3DSelectedDataIndexDirective, CircularChart3DSelectedDataIndexesDirective } from './selecteddataindexes.directive';
import { CircularChart3DComponent } from './circularchart3d.component';
import * as i0 from "@angular/core";
/**
 * NgModule definition for the CircularChart3D component.
 */
export class CircularChart3DModule {
}
CircularChart3DModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CircularChart3DModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CircularChart3DModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CircularChart3DModule, declarations: [CircularChart3DComponent,
        CircularChart3DSeriesDirective,
        CircularChart3DSeriesCollectionDirective,
        CircularChart3DSelectedDataIndexDirective,
        CircularChart3DSelectedDataIndexesDirective], imports: [CommonModule], exports: [CircularChart3DComponent,
        CircularChart3DSeriesDirective,
        CircularChart3DSeriesCollectionDirective,
        CircularChart3DSelectedDataIndexDirective,
        CircularChart3DSelectedDataIndexesDirective] });
CircularChart3DModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CircularChart3DModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CircularChart3DModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        CircularChart3DComponent,
                        CircularChart3DSeriesDirective,
                        CircularChart3DSeriesCollectionDirective,
                        CircularChart3DSelectedDataIndexDirective,
                        CircularChart3DSelectedDataIndexesDirective
                    ],
                    exports: [
                        CircularChart3DComponent,
                        CircularChart3DSeriesDirective,
                        CircularChart3DSeriesCollectionDirective,
                        CircularChart3DSelectedDataIndexDirective,
                        CircularChart3DSelectedDataIndexesDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY3VsYXJjaGFydDNkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jaXJjdWxhcmNoYXJ0M2QvY2lyY3VsYXJjaGFydDNkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5RyxPQUFPLEVBQUUseUNBQXlDLEVBQUUsMkNBQTJDLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN6SSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFFdkU7O0dBRUc7QUFrQkgsTUFBTSxPQUFPLHFCQUFxQjs7a0hBQXJCLHFCQUFxQjttSEFBckIscUJBQXFCLGlCQWQxQix3QkFBd0I7UUFDeEIsOEJBQThCO1FBQzlCLHdDQUF3QztRQUN4Qyx5Q0FBeUM7UUFDekMsMkNBQTJDLGFBTnJDLFlBQVksYUFTbEIsd0JBQXdCO1FBQ3hCLDhCQUE4QjtRQUM5Qix3Q0FBd0M7UUFDeEMseUNBQXlDO1FBQ3pDLDJDQUEyQzttSEFHdEMscUJBQXFCLFlBaEJyQixDQUFDLFlBQVksQ0FBQzsyRkFnQmQscUJBQXFCO2tCQWpCakMsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFlBQVksRUFBRTt3QkFDVix3QkFBd0I7d0JBQ3hCLDhCQUE4Qjt3QkFDOUIsd0NBQXdDO3dCQUN4Qyx5Q0FBeUM7d0JBQ3pDLDJDQUEyQztxQkFDOUM7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLHdCQUF3Qjt3QkFDeEIsOEJBQThCO3dCQUM5Qix3Q0FBd0M7d0JBQ3hDLHlDQUF5Qzt3QkFDekMsMkNBQTJDO3FCQUM5QztpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ2lyY3VsYXJDaGFydDNEU2VyaWVzRGlyZWN0aXZlLCBDaXJjdWxhckNoYXJ0M0RTZXJpZXNDb2xsZWN0aW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9zZXJpZXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IENpcmN1bGFyQ2hhcnQzRFNlbGVjdGVkRGF0YUluZGV4RGlyZWN0aXZlLCBDaXJjdWxhckNoYXJ0M0RTZWxlY3RlZERhdGFJbmRleGVzRGlyZWN0aXZlIH0gZnJvbSAnLi9zZWxlY3RlZGRhdGFpbmRleGVzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDaXJjdWxhckNoYXJ0M0RDb21wb25lbnQgfSBmcm9tICcuL2NpcmN1bGFyY2hhcnQzZC5jb21wb25lbnQnO1xuXG4vKipcbiAqIE5nTW9kdWxlIGRlZmluaXRpb24gZm9yIHRoZSBDaXJjdWxhckNoYXJ0M0QgY29tcG9uZW50LlxuICovXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBDaXJjdWxhckNoYXJ0M0RDb21wb25lbnQsXG4gICAgICAgIENpcmN1bGFyQ2hhcnQzRFNlcmllc0RpcmVjdGl2ZSxcbiAgICAgICAgQ2lyY3VsYXJDaGFydDNEU2VyaWVzQ29sbGVjdGlvbkRpcmVjdGl2ZSxcbiAgICAgICAgQ2lyY3VsYXJDaGFydDNEU2VsZWN0ZWREYXRhSW5kZXhEaXJlY3RpdmUsXG4gICAgICAgIENpcmN1bGFyQ2hhcnQzRFNlbGVjdGVkRGF0YUluZGV4ZXNEaXJlY3RpdmVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgQ2lyY3VsYXJDaGFydDNEQ29tcG9uZW50LFxuICAgICAgICBDaXJjdWxhckNoYXJ0M0RTZXJpZXNEaXJlY3RpdmUsXG4gICAgICAgIENpcmN1bGFyQ2hhcnQzRFNlcmllc0NvbGxlY3Rpb25EaXJlY3RpdmUsXG4gICAgICAgIENpcmN1bGFyQ2hhcnQzRFNlbGVjdGVkRGF0YUluZGV4RGlyZWN0aXZlLFxuICAgICAgICBDaXJjdWxhckNoYXJ0M0RTZWxlY3RlZERhdGFJbmRleGVzRGlyZWN0aXZlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBDaXJjdWxhckNoYXJ0M0RNb2R1bGUgeyB9Il19
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaneDirective, PanesDirective } from './panesettings.directive';
import { SplitterComponent } from './splitter.component';
import * as i0 from "@angular/core";
/**
 * NgModule definition for the Splitter component.
 */
export class SplitterModule {
}
SplitterModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SplitterModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitterModule, declarations: [SplitterComponent,
        PaneDirective,
        PanesDirective], imports: [CommonModule], exports: [SplitterComponent,
        PaneDirective,
        PanesDirective] });
SplitterModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitterModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitterModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        SplitterComponent,
                        PaneDirective,
                        PanesDirective
                    ],
                    exports: [
                        SplitterComponent,
                        PaneDirective,
                        PanesDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXR0ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NwbGl0dGVyL3NwbGl0dGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUV6RDs7R0FFRztBQWNILE1BQU0sT0FBTyxjQUFjOzsyR0FBZCxjQUFjOzRHQUFkLGNBQWMsaUJBVm5CLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2IsY0FBYyxhQUpSLFlBQVksYUFPbEIsaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixjQUFjOzRHQUdULGNBQWMsWUFaZCxDQUFDLFlBQVksQ0FBQzsyRkFZZCxjQUFjO2tCQWIxQixRQUFRO21CQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsWUFBWSxFQUFFO3dCQUNWLGlCQUFpQjt3QkFDakIsYUFBYTt3QkFDYixjQUFjO3FCQUNqQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsaUJBQWlCO3dCQUNqQixhQUFhO3dCQUNiLGNBQWM7cUJBQ2pCO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQYW5lRGlyZWN0aXZlLCBQYW5lc0RpcmVjdGl2ZSB9IGZyb20gJy4vcGFuZXNldHRpbmdzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTcGxpdHRlckNvbXBvbmVudCB9IGZyb20gJy4vc3BsaXR0ZXIuY29tcG9uZW50JztcblxuLyoqXG4gKiBOZ01vZHVsZSBkZWZpbml0aW9uIGZvciB0aGUgU3BsaXR0ZXIgY29tcG9uZW50LlxuICovXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTcGxpdHRlckNvbXBvbmVudCxcbiAgICAgICAgUGFuZURpcmVjdGl2ZSxcbiAgICAgICAgUGFuZXNEaXJlY3RpdmVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3BsaXR0ZXJDb21wb25lbnQsXG4gICAgICAgIFBhbmVEaXJlY3RpdmUsXG4gICAgICAgIFBhbmVzRGlyZWN0aXZlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTcGxpdHRlck1vZHVsZSB7IH0iXX0=
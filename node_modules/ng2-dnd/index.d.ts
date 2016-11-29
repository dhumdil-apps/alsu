import { ModuleWithProviders } from "@angular/core";
export * from './src/abstract.component';
export * from './src/dnd.config';
export * from './src/dnd.service';
export * from './src/draggable.component';
export * from './src/droppable.component';
export * from './src/sortable.component';
export declare const DND_PROVIDERS: any[];
export declare const DND_DIRECTIVES: any[];
export declare class DndModule {
    static forRoot(): ModuleWithProviders;
}

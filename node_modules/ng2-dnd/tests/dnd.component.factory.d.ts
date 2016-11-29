import { EventEmitter } from '@angular/core';
export declare function triggerEvent(elem: HTMLElement, eventName: string, eventType: string): void;
export declare class Container {
    dragOne: EventEmitter<any>;
    dragTwo: EventEmitter<any>;
    dragOneTwo: EventEmitter<any>;
    dropOne: EventEmitter<any>;
    dropTwo: EventEmitter<any>;
    dropOneTwo: EventEmitter<any>;
    private dragOneSuccessCallback($event);
    private dragTwoSuccessCallback($event);
    private dragOneTwoSuccessCallback($event);
    private dropOneSuccessCallback($event);
    private dropTwoSuccessCallback($event);
    private dropOneTwoSuccessCallback($event);
}
export declare class Container2 {
    dragEnabled: boolean;
    dragData: any;
    drag: EventEmitter<any>;
    drop: EventEmitter<any>;
    private dragSuccessCallback($event);
    private dropSuccessCallback($event);
}
export declare class Container3 {
    sortableList: Array<string>;
}
export declare class Container4 {
    singleList: Array<string>;
    multiOneList: Array<string>;
    multiTwoList: Array<string>;
}

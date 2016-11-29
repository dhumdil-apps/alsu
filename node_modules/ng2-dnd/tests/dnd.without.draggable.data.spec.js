"use strict";
var testing_1 = require('@angular/core/testing');
var dnd_config_1 = require('../src/dnd.config');
var draggable_component_1 = require('../src/draggable.component');
var droppable_component_1 = require('../src/droppable.component');
var dnd_service_1 = require('../src/dnd.service');
var dnd_component_factory_1 = require('./dnd.component.factory');
describe('Drag and Drop without draggable data', function () {
    var componentFixture;
    var dragdropService;
    var config;
    var container;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [draggable_component_1.DraggableComponent, droppable_component_1.DroppableComponent, dnd_component_factory_1.Container],
            providers: [dnd_config_1.DragDropConfig, dnd_service_1.DragDropService]
        });
        testing_1.TestBed.compileComponents();
    });
    beforeEach(testing_1.inject([dnd_config_1.DragDropConfig, dnd_service_1.DragDropService], function (c, dd) {
        dragdropService = dd;
        config = c;
        componentFixture = testing_1.TestBed.createComponent(dnd_component_factory_1.Container);
        componentFixture.detectChanges();
        container = componentFixture.componentInstance;
    }));
    it('should be defined', function () {
        expect(componentFixture).toBeDefined();
    });
    it('Drop events should not be activated on the wrong drop-zone', function (done) {
        var dragElemOne = componentFixture.elementRef.nativeElement.querySelector('#dragIdOne');
        var dropElemTwo = componentFixture.elementRef.nativeElement.querySelector('#dropIdTwo');
        dnd_component_factory_1.triggerEvent(dragElemOne, 'dragstart', 'MouseEvent');
        dnd_component_factory_1.triggerEvent(dropElemTwo, 'dragenter', 'MouseEvent');
        componentFixture.detectChanges();
        expect(dropElemTwo.classList.contains(config.onDragEnterClass)).toEqual(false);
        dnd_component_factory_1.triggerEvent(dropElemTwo, 'dragover', 'MouseEvent');
        componentFixture.detectChanges();
        expect(dropElemTwo.classList.contains(config.onDragOverClass)).toEqual(false);
        var dragCount = 0, dropCount = 0;
        container.dragOne.subscribe(function ($event) {
            dragCount++;
        }, function (error) { }, function () {
            // Here is a function called when stream is complete
            expect(dragCount).toBe(0);
        });
        container.dropTwo.subscribe(function ($event) {
            dropCount++;
        }, function (error) { }, function () {
            // Here is a function called when stream is complete
            expect(dropCount).toBe(0);
        });
        dnd_component_factory_1.triggerEvent(dropElemTwo, 'drop', 'MouseEvent');
        componentFixture.detectChanges();
        done();
    });
    it('Drop events should be activated on the same drop-zone', function (done) {
        var dragElemOne = componentFixture.elementRef.nativeElement.querySelector('#dragIdOne');
        var dropElemOne = componentFixture.elementRef.nativeElement.querySelector('#dropIdOne');
        dnd_component_factory_1.triggerEvent(dragElemOne, 'dragstart', 'MouseEvent');
        dnd_component_factory_1.triggerEvent(dropElemOne, 'dragenter', 'MouseEvent');
        componentFixture.detectChanges();
        expect(dropElemOne.classList.contains(config.onDragEnterClass)).toEqual(true);
        dnd_component_factory_1.triggerEvent(dropElemOne, 'dragover', 'MouseEvent');
        componentFixture.detectChanges();
        expect(dropElemOne.classList.contains(config.onDragOverClass)).toEqual(true);
        var dragCount = 0, dropCount = 0;
        container.dragOne.subscribe(function ($event) {
            dragCount++;
        }, function (error) { }, function () {
            // Here is a function called when stream is complete
            expect(dragCount).toBe(1);
        });
        container.dropOne.subscribe(function ($event) {
            dropCount++;
        }, function (error) { }, function () {
            // Here is a function called when stream is complete
            expect(dropCount).toBe(1);
        });
        dnd_component_factory_1.triggerEvent(dropElemOne, 'drop', 'MouseEvent');
        componentFixture.detectChanges();
        done();
    });
    it('Drop events on multiple drop-zone', function (done) {
        var dragElemOneTwo = componentFixture.elementRef.nativeElement.querySelector('#dragIdOneTwo');
        var dropElemOneTwo = componentFixture.elementRef.nativeElement.querySelector('#dropIdOneTwo');
        dnd_component_factory_1.triggerEvent(dragElemOneTwo, 'dragstart', 'MouseEvent');
        dnd_component_factory_1.triggerEvent(dropElemOneTwo, 'dragenter', 'MouseEvent');
        componentFixture.detectChanges();
        expect(dropElemOneTwo.classList.contains(config.onDragEnterClass)).toEqual(true);
        dnd_component_factory_1.triggerEvent(dropElemOneTwo, 'dragover', 'MouseEvent');
        componentFixture.detectChanges();
        expect(dropElemOneTwo.classList.contains(config.onDragOverClass)).toEqual(true);
        var dragCount = 0, dropCount = 0;
        container.dragOne.subscribe(function ($event) {
            dragCount++;
        }, function (error) { }, function () {
            // Here is a function called when stream is complete
            expect(dragCount).toBe(1);
        });
        container.dropOne.subscribe(function ($event) {
            dropCount++;
        }, function (error) { }, function () {
            // Here is a function called when stream is complete
            expect(dropCount).toBe(1);
        });
        dnd_component_factory_1.triggerEvent(dropElemOneTwo, 'drop', 'MouseEvent');
        componentFixture.detectChanges();
        done();
    });
});
//# sourceMappingURL=dnd.without.draggable.data.spec.js.map
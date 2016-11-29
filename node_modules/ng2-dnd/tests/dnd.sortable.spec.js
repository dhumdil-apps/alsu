"use strict";
var testing_1 = require('@angular/core/testing');
var dnd_config_1 = require('../src/dnd.config');
var sortable_component_1 = require('../src/sortable.component');
var dnd_service_1 = require('../src/dnd.service');
var dnd_component_factory_1 = require('./dnd.component.factory');
describe('Sortable Drag and Drop', function () {
    var componentFixture;
    var dragdropService;
    var config;
    var container;
    var sortableService;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [sortable_component_1.SortableContainer, sortable_component_1.SortableComponent, dnd_component_factory_1.Container3],
            providers: [dnd_config_1.DragDropConfig,
                dnd_service_1.DragDropService,
                dnd_service_1.DragDropSortableService]
        });
        testing_1.TestBed.compileComponents();
    });
    beforeEach(testing_1.inject([dnd_config_1.DragDropConfig, dnd_service_1.DragDropService, dnd_service_1.DragDropSortableService], function (c, dd, ds) {
        dragdropService = dd;
        config = c;
        sortableService = ds;
        componentFixture = testing_1.TestBed.createComponent(dnd_component_factory_1.Container3);
        componentFixture.detectChanges();
        container = componentFixture.componentInstance;
    }));
    it('should be defined', function () {
        expect(componentFixture).toBeDefined();
    });
    it('The elements of the list should be draggable', function () {
        var values = ['one', 'two', 'three', 'four', 'five', 'six'];
        container.sortableList = values;
        componentFixture.detectChanges();
        var ulElem = componentFixture.elementRef.nativeElement.querySelector('ul');
        expect(ulElem).toBeDefined();
        expect(ulElem.children.length).toBe(values.length);
        for (var i = 0; i < ulElem.children.length; i++) {
            var childElem = ulElem.children[i];
            expect(childElem.attributes['draggable']).toBeTruthy();
        }
    });
    it('It should sort in the same list', function () {
        var values = ['one', 'two', 'three', 'four'];
        container.sortableList = values;
        componentFixture.detectChanges();
        var ulElem = componentFixture.elementRef.nativeElement.querySelector('ul');
        expect(ulElem).toBeDefined();
        expect(ulElem.children.length).toBe(values.length);
        expect(sortableService.sortableData).not.toBeDefined();
        expect(sortableService.index).not.toBeDefined();
        dnd_component_factory_1.triggerEvent(ulElem.children[0], 'dragstart', 'MouseEvent');
        componentFixture.detectChanges();
        expect(sortableService.sortableData).toBe(values);
        expect(sortableService.index).toBe(0);
        swap(ulElem.children, 0, 1);
        componentFixture.detectChanges();
        expect(values[0]).toBe('two');
        expect(ulElem.children[0].textContent).toBe('two');
        expect(values[1]).toBe('one');
        expect(ulElem.children[1].textContent).toBe('one');
    });
    it('It should work with arbitrary objects', function () {
        var elemOne = document.createElement('div');
        var elemTwo = 'elemTwo';
        var elemThree = { 'key': 'value' };
        var values = [elemOne, elemTwo, elemThree];
        container.sortableList = values;
        componentFixture.detectChanges();
        var ulElem = componentFixture.elementRef.nativeElement.querySelector('ul');
        expect(ulElem).toBeDefined();
        expect(ulElem.children.length).toBe(values.length);
        swap(ulElem.children, 0, 1);
        expect(values[0]).toBe(elemTwo);
        expect(values[1]).toBe(elemOne);
        swap(ulElem.children, 1, 2);
        expect(values[1]).toBe(elemThree);
        expect(values[2]).toBe(elemOne);
        swap(ulElem.children, 0, 1);
        expect(values[0]).toBe(elemThree);
        expect(values[1]).toBe(elemTwo);
    });
});
describe('Multi List Sortable Drag and Drop', function () {
    var componentFixture;
    var dragdropService;
    var config;
    var container;
    var sortableService;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [sortable_component_1.SortableContainer, sortable_component_1.SortableComponent, dnd_component_factory_1.Container4],
            providers: [dnd_config_1.DragDropConfig, dnd_service_1.DragDropService, dnd_service_1.DragDropSortableService]
        });
        testing_1.TestBed.compileComponents();
    });
    beforeEach(testing_1.inject([dnd_config_1.DragDropConfig, dnd_service_1.DragDropService, dnd_service_1.DragDropSortableService], function (c, dd, ds) {
        dragdropService = dd;
        config = c;
        sortableService = ds;
        componentFixture = testing_1.TestBed.createComponent(dnd_component_factory_1.Container4);
        componentFixture.detectChanges();
        container = componentFixture.componentInstance;
    }));
    it('should be defined', function () {
        expect(componentFixture).toBeDefined();
    });
    it('It should sort in the same list', function () {
        var singleList = ['sOne', 'sTwo', 'sThree'];
        var multiOneList = ['mOne', 'mTwo', 'mThree'];
        var multiTwoList = ['mFour', 'mFive', 'mSix'];
        container.singleList = singleList;
        container.multiOneList = multiOneList;
        container.multiTwoList = multiTwoList;
        componentFixture.detectChanges();
        var divElem = componentFixture.elementRef.nativeElement.querySelector('div');
        expect(divElem).toBeDefined();
        expect(divElem.children.length).toBe(3);
        var singleElem = divElem.querySelector('#single ul');
        swap(singleElem.children, 0, 1);
        componentFixture.detectChanges();
        expect(singleList[0]).toBe('sTwo');
        expect(singleElem.children[0].textContent).toEqual('sTwo');
        expect(singleList[1]).toBe('sOne');
        expect(singleElem.children[1].textContent).toEqual('sOne');
        var multiOneElem = divElem.querySelector('#multiOne ul');
        swap(multiOneElem.children, 1, 2);
        componentFixture.detectChanges();
        expect(multiOneList[1]).toBe('mThree');
        expect(multiOneElem.children[1].textContent).toEqual('mThree');
        expect(multiOneList[2]).toBe('mTwo');
        expect(multiOneElem.children[2].textContent).toEqual('mTwo');
        var multiTwoElem = divElem.querySelector('#multiTwo ul');
        swap(multiTwoElem.children, 1, 2);
        componentFixture.detectChanges();
        expect(multiTwoList[1]).toBe('mSix');
        expect(multiTwoElem.children[1].textContent).toEqual('mSix');
        expect(multiTwoList[2]).toBe('mFive');
        expect(multiTwoElem.children[2].textContent).toEqual('mFive');
    });
    it('It should be possible to move items from list one to list two', function () {
        var singleList = ['sOne', 'sTwo', 'sThree'];
        var multiOneList = ['mOne', 'mTwo', 'mThree'];
        var multiTwoList = ['mFour', 'mFive', 'mSix'];
        container.singleList = singleList;
        container.multiOneList = multiOneList;
        container.multiTwoList = multiTwoList;
        componentFixture.detectChanges();
        var divElem = componentFixture.elementRef.nativeElement.querySelector('div');
        expect(divElem).toBeDefined();
        expect(divElem.children.length).toBe(3);
        var multiOneElem = divElem.querySelector('#multiOne ul');
        var multiTwoElem = divElem.querySelector('#multiTwo ul');
        swapMultiple(multiOneElem.children, 0, multiTwoElem.children, 0);
        componentFixture.detectChanges();
        expect(multiOneList.length).toBe(2);
        expect(multiTwoList.length).toBe(4);
        expect(multiOneList[0]).toBe('mTwo');
        expect(multiTwoList[0]).toBe('mOne');
        expect(multiTwoList[1]).toBe('mFour');
    });
    it('It should not be possible to move items between lists not in the same sortable-zone', function () {
        var singleList = ['sOne', 'sTwo', 'sThree'];
        var multiOneList = ['mOne', 'mTwo', 'mThree'];
        var multiTwoList = ['mFour', 'mFive', 'mSix'];
        container.singleList = singleList;
        container.multiOneList = multiOneList;
        container.multiTwoList = multiTwoList;
        componentFixture.detectChanges();
        var divElem = componentFixture.elementRef.nativeElement.querySelector('div');
        expect(divElem).toBeDefined();
        expect(divElem.children.length).toBe(3);
        var singleElem = divElem.querySelector('#single ul');
        var multiOneElem = divElem.querySelector('#multiOne ul');
        swapMultiple(singleElem.children, 0, multiOneElem.children, 0);
        componentFixture.detectChanges();
        expect(singleList.length).toBe(3);
        expect(multiOneList.length).toBe(3);
        expect(singleList[0]).toBe('sOne');
        expect(multiOneList[0]).toBe('mOne');
    });
    it('When the list is empty the parent must handle dragenter events', function () {
        var singleList = ['sOne', 'sTwo', 'sThree'];
        var multiOneList = [];
        var multiTwoList = ['mOne', 'mTwo', 'mThree', 'mFour', 'mFive', 'mSix'];
        container.singleList = singleList;
        container.multiOneList = multiOneList;
        container.multiTwoList = multiTwoList;
        componentFixture.detectChanges();
        var divElem = componentFixture.elementRef.nativeElement.querySelector('div');
        expect(divElem).toBeDefined();
        expect(divElem.children.length).toBe(3);
        var multiOneElem = divElem.querySelector('#multiOne');
        var multiTwoUlElem = divElem.querySelector('#multiTwo ul');
        dnd_component_factory_1.triggerEvent(multiTwoUlElem.children[3], 'dragstart', 'MouseEvent');
        dnd_component_factory_1.triggerEvent(multiOneElem, 'dragenter', 'MouseEvent');
        componentFixture.detectChanges();
        expect(multiOneList.length).toBe(1);
        expect(multiTwoList.length).toBe(5);
        expect(multiTwoList[3]).toBe('mFive');
        expect(multiOneList[0]).toBe('mFour');
    });
    it('When the list is NOT empty the parent must NOT handle dragenter events', function () {
        var singleList = ['sOne', 'sTwo', 'sThree'];
        var multiOneList = ['mOne'];
        var multiTwoList = ['mTwo', 'mThree', 'mFour', 'mFive', 'mSix'];
        container.singleList = singleList;
        container.multiOneList = multiOneList;
        container.multiTwoList = multiTwoList;
        componentFixture.detectChanges();
        var divElem = componentFixture.elementRef.nativeElement.querySelector('div');
        expect(divElem).toBeDefined();
        expect(divElem.children.length).toBe(3);
        var multiOneElem = divElem.querySelector('#multiOne');
        var multiTwoUlElem = divElem.querySelector('#multiTwo ul');
        dnd_component_factory_1.triggerEvent(multiTwoUlElem.children[0], 'dragstart', 'MouseEvent');
        dnd_component_factory_1.triggerEvent(multiOneElem, 'dragenter', 'MouseEvent');
        componentFixture.detectChanges();
        expect(multiOneList.length).toBe(1);
        expect(multiTwoList.length).toBe(5);
        expect(multiOneList[0]).toBe('mOne');
        expect(multiTwoList[0]).toBe('mTwo');
    });
});
function swap(nodes, firstNodeId, secondNodeId) {
    swapMultiple(nodes, firstNodeId, nodes, secondNodeId);
}
function swapMultiple(nodesOne, firstNodeId, nodesTwo, secondNodeId) {
    dnd_component_factory_1.triggerEvent(nodesOne[firstNodeId], 'dragstart', 'MouseEvent');
    dnd_component_factory_1.triggerEvent(nodesTwo[secondNodeId], 'dragenter', 'MouseEvent');
}
//# sourceMappingURL=dnd.sortable.spec.js.map
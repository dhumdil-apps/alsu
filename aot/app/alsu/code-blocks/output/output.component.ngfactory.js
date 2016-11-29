/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('../../../../../app/alsu/code-blocks/output/output.component');
var import1 = require('@angular/core/src/change_detection/change_detection');
var import2 = require('@angular/core/src/linker/view');
var import3 = require('@angular/core/src/linker/view_utils');
var import5 = require('@angular/core/src/metadata/view');
var import6 = require('@angular/core/src/linker/view_type');
var import7 = require('@angular/core/src/linker/component_factory');
var import8 = require('./output.css.shim');
var import9 = require('@angular/core/src/linker/view_container');
var import10 = require('../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory');
var import11 = require('@angular/core/src/linker/template_ref');
var import12 = require('@angular/core/src/change_detection/differs/iterable_differs');
var import13 = require('@angular/common/src/directives/ng_for');
var Wrapper_OutputComponent = (function () {
    function Wrapper_OutputComponent() {
        this._changed = false;
        this.context = new import0.OutputComponent();
        this._expr_0 = import1.UNINITIALIZED;
    }
    Wrapper_OutputComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_OutputComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_OutputComponent.prototype.check_outputData = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.outputData = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_OutputComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_OutputComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_OutputComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_OutputComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_OutputComponent;
}());
exports.Wrapper_OutputComponent = Wrapper_OutputComponent;
var renderType_OutputComponent_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
var View_OutputComponent_Host0 = (function (_super) {
    __extends(View_OutputComponent_Host0, _super);
    function View_OutputComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_OutputComponent_Host0, renderType_OutputComponent_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import1.ChangeDetectorStatus.CheckAlways);
    }
    View_OutputComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'output-data', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_OutputComponent0(this.viewUtils, this, 0, this._el_0);
        this._OutputComponent_0_3 = new Wrapper_OutputComponent();
        this.compView_0.create(this._OutputComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._OutputComponent_0_3.context);
    };
    View_OutputComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.OutputComponent) && (0 === requestNodeIndex))) {
            return this._OutputComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_OutputComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._OutputComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    };
    View_OutputComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_OutputComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_OutputComponent_Host0;
}(import2.AppView));
exports.OutputComponentNgFactory = new import7.ComponentFactory('output-data', View_OutputComponent_Host0, import0.OutputComponent);
var styles_OutputComponent = [import8.styles];
var renderType_OutputComponent = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.Emulated, styles_OutputComponent, {});
var View_OutputComponent0 = (function (_super) {
    __extends(View_OutputComponent0, _super);
    function View_OutputComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_OutputComponent0, renderType_OutputComponent, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import1.ChangeDetectorStatus.CheckAlways);
    }
    View_OutputComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'output-data'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new import9.ViewContainer(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import11.TemplateRef_(this, 2, this._anchor_2);
        this._NgFor_2_6 = new import10.Wrapper_NgFor(this._vc_2.vcRef, this._TemplateRef_2_5, this.parentView.injectorGet(import12.IterableDiffers, this.parentIndex), this.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n', null);
        this._text_4 = this.renderer.createText(parentRenderNode, '\n', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3,
            this._text_4
        ]), null);
        return null;
    };
    View_OutputComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import11.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import13.NgFor) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6.context;
        }
        return notFoundResult;
    };
    View_OutputComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.context.outputData;
        this._NgFor_2_6.check_ngForOf(currVal_2_0_0, throwOnChange, false);
        this._NgFor_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_OutputComponent0.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_OutputComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_OutputComponent1(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_OutputComponent0;
}(import2.AppView));
exports.View_OutputComponent0 = View_OutputComponent0;
var View_OutputComponent1 = (function (_super) {
    __extends(View_OutputComponent1, _super);
    function View_OutputComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_OutputComponent1, renderType_OutputComponent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import1.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_2 = import1.UNINITIALIZED;
    }
    View_OutputComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'output-data__row'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_OutputComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = import3.inlineInterpolate(1, '', this.context.$implicit, '');
        if (import3.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_OutputComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_OutputComponent1;
}(import2.AppView));
//# sourceMappingURL=output.component.ngfactory.js.map
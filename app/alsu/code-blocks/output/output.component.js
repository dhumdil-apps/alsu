"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var OutputComponent = (function () {
    function OutputComponent() {
    }
    OutputComponent.prototype.ngOnInit = function () {
        this.evaluateExpression();
    };
    OutputComponent.prototype.evaluateExpression = function () {
        var blocks = this.outputData;
        var result = [];
        var geval = eval;
        var param = { "key": '', "val": null };
        var vars = [{ '': null }];
        try {
            blocks.forEach(function (block) {
                if (block.type === 'assign') {
                    if (isValidEqual(block.data)) {
                        param.key = leftSide(block.data);
                        param.val = rightSide(block.data);
                        if (!param.val.length) {
                            console.log('No params on right side!');
                            result.push('Syntax error!');
                            return;
                        }
                        else if (!isKey(param.key)) {
                            vars.push(createVar(param.key));
                            console.log("Created new variable");
                        }
                        vars[isKey(param.key)].val = geval(param.val);
                    }
                    else {
                        // check for ++/-- || function call
                        console.log('single param in assign block!');
                        result.push('Syntax error!');
                    }
                }
                if (block.type === 'write') {
                    param.key = block.data.trim();
                    for (var i = 0; i < vars.length; i++) {
                        if (vars[i].key === param.key) {
                            result.push(geval(vars[i].val));
                            return;
                        }
                    }
                    result.push(block.data);
                }
            });
            console.log(vars);
            this.outputData = result;
        }
        catch (error) {
            console.log(error);
            this.outputData = [error];
        }
        function isValidEqual(str) {
            return (str.trim() === '=') ? 0 : (str.trim().match(/=/g) || []).length;
        }
        function createVar(str) {
            return { key: str, val: null };
        }
        function isKey(key) {
            for (var i = 0; i < vars.length; i++) {
                if (vars[i].key === key) {
                    return i;
                }
            }
            return 0;
        }
        function leftSide(key) {
            key = key.substring(0, key.indexOf('=')).trim();
            if ((key.match(/ /g) || []).length) {
                result.push('Syntax error! (more than one parameter on left side)');
                return '';
            }
            var words = key.match(/\w/g);
            if (words !== null) {
                if (key.length > words.length) {
                    result.push('possible binary operations)');
                    return '';
                }
            }
            return key;
        }
        function rightSide(val) {
            val = val.substring(val.indexOf('=') + 1, val.length).trim();
            if ((val.match(/ /g) || []).length) {
                // console.log("More than one param on right side");
                var paramerters = val.split(' ');
                paramerters.forEach(function (paramerter) {
                    // console.log('paramerter', paramerter);
                    var digits = paramerter.match(/\d/g);
                    var words = paramerter.match(/\w/g);
                    // console.log('all digits', digits === null);
                    // console.log('all words', words !== null);
                    if (words !== null && digits === null) {
                        // console.log('words.length === paramerter.length', words.length === paramerter.length);
                        if (words.length === paramerter.length) {
                            var i = isKey(paramerter);
                            if (vars[i].val === null) {
                                // console.log("paramerter not found || isn't initialized");
                                return '';
                            }
                            else {
                                // console.log(vars[i].key, "=>", vars[i].val);
                                // buggy... but for now it's enought
                                val = val.split(vars[i].key).join(vars[i].val);
                            }
                        }
                    }
                });
            }
            return val;
        }
    };
    return OutputComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], OutputComponent.prototype, "outputData", void 0);
OutputComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'output-data',
        templateUrl: './output.html',
        styleUrls: ['./output.css']
    }),
    __metadata("design:paramtypes", [])
], OutputComponent);
exports.OutputComponent = OutputComponent;
//# sourceMappingURL=output.component.js.map
import { Component, Input } from '@angular/core';
import {isBoolean} from "util";

@Component({
    moduleId: module.id,
    selector: 'output-data',
    templateUrl: './output.html',
    styleUrls: ['./output.css']
})

export class OutputComponent {

    @Input() outputData: any;

    ngOnInit() {
        this.evaluateExpression();
    }

    evaluateExpression(): void {

        let blocks : any = this.outputData;
        let result: any = [];
        let geval = eval;
        let param: any = {"key": '', "val": null};
        let vars: any = [{'':null}];

        try {
            blocks.forEach( block => {

                if ( block.type === 'assign' ) {

                    if ( isValidEqual(block.data) ) {

                        param.key = leftSide(block.data);
                        param.val = rightSide(block.data);

                        if ( !param.val.length ) {
                            console.log('No params on right side!');
                            result.push('Syntax error!');
                            return;
                        } else if ( !isKey(param.key) ) {
                            vars.push(createVar(param.key));
                            console.log("Created new variable");
                        }

                        vars[isKey(param.key)].val = geval(param.val);

                    } else {
                        // check for ++/-- || function call
                        console.log('single param in assign block!');
                        result.push('Syntax error!');
                    }

                }

                if ( block.type === 'write' ) {

                    param.key = block.data.trim();

                    for ( let i = 0; i < vars.length; i++ ) {
                        if ( vars[i].key === param.key ) {
                            result.push(geval( vars[i].val ));
                            return;
                        }
                    }

                    result.push( block.data );
                }

            });

            console.log( vars );
            this.outputData = result;

        } catch (error) {
            console.log(error);
            this.outputData = [error];
        }

        function isValidEqual(str: string): number {
            return (str.trim() === '=') ? 0 : (str.trim().match(/=/g) || []).length;
        }
        function createVar(str: string): any {
            return { key: str, val: null };
        }
        function isKey(key: string): number {
            for ( let i = 0; i < vars.length; i++ ) {
                if ( vars[i].key === key ) {
                    return i;
                }
            }
            return 0;
        }
        function leftSide(key: string): string {

            key = key.substring(0, key.indexOf('=')).trim();

            if ( (key.match(/ /g) || []).length ) {
                result.push('Syntax error! (more than one parameter on left side)');
                return '';
            }

            return key;
        }
        function rightSide(val: string): string {

            val = val.substring(val.indexOf('=')+1, val.length).trim();

            if ( (val.match(/ /g) || []).length ) {
                console.log("More than one param on right side");

                let paramerters: any = val.split(' ');

                paramerters.forEach(paramerter => {

                    let i: number;
                    if ( paramerter.match(/\W/g) !== null
                        && paramerter.match(/\W/g).length === 0 //  non-word characters
                        && paramerter.match(/\d/g) !== null
                        && paramerter.match(/\d/g).length !== paramerter.length) { // digit
                        i = isKey(paramerter);
                        if ( vars[i].val === null ) {
                            console.log("not found || isn't initialized");
                            return '';
                        } else {
                            console.log(vars[i].key, "=>" ,vars[i].val);
                            val.replace(vars[i].key, vars[i].val);
                        }
                    }

                    console.log( paramerter );
                });
            }
            return val;
        }
    }

}

// box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
// transition: background-color .3s,color .15s,box-shadow .3s,opacity 0.3s,filter 0.3s;

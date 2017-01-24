import { Component, Input } from '@angular/core';

@Component({
    selector: 'alsu-output',
    templateUrl: './alsu-output.html',
    styleUrls: ['./alsu-output.css']
})

export class AlsuOutputComponent {

    @Input() output: any;

    ngOnInit() {
        this.evaluateExpression();
    }

    // demo only (eval is evil)
    evaluateExpression(): void {

        let blocks : any = this.output ;
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
            this.output = result;

        } catch (error) {
            console.log(error);
            this.output = [error];
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

            let words: any = key.match(/\w/g);
            if ( words !== null ) {
                if ( key.length > words.length) {
                    result.push('possible binary operations)');
                    return '';
                }
            }

            return key;
        }
        function rightSide(val: string): string {

            val = val.substring(val.indexOf('=')+1, val.length).trim();

            if ( (val.match(/ /g) || []).length ) {
                // console.log("More than one param on right side");

                let paramerters: any = val.split(' ');

                paramerters.forEach(paramerter => {

                    // console.log('paramerter', paramerter);

                    let digits: any = paramerter.match(/\d/g);
                    let words: any = paramerter.match(/\w/g);
                    // console.log('all digits', digits === null);
                    // console.log('all words', words !== null);

                    if ( words !== null && digits === null ) {

                        // console.log('words.length === paramerter.length', words.length === paramerter.length);

                        if ( words.length === paramerter.length ) {
                            let i: number = isKey(paramerter);

                            if ( vars[i].val === null ) {
                                // console.log("paramerter not found || isn't initialized");
                                return '';
                            } else {
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

    }

}

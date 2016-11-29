import { Component, Input } from '@angular/core';

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

        try {

            let result: any = [];
            let geval = eval;

            let key: string = "",
                value: string = "";

            // array of values...
            let vars: any = [];
            vars.push(createVar('x'));


            blocks.forEach( block => {

                if ( block.type === 'assign' ) {

                    if ( isValidEqual(block.data) ) {

                        key = block.data.substring(0, block.data.indexOf('=')).trim();

                        let n: number = vars.length,
                            i: number;
                        let found: boolean = false;

                        for ( i = 0; i < n; i++ ) {
                            if ( vars[i].key === key ) {
                                found = true;
                                break;
                            }
                        }
                        if ( !found ) {
                            vars.push(createVar( key ));
                        }

                        if ( (key.match(/ /g) || []).length ) {
                            result.push('Syntax error!');
                            return;
                        }

                        value = block.data.substring(block.data.indexOf('=')+1, block.data.length);

						// check if there are varibles on the right!
                        // for ( i = 0; i < n; i++ ) {
                        //     if ( vars[i].key === key ) {
                        //         vars[i].value = geval(value);
                        //         return;
                        //     }
                        // }

                        for ( i = 0; i < n; i++ ) {
                            if ( vars[i].key === key ) {
                                vars[i].value = geval(value);
                                return;
                            }
                        }

                    } else {
                        result.push('Syntax error!');
                    }

                }

                if ( block.type === 'write' ) {

                    key = block.data.trim();

                    let n: number = vars.length,
                        i: number;
                    for ( i = 0; i < n; i++ ) {
                        if ( vars[i].key === key ) {
                            result.push(geval( vars[i].value ));
                            return;
                        }
                    }

                    result.push( block.data );
                }

            });

            console.log( vars );

            this.outputData = result;
        } catch (error) {
            // generic catch all errors and spit them out
            this.outputData = [error];
        }

        function isValidEqual(str: string): number {
            return (str.match(/=/g) || []).length;
        }

        function createVar(str: string): any {
            return { key: str, value: 0 };
        }

    }

}

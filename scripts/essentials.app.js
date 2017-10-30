var essentialsApp = angular.module( 'essentialsApp', [] );

Array.prototype.sumProperty = function( property ){
    let total=0;
    for( let i=0; i<this.length; i++ ){
        total+=this[ i ][ property ];
    } // end for
    return total;
} //end sumProperty
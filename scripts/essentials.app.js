var essentialsApp = angular.module( 'essentialsApp', [] );

Array.prototype.sumProperty = function( property ){
    var total=0;
    for( var i=0; i<this.length; i++ ){
        total+=this[ i ][ property ];
    } // end for
    return total;
} //end sumProperty
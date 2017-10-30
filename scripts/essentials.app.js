var essentialsApp = angular.module( 'essentialsApp', [] );

Array.prototype.sumProperty = function( prop ){
    var total = 0
    for( var i = 0; i < this.length; i++ ){
        total += this[i][prop]
    }
    return total
}
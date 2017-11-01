essentialsApp.controller( 'NamesController', function( $http ){
    let vm = this;
    vm.firstNames = []; // end firstNames
    vm.lastNames = []; // end lastNames
    
    vm.addName = () => {
        if( vm.firstNameIn ){
            if( vm.firstNames.indexOf( vm.firstNameIn ) < 0 ) vm.firstNames.push( vm.firstNameIn );
            else alert( 'First name not added: duplicate' );
        } // end first name add
        if( vm.lastNameIn ){
            if( vm.lastNames.indexOf( vm.lastNameIn ) < 0 ) vm.lastNames.push( vm.lastNameIn );
            else alert( 'Last name not added: duplicate' );
        } // end last name add
        vm.firstNameIn = '';
        vm.lastNameIn = '';
    } //end addName

    vm.emptyNames = ( first ) => {
        if( first ) vm.firstNames = [];
        else vm.lastNames = [];
    } // end emptyNames

    vm.generateName = () => {
        if( vm.firstNames.length > 0 && vm.lastNames.length > 0 ) vm.generatedName = vm.firstNames[ Math.floor( Math.random() * vm.firstNames.length ) ] + ' ' + vm.lastNames[ Math.floor( Math.random() * vm.lastNames.length ) ];
        else vm.generatedName = '';
    } // end generateName

    vm.getNamesFromFile = () => {
        $http.get( './scripts/data/names.json' )
        .success( function( data ){
            vm.firstNames = data.firstNames;
            vm.lastNames = data.lastNames;
        }) //end success
        .error( function( data ){
            console.log( 'unable to load names from json' );
        }); // end error
    }

    vm.removeName = ( firstName, index ) => {
        if( firstName ) vm.firstNames.splice( index, 1 );
        else vm.lastNames.splice( index, 1 );
    } // end removeName

    // init
    vm.getNamesFromFile();

}); //end controller
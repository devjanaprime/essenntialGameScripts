essentialsApp.controller( 'NamesController', function(){
    let vm = this;
    vm.firstNames = [ 'Dev', 'Krystal', 'John', 'Phil', 'Reena', 'Anjie', 'Matt', 'Karl', 'Steve' ]; // end firstNames
    vm.lastNames = [ 'Jana', 'Frauendienst', 'Hirsch', 'Razanauskus', 'Chludzinski', 'Marshall', 'Towns', 'Wiggins', 'Butler', 'Nash' ]; // end lastNames
    
    vm.addName = () => {
        if( vm.firstNameIn ){
            console.log( vm.firstNames.indexOf( vm.firstNameIn ) );
            if( vm.firstNames.indexOf( vm.firstNameIn ) < 0 ){
                vm.firstNames.push( vm.firstNameIn );
            } // end dupe check
            else{
                alert( 'First name not added: duplicate' );
            } //end first name dupe
        } // end first name add
        if( vm.lastNameIn ){
            console.log( vm.firstNames.indexOf( vm.lastNameIn ) );
            if( vm.lastNames.indexOf( vm.lastNameIn ) < 0 ){
                vm.lastNames.push( vm.lastNameIn );
            } // end dupe check
            else{
                alert( 'Last name not added: duplicate' );
            } // end last name dupe
        } // end last name add
        vm.firstNameIn = '';
        vm.lastNameIn = '';
    } //end addName

    vm.generateName = () => {
        vm.generatedName = vm.firstNames[ Math.floor( Math.random() * vm.firstNames.length ) ] + ' ' + vm.lastNames[ Math.floor( Math.random() * vm.lastNames.length ) ];
    } // end generateName
}); //end controller
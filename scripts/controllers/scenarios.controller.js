essentialsApp.controller( 'ScenariosController', function( $http ){
    let vm = this;
    vm.settings = []; // end settings
    vm.objectives = []; // end objectives
    vm.antagonists = []; // end antagonists
    vm.complications = []; // end complications
    
    vm.addScenario = () => {
        if( vm.settingsIn ){
            if( vm.settings.indexOf( vm.settingsIn ) < 0 ) vm.settings.push( vm.settingsIn );
            else alert( 'settings not added: duplicate' );
        } // end setting add
        if( vm.objectivesIn ){
            if( vm.objectives.indexOf( vm.lastNameIn ) < 0 ) vm.objectives.push( vm.objectivesIn );
            else alert( 'objective not added: duplicate' );
        } // end objective add
        if( vm.antagonistsIn ){
            if( vm.antagonists.indexOf( vm.antagonistsIn ) < 0 ) vm.antagonists.push( vm.antagonistsIn );
            else alert( 'objective not added: duplicate' );
        } // end objective add
        if( vm.complicationsIn ){
            if( vm.complications.indexOf( vm.complicationsIn ) < 0 ) vm.complications.push( vm.complicationsIn );
            else alert( 'objective not added: duplicate' );
        } // end objective add
        vm.settingsIn = '';
        vm.objectivesIn = '';
        vm.antagonistsIn = '';
        vm.complicationsIn = '';
    } //end addScanrios

    vm.emptyScenario = ( type ) => {
        if( type === 0 ) vm.settings = [];
        else if( type === 1 ) vm.objectives = [];
        else if( type === 2 ) vm.antagonists = [];
        else if( type === 3 ) vm.complications = [];
    } // end emptyScenario

    vm.generateScenario = () => {
        if( vm.settings.length > 0 && vm.objectives.length > 0 && vm.antagonists.length > 0 && vm.complications.length > 0 ){
            vm.generatedScenario = vm.settings[ Math.floor( Math.random() * vm.settings.length ) ] + '. ';
            vm.generatedScenario +=  vm.objectives[ Math.floor( Math.random() * vm.objectives.length ) ] + '. ';
            vm.generatedScenario +=  vm.antagonists[ Math.floor( Math.random() * vm.antagonists.length ) ] + '. ';
            vm.generatedScenario +=  vm.complications[ Math.floor( Math.random() * vm.complications.length ) ] + '.';
        } // end all good
        else{
            vm.generatedScenario = '';
        } // empty b/c insufficient input
    } // end generateScenario

    vm.getScenariosFromFile = () => {
        $http.get( './scripts/data/scenarios.json' )
        .success( function( data ){
            vm.settings = data.settings;
            vm.objectives = data.objectives;
            vm.antagonists = data.antagonists;
            vm.complications = data.complications;
        }) //end success
        .error( function( data ){
            console.log( 'unable to load scenarios from json' );
        }); // end error
    } // end get scenarios from file

    vm.removeScenario = ( type, index ) => {
        if( type === 0 ) vm.settings.splice( index, 1 );
        else if( type === 1 ) vm.objectives.splice( index, 1 );
        else if( type === 2 ) vm.antagonists.splice( index, 1 );
        else if( type === 3 ) vm.complications.splice( index, 1 );
    } // end removeScenario

    // init
    vm.getScenariosFromFile();

}); //end controller
essentialsApp.controller( 'ScenariosController', function( $http ){
    let vm = this;
    vm.settings = []; // end settings
    vm.objectives = []; // end objectives
    vm.antagonists = []; // end antagonists
    vm.complications = []; // end complications
    
    const SETTINGS = 0;
    const OBJECTIVES = 1;
    const ANTAGONISTS = 2;
    const COMPLICATIONS = 3;

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
        if( type === SETTINGS ) vm.settings = [];
        else if( type === OBJECTIVES ) vm.objectives = [];
        else if( type === ANTAGONISTS ) vm.antagonists = [];
        else if( type === COMPLICATIONS ) vm.complications = [];
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

    vm.getDefaultScenarios = () => {
        vm.settings = [
            'You wake up lost in the woods',
            'Looking down on the town from the tower, you realize what must be done',
            'Trapped, you suddenly find it hard to breathe'
        ],
        vm.objectives = [
            'You know you have to get to New York',
            'Someone must deliver the message',
            'Time is running out to make things right with Donny'
        ],
        vm.antagonists = [
            'You can hear the barking of dogs',
            'The ogres are eating just beyond the wall',
            'Hopefully the dolls won\'t wake up and attack again'
        ],
        vm.complications = [
            'You are cold, shivering, and without a weapon',
            'The spoon is still bent',
            'Your sword is blunt and your friends are missing'
        ]
    } // end getDefaultScenarios

    vm.removeScenario = ( type, index ) => {
        if( type === SETTINGS ) vm.settings.splice( index, 1 );
        else if( type === OBJECTIVES ) vm.objectives.splice( index, 1 );
        else if( type === ANTAGONISTS ) vm.antagonists.splice( index, 1 );
        else if( type === COMPLICATIONS ) vm.complications.splice( index, 1 );
    } // end removeScenario

    // init
    vm.getDefaultScenarios();

}); //end controller
essentialsApp.controller( 'PageController', function(){
    let vm = this;
    vm.views = [ false, false, false, false ];

    vm.toggleView = ( viewIndex ) => {
        vm.views[ viewIndex ] = !vm.views[ viewIndex ];
    } //end setView
}); //end pageController
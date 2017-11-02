// basic cards roller
// last modified 10-29-2017
essentialsApp.controller( 'CardsController', function(){
    let vm = this;
    vm.deck = [];
    vm.drawnHand = [];

    vm.calculateBlackjackTotal = () =>{
        if( vm.drawnHand.length < 1 ){
            vm.drawnHandBlackjackTotal = 0;
        } // end empty hand
        else{
            let aces = [];
            for( let i=0; i< vm.drawnHand.length; i++ ){
                if( vm.drawnHand[ i ].value === 1 ) aces.push( vm.drawnHand[ i ] );
            } //end search for aces
            if( aces.length > 0 && vm.lowAces ) vm.drawnHandBlackjackTotal = vm.drawnHand.sumProperty( 'blackJackValue' ) - aces.length * 10;
            else vm.drawnHandBlackjackTotal = vm.drawnHand.sumProperty( 'blackJackValue' );
        } // end holding cards
    } // end calculateBlackjackTotal

    vm.drawCard = ( index ) =>{
        vm.drawnHand.push( vm.deck[ index ] );
        vm.deck.splice( index, 1 );
        vm.calculateBlackjackTotal();
    } // end draw card

    vm.drawRandom = () =>{
        vm.drawCard( Math.floor( Math.random() * vm.deck.length ) );
        vm.calculateBlackjackTotal();
    } // end draw from top

    vm.drawFromEnd = ( top ) =>{
        if( top ) vm.drawCard( 0 );
        else vm.drawCard( vm.deck.length-1 );
        vm.calculateBlackjackTotal();
    } // end draw from end

    vm.returnCard = ( index ) =>{
        vm.deck.unshift( vm.drawnHand[ index ] );
        vm.drawnHand.splice( index, 1 );
        vm.calculateBlackjackTotal();
    } //end return card

    vm.setupDeck = () =>{
        let suits = [ 'Clubs', 'Diamonds', 'Hearts', 'Spades' ];
        let faces = [ 'Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King' ];
        for( let i=0; i< suits.length; i++ ){
            for( let j=0; j<faces.length; j++ ){
                vm.deck.push( new Card( suits[ i ], faces[ j ], j+1 ) );
            } //end faces loop
            j=0;
        } // end suits loop
    } // end setup deck

    vm.shuffleDeck = () => {
        vm.deck = shuffle( vm.deck );
    } // end shuffleDeck

    // init
    vm.setupDeck();
    vm.calculateBlackjackTotal();
}); //end controller

class Card{
    constructor( suit, face, value ){
        this.suit = suit;
        this.face = face;
        this.value = value;
        if( value > 10 ){
            this.blackJackValue = 10;
        }
        else if( value === 1 ){
            this.blackJackValue = 11;
        }
        else{
            this.blackJackValue = value;
        }
    }
    display(){
        return this.face + ' of ' + this.suit;
    }
} // end card class

let shuffle = ( array ) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while( 0 !== currentIndex ){
      randomIndex = Math.floor( Math.random() * currentIndex );
      currentIndex -= 1;
      temporaryValue = array[ currentIndex ];
      array[ currentIndex ] = array[ randomIndex ];
      array[ randomIndex ] = temporaryValue;
    }
    return array;
  } // end shuffle
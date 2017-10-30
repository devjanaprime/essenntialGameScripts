// basic dice roller
// last modified 10-29-2017
essentialsApp.controller( 'DiceController', function(){
    let vm = this;

    this.rollDice = () => {
        this.rolls = [];
        let result = 0;
        for( let i=0; i< this.numDice; i++ ){
            this.rolls.push( { value: 1 + Math.floor( Math.random() * this.sides ), index: i } );
            this.answer = this.rolls.sumProperty( 'value' );
        } // end for
    } // end rollDice
}); //end controller
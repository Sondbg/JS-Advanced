function printDeckOfCards(cards){
    let invalidCards=[];
    let deck=[];
cards.forEach(x=>{
    let face=x.slice(0,-1);
    let suit=x.slice(-1);
    try{
       deck.push(playingCards(face,suit).toString());
    }catch(e){
     console.log(`Invalid card: ${x}`)

    }
}
    )
console.log(deck.join(' '));
    function playingCards(face,suit){
        let faceArr=['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
        let suitObj={
            'S':'\u2660',
            'H':'\u2665',
            'D':'\u2666',
            'C':'\u2663'
        }
        if(!(faceArr.includes(face) 
        && 
        suitObj.hasOwnProperty(suit))){
            throw new Error
        }
        var card={
            'face':face,
            'suit':suitObj[suit],
            toString(){
              return this.face+this.suit;   
            }
            }
        
        
        return card
        }  
}
printDeckOfCards(['5S', '3D', 'QD', '1C'])

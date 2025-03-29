/*
   :Description
for given array with prices of 5 items -> [250,645,300,900,50]
all items have an offer of 10% off on them . change the array to store final price after applying offer.
 ## formula of find discount 
     20% discount / 100 ;
     sale price $100*0.2 = $20
       $100-$20 = $80;
*/

 // 5 items
 let items = [250,645,300,900,50];

  console.log(`origenal price ${items}`);
   
    let discount = 10;

  console.log(` \t\t\tAfter applying offer ${discount}%`);

 let offer;
 let indx = 1;

for(let i = 0;i < items.length; i++ ){
    offer = items[i] * discount / 100 ;
      items[i] = items[i] - offer;
      console.log(`${discount}% of discount ${indx} items ${items[i]}`);
                  indx++
} 
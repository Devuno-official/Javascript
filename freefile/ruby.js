

// Function expect banao jo ek value val le.
// expect ke andar ek object return karo jisme do methods hon:
// toBe(compareVal)
// notToBe(compareVal)
// toBe ka logic:
// Check karo agar val === compareVal hai → to true return karo.
// Agar equal na ho → error throw karo "Not Equal".\
// notToBe ka logic:
// Check karo agar val !== compareVal hai → to true return karo.
// Agar equal ho → error throw karo "Equal".
// Ye pura kaam isliye possible hai kyunki tum expect ke return object me dono methods define karoge,
//  aur wo methods val ka access le sakte hain (closure ke through).
// Boss simple soch:
// expect ek test box hai, us box me tum ek value rakhte ho.
// toBe aur notToBe us box ko check karte hain.
// Equal hua to OK, nahi hua to error ya opposite check fail.


// *Input: func = () => expect(5).toBe(5)
// *Output: {"value": true}
// *Explanation: 5 === 5 so this expression returns true.

 function expect(val){
  let obj = {
    toBe(compareVal){
       if (val === compareVal) {
            return true;
       }else{
         throw new Error("Not Equal");
      }
    },
    NotToBe(compareVal){
       if (val !== compareVal) {
          return true;
       }else{
        throw new Error("Equal");
      }

    }
  }

  return obj;

}


 try {
   expect(5).toBe(5);
 } catch (error) {
    console.log("error");
 }

try {
   expect(5).notToBe(6);
} catch (error) {
   console.log("error2");
}




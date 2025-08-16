 let addNote = document.getElementById("addBtn");

addNote.addEventListener("click",function(event){
     event.preventDefault();
     let NoteDiolog= document.getElementById("diolog");
         if(NoteDiolog.style.display === 'none'){
               NoteDiolog.style.display = 'flex';
         }else{
          NoteDiolog.style.display = 'none';
         }
     document.getElementById("cancelBtn").addEventListener("click",()=>{
  if(NoteDiolog.style.display === 'flex') 
     NoteDiolog.style.display = 'none';
});
    saveNoteProcess(NoteDiolog);
     return;    
});


        let applyBtn =  document.getElementById("applyBtn");
 function saveNoteProcess(NoteDiolog){
     let text = document.getElementById("Textarea");

      applyBtn.addEventListener("click",(event)=>{    
       let note = document.createElement("div");
       document.getElementById("notes").appendChild(note);
        note.classList.add("task");
      let trimText = text.value.trim();
          note.innerText = trimText;
         text.value ="";
     NoteDiolog.style.display = "none";

     note.forEach((singlenote) => {
          if(singlenote.value ===""){
               singlenote.remove();
          }
     });
        
 });
           return;   
 }


 applyBtn.addEventListener("ketpress",(event)=>{
       if(event.key === "Enter"){
          saveNoteProcess();
       }
 });
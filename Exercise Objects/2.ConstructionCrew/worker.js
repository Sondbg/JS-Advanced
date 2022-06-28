function worker(objInput){
if(objInput.dizziness==true){
    objInput.levelOfHydrated+=0.1*objInput.weight*objInput.experience;
    objInput.dizziness=false
}
return objInput;
}
worker({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
  
  )
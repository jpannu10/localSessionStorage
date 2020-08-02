window.onload = function () {
    console.log("LIVE")


    // toggling between session/local
    let localStorageOption = document.querySelector('#localStorageOption');
    let sessionStorageOption = document.querySelector('#sessionStorageOption');

    // selecting key and value.
    let Inputkey = document.querySelector('.key');
    let Inputvalue = document.querySelector('.value');
    let btn = document.querySelector('.btn');

    //finding value through key 1.
    let outputInput = document.querySelector('.inputOutput');
    let outputBtn = document.querySelector('.outputBtn');
    let outputResult = document.querySelector('.outputResult');

    let btnClear = document.querySelector('.clearsessionStorage');

    let addDataHere = document.querySelector('.addDataHere');


    //output variables
    let localSpaceOutput = document.querySelector('.localSpaceOutput');
    let sessionSpaceOutput = document.querySelector('.sessionSpaceOutput');


    let storageType,containerStorage;

// updating
btn.addEventListener('click',addingKeyAndValue);


// searching
//outputBtn.addEventListener('click', findingValue );


//checking both the checkboxes.
//storageType = sessionStorage;

function addingKeyAndValue(){

if(localStorageOption.checked) {
  storageType = localStorage;
}else {
  storageType = sessionStorage;
}

  console.log("Type : ",storageType);
  if( Inputkey.value.length > 0 && Inputvalue.value.length > 0 ) {
  
     storageType.setItem(Inputkey.value , Inputvalue.value);

  }


// clear Inputs.
  Inputkey.value = '';
  Inputvalue.value = '';
  location.reload();
}

function findingValue(){
  outputResult.innerHTML = storageType.getItem(outputInput.value);
  }



//displaying tab.
  for ( let i = 0 ; i < localStorage.length; i++) {
    let localKeys = localStorage.key(i);
    let localVal =   localStorage.getItem(localKeys);
    localSpaceOutput.innerHTML +=  "<br> <span class='keyStyle'>" + localKeys+ "</span> <span class='valStyle'>  " + " : " + localVal + "</span>";
  }
  
  for ( let i = 1 ; i < sessionStorage.length ; i++) {
    let localKeys = sessionStorage.key(i);
    let localVal =   sessionStorage.getItem(localKeys);
    sessionSpaceOutput.innerHTML +=  "<br> <span  class='keyStyle'>" + localKeys + "</span> <span class='valStyle'> " + " : " + localVal+ "</span>";
  }



// storageDisplay(localStorage, localSpaceOutput , localStorage.length );
// storageDisplay(sessionStorage, sessionSpaceOutput , sessionStorage.length );



let resetLocalBtn = document.querySelector(".resetLocalBtn");
resetLocalBtn.addEventListener('click',function(){
  localStorage.clear();
  location.reload();
})


//sessionReset;
let resetSessionBtn = document.querySelector(".resetSessionBtn");
resetSessionBtn.addEventListener('click',function(){
  sessionStorage.clear();  
  location.reload();
})


//complete Reset
let clearLocalStorage = document.querySelector(".clearLocalStorage");
clearLocalStorage.addEventListener('click',function(){
  sessionStorage.clear();  
  localStorage.clear();
  location.reload();

})





}



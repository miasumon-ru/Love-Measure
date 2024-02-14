

function getInputElementById (elementId){
    const element = document.getElementById(elementId);

     const name = element.value;
     element.value = ''
     return name ;
}
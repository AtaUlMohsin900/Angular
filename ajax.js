console.log("Ajx tutorial in One video");


let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',buttonClickHandler)

function buttonClickHandler(){
    console.log('You have clicked the fetchBtn');
    // instanliate an xhr object
    const xhr = new XMLHttpRequest();
    // open the object
   xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1',true);
   
//    what to do on prograss(optional)
xhr.onprogress = function(){

console.log('on progress');
}
xhr.onreadystatechange = function(){
    console.log('ready state is',xhr.readyState);
}
// what to do when reponse ready
xhr.onload = function() {
    if(this.status === 200){
        
 console.log(this.responseText)
    }

else{
    console.log('some error occured')
}
}
// send the request
xhr.send();

};

function display_date(){
    document.getElementById("changedate").innerHTML =Date();

};


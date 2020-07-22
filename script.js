//Global Variable Declaration
const phoneValueId=document.getElementById('phoneValue');
var  fixPhoneVal=parseInt(phoneValueId.innerText);

const coverValueId=document.getElementById('coverValue');
var  fixCoverVal=parseInt(coverValueId.innerText);

const subtotalId=document.getElementById('subtotal');
var subtotal=parseInt(subtotalId.innerText);

const totalId=document.getElementById('total');
var total=parseInt(totalId.innerText);

//plus Phone Button Handler
document.getElementById('plusPhoneBtn').addEventListener("click",()=>{
  
 let val=modifyAmount('phoneInput',1,fixPhoneVal);
 phoneValueId.innerText=val;
 
 totalId.innerText=subtotalId.innerText=(subtotal+=fixPhoneVal);
 
});

// minus Phone Button handler
document.getElementById('minusPhoneBtn').addEventListener("click",()=>{
  let val=modifyAmount('phoneInput',-1,fixPhoneVal);
  phoneValueId.innerText=val;

  totalId.innerText=subtotalId.innerText=(subtotal-=fixPhoneVal);
 
});

//plus Cover Button Handler
document.getElementById('plusCoverBtn').addEventListener("click",()=>{
  
  let val=modifyAmount('coverInput',1,fixCoverVal);
  coverValueId.innerText=val;

  totalId.innerText=subtotalId.innerText=(subtotal+=fixCoverVal);  
 });

 //minus Cover Button Handler
 document.getElementById('minusCoverBtn').addEventListener("click",()=>{
  
  let val=modifyAmount('coverInput',-1,fixCoverVal);
  coverValueId.innerText=val;

  totalId.innerText=subtotalId.innerText=(subtotal-=fixCoverVal);
 });


const modifyAmount=(inputId,Num,fixVal)=>{
    const input=document.getElementById(inputId);
    let quantity=parseInt(input.value);
    input.value=(quantity+=Num);
    
    return (fixVal*quantity);
  }


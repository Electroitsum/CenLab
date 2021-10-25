const image = document.querySelector('nav');
console.log("start");
const button = document.getElementById('btn2');
const body = document.getElementsByTagName('body');
body[0].style.backgroundColor = 'white';
const addbtn = document.getElementById('adbtn');
const rmbtn = document.getElementById('rembtn');
const addsub = document.getElementById('addsb');
const rmsub = document.getElementById('addsb2');
let page = null;
let id = 0;

let idlist = [];
let candidate = {
   name:"",
   date:"",
   address:""
};


document.getElementById('btn2').addEventListener('click', () => {
document.querySelector(".sum").style.backgroundColor = document.querySelector(".sum").style.backgroundColor === 'gray'?'green':'gray';
button.innerText = button.innerText === 'Dark'? 'Light':'Dark';
button.style.backgroundColor = button.style.backgroundColor === 'gray'? 'green':'gray';

document.querySelector('.mcon').style.backgroundColor = document.querySelector('.mcon').style.backgroundColor === 'black'? 'white':'black';
body[0].style.backgroundColor = body[0].style.backgroundColor === 'black'? 'white':'black';

document.getElementById('rembtn').style.backgroundColor = document.getElementById('rembtn').style.backgroundColor === 'gray'? 'black':'gray';
document.getElementById('adbtn').style.backgroundColor = document.getElementById('adbtn').style.backgroundColor === 'gray'? 'black':'gray';


})

addbtn.addEventListener('click', () => {

const page1 = document.getElementById('add-frm');
const page2 = document.querySelector('.back');
page1.classList.toggle('add_frm1');
page2.classList.toggle('back1');

page = 0;



});

rmbtn.addEventListener('click', () => {

   const page1 = document.getElementById('rfrmid');
   const page2 = document.querySelector('.back');
   page1.classList.toggle('rfrm1');
   page2.classList.toggle('back1');

   page = 1;
   
   
   
   });

document.getElementById('backk').addEventListener('click', () => {
   if(page === 0){
   const page1 = document.getElementById('add-frm');
   const page2 = document.querySelector('.back');
   console.log('hj')
   page1.classList.toggle('add_frm1');
   page2.classList.toggle('back1');
}
else if(page === 1){
   const page6 = document.getElementById('rfrmid');
   const page2 = document.querySelector('.back');
   page6.classList.toggle('rfrm1');
   page2.classList.toggle('back1');
}

})

function cls(){
   if(page === 0){
      const page1 = document.getElementById('add-frm');
      const page2 = document.querySelector('.back');
      console.log('hj')
      page1.classList.toggle('add_frm1');
      page2.classList.toggle('back1');
   }
   else if(page === 1){
      const page6 = document.getElementById('rfrmid');
      const page2 = document.querySelector('.back');
      page6.classList.toggle('rfrm1');
      page2.classList.toggle('back1');
   }
}

document.getElementById('cancl').addEventListener('click', cls);
document.getElementById('cancl2').addEventListener('click', cls);


addsub.addEventListener('click', () => {

   const card = document.createElement('article');
   const spn1 = document.createElement('span');
   const spn2 = document.createElement('span');
   const spn = document.getElementById('crconid').appendChild(card);
   const span1 = spn.appendChild(spn1);
   const span2 = spn.appendChild(spn2);   
   const imag = span1.appendChild(document.createElement('img'));

   const para1 = document.createElement('p');
   const para11 = span2.appendChild(para1);
   const para12 = span2.appendChild(para1.cloneNode(true));
   const para13 = span2.appendChild(para1.cloneNode(true));
   const para14 = span2.appendChild(para1.cloneNode(true));

   // class

   spn.setAttribute('class' , 'card');
   spn.setAttribute('id', id);
   span1.setAttribute('class', 'fp');
   imag.setAttribute('class', 'idm');
   imag.setAttribute('src', 'logo.png');
   span2.setAttribute('class', 'sp');

   // read InputEvent

   

   const form_add = document.querySelectorAll('input');
   candidate.name = form_add[0].value;
   candidate.date = form_add[1].value;
   candidate.address = form_add[2].value;
   candidate.id = id;
   console.log(candidate.date);

   para11.innerText = 'ID. No.: '+id;
   para12.innerText = 'Name: '+candidate.name;
   para13.innerText = 'Date of Joining: '+candidate.date;
   para14.innerText = 'Address: '+candidate.address;

   form_add[0].value = "";
   form_add[1].value = "";
   form_add[2].value = "";

   idlist[id] = candidate;

   console.log(form_add);

   id++;


   cls();
})

rmsub.addEventListener('click', () => {

   const idselector = document.querySelectorAll('input');
   console.log(idselector);
   const idno = idselector[3].value;
   const rmel = document.getElementById(idno);
   rmel.remove();
cls();





})
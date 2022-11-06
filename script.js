let global=[];
let currPage = 0;
const pageLimit = 5;
let VisiblePage = 1;
//h1 for title
const h1Ele=document.createElement('h1');
h1Ele.innerText="Makeup Products";
h1Ele.style.textAlign="center";


document.body.append(h1Ele)
document.body.style.backgroundColor="rgb(235, 134, 188)"
//main spiner div
const mainspinnerDiv=document.createElement('div');
mainspinnerDiv.className="d-flex justify-content-center";
document.body.append(mainspinnerDiv);

//spinner 

const spinnerDiv=document.createElement('div');
spinnerDiv.className="spinner-border text-danger ";
spinnerDiv.setAttribute=('role','status');

//
const spanEle=document.createElement('span');
spanEle.className="visually-hidden";
spanEle.innerText='Web Page Loading';

spinnerDiv.append(spanEle);
//2nd spinner

const spinnerDiv1=document.createElement('div');
spinnerDiv1.className="spinner-border text-dark";
spinnerDiv1.setAttribute=('role','status');
const spanEle1=document.createElement('span');
spanEle1.className="visually-hidden";
spanEle1.innerText='Web Page Loading';
spinnerDiv1.append(spanEle1);

//3rd spinner

const spinnerDiv2=document.createElement('div');
spinnerDiv2.className="spinner-border text-warning";
spinnerDiv2.setAttribute=('role','status');
const spanEle2=document.createElement('span');
spanEle2.className="visually-hidden";
spanEle2.innerText='Web Page Loading';
spinnerDiv2.append(spanEle2);



// appending spinners on body

mainspinnerDiv.append(spinnerDiv,spinnerDiv1,spinnerDiv2)

//Getting response data from our API
const Api_url="https://makeup-api.herokuapp.com/api/v1/products.json";
 async function Makeup(){
  
const response= await fetch(Api_url);
let data= await response.json();
console.log(data);
try{
     
data.forEach((e)=>{
//main div
const mainDiv=document.createElement('div');
mainDiv.className="container-md"
mainDiv.style.backgroundColor="rgb(235, 134, 188)"
document.body.append(mainDiv);
 
//card div
const cardDivEle=document.createElement('div');
cardDivEle.className="card m-2  bg-light";
mainDiv.append(cardDivEle);

//creating row
const rowdivEle=document.createElement('div');
rowdivEle.className='row justify-contents-center';
cardDivEle.appendChild(rowdivEle);
//creating 4 coloumn class 
const colDivEle1=document.createElement('div');
colDivEle1.className="col-md-4 col-sm-12";
//inserting image in to our card
const imgEle=document.createElement('img');
imgEle.className="img-fluid";
imgEle.src=e.image_link;
imgEle.alt="Image Not Found";



colDivEle1.append(imgEle);
rowdivEle.append(colDivEle1);
// / creating 8 column
const colDivEle2=document.createElement('div');
colDivEle2.className="bg-dark col-md-8 col-sm-12";
colDivEle2.style.color="white"
//Title as brand name
const cardBrandTitle=document.createElement('h2')
cardBrandTitle.className="card-title mt-3";
cardBrandTitle.innerText=`${e.brand}'s`;
cardBrandTitle.className="text-uppercase"
//title as product name
const cardProTitle=document.createElement('h3')
cardProTitle.innerText=`${e.name}`;
//price
const priceEle=document.createElement('h1');
priceEle.innerText=`${e.price}$`;

//para tag for Desc
const pEle=document.createElement('p');
pEle.innerText=e.description;
pEle.style.fontSize="20px";
pEle.className="card-text"

//creating anchor tag
const proLinkEle=document.createElement('a');
proLinkEle.className="btn btn-primary"
proLinkEle.href=e.product_link;
proLinkEle.target="blank";
proLinkEle.style.border="2px solid black";
proLinkEle.style.borderRadius="3px";
proLinkEle.style.color="white";

proLinkEle.style.fontSize="24px";

proLinkEle.style.background="linear-gradient(black,deeppink)";

proLinkEle.innerText="Product Link"


rowdivEle.appendChild(colDivEle2);
colDivEle2.append(cardBrandTitle,cardProTitle,priceEle,pEle,proLinkEle);
spinnerDiv.style.display="none";
spinnerDiv1.style.display="none";
spinnerDiv2.style.display="none";



}) 

  
}
catch(err){
console.log('Error',err)
}

 }
  Makeup();  
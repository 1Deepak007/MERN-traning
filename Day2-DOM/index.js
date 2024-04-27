// alert('Hii');

let val;
val = document.contentType;
console.log(val);

// selectors
console.log(document.forms)

// window
console.log(window)


// #====> Targeting DOM Object (getElementById(id), getElementByClassName(clsnm), getElementByTagName(tgnm))

// window => document => html => 1.head 2.body
// head => meta,title,link etc.
// body => script, div=>img,p,h1,div etc.     

console.dir(document);
console.dir(document.body);   // null if u put it before body tag
console.log(document.body);
console.log(document);
console.log(document.links);
//document
//document.all
//document.documentElement
//document.head
//document.title
//document.body
//document.images
//document.anchors
//document.links
//document.forms
//document.doctype
//document.URL
//document.baseURL
//document.domain
document.body.style.background = "lightblue";

// 1)getElementById
let gtele = document.getElementById("heading1");
gtele.style.color = "red";
gtele.style.background = "yellow";
gtele.style.padding = "10px";
gtele.style.border = "1px solid black";
gtele.style.borderRadius = "10px";
gtele.style.textAlign = "center";
gtele.style.fontSize = "20px";
gtele.style.fontWeight = "bold";
gtele.style.fontFamily = "sans-serif";
gtele.style.textDecoration = "underline";


// 2)getElementByClassName
let ele = document.getElementsByClassName("heading2");
console.log(ele);
ele[0].style.color = "green";


// 3)getElementByTagName                    tagName : return tag for element nodes
let ele1 = document.getElementsByTagName("h4");
console.log(ele1);
ele1[3].style.color = "blue";

let getpara = document.getElementsByTagName("p");
console.log(getpara);
getpara[2].style.color = "red";

getpara[1].innerText = "Hi this is a paragraph. Which has been manipulated by targeting DOM."


// 4)querySelector    - return 1st para
let frstele = document.querySelector("p");              // by tagname
console.log(frstele);

let allele = document.querySelectorAll("p");
console.log(allele);


// 4.1)querySelector using class        
let allele1 = document.querySelectorAll(".para_g");     // by id
console.log(allele1)

let fstele1 = document.querySelector(".para_g");        // by id    
console.log(fstele1)

// get text of an element and all its children
console.log(fstele1.innerText)

// get plane text of an elements
console.log(fstele1.innerHTML)

// get 1st child
console.log(document.body.firstChild);                  // h2

console.log(document.querySelector("div"));             // return 1st div in DOM


// innerText : return the text of an element and all its children
// innerHTML : return the plain text + html tags in an element
// tagName : return tag for element nodes
// textContent : returns textual content even for hidden elements
let frut = document.getElementById('divFruits');
console.log(frut);                  // return is whole div with id = 'divFruits'
console.log(frut.innerText);        // return name of fruits
console.log(frut.innerHTML);         // return while div with html tags in it


let mydiv = document.getElementById("mydiv");
mydiv.innerHTML = "<div><p>This is para added in inner div using JS.</p></div>"
console.log(mydiv.innerHTML);
console.log(mydiv.innerText);


let lstEle = document.lastChild;        // html
console.log(lstEle);

let fstEle = document.firstChild;       // <!DOCTYPE html>
console.log(fstEle);


let hidnEl = document.getElementById("hidnEle");
console.log(hidnEl);
console.log(hidnEl.innerText);        // show black as css propety on element id hidden
console.log(hidnEl.textContent);      // show hidden element


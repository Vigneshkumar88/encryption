let a = "dgh/";
let b = "kdd/";
let c = "ncb/";
let d = "yry/";
let e = "kfj/";
let f = "lot/";
let g = "ucg/";
let h = "ldt/";
let i = "wrf/";
let j = "qwr/";
let k = "lko/";
let l = "qaw/";
let m = "pli/";
let n = "tyb/";
let o = "dfq/";
let p = "mks/";
let q = "aoh/";
let r = "uxw/";
let s = "amd/";
let t = "wes/";
let u = "wer/";
let v = "vtw/";
let w = "xaq/";
let x = "zxw/";
let y = "ore/";
let z = "xwv/";
let space = " /";
let dot = "./"

let a2 = "dgh";
let b2 = "kdd";
let c2 = "ncb";
let d2 = "yry";
let e2 = "kfj";
let f2 = "lot";
let g2 = "ucg";
let h2 = "ldt";
let i2 = "wrf";
let j2 = "qwr";
let k2 = "lko";
let l2 = "qaw";
let m2 = "pli";
let n2 = "tyb";
let o2 = "dfq";
let p2 = "mks";
let q2 = "aoh";
let r2 = "uxw";
let s2 = "amd";
let t2 = "wes";
let u2 = "wer";
let v2 = "vtw";
let w2 = "xaq";
let x2 = "zxw";
let y2 = "ore";
let z2 = "xwv";
let space2 = " ";
let dot2 =".";



let msg =document.getElementById('msg')
// let msgval =msg.value
let code =document.getElementById('code')


let ebut = document.getElementById('ebut')
let dbut = document.getElementById('dbut')

let en = document.getElementById('encrypt')
let dy = document.getElementById('dcrypt')

ebut.addEventListener('click',encrypt)
dbut.addEventListener("click",decrypt)



function encrypt(){
   

    let msgval =msg.value;
    // console.log(msgval)

    let val = msgval.split("")

    let ecode = []

    for(v1 of val){
        
        if(v1=="a"){
            ecode.push(a)
        }
        else if(v1=="b"){
            ecode.push(b)
        }
        else if(v1=="c"){
            ecode.push(c)
        }
        else if(v1=="d"){
            ecode.push(d)
        }
        else if(v1=="e"){
            ecode.push(e)
        }
        else if(v1=="f"){
            ecode.push(f)
        }
        else if(v1=="g"){
            ecode.push(g)
        }
        else if(v1=="h"){
            ecode.push(h)
        }
        else if(v1=="i"){
            ecode.push(i)
        }
        else if(v1=="j"){
            ecode.push(j)
        }
        else if(v1=="k"){
            ecode.push(k)
        }
        else if(v1=="l"){
            ecode.push(l)
        }
        else if(v1=="m"){
            ecode.push(m)
        }
        else if(v1=="n"){
            ecode.push(n)
        }
        else if(v1=="o"){
            ecode.push(o)
        }
        else if(v1=="p"){
            ecode.push(p)
        }
        else if(v1=="q"){
            ecode.push(q)
        }
        else if(v1=="r"){
            ecode.push(r)
        }
        else if(v1=="s"){
            ecode.push(s)
        }
        else if(v1=="t"){
            ecode.push(t)
        }
        else if(v1=="u"){
            ecode.push(u)
        }
        else if(v1=="v"){
            ecode.push(v)
        }
        else if(v1=="w"){
            ecode.push(w)
        }
        else if(v1=="x"){
            ecode.push(x)
        }
        else if(v1=="y"){
            ecode.push(y)
        }
        else if(v1=="z"){
            ecode.push(z)
        }
        else if(v1==" "){
            ecode.push(space)
        }
        else if(v1=="."){
            ecode.push(dot)
        }
        // else{
        //     alert("Error")
        // }
 
    }

    console.log(ecode)

    var res = ecode.join("")
    // console.log(res)
    en.innerHTML=res
    // assing(res)
    code.value=""


    
 }



 function decrypt(){

    let res2 = code.value
    console.log(res2)
    let val2 =res2.split("/")
    console.log(val2)

    let dcode =[]

    for(v11 of val2)
        
        if(v11==a2){
            
            dcode.push("a")
        }
        else if(v11==b2){
            dcode.push("b")
        }
        else if(v11==c2){
            dcode.push("c")
        }
        else if(v11==d2){
            dcode.push("d")
        }
        else if(v11==e2){
            dcode.push("e")
        }
        else if(v11==f2){
            dcode.push("f")
        }
        else if(v11==g2){
            dcode.push("g")
        }
        else if(v11==h2){
            dcode.push("h")
        }
        else if(v11==i2){
            dcode.push("i")
        }
        else if(v11==j2){
            dcode.push("j")
        }
        else if(v11==k2){
            dcode.push("k")
        }
        else if(v11==l2){
            dcode.push("l")
        }
        else if(v11==m2){
            dcode.push("m")
        }
        else if(v11==n2){
            dcode.push("n")
        }
        else if(v11==o2){
            dcode.push("o")
        }
        else if(v11==p2){
            dcode.push("p")
        }
        else if(v11==q2){
            dcode.push("q")
        }
        else if(v11==r2){
            dcode.push("r")
        }
        else if(v11==s2){
            dcode.push("s")
        }
        else if(v11==t2){
            dcode.push("t")
        }
        else if(v11==u2){
            dcode.push("u")
        }
        else if(v11==v2){
            dcode.push("v")
        }
        else if(v11==w2){
            dcode.push("w")
        }
        else if(v11==x2){
            dcode.push("x")
        }
        else if(v11==y2){
            dcode.push("y")
        }
        else if(v11==z2){
            dcode.push("z")
        }
        else if(v11==space2){
            dcode.push(space2)
        }
        else if(v11==dot2){
            dcode.push(dot2)
        }
        // else{
        //     alert("Error")
        // }

        let dres= dcode.join("")

        console.log(dcode)
        console.log(dres)
        dy.innerHTML=dres
        

    }




 

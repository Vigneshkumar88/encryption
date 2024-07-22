alert("For symbols only Coma( , ) and Dot( . ) are supported")

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
let dot = "./";
let coma =",/";

let A='dgh*/';
let B='kdd*/';
let C='ncb*/';
let D='yry*/';
let E='kfj*/';
let F='lot*/';
let G='ucg*/';
let H='ldt*/';
let I='wrf*/';
let J='qwr*/';
let K='lko*/';
let L='qaw*/';
let M='pli*/';
let N='tyb*/';
let O='dfq*/';
let P='mks*/';
let Q='aoh*/';
let R='uxw*/';
let S='amd*/';
let T='wes*/';
let U='wer*/';
let V='vtw*/';
let W='xaq*/';
let X='zxw*/';
let Y='ore*/';
let Z='xwv*/';




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
let coma2 =",";

let A2='dgh*';
let B2='kdd*';
let C2='ncb*';
let D2='yry*';
let E2='kfj*';
let F2='lot*';
let G2='ucg*';
let H2='ldt*';
let I2='wrf*';
let J2='qwr*';
let K2='lko*';
let L2='qaw*';
let M2='pli*';
let N2='tyb*';
let O2='dfq*';
let P2='mks*';
let Q2='aoh*';
let R2='uxw*';
let S2='amd*';
let T2='wes*';
let U2='wer*';
let V2='vtw*';
let W2='xaq*';
let X2='zxw*';
let Y2='ore*';
let Z2='xwv*';



let msg =document.getElementById('msg')
let code =document.getElementById('code')

let ebut = document.getElementById('ebut')
let dbut = document.getElementById('dbut')

let en = document.getElementById('encrypt')
let dy = document.getElementById('dcrypt')

ebut.addEventListener('click',encrypt)
dbut.addEventListener("click",decrypt)



function encrypt(){
   

    let msgval =msg.value;
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
        else if(v1==","){
            ecode.push(coma)
        }

        if(v1=="A"){
            ecode.push(A)
        }
        else if(v1=="B"){
            ecode.push(B)
        }
        else if(v1=="C"){
            ecode.push(C)
        }
        else if(v1=="D"){
            ecode.push(D)
        }
        else if(v1=="E"){
            ecode.push(E)
        }
        else if(v1=="F"){
            ecode.push(F)
        }
        else if(v1=="G"){
            ecode.push(G)
        }
        else if(v1=="H"){
            ecode.push(H)
        }
        else if(v1=="I"){
            ecode.push(I)
        }
        else if(v1=="J"){
            ecode.push(J)
        }
        else if(v1=="K"){
            ecode.push(K)
        }
        else if(v1=="L"){
            ecode.push(L)
        }
        else if(v1=="M"){
            ecode.push(M)
        }
        else if(v1=="N"){
            ecode.push(N)
        }
        else if(v1=="O"){
            ecode.push(O)
        }
        else if(v1=="P"){
            ecode.push(P)
        }
        else if(v1=="Q"){
            ecode.push(Q)
        }
        else if(v1=="R"){
            ecode.push(R)
        }
        else if(v1=="S"){
            ecode.push(S)
        }
        else if(v1=="T"){
            ecode.push(T)
        }
        else if(v1=="U"){
            ecode.push(U)
        }
        else if(v1=="V"){
            ecode.push(V)
        }
        else if(v1=="W"){
            ecode.push(W)
        }
        else if(v1=="X"){
            ecode.push(X)
        }
        else if(v1=="Y"){
            ecode.push(Y)
        }
        else if(v1=="Z"){
            ecode.push(Z)
        }

 }


    var res = ecode.join("")
    en.innerHTML=res
    code.value=""


    
 }



 function decrypt(){

    let res2 = code.value
    let val2 =res2.split("/")
    
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
        else if(v11==coma2){
            dcode.push(coma2)
        }

                
        else if(v11==A2){
            
            dcode.push("A")
        }
        else if(v11==B2){
            dcode.push("B")
        }
        else if(v11==C2){
            dcode.push("C")
        }
        else if(v11==D2){
            dcode.push("D")
        }
        else if(v11==E2){
            dcode.push("E")
        }
        else if(v11==F2){
            dcode.push("F")
        }
        else if(v11==G2){
            dcode.push("G")
        }
        else if(v11==H2){
            dcode.push("H")
        }
        else if(v11==I2){
            dcode.push("I")
        }
        else if(v11==J2){
            dcode.push("J")
        }
        else if(v11==K2){
            dcode.push("K")
        }
        else if(v11==L2){
            dcode.push("L")
        }
        else if(v11==M2){
            dcode.push("M")
        }
        else if(v11==N2){
            dcode.push("N")
        }
        else if(v11==O2){
            dcode.push("O")
        }
        else if(v11==P2){
            dcode.push("P")
        }
        else if(v11==Q2){
            dcode.push("Q")
        }
        else if(v11==R2){
            dcode.push("R")
        }
        else if(v11==S2){
            dcode.push("S")
        }
        else if(v11==T2){
            dcode.push("T")
        }
        else if(v11==U2){
            dcode.push("U")
        }
        else if(v11==V2){
            dcode.push("V")
        }
        else if(v11==W2){
            dcode.push("W")
        }
        else if(v11==X2){
            dcode.push("X")
        }
        else if(v11==Y2){
            dcode.push("Y")
        }
        else if(v11==Z2){
            dcode.push("Z")
        }

   

        let dres= dcode.join("")
        dy.innerHTML=dres
        

    }




 

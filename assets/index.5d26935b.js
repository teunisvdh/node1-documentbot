import{o as e,c as t,a as l,F as s,r as a,b as n,t as o,d as r,e as i}from"./vendor.1f346d7f.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(l){const s=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((l,n)=>{const o=new URL(e,s);if(self[t].moduleMap[o])return l(self[t].moduleMap[o]);const r=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(r),onerror(){n(new Error(`Failed to import: ${e}`)),a(i)},onload(){l(self[t].moduleMap[o]),a(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("/node1-documentbot/assets/");const c={},d={class:"fixed w-full h-16 bg-white shadow px-6"},u=l("img",{src:"/node1-documentbot/assets/logo_n1.2a7db8e2.svg",class:"h-full py-4"},null,-1),p=l("img",null,null,-1);c.render=function(l,s,a,n,o,r){return e(),t("div",d,[u,p])};const f={name:"Interaction",props:{},data:()=>({results:null,waiting:!1,speeds:[1,2,3],chosenSpeed:1,file:null,fileUrl:"/node1-documentbot/assets/a4_node1.png"}),methods:{onSubmit:function(e){this.waiting=!0,superagent.post("https://n1-baasfunctions.azurewebsites.net/api/classify").attach("image",this.file).query({speed:this.chosenSpeed}).query({code:"82AXuIuF0rAkdFhvYuLxG081pND2Aev8PWqA3MkGLMiDNaB9Hh4k6w=="}).timeout(25e3).end(function(e,t){this.waiting=!1,e?(this.results=null,alert("An error occured during checking your image.")):(this.results=t.body,console.log(this.results))}.bind(this))},handleFileChange(e){const t=event.target.files;this.file=t[0];const l=new FileReader;l.onload=e=>{this.fileUrl=e.target.result,console.log(this.fileUrl)},l.readAsDataURL(t[0])}}},h={class:"h-screen bg-gray-100 px-6 pt-24 pb-8 gap-4 hidden lg:block"},g={class:"h-full w-full"},x={class:"container h-full",id:"app"},m={class:"grid grid-cols-4 h-full w-full"},w={class:"bg-white shadow-lg flex flex-col p-12 gap-2"},b=l("p",{class:"text-n1blue font-bold text-xs text-left uppercase"},"Image",-1),v=l("p",{class:"text-n1gray-second text-left text-xs text-justify"},"Upload a JPEG or PNG image of a document page you want to scan.",-1),y={class:"mt-4 h-20 flex gap-2 flex-col justify-center content-center text-n1gray-second text-xs text-center w-full text-left rounded overflow-hidden border border-dashed border-n1gray-second px-2 py-3 text-xs hover:shadow-lg hover:border-transparent"},k=l("div",{class:"flex justify-center"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"#acaaaa",class:"bi-file-earmark-arrow-up-fill",viewBox:"0 0 16 16"},[l("path",{d:"M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM6.354 9.854a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 8.707V12.5a.5.5 0 0 1-1 0V8.707L6.354 9.854z"})])],-1),j=r(" Select file to be checked "),L=l("p",{class:"mt-14 text-n1blue font-bold text-xs text-left uppercase"},"Speed",-1),M=l("p",{class:"text-n1gray-second text-left text-xs text-justify"},"Find your balance between quality and speed of the classification process.",-1),A={class:"mt-2  flex flex-row gap-2 h-2"},U={class:"w-full"},F={class:"flex-grow flex flex-wrap content-end justify-center"},C={key:1,class:"flex flex-wrap justify-center"},z=l("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#ffd506",class:"bi bi-arrow-repeat h-8 w-8 animate-spin",viewBox:"0 0 16 16"},[l("path",{d:"M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"}),l("path",{"fill-rule":"evenodd",d:"M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"})],-1),R={class:"max-h-full flex flex-wrap content-center justify-center p-8"},S={key:0,class:"max-h-full flex flex-wrap content-center justify-center p-8 transition duration-1000"},_={key:1,class:"max-h-full flex flex-col content-start justify-center p-8 items-start text-n1blue"},P=l("div",{class:"h-screen bg-gray-100 px-6 pt-24 pb-8 gap-4 block lg:hidden"},[l("p",null,"This website is not available on smaller screens. Please use a desktop.")],-1);f.render=function(r,i,c,d,u,p){return e(),t(s,null,[l("div",h,[l("div",g,[l("div",x,[l("div",m,[l("div",w,[b,v,l("label",y,[k,j,l("input",{type:"file",onChange:i[1]||(i[1]=(...e)=>p.handleFileChange&&p.handleFileChange(...e)),accept:"image/png, image/jpeg"},null,32)]),L,M,l("div",A,[(e(!0),t(s,null,a(u.speeds,(s=>(e(),t("div",U,[l("button",{onClick:e=>u.chosenSpeed=s,"aria-hidden":"true",class:["rounded-sm h-full w-full border border-dashed border-n1gray-second",{"bg-n1gray-second border-none":u.chosenSpeed>=s}]},null,10,["onClick"])])))),256))]),l("div",F,[u.waiting?n("",!0):(e(),t("button",{key:0,class:"rounded h-12 py-2 px-4 w-full bg-n1yellow text-n1blue text-xs font-bold shadow-md hover:shadow-lg rounded",onClick:i[2]||(i[2]=e=>p.onSubmit())},"Check page")),u.waiting?(e(),t("div",C,[z])):n("",!0)])]),l("div",R,[l("img",{src:u.fileUrl,class:"transition duration-500 ease-in-out h-96 flex-initial shadow-lg object-cover"},null,8,["src"])]),u.results?(e(),t("div",S,[l("img",{src:u.results.image,class:"h-96 flex-initial shadow-lg object-cover"},null,8,["src"])])):n("",!0),u.results?(e(),t("div",_,[l("p",null," 🕑 "+o(u.results.execution_time),1),l("p",null," 👉 "+o(u.results.class),1),l("p",null," ✍ "+o(u.results.written),1),l("p",null," ⌨ "+o(u.results.typed),1)])):n("",!0)])])])]),P],64)};i({expose:[],setup:a=>(a,n)=>(e(),t(s,null,[l(c),l(f)],64))}).mount("#app");

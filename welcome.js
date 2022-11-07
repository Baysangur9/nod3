import  {type}  from "./Node.js"


function versionOS() {
   return `Привет, юзер. Вижу ты зашел с ${type}`
}
console.log(versionOS())

export {versionOS}
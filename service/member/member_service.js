const list = require("../../database/member/memberDAO");
const loginCheck = (id, name) =>{
    //console.log(id);
    //console.log(name);
    const mem = list.filter(v=>
        v.id===id && v.name===name);
        if(mem.length != 0)
            return 0;
        return 1;
    /*
    for(var i=0;i<list.length;i++){
        if(list[i].id===id && list[i].name===name){
            return 1;
        }
    }
    return 0;
    */
}
const getList = () =>{
    return list;
}
const getInfo = (id) =>{
    const mem =list.filter(v=>
        v.id===id);
    //console.log(mem);
    return mem[0];
}

module.exports = {loginCheck, getList, getInfo}
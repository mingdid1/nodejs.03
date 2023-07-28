const service = require("../../service/member/member_service");
const login = (req, res) =>{
    res.render("member/login");
}
const loginCheck = (req, res) =>{
    const result =service.loginCheck(req.param("id"), req.param("name"));
    console.log(result);
    if (result === 0){
        res.redirect("/member/list");
    }res.redirect("/member/info");
    //console.log(req.param("id"));
    //console.log(req.param("name"));
    //res.send("login check");
}
const list = (req, res) =>{
    //const result = service.getList();
    //console.log(result);
    res.render("member/list", {list:service.getList()});
}
const info = (req, res) =>{
    //console.log(req.param("id"));
    //const info = service.getInfo(req.param("id"));
    //console.log(info);
    res.render("member/info", {info:service.getInfo(req.param("id"))});//id에 대한 정보를 info로 가져옴
}

module.exports = {login, loginCheck, list, info}
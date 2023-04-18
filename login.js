const fs = require("fs");
const login = require("fca-horizon-remake");

var credentials = {email: "", password: ""}; // thông tin tài khoản

login(credentials, (err, api) => {
    if(err) return console.error(err);
    // đăng nhập vào tài khoản
    fs.writeFileSync('appstate.json', JSON.stringify(api.getAppState())); //Tạo appstate
});
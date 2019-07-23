var mysqlConn = require("../database/database");

const fs = require("fs");

module.exports = class Property {
    constructor(newId, newName, newSurname, newCellphone, newEmail, newPassword) {
        this.id = newId;
        this.name = newName;
        this.surname = newSurname;
        this.cellphone = newCellphone;
        this.email = newEmail;
        this.password = newPassword;
        this.role = roles.USER;
    }
    create(newProp) {
        return new Promise((resolve, reject) => {
            mysqlConn.query("INSERT INTO user set ?", newProp, (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    }

    getAll(){
        return new Promise((resolve, reject) =>{
            mysqlConn.query("Select * from user", (err, res) => {
                if(err){
                    reject(err);
                } else{
                    resolve(res);
                }
            });
        });
    }
    getById(propId){
        return new Promise((resolve, reject) => {
            mysqlConn.query("Select * from user where id = ? ", propId, (err, res) => {
                if(err){
                    reject(err);
                } else{
                    resolve(res);
                }
            });
        });
    }
    updateByID(propId, prop) {
        return new Promise((resolve, reject) => {
            mysqlConn.query("UPDATE user SET user = ? WHERE id = ?", [prop, propId], (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    }
    remove(propId){
        return new Promise((resolve, reject) => {
            mysqlConn.query("DELETE FROM user WHERE id = ?", propId, (err, res) => {
                if(err){
                    reject(err);
                } else{
                    resolve(res);
                }
            })
        })
    }
};
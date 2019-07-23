const Provider = require("../models/provider-model");

//var bcrypt = require("bcryptjs");

//var jwt = require('jsonwebtoken');

module.exports = class ProviderAuthService {
  constructor() {}

  // async hashPassword(password) {
  //   var salt = bcrypt.genSaltSync(10);
  //   return await bcrypt.hash(password, salt);
  // }
  async login(authUser) {
    return new Promise((resolve, reject) => {
      Provider.prototype
        .getAll()
        .then(users => {
          const dbUser = users.filter(user => {
            return user.email == authUser.email;
          });
          if (dbUser.length) {
            //const match = bcrypt.compare(dbUser[0].password, authUser.password);
            if (dbUser[0].password == authUser.password) {
              resolve(dbUser);
            } else {
              reject("incorrect password");
            }
          } else {
            reject("user not found");
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  async register(authUser) {
    return new Promise((resolve, reject) => {
      Provider.prototype
        .getAll()
        .then(users => {
          const dbUser = users.filter(user => {
            return user.email == authUser.email;
          });
          if (dbUser.length >= 1) {
            if (dbUser[0].email == authUser.email) {
              reject("User email is already taken. Try again.");
            }
          } else {
            // const passwordHash = hashPassword(authUser.password);
            // const userObj = {
            //   name: authUser.name,
            //   surname: authUser.surname,
            //   cellphone: authUser.cellPhone,
            //   email: authUser.email,
            //   password: passwordHash,
            //   role: authUser.role
            // };
            // const newUser = new User(userObj);
            Provider.prototype
              .create(authUser)
              .then(user => resolve(user))
              .catch(err => reject(err));
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  // async getJwtToken(user, rememberUser){
  //   let jwtObject = {};
  //   jwtObject.id = user.id;
  //   jwtObject.name = user.name;
  //   jwtObject.surname = user.surname;
  //   jwtObject.cellPhone = user.cellPhone;
  //   jwtObject.email = user.email;
  //   jwtObject.role = user.role;
  //   jwtObject.remember = user.rememberUser;

  //   return await jwt.sign(Object.assign({}, jwtObject), "secret key",{
  //     expiresIn: "1d"
  //   });
  // }

  // async verifyToken(){
  //   return await jwt.verify(token, "secret key");
  // }
};



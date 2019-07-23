import { Injectable } from '@angular/core';
import { User } from '../models/user.models';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    public user: User = new User();

constructor(private http: HttpClient, private navCtrl: NavController){}
// CRUD:

create(user: User){
    return new Promise((resolve, reject) =>{
        this.http.post('http://localhost:3000/api/provider/', user).subscribe(response => {
            resolve(response);
        }),
        err =>{
            console.log(err);
            reject(err.msg);
        }
    });
};

getAll(){
    return new Promise((resolve, reject) =>{
        this.http.get('http://localhost:3000/api/provider/').subscribe(response => {
            resolve(response);
        }),
        err =>{
            console.log(err);
            reject(err.msg);
        }
    });
};
getById(id){
    return new Promise((resolve, reject) => {
        this.http.get('http://localhost:3000/api/provider/:id', id).subscribe(response =>{
            resolve(response);
        }),
        err =>{
            console.log(err);
            reject(err.msg);
        }
    });
};
updateById(id){
    return new Promise((resolve, reject) => {
        this.http.post('http://localhost:3000/api/provider/update', id).subscribe(response =>{
            resolve(response);
        }),
        err =>{
            console.log(err);
            reject(err.msg);
        }
    });
};

remove(id){
    return new Promise((resolve, reject) => {
        this.http.post('http://localhost:3000/api/provider/delete', id).subscribe(response =>{
            resolve(response);
        }),
        err =>{
            console.log(err);
            reject(err.msg);
        }
    });
};
};


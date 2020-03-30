'use strict';

const Controller = require('egg').Controller;

let demo=[
    {
        id:1,
        username:"用户名1",
        nicknamee:"昵称",
        sex:"男"
    },
    {
        id:2,
        username:"用户名2",
        nicknamee:"昵称",
        sex:"男"
    },
    {
        id:3,
        username:"用户名3",
        nicknamee:"昵称",
        sex:"男"
    }
];

class UserController extends Controller {
  //用户列表
    async index() {
        let page=this.ctx.query.page;
        let result=demo;
        this.ctx.status=202;
        this.ctx.body={
            msg:"ok",
            data:result
        };
    }
    async read(){
        let id=parseInt(this.ctx.params.id);

        let datail=demo.find(item=>item.id===id);
        this.ctx.body={
            msg:'ok',
            data:datail
        }
    }
    async create(){
        console.log(this.ctx.request.body);
        console.log(this.ctx.request);
        this.ctx.body={
            msg:'ok',
            data:{
                username:'t1',
                nicknam:'tt1'
            }
        }
    }

}

module.exports = UserController;

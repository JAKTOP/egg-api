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
        
        let user=await this.ctx.model.User.findByPk(id);
        
       
        this.ctx.body={
            msg:'ok',
            data:user
        }
    }
    async create(){
        // let res=await this.ctx.model.User.create({
        //     username:"T1",
        //     password:"123456",
        //     sex:"男"
        // });
        let res=await this.ctx.model.User.bulkCreate([
            
            {
                username:"T12",
                password:"123456",
                sex:"男"
            },
            {
                username:"T13",
                password:"123456",
                sex:"男"
            },
            {
                username:"T14",
                password:"123456",
                sex:"男"
            },
            {
                username:"T15",
                password:"123456",
                sex:"男"
            },
            {
                username:"T16",
                password:"123456",
                sex:"男"
            }


        ]);
        this.ctx.body={
            msg:'ok',
            data:res
        }
    }

}

module.exports = UserController;

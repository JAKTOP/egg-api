'use strict';

const Controller = require('egg').Controller;

class PostController extends Controller {
    async index() {
        this.ctx.body={
            msg:"ok",
            data:'index'
        };
    }
    async new() {
        this.ctx.body={
            msg:"ok",
            data:'new'
        };
    }
    async show() {
        this.ctx.body={
            msg:"ok",
            data:'show'
        };
    }
    async edit() {
        this.ctx.body={
            msg:"ok",
            data:'edit'
        };
    }
    async update() {
        this.ctx.body={
            msg:"ok",
            data:'update'
        };
    }
    async delete() {
        this.ctx.body={
            msg:"ok",
            data:'delete'
        };
    }
    
}

module.exports = PostController;

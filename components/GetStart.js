import React from "react";
import { render } from "react-dom";
import Sidebar from "./Sidebar";

function Getstart() {
  return (
        <div className="col-md-9 content">
          <div className="left_content__header">
            <ul className="breadcrumb">
              <li><a href="#">主页</a></li>
              <li className="active">Node.js 新手入门</li>
            </ul>
          </div> {/* left_content__header */}

          <div className="inner_content">
            <h2 className="inner_content__title inner__title--first">Node.js 入门</h2>
            <p className="inner_content__info"><strong>《快速搭建 Node.js 开发环境以及加速 npm》</strong></p>
            <p className="inner_content__info"><a className="inner_content__link" href="http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html">http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html</a></p>
            <p className="inner_content__info"><strong>《Node.js 包教不包会》</strong></p>
            <p className="inner_content__info"><a className="inner_content__link" href="https://github.com/alsotang/node-lessons">https://github.com/alsotang/node-lessons</a></p>
            <p className="inner_content__info"><strong>《ECMAScript 6入门》</strong></p>
            <p className="inner_content__info"><a href="http://es6.ruanyifeng.com/" className="inner_content__link">http://es6.ruanyifeng.com/</a></p>
            <p className="inner_content__info"><strong>《七天学会NodeJS》</strong></p>
            <p className="inner_content__info"><a href="https://github.com/nqdeng/7-days-nodejs" className="inner_content__link">https://github.com/nqdeng/7-days-nodejs</a></p>
            <h2 className="inner_content__title">Node.js 资源</h2>
            <p className="inner_content__info"><strong>《前端资源教程》</strong></p>
            <p className="inner_content__info"><a href="https://cnodejs.org/topic/56ef3edd532839c33a99d00e" className="inner_content__link">https://cnodejs.org/topic/56ef3edd532839c33a99d00e</a></p>
            <p className="inner_content__info"><strong>《国内的 npm 镜像源》</strong></p>
            <p className="inner_content__info"><a href="http://cnpmjs.org/" className="inner_content__link">http://cnpmjs.org/</a></p>
            <p className="inner_content__info"><strong>《node weekly》</strong></p>
            <p className="inner_content__info"><a href="http://nodeweekly.com/issues" className="inner_content__link">http://nodeweekly.com/issues</a></p>
            <p className="inner_content__info"><strong>《node123-node.js中文资料导航》</strong></p>
            <p className="inner_content__info"><a href="https://github.com/youyudehexie/node123" className="inner_content__link">https://github.com/youyudehexie/node123</a></p>
            <p className="inner_content__info"><strong>《A curated list of delightful Node.js packages and resources》</strong></p>
            <p className="inner_content__info"><a href="https://github.com/sindresorhus/awesome-nodejs" className="inner_content__link">https://github.com/sindresorhus/awesome-nodejs</a></p>
            <p className="inner_content__info"><strong>《Node.js Books》</strong></p>
            <p className="inner_content__info"><a href="https://github.com/pana/node-books" className="inner_content__link">https://github.com/pana/node-books</a></p>
            <h2 className="inner_content__title">Node.js 名人</h2>
            <p className="inner_content__info"><strong>《名人堂》</strong></p>
            <p className="inner_content__info"><a href="https://github.com/cnodejs/nodeclub/wiki/名人堂" className="inner_content__link">https://github.com/cnodejs/nodeclub/wiki/名人堂</a></p>          </div>
        </div>
  );
}

export default Getstart;
TypeScript Express
==========
這裡提到 TypeScript 是 JavaScript 的型別超集合，也就是說 Typescript 提供了 JS 各種型別定義的設計，算是種原生JS的擴充且最後還能把它編譯成原生JS

但究竟有哪些原因會讓開發者想要採用Typescript呢?

- 期望有清楚的型別定義
    - Javascript 的動態語言(Dynamically Typed Languages)特性，容易衍生出開發期間不易發現的錯誤
    - Typescript 幫你在開發階段就幫你抓出型別不清的bug
- 期望有支援OOP語言的feature(整合了ES6與ECMAScript之後的標準)
    - typescript支援 interface、class、封裝與繼承的寫法
- 期望有包含ES6與之後的標準，對原生JS的開發者來說"語法糖"不能少
    - typescript支援大部分的ES6與之後版本的語法，例如 let, const、箭頭函式(Arrow Functions)等
    - 此外，typescript也能在config檔中選擇其他ES版本進行編譯

安裝TypeScirpt
```npm install -g typescript```

#### [TypeScript 新手指南 - GitBook](https://willh.gitbook.io/typescript-tutorial/)

ORM
---
全名是Object-Relational Mapping，它讓操作資料庫就如同操作物件一樣，不需要撰寫SQL，使用ORM提供的method就可以達成與SQL一樣的資料庫操作；此外，ORM亦支援不同的關聯式資料庫，也就是說同一個method可以用在不同的資料庫上，達到的效果是一樣的!

- 減少撰寫重複的SQL法，例如對CRUD的操作
- 幫助降低資料庫的耦合(依賴性)


實體 Entity
---
Entity的概念就好比把資料模型比作物件，而非一些屬性的集合體。這裡建立一個 User Entity 要用寫類別的方式並搭配TypeORM提供的修飾符(decorator)，這些修飾符像是Entity, Colum 和 PrimaryGeneratedColumn。沒有Entity加註不會被資料庫建立成資料表，沒有Column修飾符的屬性也不會加進資料表的欄位中。

```typescript
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity() // 預設資料表名稱 user；@Entity("Users") 指定資料表名稱
export class User {

  @PrimaryGeneratedColumn() // 主鍵欄位，非一般欄位
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column({
    default: "normal"
  })
  role: string;
}
```

檔案結構
---

```
typescript-express/
├── dist/              # ts編譯過後之js檔案
├── node_modules/      # npm函式庫
├── src/               # ts源檔
│   ├── config/        # 資料庫連線設定
│   ├── controllers/   # 處裡HTTP請求與回覆；指派給特定的business logic
│   ├── entities/      # TypeORM 管理所有Schema 
│   ├── repositories/  # TypeORM 控制資料庫接口
│   ├── routes/        # 處裡server的路由
│   ├── app.ts         # 初始化路由、資料庫連線
│   ├── server.ts      # Web API Enter point
├── .env               # 環境設定           
├── package.json       # npm專案管理設定檔
└── tsconfig.json      # ts設定檔
```
啟動
----
#### DB setting
建立好資料庫及資料表確認`.env`的設定 
範例是用192.168.204.138 VM開的DB
在裡面建立database及table 
> 建測試資料庫跟資料表的script
    
```mysql
CREATE DATABASE `test`;
CREATE TABLE `user` (
`id` INT NOT NULL AUTO_INCREMENT,
`email` VARCHAR(50) NOT NULL,
`password` VARCHAR(50) NOT NULL,
`name` VARCHAR(50) NOT NULL,
`role` VARCHAR(50) NOT NULL,
PRIMARY KEY (`id`));
```

#### Start Server

    yarn install # 安裝node_modules

> 如果沒有yarn 可以安裝`npm install yarn -g`
> 或直接`npm install`

    npm build    # 編譯TS files
    npm start    # 啟動Web server
    

Call Restful API
--------
1. 打開Postman Call Post user API
![](https://i.imgur.com/wcDioC2.png)

2. 確認DB資料是否建立
![](https://i.imgur.com/KUJBoru.png)

3. Call Put user 
![](https://i.imgur.com/TqUpfDs.png)

4. 檢查user的該欄位是否被更改
![](https://i.imgur.com/flIgzRY.png)


Try it
------

1. 試試看delete/get api
2. 修改update api如果不帶email可以只改name
3. 加入validator假設create user api, password長度小於6則回傳400 Bad Request
4. 建立一個新的CRUD restful api

#### 進階題目
* 新增Login View & Login API 並用JWT寫成middleware做認證  


----

## reference: [Typescript express 打造Twitter專案](https://www.coderbridge.com/series/3d1e0eeebd654a88a16cfb13d8536bd9/posts/2a07b3d6ddab4f94a0cb772ae0bda95e)
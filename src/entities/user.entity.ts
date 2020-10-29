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
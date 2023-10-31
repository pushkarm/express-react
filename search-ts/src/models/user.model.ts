import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: "users"
})
class User extends Model {

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "id"
      })
      id?: number;
    
      @Column({
        type: DataType.STRING(60),
        field: "name"
      })
      name?: string;

      @Column({
        type: DataType.STRING(60),
        field: "email"
      })
      email?: string;
    
      @Column({
        type: DataType.STRING(20),
        field: "phone_number"
      })
      phoneNumber?: string;

      @Column({
        type: DataType.STRING(200),
        field: "address"
      })
      address?: string;

      @Column({
        type: DataType.STRING(100),
        field: "account_number"
      })
      accountNumber?: string;
}
export default User;
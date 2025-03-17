import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    Unique
} from "sequelize-typescript";
  
  @Table({
    timestamps: true,
    tableName: "users",
  })
  export default class User extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
      type: DataType.INTEGER,
    })
    declare id: number; 
  
    @Column({
      type: DataType.STRING,
      allowNull: false,
    })
    declare name: string;
  
    @Unique
    @Column({
      type: DataType.STRING,
      allowNull: false,
    })
    declare email: string;
  
    @Column({
      type: DataType.STRING,
      allowNull: false,
    })
    declare password: string;
}
  
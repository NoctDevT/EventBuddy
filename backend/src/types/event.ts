import {Table, Column, Model, DataType, Default, AllowNull, PrimaryKey} from 'sequelize-typescript';


@Table({tableName: 'events', timestamps: true})
export default class Event extends Model{

    @PrimaryKey
    @AllowNull(false)
    @Default(DataType.UUIDV4) 
    @Column({type: DataType.STRING})
    id!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    title!: string;

    @AllowNull(true)
    @Column(DataType.TEXT)
    description?: string;

    @AllowNull(false)
    @Column(DataType.DATE)
    date!:Date;

    @Default(100)
    @Column(DataType.INTEGER)
    capacity!: number

    @AllowNull(false)
    @Column(DataType.TEXT)
    location!: string

}
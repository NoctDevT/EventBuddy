import { GraphQLList, GraphQLString, GraphQLNonNull } from 'graphql';
import { UserType } from '../types/userSchema';
import UserDb from '../../types/user';
import bcrypt from 'bcryptjs';

export const userResolvers = {
    Query: {
        getUser: {
            type: UserType, 
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: async (_parent: any, args: { id: string }) => {
                const user = await UserDb.findByPk(args.id);
                if (!user) throw new Error('User not found');
                return user;
            },
        },

        getUsers: {
            type: new GraphQLList(UserType),  
            resolve: async () => {
                return await UserDb.findAll({
                    attributes: ['id', 'name', 'email']  
                });
            },
        },
    },

    Mutation: {
        createUser: {
            type: UserType, 
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: async (_parent: any, args: { name: string; email: string; password: string }) => {
                const hashedPassword = await bcrypt.hash(args.password, 10);

                try {
                    const user = await UserDb.create({
                        name: args.name,
                        email: args.email,
                        password: hashedPassword,
                    });

                    return user;
                } catch (error: any) {
                    console.error("Detailed error:", error); 
                    if (error.name === 'SequelizeUniqueConstraintError') {
                        throw new Error('Email already exists');
                    }
                    throw new Error(`Error creating user: ${error.message}`);
                }
                
            }
        }
    }
};

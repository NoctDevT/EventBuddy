import { GraphQLList, GraphQLString, GraphQLNonNull } from 'graphql';
import { UserType } from '../types/userSchema';
import User from '../../types/user';
import bcrypt from 'bcryptjs';

export const userResolvers = {
    Query: {
        getUser: {
            type: UserType, 
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: async (_parent: any, args: { id: string }) => {
                const user = await User.findByPk(args.id);
                if (!user) throw new Error('User not found');
                return user;
            },
        },

        getUsers: {
            type: new GraphQLList(UserType),  
            resolve: async () => {
                return await User.findAll({
                    attributes: ['id', 'username', 'email']  
                });
            },
        },
    },

    Mutation: {
        createUser: {
            type: UserType, 
            args: {
                username: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: async (_parent: any, args: { username: string; email: string; password: string }) => {
                const hashedPassword = await bcrypt.hash(args.password, 10);

                try {
                    const user = await User.create({
                        username: args.username,
                        email: args.email,
                        password: hashedPassword,
                    });

                    return user;
                } catch (error: any) {
                    if (error.name === 'SequelizeUniqueConstraintError') {
                        throw new Error(error.errors[0].message);
                    }
                    throw new Error('Error creating user');
                }
            }
        }
    }
};

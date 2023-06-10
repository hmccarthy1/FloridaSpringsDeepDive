const { AuthenticationError } = require('apollo-server-express');
const User = require('../models/User');
const Spring = require('../models/Spring')
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    users: async () => {
      return await User.find()
    },

    spring: async (parent, {springID}) => {
      return await Spring.findOne({_id: springID})
    }

},

Mutation: {
    addUser: async (parent, { username, email, password, firstName, lastName }) => {
      const user = await User.create({ username, email, password, firstName, lastName });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }}

}

module.exports = resolvers;

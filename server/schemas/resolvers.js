const { AuthenticationError } = require('apollo-server-express');
const User = require('../models/User');
const Spring = require('../models/Spring')
const { signToken } = require('../utils/auth');
const mongoose = require('mongoose');

const { ObjectId } = require('mongodb');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find()
    },

    spring: async (parent, {springID}) => {
       const spring = await Spring.findOne({_id: springID});
       console.log('spring', spring)
   
       return spring
    
      },
    amenity: async (parent, {amenityID}) => {
      try {

      } catch (err) {return err}
    },

    allSprings: async () => {
      try {
        const springs = await Spring.find({});
        return springs
      } catch (err) {
        return err
      }
    },

    filteredSprings: async (parent, {amenitiesList, springNameSearch}) => {
      try {

        

        
        
        if (amenitiesList.length === 0 && springNameSearch == undefined) {
          return await Spring.find({})
        }
        
        else if (springNameSearch != undefined && amenitiesList.length === 0) {

          // If there is a search term but no amenities, search for the term in the springName field
          console.log('Search term but no amenities', springNameSearch)
          const allSprings = await Spring.find({});
          console.log('all springs', allSprings)
          const springs = await Spring.find({
          springName: { $regex:  springNameSearch }
        });
         
        console.log('springs filtered', springs)
        
        return springs
        }
        
        else { 
          
      // IF
          console.log('Search term', springNameSearch)
        
          if (springNameSearch != undefined) {
          console.log('amenities', amenitiesList);
          const springs = await Spring.find({
          'amenities.amenityType': { $all: amenitiesList },
          springName: { $regex: springNameSearch  }})
        console.log('springs filtered', springs)
        return springs
          }
          else {
           console.log('No Search term');
            console.log('amenities', amenitiesList);
            const springs = await Spring.find({
          'amenities.amenityType': { $all: amenitiesList },
          })
          console.log('springs filtered', springs)
          return springs
          }
      };


      } catch (err) {
        console.log(err)
        return err
      }
    },
    singleUser: async (parent, {userID}) => {
     console.log('Hitting singleUser ')
      try {
        console.log('User ID, ', userID)
        const foundUser = await User.findOne({_id: userID})
        console.log('foundUser', foundUser)
        return foundUser;

      } catch (err) {
        console.log(err)
        return err
      }
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
    },
  
    adjustFavorites: async (parent, {userID, springID}) => {

   
      console.log('HITTING TOP')
      try {
          console.log('HITTING')
          const userToPost = await User.findById(userID);
          console.log(userToPost.favoriteSprings);
          const found = false
  
          if (
          userToPost.favoriteSprings.some(function (springId) {
              return springId.equals( new ObjectId(springID))  
          })  ) {
              
              userToPost.favoriteSprings.pull(new ObjectId(springID));
              userToPost.save()
  
              console.log("SPRING WAS UNFAVORITED")
              return {message: 'Your spring was unfavorited'}
          } else {
              userToPost.favoriteSprings.addToSet(springID);
              userToPost.save();
              console.log("SPRING WAS FAVORITED")
              const springAdded =  await Spring.findById(springID)
              return springAdded
          }
  
  
             
          
  
          
      } catch (err) {
          console.log("AN ERROR OCCURED ADJUSTING YOUR FAVORITES" , err)
          
          return {message: 'There was a problem adding this spring to your favorites'}
      }
    
  }
  

  }


 



}

module.exports = resolvers;

import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
        
        
Meteor.methods({  
    'account.create'(toSend) {      
        if (!Accounts.findUserByUsername(toSend.username)) {
            Accounts.createUser({
                username: toSend.username,
                password: toSend.password,
                profile: {
                    address: toSend.profile.address,
                    usertype: toSend.profile.usertype,
                }
            });
        }
    },
    'account.update'(toSend) {
        check(toSend, Object);
                
        if (!this.userId) {
        throw new Meteor.Error('Not authorized.');
        }

        Meteor.users.findOne({address: toSend.address});
        Meteor.users.findOne({phone: toSend.phone});
        Meteor.users.findOne({fullname: toSend.fullname});

        }

});   
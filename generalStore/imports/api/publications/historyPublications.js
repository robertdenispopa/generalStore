import { Meteor } from 'meteor/meteor';
import { HistoryCollection } from '../collections/HistoryCollections';

Meteor.publish('History', function publishHistory() {
    return HistoryCollection.find({ userId: this.userId });
});
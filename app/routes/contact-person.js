import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    //var x =  this.store.createRecord('contact-person',{title:'test',emai:'test'});
    //x.save();
    return this.store.findAll('contact-person');
  }
});

import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  headers:{
    // "cid":"bd92b290-7c19-4667-b73d-a78e51e43798",
    "cid":"cbdcfa43-dd67-4c38-b418-83572a936fca",
    "Content-Type":"application/json"
  },
  host:'https://193.67.163.141',
  namespace:'api/secure'
});

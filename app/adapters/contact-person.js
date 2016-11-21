import Gaq from './gaq';

export default Gaq.extend({
  pathForType(){
    return 'heartbeat';
  }
});

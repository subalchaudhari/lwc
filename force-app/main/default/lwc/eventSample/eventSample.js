import { LightningElement, track } from 'lwc';

export default class EventSample extends LightningElement {

    @track page = 1;

    handlePrevious(){
      //  console.log('You clicked Pre button');
        if(this.page > 1){
            this.page = this.page - 1;
        }
    }

    handleNext(){
      // alert('You clicked Pre button');
        
            this.page = this.page + 1;
        
    }
}
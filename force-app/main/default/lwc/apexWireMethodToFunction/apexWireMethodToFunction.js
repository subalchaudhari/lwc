import { LightningElement, wire, track } from 'lwc';
import getAllContactList from '@salesforce/apex/apexWireExample.getAllContactList'

export default class ApexWireMethodToFunction extends LightningElement {

    @track contacts;
    @track error;

    @wire(getAllContactList)
    wiredContacts({ error, data }){
        if(data){
            this.contacts = data;
        }
        else if(error){
            this.error = error ;
        }
    }
}
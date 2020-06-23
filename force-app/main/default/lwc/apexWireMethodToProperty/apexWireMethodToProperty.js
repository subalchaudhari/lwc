import { LightningElement, wire } from 'lwc';
import getAllContactList from '@salesforce/apex/apexWireExample.getAllContactList'

export default class ApexWireMethodToProperty extends LightningElement {
    @wire(getAllContactList) contacts;
}
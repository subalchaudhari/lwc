import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CONTACT_OBJECT  from '@salesforce/schema/Contact';
import CONTACT_FIRSTNAME_FIELD  from '@salesforce/schema/Contact.FirstName';
import CONTACT_LASTNAME_FIELD  from '@salesforce/schema/Contact.LastName';
import CONTACT_EMAIL_FIELD from '@salesforce/schema/Contact.Email';


export default class ContactCreator extends LightningElement {
    objectApiName = CONTACT_OBJECT;
    fields = [CONTACT_FIRSTNAME_FIELD,CONTACT_LASTNAME_FIELD,CONTACT_EMAIL_FIELD];
    handleSuccess(event){
        const toastEvnt = new ShowToastEvent({
            title : "Contact Created",
            message : "Record Id: " + event.data.id,
            varient :"success"

        });
        this.dispatchEvent(toastEvnt);
    }
}
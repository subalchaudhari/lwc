import { LightningElement, wire, track } from 'lwc';
import { registerListener, unregisterAllListeners,  } from 'c/pubsub';    
import { CurrentPageReference } from 'lightning/navigation';  // using page ref to restrict scope

export default class SimpleSub extends LightningElement
{
    @track receivedOne;
    @track someValue;
    @wire(CurrentPageReference) pageRef;
    
    connectedCallback()   
    {
        registerListener('sendsbc', this.handleSendOne, this);   
    }

    disconnectedCallback() 
    {
        unregisterAllListeners(this);  
    }

    handleSendOne(event) 
    {
        this.receivedOne = event.theString;
        this.someValue = event.someValue;
    }
}
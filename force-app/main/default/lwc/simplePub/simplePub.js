import { LightningElement, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';

export default class SimplePub extends LightningElement 
{
    @wire(CurrentPageReference) pageRef;

    sendone() 
    {
        fireEvent(this.pageRef, 'sendsbc', {
            theString: 'This is a one!',
            someValue: 1
        });
    }
}
import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class NavigationMixinSample extends NavigationMixin(LightningElement) {
    navigationRecordPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'001gL00000TnxRHQAZ',
                objectApiName:'Account',
                actionName:'view',
            },
    });
}
navigationObjectPage(){
    this[NavigationMixin.Navigate]({
        type:'standard__objectPage',
        attributes:{
            objectApiName:'Account',
            actionName:'list',
        },
        state:{
            filterName: 'AllAccount'
        }

    });
}
navigationWebPage(){
    this[NavigationMixin.Navigate]({
        type:'standard__webPage',
        attributes:{
            url:'https://www.salesforce.com',
        }
    });
}
navigationCustomPage(){
    this[NavigationMixin.Navigate]({
        type:'standard__navItemPage',
        attributes:{
            apiName:'Create_Default_Data',
        }
    });
}
}

public with sharing class SoundController {
    
    @AuraEnabled
    public static List<SoundClip__C> showData(){
        return [select id,Name,Url__c from SoundClip__c order by Name];
    }

}
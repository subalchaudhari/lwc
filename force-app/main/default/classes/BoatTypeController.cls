public with sharing class BoatTypeController {

    @AuraEnabled
    public static List<BoatType__c> getAllBoatTypes(){
        return [select Id,Name from BoatType__c order by Name];
    }
}
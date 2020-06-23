public with sharing class OpportunityController {
    @AuraEnabled
    public static List<Opportunity> getAllOpp1(){
        return [select id,name,amount from Opportunity];
    }
    
    @AuraEnabled
    public static List<Opportunity> showInfo(String oppId){
        return [select name,Account.Name,amount,stagename from Opportunity where Id = :oppId];
    }
}
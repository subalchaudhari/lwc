public with sharing  class BoatSearchResults {
	@AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId){
        if(boatTypeId == ''){
            return [select Name,Picture__c,Contact__r.Name,Geolocation__latitude__s,Geolocation__longitude__s from Boat__c];
        }else{
        return [select Name,Picture__c,Contact__r.Name,Geolocation__latitude__s,Geolocation__longitude__s from Boat__c where BoatType__r.Name = :boatTypeId];
    }
    }
}
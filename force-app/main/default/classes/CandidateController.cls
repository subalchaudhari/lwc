public with sharing class CandidateController {
	@AuraEnabled
    public static List<Candidate__c> showAllRecords(){
        return[select first_name__c,last_name__c,email__c from Candidate__c order by first_name__c];
    }
    
    @AuraEnabled
    public static String loadCandidate(String cfname,String clname,String cemail){
        Candidate__c nc = new Candidate__c(first_name__c=cfname,last_name__c=clname,email__c=cemail);
        try{
            insert nc;
            return 'record created successfully';
        }catch(DmlException e){
            return e.getMessage();
        }
    }
    
    @AuraEnabled
    public static List<Candidate__c> searchCandidate(String fname){
        String fn= '%'+fname+'%';
        return [select first_name__c,last_name__c,email__c from Candidate__c where first_name__c like :fn];
    }
    
    @AuraEnabled
    public static Candidate__c displayCandidateByName(String cfname){
        Candidate__c sc= [select id,First_name__c from Candidate__c
                          where First_name__c =:cfname limit 1];
        return sc;
    }
    
   
}
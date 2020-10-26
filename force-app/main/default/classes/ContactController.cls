public with sharing class ContactController {
    public ContactController() {

    }

    @AuraEnabled(cacheable = true)
    public static List<Contact> getContacts(){
        try {
            throw new AuraHandledException('Forced error');
          /*  return[
                SELECT FIRSTNAME,LASTNAME,Email
                FROM Contact
                WITH SECURITY_ENFORCED
                Order by Name
            ]; */
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
   
}

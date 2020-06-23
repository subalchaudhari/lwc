public class apexWireExample{

    @AuraEnabled(cacheable=true)   
    public static List<Contact> getAllContactList(){
        return [select email,name from Contact];
    }
}
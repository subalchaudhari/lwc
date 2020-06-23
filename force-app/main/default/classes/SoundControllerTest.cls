@isTest(seeAllData=true)
private class SoundControllerTest {
	
    private static testMethod void checkSoundData(){
        List<SoundClip__c> actualDataList = [select name,url__c from SoundClip__c];
        List<SoundClip__c> conData = SoundController.showData();
        
        set<SoundClip__c> aset1 = new set<SoundClip__c>(actualDataList);
        set<SoundClip__c> aset2 = new set<SoundClip__c>(conData);
        Test.startTest();
        System.assertEquals(actualDataList.size(),conData.size());
        System.assert(aset1.containsAll(aset2));
        Test.stopTest();
    }
}
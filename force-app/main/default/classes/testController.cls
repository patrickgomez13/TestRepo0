public with sharing class testController {

    public static List<Account> testController () {
        return[SELECT Id, Name FROM  Account];

    }
}
/**
 * @description       : 
 * @author            : Christian Abellanosa
 * @group             : 
 * @last modified on  : 10-30-2021
 * @last modified by  : Christian Abellanosa
**/
public with sharing class TestController2 {
    public static List<Account> getAccounts(){
        return [SELECT ID FROM Account];
    }
}
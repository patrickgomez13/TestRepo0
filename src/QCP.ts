//import testController from '../classes/testController';
export function onAfterPriceRules(quoteModel, quoteLineModels, conn) {
    
	for(var line of quoteLineModels){
		line.record["SBQQ__ListPrice__c"]  = 69 + 520;

	}

	return Promise.resolve();
};
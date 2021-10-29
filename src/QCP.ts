export async function onAfterPriceRules(quoteModel, quoteLineModels, conn) {

	/*
	conn.query('SELECT Id, Name FROM ACCOUNT')
	.then(function(results){
		var recordCount = results.totalSize;
		if(recordCount > 0){
			results.records.forEach(function(record){
				console.log(record["Name"]);
			});

			//option 2
			for(var record of results.records){
				console.log(record["Id"]);
			}
		}
		else{
		}
	});
	*/

	var type = 'Customer - Direct';
	var condition = {
		Type: type
	}
	var fields = ['Id', 'Name'];
	await conn.sobject('Account').find(condition, fields).execute(function(err, records){
		if(err){

		}
		else{
			console.log(records.length);
			
			if(records.length > 0){
				records.forEach(function(record){
					console.log(record["Name"]);
				});
	
				//option 2
				for(var record of records){
					console.log(record["Id"]);
				}
			}
			else{
			}
		}
	});
    
	console.log('QLM');	
	for(var line of quoteLineModels){
		line.record["SBQQ__ListPrice__c"]  = 69 + 520;
	}

	return Promise.resolve();
};

/*
		if (codes.length) {
			var conditions = {
				SBQQ__Category__c: {$in: codes}
			};
			var fields = ['Id', 'Name', 'SBQQ__Category__c', 'SBQQ__Value__c'];
			return conn.sobject('SBQQ__LookupData__c')
				.find(conditions, fields)
				.execute(function(err, records) {
					if (err) {
						return Promise.reject(err);
					} else {
						var valuesByCategory = {};
						records.forEach(function(record) {
							valuesByCategory[record.SBQQ__Category__c] = record.SBQQ__Value__c;
						});
						lines.forEach(function(line) {
							if (line.record['SBQQ__ProductCode__c']) {
								line.record['SBQQ__Description__c'] = valuesByCategory[line.record['SBQQ__ProductCode__c']] || '';
							}
						});
					}
				});
		}
*/
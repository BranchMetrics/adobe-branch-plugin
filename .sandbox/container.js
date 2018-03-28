module.exports = {
	rules: [
		{
			name: 'Example Rule 0',
			events: [
				{
					modulePath: 'branch-mobile-growth/src/lib/events/domReady.js',
					settings: {}
				}
			],
			actions: [
				{
					modulePath: 'branch-mobile-growth/src/lib/actions/initializeBranch.js',
				}
			]
		},
		{
			name: 'Example Rule 1',
			events: [
				{
					modulePath: 'sandbox/click.js',
					settings: {}
				}
			],
			actions: [
				{
					modulePath: 'branch-mobile-growth/src/lib/actions/sendSMS.js',
					settings: {
						"smsPhoneNumber": "<insert number here>",
						"smsLink": {
							"tags": [
								"a",
								"b",
								"c",
								"d",
								"e"
							],
							"data": {
								"key1": "val1",
								"key2": "val2",
								"key3": "val3"
							}
						}
					}
				}
			]
		}
	],
	dataElements: {
	// productId: {
	//     // This is a simple data element type provided by the sandbox which retrieves a value
	//     // from local storage. This data element type is provided as a convenience in case
	//     // your extension does not have any data element types of its own.
	//     modulePath: 'sandbox/localStorage.js',
	//     settings: {
	//       // The local storage item name.
	//       name: 'productId'
	//     }
	//   }
	},
	extensions: {
		// Set up an extension configuration you would like to test. The top-level object key is the
		// name of your extension (as defined in your extension.json).
		'branch-mobile-growth': {
			displayName: 'Branch Deeplinking',
			settings: {
				'branchKey': 'key_live_hkDytPACtipny3N9XmnbZlapBDdj4WIL'
                  }
		}
	},
	property: {
		name: 'Sandbox Property',
		settings: {
			domains: [
				'192.168.0.139',
				'172.16.32.14',
			],
			linkDelay: 100,
			trackingCookieName: 'sat_track',
			undefinedVarsReturnEmpty: false
		}
	},
	buildInfo: {
		turbineVersion: '14.0.0',
		turbineBuildDate: '2016-07-01T18:10:34Z',
		buildDate: '2016-08-01T12:10:33Z',
		environment: 'development'
	}
};

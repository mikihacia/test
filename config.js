{
				module: 'MMM-MQTTfloorplan',
				position: 'center', // this can be any of the regions
				config: {
					mqttServer: {
						url: "192.168.0.110",
						user: "",
						password: ""
						},
						
					floorplan: {
						image: "floorplan.png", // image in subfolder 'images'; change to floorplan.png to avoid git repository changes
						width: 634, // this must be the width of the image above
						height: 392, // this must be the height of the image above
					},
					subscriptions: [
					/*{
						topic: '', // MQTT Topic name
						label: 'Living Light',	// Not displayed anywhere! 
						type: 'door',			// Using 'door' instead 'light' to get 2-state icon
						display: { left: 50, top: 50 },
					},
					{
						topic: '',
						label: 'First Floor Corr PIR',
						type: 'motion',		
						display: { left: 100, top: 150 },
					},
					{
						topic: 'LivT',
						label: 'Living Temp',
						type: 'label',
						display: { left: 44, top: 159, prefix: "", suffix: " °C", decimals: 1 },
					},
					{
						topic: 'LivH',
						label: 'Living Humidity',
						type: 'label',
						display: { left: 44, top: 179, prefix: "", suffix: " %RH", decimals: 0 },
					},
					{
						topic: 'GuestT',
						label: 'Guest Room Temp',
						type: 'label',
						display: { left: 255, top: 193, prefix: "", suffix: " °C", decimals: 1 },
					},
					{
						topic: 'GuestH',
						label: 'Guest Room Humidity',
						type: 'label',
						display: { left: 255, top: 213, prefix: "", suffix: " %RH", decimals: 0 },
					},
					{
						topic: 'eStatus',
						label: 'Weather',
						type: 'label',
						//key: 'OAT', //I would like to have configurable keyword for each name of object that I want display.
						//jsonpointer: '/OAT',
						display: { left: 55, top: 337, prefix: "", suffix: " °C", decimals: 1 },
					},
					]
				}
			},

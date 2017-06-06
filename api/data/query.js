db.hotels.update(
	{
		"name" : "Grand Hotel Palatino"
	},
	{
		$set : {
			"reviews,1,_id" : ObjectId()
		}
	}
)
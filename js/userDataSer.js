app.factory('userDataSer',function()
{
  userDataSer=[];
  var restorents=
   [
  		{
  			name:"kaalifa",
  		 	location:"Domlur",
  		 	type:"veg",
  		 	costForTwo:1200,
  		 	cuisine:"North Indian",
  		 	NoOfTables:20
  		},

  		{
  			name:"Punjab Grill",
  			location:"Koramangala",
  			type:"Non-veg",
  			costForTwo:500,
  			cuisine:"Italian",
  			NoOfTables:20
  		},

  		{
  			name:"Cafenation",
  			location:"Koramangala",
  			type:"veg",
  			costForTwo:800,
  			cuisine:"Mexican",
  			NoOfTables:20
  		}
  	];
userDataSer.restorents=restorents;
return userDataSer;

}
)

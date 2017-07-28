##SmartEnergyMeter
Welcome to our smart energy project.

## api
 Active URL's are

 1. http://localhost:3000/users/register - signup
 2. http://localhost:3000/users/login - login
 3. http://localhost:3000/device/:userId - device info based on logged in userId 


## front-end

1. http://localhost:4200
   will navigate to login page
2. Enter email and password to login
3. dashboard will show energy consumption in pie chart
   

## prerequisite

postman client[rest client]

1. To dump user Register data 
  url - http://localhost:3000/users/register
  method - post
  body - {
            "username":"abc",
            "email":"abc@gmail.com",
            "passwords":{
                "password":"1234"
            }
        }
 response - {
                "__v": 0,
                "email": "abc@gmail.com",
                "password": "1234",
                "_id": "597a2ae22bce9e1b499e5c52"
            }

2. To dump device data to mongodb

db.devices.insert({
"userId":"597a2ae22bce9e1b499e5c52",
    "device":[
        {
            "appliance_name":"fan",
            "operating_freq":"2",
            "type":"cooling",
            "model":"fan-12",
            "purchase_date":"",
            "avg_lifetime":"",
            "location":[{
                "name":"whitefield"
            }],
            "remarks":"4",
            "power":"1"
        },
        {
            "appliance_name":"heater",
            "operating_freq":"5",
            "type":"water Heating",
            "model":"heater-ab",
            "purchase_date":"",
            "avg_lifetime":"",
            "location":[{
                "name":"zone"
            }],
            "remarks":"3",
            "power":"4"
        },
        {
            "appliance_name":"Fridge",
            "operating_freq":"40",
            "type":"Refrigerator",
            "model":"Refrigerator-12",
            "purchase_date":"",
            "avg_lifetime":"",
            "location":[{
                "name":"marathalli"
            }],
            "remarks":"4.5",
            "power":"12"
        },
        {
            "appliance_name":"mixer",
            "operating_freq":"8",
            "type":"cooking",
            "model":"mixer-12",
            "purchase_date":"",
            "avg_lifetime":"",
            "location":[{
                "name":"silk board"
            }],
            "remarks":"5",
            "power":"7"
        }
    ]
})




// basic callback

function greet(callback)
{
    console.log("Hi bro my name is Haneef");
    callback();
}

greet(function(){
    console.log("This is callback");
})

// pass data to callback

function check(callback){
    let user = {
        name : "Jimmy",
        age : 20
    }

    callback(user);
}

check(function(data){
    console.log("the name is " + data.name);
});

//Build own fake event System

function mycontrolsystem(eventType, callback)
{
    let event;
    switch(eventType)
    {
        case "keydown":
            event = {
                type : "keydown",
                time : "10.30",
                reason : "Check Keydown"
            }
            break;
        
        case "click":
            event = {
                type : "click",
                time : "12.30",
                reason : "Check click"
            }
            break;

        default:
            console.log("error");
            break;
    }

    callback(event);
    
    
}

mycontrolsystem("keydown" , function(value)
{
    console.log(value.time);
    console.log(value.reason);
})
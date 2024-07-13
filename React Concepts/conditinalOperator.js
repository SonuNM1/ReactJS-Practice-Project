
// condition ? <expression if true> : <expression if false>

// before 

if(authenticate){
    console.log("User authenticated");
} else{
    console.log('User not authenticated');
}

// after 

authenticate ? console.log('Authenticated') : console.log('not authenticated ');
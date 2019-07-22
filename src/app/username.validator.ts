import { FormControl } from '@angular/forms';

export class UsernameValidator {


  static validUsername(fc: FormControl){
      console.log("eeeeeee",fc.value)
     var vall = localStorage.getItem("selectbox");
     console.log("valll",vall)
     var dbDetails = [{"dbname":"test1","dburl":"localhost:111"},{"dbname":"test11","dburl":"localhost:1111"},{"dbname":"test111","dburl":"localhost:11111"}]
    for(let i=0;i<dbDetails.length;i++){
     if(vall == dbDetails[i]['dbname']) {
       if(fc && fc.value) {
       if(fc.value.toLowerCase()!=dbDetails[i]['dburl'] )
       {
        return ({validUsername: true});    
    } else {
        return (null);
    }
  }
}
}
  }
}
class worlBank{

    constructor(name,accNo,bal){
        this.name = name 
        this.accNo = accNo
        this.bal = bal
    }

    save(){
        console.log('Save ---worldbank')
    }

    loan(){
        console.log('Loan --- World banl')
    }
}

class SBI extends worlBank {

    save(){
        console.log('Save --- SBI')
        super.save()
    }

    loan(){
        console.log('Loan --- SBI')
        super.save()
    }

    add(a,b,c){

        if(a != undefined && b != undefined && c != undefined){
            console.log(a+b+c)
        }
        else if( a != undefined && b != undefined){
            console.log(a+b)
        }
        else {
            console.log('Incorrect Input')
        }


    }

}

let kharadi = new SBI("chinmay",122,123)
kharadi.loan()
kharadi.save()

// overloading 
kharadi.add(12,33,44)
kharadi.add(12,33)
kharadi.add(1)
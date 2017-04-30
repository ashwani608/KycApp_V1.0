pragma solidity ^0.4.4;

contract KycCustomer {

  function KycCustomer() {
    // constructor
  }


  struct Customer
  {
    string name;
    uint customerID;
    uint ssn;
    //timestamp
    //hash
  }

  Customer public myCustomer;

  function addCustomer(string name, uint customerID, uint ssn, bool dummyVal) returns (bool success)
  {
    Customer memory newCustomer;
    newCustomer.name = name;
    newCustomer.customerID = customerID;
    newCustomer.ssn = ssn;

    myCustomer=newCustomer;

    return true;
  }

  function getCustomer() constant returns (string,uint,uint)
  {

        string customerName = myCustomer.name;
        uint customerID = myCustomer.customerID;
        uint CustomerSsn = myCustomer.ssn;

        return (myCustomer.name,customerID,CustomerSsn);


  }


}
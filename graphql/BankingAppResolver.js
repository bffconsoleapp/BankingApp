const resolvers = {
  Query: {
    searchCreditUnionByContractNumber: (parent, args, context, info) => {
      // Sample data
      const creditUnions = [
        { id: '1', Contract_Number: '12345', Credit_Union_Name: 'UnionOne', ... },
        { id: '2', Contract_Number: '67890', Credit_Union_Name: 'UnionTwo', ... }
      ];
      return creditUnions.filter(cu => cu.Contract_Number === args.contractNumber);
    },
    searchCreditUnionByName: (parent, args, context, info) => {
      // Sample data
      const creditUnions = [
        { id: '1', Contract_Number: '12345', Credit_Union_Name: 'UnionOne', ... },
        { id: '2', Contract_Number: '67890', Credit_Union_Name: 'UnionTwo', ... }
      ];
      return creditUnions.filter(cu => cu.Credit_Union_Name === args.name);
    },
    searchCreditUnionByState: (parent, args, context, info) => {
      // Sample data
      const creditUnions = [
        { id: '1', Contract_Number: '12345', Credit_Union_Name: 'UnionOne', state: 'California', ... },
        { id: '2', Contract_Number: '67890', Credit_Union_Name: 'UnionTwo', state: 'Nevada', ... }
      ];
      return creditUnions.filter(cu => cu.state === args.state);
    },
    searchCreditUnionByNameAndState: (parent, args, context, info) => {
      // Sample data
      const creditUnions = [
        { id: '1', Contract_Number: '12345', Credit_Union_Name: 'UnionOne', state: 'California', ... },
        { id: '2', Contract_Number: '67890', Credit_Union_Name: 'UnionTwo', state: 'Nevada', ... }
      ];
      return creditUnions.filter(cu => cu.Credit_Union_Name === args.name && cu.state === args.state);
    },
  },
  Mutation: {
    editPremiumAdjustment: (parent, { input }, context, info) => {
      // Sample data
      const premiumAdjustments = [
        { id: '1', Product_Name: 'ProductA', Total_Borrower_Fees: 100.0, CU_Retail_Rate: 2.5, ... },
        { id: '2', Product_Name: 'ProductB', Total_Borrower_Fees: 200.0, CU_Retail_Rate: 3.5, ... }
      ];

      const adjustment = premiumAdjustments.find(pa => pa.id === input.id);
      if (!adjustment) {
        throw new Error('Premium adjustment not found');
      }

      // Update logic here
      adjustment.Total_Borrower_Fees = parseFloat(input.Total_Borrower_Fees);
      adjustment.CU_Retail_Rate = parseFloat(input.CU_Retail_Rate);
      adjustment.Protected_Loan_Amount = parseFloat(input.Protected_Loan_Amount);
      adjustment.Pay_Rate = parseFloat(input.Pay_Rate);
      adjustment.Premium_Due = parseFloat(input.Premium_Due);
      adjustment.Total_Amount = parseFloat(input.Total_Amount);

      return adjustment;
    }
  }
};

export default resolvers;
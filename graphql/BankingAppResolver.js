const resolvers = {
  Query: {
    searchCreditUnionByContractNumber: (_, { contractNumber }) => {
      // Placeholder logic for searching credit unions by contract number
      return mockCreditUnions.filter(cu => cu.Contract_Number === contractNumber);
    },
    searchCreditUnionByName: (_, { name }) => {
      // Placeholder logic for searching credit unions by name
      return mockCreditUnions.filter(cu => cu.Credit_Union_Name === name);
    },
    searchCreditUnionByState: (_, { state }) => {
      // Placeholder logic for searching credit unions by state
      return mockCreditUnions.filter(cu => cu.State === state);
    },
    searchCreditUnionByNameAndState: (_, { name, state }) => {
      // Placeholder logic for searching credit unions by name and state
      return mockCreditUnions.filter(cu => cu.Credit_Union_Name === name && cu.State === state);
    },
  },
  Mutation: {
    editPremiumAdjustment: (_, { input }) => {
      // Placeholder logic for editing a premium adjustment
      const adjustment = mockPremiumAdjustments.find(a => a.id === input.id);
      if (adjustment) {
        Object.assign(adjustment, input);
      }
      return adjustment;
    },
  },
};

const mockCreditUnions = [
  {
    id: "1",
    Contract_Number: "123",
    Credit_Union_Name: "First Credit Union",
    State: "NY",
    premium_reports: [],
    premium_adjustments: [],
    single_premium_certificate_returns: [],
  },
  // Add more mock credit unions as needed
];

const mockPremiumAdjustments = [
  {
    id: "1",
    Product_Name: "Product 1",
    Report_Period: "2023-09",
    Status: "Active",
    Last_Update: "2023-10-01",
    Period_Ending: "2023-09-30",
    Adjustment_Type_to_the_Credit_Union: "Type 1",
    Comment: "Adjustment for period",
    Total_Borrower_Fees_: 100.0,
    CU_Retail_Rate: 2.5,
    Protected_Loan_Amount: 5000.0,
    Pay_Rate: 1.0,
    Premium_Due: 200.0,
    Total_Amount: 300.0,
  },
  // Add more mock premium adjustments as needed
];
//

export default resolvers;
import React, { useContext, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";

//context is used so that information can be passed through entire app

const BudgetContext = React.createContext();

export const UNCATEGORISED_BUDGET_ID = "Uncategorized";

export function useBudgets() {
  return useContext(BudgetContext);
}

export const BudgetProvider = ({ children }) => {
  const [budgets, setBudgets] = useLocalStorage("budgets", []);
  const [expenses, setExpenses] = useLocalStorage("expenses", []);

  //returns expenses with same budgetID
  function getBudgetExpenses(budgetId) {
    return expenses.filter((expense) => expense.budgetId === budgetId);
  }

  function addExpense({ description, amount, budgetId }) {
    //Adds expense  with unique ID
    setExpenses((prevExpenses) => {
      return [...prevExpenses, { id: uuidV4(), description, amount, budgetId }];
    });
  }

  function addBudget({ name, max }) {
    setBudgets((prevBudgets) => {
      //Simple check to make sure that duplicate budgets cant be created
      if (prevBudgets.find((budget) => budget.name === name)) {
        return prevBudgets;
      }
      //Adds budget with unique ID
      return [...prevBudgets, { id: uuidV4(), name, max }];
    });
  }

  //input an ID and it will delete that ID from current Budgets
  function deleteBudget({ id }) {
    setBudgets((prevBudgets) => {
      return prevBudgets.filter((budget) => budget.id !== id);
    });
  }

  //Input an ID and it will delete that ID from current Expeneses
  function deleteExpenses({ id }) {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter((expense) => expense.id !== id);
    });
  }

  return (
    <BudgetContext.Provider
      value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpense,
        addBudget,
        deleteExpenses,
        deleteBudget,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

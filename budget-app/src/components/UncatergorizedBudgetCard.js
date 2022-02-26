import React from "react";
import {
  UNCATEGORISED_BUDGET_ID,
  useBudgets,
} from "../contexts/BudgetContexts";
import BudgetCard from "./BudgetCard";

export default function UncatergorizedBudgetCard(props) {
  const { getBudgetExpenses } = useBudgets();
  const amount = getBudgetExpenses(UNCATEGORISED_BUDGET_ID).reduce(
    (total, expense) => total + expense.amount,
    0
  );

  if (amount === 0) {
    return null;
  }
  return (
    <div>
      <BudgetCard amount={amount} name="Uncatergorized" gray {...props} />
    </div>
  );
}

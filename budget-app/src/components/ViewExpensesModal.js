import { Modal, ModalTitle, Button } from "react-bootstrap";

import {
  UNCATEGORISED_BUDGET_ID,
  useBudgets,
} from "../contexts/BudgetContexts";

export default function ViewExpensesModal({ show, handleClose }) {
  const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } =
    useBudgets();

  const budget =
    UNCATEGORISED_BUDGET_ID === budgetId
      ? { name: "Uncategorised", id: UNCATEGORISED_BUDGET_ID }
      : budgets.find((b) => b.id === budgetId);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>
          <Stack direction="horizontal" gap="2">
            <div>Expenses - {budget?.name}</div>
            {budgetId !== UNCATEGORISED_BUDGET_ID && (
              <Button
                onClick={() => {
                  deleteBudget(budget), handleClose();
                }}
                variant="outline-danger"
              ></Button>
            )}
            )
          </Stack>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="max">
          <Form.Label>Name</Form.Label>
          <Form.Control ref={nameRef} type="text" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="max">
          <Form.Label>Maximum Spending</Form.Label>
          <Form.Control
            ref={maxRef}
            type="number"
            required
            min={0}
            step={0.01}
          />
        </Form.Group>
        <div className="d-flex justify-content-end">
          <Button variant="primary" type="submit">
            Add
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

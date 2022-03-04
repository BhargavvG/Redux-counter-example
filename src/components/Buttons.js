import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/action-creators";

export default function Buttons() {
  const dispatch = useDispatch();
  const { withdrawMoney, depositMoney, resetMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <div className="buttons">
      <button
        type="button"
        className="btn btn-outline-danger me-2"
        onClick={() => withdrawMoney(100)}
      >
        Decrease
      </button>
      <button
        type="button"
        className="btn btn-outline-primary me-2"
        onClick={() => resetMoney()}
      >
        Reset
      </button>
      <button
        type="button"
        className="btn btn-outline-success me-2"
        onClick={() => depositMoney(100)}
      >
        Increase
      </button>
    </div>
  );
}

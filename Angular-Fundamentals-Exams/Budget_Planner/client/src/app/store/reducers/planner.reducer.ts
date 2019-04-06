import { PlannerState } from "../state/planner.state";
import * as PlannerAction from '../actions/planner.action';

const initialState: PlannerState = {
    balanceList: [],
    detailsBalance: null
};

function getBalanceList(state: PlannerState, payload) {
    return Object.assign({}, state, { 
        balanceList: payload
    });
}

function getDetailsBalance(state: PlannerState, payload) {
    return Object.assign({}, state, { 
        detailsBalance: payload
    });
}

function updateBalance(state: PlannerState, payload) {
    return Object.assign({}, state, {
        detailsBalance: Object.assign({}, state.detailsBalance, payload)
    });
}

function removeExpense(state: PlannerState, payload) {
    return Object.assign({}, state, {
        detailsBalance: Object.assign({}, state.detailsBalance, {
            expenses: state.detailsBalance.expenses.filter(a => a.id !== payload)
        })
    });
}

export function plannerReducer(
    state: PlannerState = initialState,
    action: PlannerAction.Type
) {
    switch (action.type) {
        case PlannerAction.GET_BALANCE_LIST:
            return getBalanceList(state, action.payload);
        case PlannerAction.GET_DETAILS_BALANCE:
            return getDetailsBalance(state, action.payload);
        case PlannerAction.UPDATE_BALANCE:
            return updateBalance(state, action.payload);
        case PlannerAction.REMOVE_EXPENSE:
            return removeExpense(state, action.payload);
        default:
            return state;
    }
}

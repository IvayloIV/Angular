import { IMonthBalance } from 'src/app/core/contracts/planner/IMonthBalance';
import { IDetailsBalance } from 'src/app/core/contracts/planner/IDetailsBalance';

export interface PlannerState {
    balanceList: IMonthBalance[];
    detailsBalance: IDetailsBalance;
}
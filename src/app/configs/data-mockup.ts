import { BudgetItemModel } from "../shared/models/budget-item.model";

export abstract class Data {
    public static Budget: BudgetItemModel[] = [
        {
            amount: 1000,
            description: 'Interest rate'
        },
        {
            amount: -200,
            description: 'F&B'
        },
        {
            amount: 269,
            description: 'Daddy gives me'
        },
        {
            amount: -1212,
            description: 'Buy shoes'
        }
    ]
}

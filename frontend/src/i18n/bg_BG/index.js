/*
 * index.js
 * Copyright (c) 2022 james@firefly-iii.org
 *
 * This file is part of Firefly III (https://github.com/firefly-iii).
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

export default {
    "config": {
        "html_language": "bg",
        "month_and_day_fns": "d MMMM y"
    },
    "form": {
        "name": "\u0418\u043c\u0435",
        "amount_min": "\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u043d\u0430 \u0441\u0443\u043c\u0430",
        "amount_max": "\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u043d\u0430 \u0441\u0443\u043c\u0430",
        "url": "URL",
        "title": "\u0417\u0430\u0433\u043b\u0430\u0432\u0438\u0435",
        "first_date": "\u041f\u044a\u0440\u0432\u0430 \u0434\u0430\u0442\u0430",
        "repetitions": "\u041f\u043e\u0432\u0442\u043e\u0440\u0435\u043d\u0438\u044f",
        "description": "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",
        "iban": "IBAN",
        "skip": "\u041f\u0440\u043e\u043f\u0443\u0441\u043d\u0438",
        "date": "\u0414\u0430\u0442\u0430"
    },
    "list": {
        "name": "\u0418\u043c\u0435",
        "account_number": "Account number",
        "currentBalance": "\u0422\u0435\u043a\u0443\u0449 \u0431\u0430\u043b\u0430\u043d\u0441",
        "lastActivity": "\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0430 \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442",
        "active": "\u0410\u043a\u0442\u0438\u0432\u0435\u043d \u043b\u0438 \u0435?"
    },
    "breadcrumbs": {
        "placeholder": "[Placeholder]",
        "budgets": "\u0411\u044e\u0434\u0436\u0435\u0442\u0438",
        "subscriptions": "\u0410\u0431\u043e\u043d\u0430\u043c\u0435\u043d\u0442\u0438",
        "transactions": "\u0422\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438",
        "title_expenses": "\u0420\u0430\u0437\u0445\u043e\u0434\u0438",
        "title_withdrawal": "\u0420\u0430\u0437\u0445\u043e\u0434\u0438",
        "title_revenue": "\u041f\u0440\u0438\u0445\u043e\u0434\u0438",
        "title_deposit": "\u041f\u0440\u0438\u0445\u043e\u0434\u0438",
        "title_transfer": "\u041f\u0440\u0435\u0445\u0432\u044a\u0440\u043b\u044f\u043d\u0438\u044f",
        "title_transfers": "\u041f\u0440\u0435\u0445\u0432\u044a\u0440\u043b\u044f\u043d\u0438\u044f",
        "asset_accounts": "\u0421\u043c\u0435\u0442\u043a\u0438 \u0437\u0430 \u0430\u043a\u0442\u0438\u0432\u0438",
        "expense_accounts": "\u0421\u043c\u0435\u0442\u043a\u0438 \u0437\u0430 \u0440\u0430\u0437\u0445\u043e\u0434\u0438",
        "revenue_accounts": "\u0421\u043c\u0435\u0442\u043a\u0438 \u0437\u0430 \u043f\u0440\u0438\u0445\u043e\u0434\u0438",
        "liabilities_accounts": "\u0417\u0430\u0434\u044a\u043b\u0436\u0435\u043d\u0438\u044f"
    },
    "firefly": {
        "administration_index": "Financial administration",
        "actions": "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f",
        "edit": "\u041f\u0440\u043e\u043c\u0435\u043d\u0438",
        "delete": "\u0418\u0437\u0442\u0440\u0438\u0439",
        "reconcile": "\u0421\u044a\u0433\u043b\u0430\u0441\u0443\u0432\u0430\u0439",
        "create_new_asset": "\u0421\u044a\u0437\u0434\u0430\u0439 \u043d\u043e\u0432\u0430 \u0441\u043c\u0435\u0442\u043a\u0430 \u0437\u0430 \u0430\u043a\u0442\u0438\u0432\u0438",
        "confirm_action": "Confirm action",
        "new_budget": "\u041d\u043e\u0432 \u0431\u044e\u0434\u0436\u0435\u0442",
        "new_asset_account": "\u041d\u043e\u0432\u0430 \u0441\u043c\u0435\u0442\u043a\u0430 \u0437\u0430 \u0430\u043a\u0442\u0438\u0432\u0438",
        "newTransfer": "\u041d\u043e\u0432\u043e \u043f\u0440\u0435\u0445\u0432\u044a\u0440\u043b\u044f\u043d\u0435",
        "submission_options": "Submission options",
        "apply_rules_checkbox": "Apply rules",
        "fire_webhooks_checkbox": "Fire webhooks",
        "newDeposit": "\u041d\u043e\u0432 \u0434\u0435\u043f\u043e\u0437\u0438\u0442",
        "newWithdrawal": "\u041d\u043e\u0432 \u0440\u0430\u0437\u0445\u043e\u0434",
        "bills_paid": "\u041f\u043b\u0430\u0442\u0435\u043d\u0438 \u0441\u043c\u0435\u0442\u043a\u0438",
        "left_to_spend": "\u041e\u0441\u0442\u0430\u043d\u0430\u043b\u0438 \u0437\u0430 \u0445\u0430\u0440\u0447\u0435\u043d\u0435",
        "no_budget": "(\u0431\u0435\u0437 \u0431\u044e\u0434\u0436\u0435\u0442)",
        "budgeted": "\u0411\u044e\u0434\u0436\u0435\u0442\u0438\u0440\u0430\u043d\u0438",
        "spent": "\u041f\u043e\u0445\u0430\u0440\u0447\u0435\u043d\u0438",
        "no_bill": "(\u043d\u044f\u043c\u0430 \u0441\u043c\u0435\u0442\u043a\u0430)",
        "rule_trigger_source_account_starts_choice": "\u0418\u043c\u0435\u0442\u043e \u043d\u0430 \u0440\u0430\u0437\u0445\u043e\u0434\u043d\u0430\u0442\u0430 \u0441\u043c\u0435\u0442\u043a\u0430 \u0437\u0430\u043f\u043e\u0447\u0432\u0430 \u0441..",
        "rule_trigger_source_account_ends_choice": "\u0418\u043c\u0435\u0442\u043e \u043d\u0430 \u0440\u0430\u0437\u0445\u043e\u0434\u043d\u0430\u0442\u0430 \u0441\u043c\u0435\u0442\u043a\u0430 \u0437\u0430\u0432\u044a\u0440\u0448\u0432\u0430 \u0441..",
        "rule_trigger_source_account_is_choice": "\u0418\u043c\u0435\u0442\u043e \u043d\u0430 \u0440\u0430\u0437\u0445\u043e\u0434\u043d\u0430\u0442\u0430 \u0441\u043c\u0435\u0442\u043a\u0430 \u0435..",
        "rule_trigger_source_account_contains_choice": "\u0418\u043c\u0435\u0442\u043e \u043d\u0430 \u0440\u0430\u0437\u0445\u043e\u0434\u043d\u0430\u0442\u0430 \u0441\u043c\u0435\u0442\u043a\u0430 \u0441\u044a\u0434\u044a\u0440\u0436\u0430..",
        "rule_trigger_account_id_choice": "Either account ID is exactly..",
        "rule_trigger_source_account_id_choice": "ID \u043d\u0430 \u0440\u0430\u0437\u0445\u043e\u0434\u043d\u0430\u0442\u0430 \u0441\u043c\u0435\u0442\u043a\u0430 \u0435 \u0442\u043e\u0447\u043d\u043e..",
        "rule_trigger_destination_account_id_choice": "ID \u043d\u0430 \u043f\u0440\u0438\u0445\u043e\u0434\u043d\u0430\u0442\u0430 \u0441\u043c\u0435\u0442\u043a\u0430 \u0435 \u0442\u043e\u0447\u043d\u043e..",
        "rule_trigger_account_is_cash_choice": "Either account is cash",
        "rule_trigger_source_is_cash_choice": "\u0420\u0430\u0437\u0445\u043e\u0434\u043d\u0430\u0442\u0430 \u0441\u043c\u0435\u0442\u043a\u0430 \u0435 \u0441\u043c\u0435\u0442\u043a\u0430 (\u0432 \u0431\u0440\u043e\u0439)",
        "rule_trigger_destination_is_cash_choice": "\u041f\u0440\u0438\u0445\u043e\u0434\u043d\u0430\u0442\u0430 \u0441\u043c\u0435\u0442\u043a\u0430 \u0435 \u0441\u043c\u0435\u0442\u043a\u0430 (\u0432 \u0431\u0440\u043e\u0439)",
        "rule_trigger_source_account_nr_starts_choice": "\u041d\u043e\u043c\u0435\u0440\u044a\u0442 \u043d\u0430 \u0440\u0430\u0437\u0445\u043e\u0434\u043d\u0430\u0442\u0430 \u0441\u043c\u0435\u0442\u043a\u0430 \/ IBAN \u0437\u0430\u043f\u043e\u0447\u0432\u0430 \u0441..",
        "rule_trigger_source_account_nr_ends_choice": "\u041d\u043e\u043c\u0435\u0440\u044a\u0442 \u043d\u0430 \u0440\u0430\u0437\u0445\u043e\u0434\u043d\u0430\u0442\u0430 \u0441\u043c\u0435\u0442\u043a\u0430 \/ IBAN \u0437\u0430\u0432\u044a\u0440\u0448\u0432\u0430 \u0441..",
        "rule_trigger_source_account_nr_is_choice": "\u041d\u043e\u043c\u0435\u0440\u044a\u0442 \u043d\u0430 \u0440\u0430\u0437\u0445\u043e\u0434\u043d\u0430\u0442\u0430 \u0441\u043c\u0435\u0442\u043a\u0430 \/ IBAN \u0435..",
        "rule_trigger_source_account_nr_contains_choice": "\u041d\u043e\u043c\u0435\u0440\u044a\u0442 \u043d\u0430 \u0440\u0430\u0437\u0445\u043e\u0434\u043d\u0430\u0442\u0430 \u0441\u043c\u0435\u0442\u043a\u0430 \/ IBAN \u0441\u044a\u0434\u044a\u0440\u0436\u0430..",
        "rule_trigger_destination_account_starts_choice": "\u0418\u043c\u0435\u0442\u043e \u043d\u0430 \u043f\u0440\u0438\u0445\u043e\u0434\u043d\u0430\u0442\u0430 \u0441\u043c\u0435\u0442\u043a\u0430 \u0437\u0430\u043f\u043e\u0447\u0432\u0430 \u0441..",
        "rule_trigger_destination_account_ends_choice": "\u0418\u043c\u0435\u0442\u043e \u043d\u0430 \u043f\u0440\u0438\u0445\u043e\u0434\u043d\u0430\u0442\u0430 \u0441\u043c\u0435\u0442\u043a\u0430 \u0437\u0430\u0432\u044a\u0440\u0448\u0432\u0430 \u0441..",
        "rule_trigger_destination_account_is_choice": "\u0418\u043c\u0435\u0442\u043e \u043d\u0430 \u043f\u0440\u0438\u0445\u043e\u0434\u043d\u0430\u0442\u0430 \u0441\u043c\u0435\u0442\u043a\u0430 \u0435..",
        "rule_trigger_destination_account_contains_choice": "\u0418\u043c\u0435\u0442\u043e \u043d\u0430 \u043f\u0440\u0438\u0445\u043e\u0434\u043d\u0430\u0442\u0430 \u0441\u043c\u0435\u0442\u043a\u0430 \u0441\u044a\u0434\u044a\u0440\u0436\u0430..",
        "rule_trigger_destination_account_nr_starts_choice": "\u041d\u043e\u043c\u0435\u0440\u044a\u0442 \u043d\u0430 \u043f\u0440\u0438\u0445\u043e\u0434\u043d\u0430\u0442\u0430 \u0441\u043c\u0435\u0442\u043a\u0430 \/ IBAN \u0437\u0430\u043f\u043e\u0447\u0432\u0430 \u0441..",
        "rule_trigger_destination_account_nr_ends_choice": "\u0418\u043c\u0435\u0442\u043e \u043d\u0430 \u043f\u0440\u0438\u0445\u043e\u0434\u043d\u0430\u0442\u0430 \u0441\u043c\u0435\u0442\u043a\u0430 \u0437\u0430\u0432\u044a\u0440\u0448\u0432\u0430 \u0441..",
        "rule_trigger_destination_account_nr_is_choice": "\u041d\u043e\u043c\u0435\u0440\u044a\u0442 \u043d\u0430 \u043f\u0440\u0438\u0445\u043e\u0434\u043d\u0430\u0442\u0430 \u0441\u043c\u0435\u0442\u043a\u0430 \/ IBAN \u0435..",
        "rule_trigger_destination_account_nr_contains_choice": "\u041d\u043e\u043c\u0435\u0440\u044a\u0442 \u043d\u0430 \u043f\u0440\u0438\u0445\u043e\u0434\u043d\u0430\u0442\u0430 \u0441\u043c\u0435\u0442\u043a\u0430 \/ IBAN \u0441\u044a\u0434\u044a\u0440\u0436\u0430..",
        "rule_trigger_transaction_type_choice": "\u0422\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u044f\u0442\u0430 \u0435 \u043e\u0442 \u0442\u0438\u043f..",
        "rule_trigger_category_is_choice": "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f\u0442\u0430 \u0435..",
        "rule_trigger_amount_less_choice": "\u0421\u0443\u043c\u0430\u0442\u0430 \u0435 \u043f\u043e-\u043c\u0430\u043b\u043a\u043e \u043e\u0442..",
        "rule_trigger_amount_is_choice": "Amount is..",
        "rule_trigger_amount_more_choice": "\u0421\u0443\u043c\u0430\u0442\u0430 \u0435 \u043f\u043e-\u0433\u043e\u043b\u044f\u043c\u0430 \u043e\u0442..",
        "rule_trigger_description_starts_choice": "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435\u0442\u043e \u0437\u0430\u043f\u043e\u0447\u0432\u0430 \u0441..",
        "rule_trigger_description_ends_choice": "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435\u0442\u043e \u0437\u0430\u0432\u044a\u0440\u0448\u0432\u0430 \u0441..",
        "rule_trigger_description_contains_choice": "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435\u0442\u043e \u0441\u044a\u0434\u044a\u0440\u0436\u0430..",
        "rule_trigger_description_is_choice": "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435\u0442\u043e \u0435..",
        "rule_trigger_date_on_choice": "Transaction date is..",
        "rule_trigger_date_before_choice": "\u0414\u0430\u0442\u0430\u0442\u0430 \u043d\u0430 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u044f\u0442\u0430 \u0435 \u043f\u0440\u0435\u0434\u0438..",
        "rule_trigger_date_after_choice": "\u0414\u0430\u0442\u0430\u0442\u0430 \u043d\u0430 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u044f\u0442\u0430 \u0435 \u0441\u043b\u0435\u0434..",
        "rule_trigger_created_at_on_choice": "Transaction was made on..",
        "rule_trigger_updated_at_on_choice": "Transaction was last edited on..",
        "rule_trigger_budget_is_choice": "\u0411\u044e\u0434\u0436\u0435\u0442\u044a\u0442 \u0435..",
        "rule_trigger_tag_is_choice": "Any tag is..",
        "rule_trigger_currency_is_choice": "\u0412\u0430\u043b\u0443\u0442\u0430\u0442\u0430 \u043d\u0430 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u044f\u0442\u0430 \u0435..",
        "rule_trigger_foreign_currency_is_choice": "\u0427\u0443\u0436\u0434\u0430\u0442\u0430 \u0432\u0430\u043b\u0443\u0442\u0430 \u043d\u0430 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u044f\u0442\u0430 \u0435..",
        "rule_trigger_has_attachments_choice": "\u0418\u043c\u0430 \u043f\u043e\u043d\u0435 \u0442\u043e\u043b\u043a\u043e\u0432\u0430 \u043f\u0440\u0438\u043a\u0430\u0447\u0435\u043d\u0438 \u0444\u0430\u0439\u043b\u043e\u0432\u0435",
        "rule_trigger_has_no_category_choice": "\u041d\u044f\u043c\u0430 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",
        "rule_trigger_has_any_category_choice": "\u0418\u043c\u0430 (\u043d\u044f\u043a\u0430\u043a\u0432\u0430) \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",
        "rule_trigger_has_no_budget_choice": "\u041d\u044f\u043c\u0430 \u0431\u044e\u0434\u0436\u0435\u0442",
        "rule_trigger_has_any_budget_choice": "\u0418\u043c\u0430 (\u043d\u044f\u043a\u0430\u043a\u044a\u0432) \u0431\u044e\u0434\u0436\u0435\u0442",
        "rule_trigger_has_no_bill_choice": "Has no bill",
        "rule_trigger_has_any_bill_choice": "Has a (any) bill",
        "rule_trigger_has_no_tag_choice": "\u041d\u044f\u043c\u0430 \u0435\u0442\u0438\u043a\u0435\u0442(\u0438)",
        "rule_trigger_has_any_tag_choice": "\u0418\u043c\u0430 \u0435\u0434\u0438\u043d \u0438\u043b\u0438 \u043f\u043e\u0432\u0435\u0447\u0435 (\u043d\u044f\u043a\u0430\u043a\u0432\u0438) \u0435\u0442\u0438\u043a\u0435\u0442\u0438",
        "rule_trigger_any_notes_choice": "\u0418\u043c\u0430 (\u043d\u044f\u043a\u0430\u043a\u0432\u0438) \u0431\u0435\u043b\u0435\u0436\u043a\u0438",
        "rule_trigger_no_notes_choice": "\u041d\u044f\u043c\u0430 \u0431\u0435\u043b\u0435\u0436\u043a\u0438",
        "rule_trigger_notes_is_choice": "Notes are..",
        "rule_trigger_notes_contains_choice": "Notes contain..",
        "rule_trigger_notes_starts_choice": "Notes start with..",
        "rule_trigger_notes_ends_choice": "Notes end with..",
        "rule_trigger_bill_is_choice": "\u0421\u043c\u0435\u0442\u043a\u0430\u0442\u0430 \u0435..",
        "rule_trigger_external_id_is_choice": "External ID is..",
        "rule_trigger_internal_reference_is_choice": "Internal reference is..",
        "rule_trigger_journal_id_choice": "ID \u043d\u0430 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u044f\u0442\u0430 \u0435..",
        "rule_trigger_any_external_url_choice": "Transaction has an external URL",
        "rule_trigger_no_external_url_choice": "Transaction has no external URL",
        "rule_trigger_id_choice": "Transaction ID is..",
        "rule_action_delete_transaction_choice": "DELETE transaction(!)",
        "rule_action_set_category_choice": "Set category to ..",
        "rule_action_clear_category_choice": "\u0418\u0437\u0447\u0438\u0441\u0442\u0438 \u0432\u0441\u0438\u0447\u043a\u0438 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438",
        "rule_action_set_budget_choice": "Set budget to ..",
        "rule_action_clear_budget_choice": "\u0418\u0437\u0447\u0438\u0441\u0442\u0438 \u0432\u0441\u0438\u0447\u043a\u0438 \u0431\u044e\u0434\u0436\u0435\u0442\u0438",
        "rule_action_add_tag_choice": "Add tag ..",
        "rule_action_remove_tag_choice": "Remove tag ..",
        "rule_action_remove_all_tags_choice": "\u041f\u0440\u0435\u043c\u0430\u0445\u043d\u0438 \u0432\u0441\u0438\u0447\u043a\u0438 \u0435\u0442\u0438\u043a\u0435\u0442\u0438",
        "rule_action_set_description_choice": "Set description to ..",
        "rule_action_update_piggy_choice": "Add \/ remove transaction amount in piggy bank ..",
        "rule_action_append_description_choice": "Append description with ..",
        "rule_action_prepend_description_choice": "Prepend description with ..",
        "rule_action_set_source_account_choice": "Set source account to ..",
        "rule_action_set_destination_account_choice": "Set destination account to ..",
        "rule_action_append_notes_choice": "Append notes with ..",
        "rule_action_prepend_notes_choice": "Prepend notes with ..",
        "rule_action_clear_notes_choice": "\u0418\u0437\u0447\u0438\u0441\u0442\u0438 \u0432\u0441\u0438\u0447\u043a\u0438 \u0431\u0435\u043b\u0435\u0436\u043a\u0438",
        "rule_action_set_notes_choice": "Set notes to ..",
        "rule_action_link_to_bill_choice": "Link to a bill ..",
        "rule_action_convert_deposit_choice": "\u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u0432\u0430\u0439\u0442\u0435 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u044f\u0442\u0430 \u0432 \u0434\u0435\u043f\u043e\u0437\u0438\u0442",
        "rule_action_convert_withdrawal_choice": "\u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u0432\u0430\u0439\u0442\u0435 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u044f\u0442\u0430 \u0432 \u0442\u0435\u0433\u043b\u0435\u043d\u0435",
        "rule_action_convert_transfer_choice": "\u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u0432\u0430\u0439\u0442\u0435 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u044f\u0442\u0430 \u0432 \u0442\u0440\u0430\u043d\u0441\u0444\u0435\u0440",
        "placeholder": "[Placeholder]",
        "recurrences": "\u041f\u043e\u0432\u0442\u0430\u0440\u044f\u0449\u0438 \u0441\u0435 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438",
        "title_expenses": "\u0420\u0430\u0437\u0445\u043e\u0434\u0438",
        "title_withdrawal": "\u0422\u0435\u0433\u043b\u0435\u043d\u0438\u044f",
        "title_revenue": "\u041f\u0440\u0438\u0445\u043e\u0434\u0438",
        "pref_1D": "\u0415\u0434\u0438\u043d \u0434\u0435\u043d",
        "pref_1W": "\u0415\u0434\u043d\u0430 \u0441\u0435\u0434\u043c\u0438\u0446\u0430",
        "pref_1M": "\u0415\u0434\u0438\u043d \u043c\u0435\u0441\u0435\u0446",
        "pref_3M": "\u0422\u0440\u0438 \u043c\u0435\u0441\u0435\u0446\u0430 (\u0442\u0440\u0438\u043c\u0435\u0441\u0435\u0447\u0438\u0435)",
        "pref_6M": "\u0428\u0435\u0441\u0442 \u043c\u0435\u0441\u0435\u0446\u0430",
        "pref_1Y": "\u0415\u0434\u043d\u0430 \u0433\u043e\u0434\u0438\u043d\u0430",
        "repeat_freq_yearly": "\u0435\u0436\u0435\u0433\u043e\u0434\u043d\u043e",
        "repeat_freq_half-year": "\u043d\u0430 \u0432\u0441\u0435\u043a\u0438 6 \u043c\u0435\u0441\u0435\u0446\u0430",
        "repeat_freq_quarterly": "\u0442\u0440\u0438\u043c\u0435\u0441\u0435\u0447\u043d\u043e",
        "repeat_freq_monthly": "\u043c\u0435\u0441\u0435\u0447\u043d\u043e",
        "repeat_freq_weekly": "\u0435\u0436\u0435\u0441\u0435\u0434\u043c\u0438\u0447\u043d\u043e",
        "single_split": "\u0420\u0430\u0437\u0434\u0435\u043b",
        "asset_accounts": "\u0421\u043c\u0435\u0442\u043a\u0438 \u0437\u0430 \u0430\u043a\u0442\u0438\u0432\u0438",
        "expense_accounts": "\u0421\u043c\u0435\u0442\u043a\u0438 \u0437\u0430 \u0440\u0430\u0437\u0445\u043e\u0434\u0438",
        "liabilities_accounts": "\u0417\u0430\u0434\u044a\u043b\u0436\u0435\u043d\u0438\u044f",
        "undefined_accounts": "Accounts",
        "name": "\u0418\u043c\u0435",
        "revenue_accounts": "\u0421\u043c\u0435\u0442\u043a\u0438 \u0437\u0430 \u043f\u0440\u0438\u0445\u043e\u0434\u0438",
        "description": "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",
        "category": "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",
        "title_deposit": "\u0414\u0435\u043f\u043e\u0437\u0438\u0442\u0438",
        "title_transfer": "\u041f\u0440\u0435\u0445\u0432\u044a\u0440\u043b\u044f\u043d\u0438\u044f",
        "title_transfers": "\u041f\u0440\u0435\u0445\u0432\u044a\u0440\u043b\u044f\u043d\u0438\u044f",
        "piggyBanks": "\u041a\u0430\u0441\u0438\u0447\u043a\u0438",
        "rules": "\u041f\u0440\u0430\u0432\u0438\u043b\u0430",
        "accounts": "\u0421\u043c\u0435\u0442\u043a\u0438",
        "categories": "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438",
        "tags": "\u0415\u0442\u0438\u043a\u0435\u0442\u0438",
        "object_groups_page_title": "\u0413\u0440\u0443\u043f\u0438",
        "reports": "\u041e\u0442\u0447\u0435\u0442\u0438",
        "webhooks": "Webhooks",
        "currencies": "\u0412\u0430\u043b\u0443\u0442\u0438",
        "administration": "\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435",
        "profile": "\u041f\u0440\u043e\u0444\u0438\u043b",
        "source_account": "\u0420\u0430\u0437\u0445\u043e\u0434\u043d\u0430 \u0441\u043c\u0435\u0442\u043a\u0430",
        "destination_account": "\u041f\u0440\u0438\u0445\u043e\u0434\u043d\u0430 \u0441\u043c\u0435\u0442\u043a\u0430",
        "amount": "\u0421\u0443\u043c\u0430",
        "date": "\u0414\u0430\u0442\u0430",
        "time": "\u0412\u0440\u0435\u043c\u0435",
        "preferences": "\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",
        "transactions": "\u0422\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438",
        "balance": "\u0421\u0430\u043b\u0434\u043e",
        "budgets": "\u0411\u044e\u0434\u0436\u0435\u0442\u0438",
        "subscriptions": "\u0410\u0431\u043e\u043d\u0430\u043c\u0435\u043d\u0442\u0438",
        "welcome_back": "\u041a\u0430\u043a\u0432\u043e \u0441\u0435 \u0441\u043b\u0443\u0447\u0432\u0430?",
        "bills_to_pay": "\u0421\u043c\u0435\u0442\u043a\u0438 \u0437\u0430 \u043f\u043b\u0430\u0449\u0430\u043d\u0435",
        "net_worth": "\u041d\u0435\u0442\u043d\u0430 \u0441\u0442\u043e\u0439\u043d\u043e\u0441\u0442",
        "pref_last365": "Last year",
        "pref_last90": "Last 90 days",
        "pref_last30": "Last 30 days",
        "pref_last7": "Last 7 days",
        "pref_YTD": "Year to date",
        "pref_QTD": "Quarter to date",
        "pref_MTD": "Month to date"
    }
}

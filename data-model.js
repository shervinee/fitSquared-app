const dataModels = {
    // firm_table
    firm: {
        "_id": ObjectId("firm_id"),
        "name": "Firm Name",
        "address": "Firm Address",
        "phone": "Firm Phone Number",
        "email": "Firm Email",
        "employees": [
            "employee_id_1",
            "employee_id_2", ...
        ],
        "financials": [
            "financial_id_1",
            "financial_id_2", ...
        ],
        "messages": [
            "message_id_1",
            "message_id_2", ...
        ]
    },

    // provider_table
    provider: {
        "_id": ObjectId("provider_id"),
        "name": "Provider Name",
        "address": "Provider Address",
        "phone": "Provider Phone Number",
        "email": "Provider Email",
        "financials": [
            "financial_id_3",
            "financial_id_4", ...
        ],
        "messages": [
            "message_id_3",
            "message_id_4", ...
        ]
    },

    // messages_table
    messages: {
        "_id": ObjectId("message_id"),
        "sender": "firm_id", // or "provider_id"
        "receiver": "firm_id", // or "provider_id"
        "subject": "Message Subject",
        "content": "Message Content",
        "timestamp": ISODate("2023-07-19T12:34:56Z")
    },

    // financial_data_table
    financialData: {
        "_id": ObjectId("financial_id"),
        "entity": "firm_id", // or "provider_id"
        "financial_type": "Type of Financial Information",
        "financial_data": { /* Financial data */ },
        "timestamp": ISODate("2023-07-19T12:34:56Z")
    },

    // employee_table
    employee: {
        "_id": ObjectId("employee_id"),
        "name": "Employee Name",
        "role": "Employee Role",
        "email": "Employee Email",
        "phone": "Employee Phone Number",
        "firm_id": "firm_id",
        "extra_info": "Extra Employee Information"
    }
}
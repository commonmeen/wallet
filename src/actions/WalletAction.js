export const addMoney = (data) => (
    {
        type: "INCOME",
        payload: data
    }
)

export const removeMoney = (data) => (
    {
        type: "EXPEND",
        payload: data
    }
)

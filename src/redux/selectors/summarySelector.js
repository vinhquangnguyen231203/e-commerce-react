import { createSelector } from "@reduxjs/toolkit";

export const selectedCartItems = state => state.carts.carts


export const summarySelectors = createSelector(
    [selectedCartItems],
    (cart) => (
        cart.reduce((summary, item) => {
            return summary + (item.quantity * item.salePrice)
        },0)
    )
)

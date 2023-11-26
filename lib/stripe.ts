import Stripe from "stripe"

export const stripe = new stripe(process.env.STRIPE_API_KEY, {
    apiVersion: "2023-10-16",
    typescript: true
})
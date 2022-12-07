export const ONE_COFFEE_PRICE: number =
  Number(process.env.NEXT_PUBLIC_DEFAULT_COFFEE_PRICE_IN_CENTS) || 500;

export const STRIPE_API_KEY: string = process.env.STRIPE_API_KEY as string;
export const STRIPE_WEBHOOK_SECRET: string = process.env
  .STRIPE_WEBHOOK_SECRET as string;
export const AIRTABLE_APP_ID: string = process.env.AIRTABLE_APP_ID as string;
export const AIRTABLE_API_KEY: string = process.env.AIRTABLE_API_KEY as string;

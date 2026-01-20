# ITCPR Payment Portal

A modern React application for viewing payment information and payment methods for ITCPR.

## Features

- **Dashboard**: Single-page interface showing pending payments, recent transactions, and payment method instructions
- **Payment Methods**: View payment instructions for various methods (USD: Zelle, PayPal, Venmo, etc. | BDT: bKash, Nagad, Rocket, etc.)
- **Recent Payments**: Display recent payment transactions from the database

## Authentication

This application uses the same SSO login system as staff-itcpr:
- Firebase Authentication with custom tokens
- SSO integration with sso.itcpr.org
- Staff-only access (requires `position: 'staff'` in user document)

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file with the following variables:
```
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_DATABASE_URL=your_firebase_database_url
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id

VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_SUPABASE_SERVICE_KEY=your_supabase_service_key
```

3. Run the development server:
```bash
npm run dev
```

## Database Schema

The application reads from the following Supabase table (from staff-itcpr):

### finances
- `id` (uuid, primary key)
- `type` (text: 'income' | 'expense')
- `category` (text: 'monthly_fee' for monthly fee payments)
- `amount` (numeric)
- `description` (text)
- `currency` (text: 'USD' | 'BDT')
- `account` (text: account name)
- `user` (text: user UID for monthly fees)
- `created_at` (timestamp)
- `receipt` (text: base64 encoded receipt image)

**Monthly Fee Records:**
- Filtered by: `type = 'income'` AND `category = 'monthly_fee'`
- These represent monthly fee payments received

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

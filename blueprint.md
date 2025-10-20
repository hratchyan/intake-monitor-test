# Lead Flow Uptime Monitor - Blueprint

## Overview

This project is a serverless lead intake monitor built with Next.js and Firebase. It provides a real-time dashboard to track the status of various lead sources (e.g., Lilt, Salesforce), offering at-a-glance visibility into whether lead flows are operational. The system is designed to be secure, scalable, and low-cost, leveraging Firebase for the backend and Next.js for a responsive frontend.

## Implemented Features

### V1 - Initial Setup & Dashboard UI

*   **Framework:** Next.js using the App Router.
*   **Backend:** Firebase integration with the provided project configuration.
*   **Styling:**
    *   **Theme:** Modern dark mode theme.
    *   **Font:** Google Fonts (`Inter` and `Roboto Mono`).
    *   **Layout:** Centered, responsive layout with a main dashboard container.
*   **Dashboard UI:**
    *   Static dashboard page (`app/page.tsx`).
    *   Visually distinct cards for each lead source.
    *   Each card includes:
        *   Source Name (e.g., "Lilt", "Salesforce").
        *   A status indicator light (currently static).
        *   Placeholder for the last check time.
*   **Project Structure:**
    *   Migrated from the `pages` directory to the `app` directory.
    *   Firebase configuration isolated in `lib/firebase.js`.
    *   Global styles managed in `styles/globals.css`.

## Current Plan

I am now connecting the frontend dashboard to a live Firestore database.

1.  **Enable Firestore:** User creates the Firestore database in the Firebase console and adds initial data.
2.  **Update Firebase Config:** I will add the `getFirestore` import to `lib/firebase.js` to enable database connectivity.
3.  **Fetch Live Data:** I will convert `app/page.tsx` into an `async` Server Component.
4.  **Connect to Firestore:** The component will securely fetch documents from the `sources` collection on the server.
5.  **Display Dynamic Data:** The dashboard UI will be updated to map over the live data from Firestore, replacing the previous static placeholders.

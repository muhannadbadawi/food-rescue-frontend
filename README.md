# 🍽️ Food Rescue App

Food Rescue is a mobile application built with **React Native and Expo**, designed to help reduce food waste by connecting users with restaurants and stores offering discounted surplus food.

---

## 🚀 Overview

The application provides a complete user journey, starting from authentication and onboarding to browsing food offers, managing orders, earning rewards, and customizing user settings.

The project follows a clean, scalable architecture suitable for real-world production applications.

---

## ✨ Features

### 🔐 Authentication

- Login
- Register
- Forgot Password
- OTP Verification
- Reset Password

### 📱 Main Application

- Explore food offers
- Favorites
- Orders history
- Earn rewards
- User profile and settings

### ⚙️ Settings

- Profile management
- Saved addresses
- Payment methods
- Receipts
- Country selection
- Language (English / Arabic)
- Theme (Light / Dark)

---

## 🧭 Navigation Structure
```
RootNavigator
├── AuthStack
│    ├── Login
│    ├── Register
│    ├── ForgotPassword
│    ├── OTPScreen
│    └── ResetPassword
│
├── ClientStack
│    ├── Explore
│    ├── Favorites
│    ├── Orders
│    ├── Earn
│    └── SettingsStack
│         ├── SettingsMain      // Client only
│         ├── Receipts          // Client only
│         ├── SavedAddresses    // Client only
│         ├── PaymentMethod     // Client only
│         ├── Country           // Client only
│         ├── Profile           // Shared
│         ├── Theme             // Shared
│         └── Language          // Shared
│
└── MerchantStack
     ├── Orders
     ├── Products
     ├── Analytics
     └── SettingsStack
          ├── Profile           // Shared
          ├── Theme             // Shared
          └── Language          // Shared

```

## 🧭 Project Structure
```
food-rescue
├─ app.json
├─ App.tsx
├─ babel.config.js
├─ eas.json
├─ package.json
├─ plop-templates
│  ├─ component.styles.ts.hbs
│  └─ component.tsx.hbs
├─ plopfile.js
├─ README.md
├─ src
│  ├─ api
│  │  └─ user-service.ts
│  ├─ assets
│  │  ├─ cards
│  │  │  ├─ ApplePay.jpg
│  │  │  ├─ CliQ.png
│  │  │  ├─ Mastercard.jpg
│  │  │  ├─ PayPal.jpg
│  │  │  └─ Visa.jpg
│  │  ├─ ChickenBurger.jpg
│  │  ├─ FoodRescueLogo.png
│  │  ├─ GreekSalad.jpg
│  │  ├─ PizzaMargherita.jpg
│  │  ├─ supermarket.png
│  │  ├─ supermarket2.png
│  │  └─ supermarket3.png
│  ├─ constants
│  │  ├─ Colors.ts
│  │  ├─ Fonts.ts
│  │  ├─ mockData.ts
│  │  └─ types.ts
│  ├─ localization
│  │  ├─ ar.json
│  │  ├─ en.json
│  │  └─ i18n.ts
│  ├─ navigation
│  │  ├─ root-navigator.tsx
│  │  ├─ screens-type
│  │  │  ├─ auth-screens.ts
│  │  │  └─ setting-screens.ts
│  │  └─ stacks
│  │     ├─ auth-stack.tsx
│  │     ├─ client-stack.tsx
│  │     └─ merchant-stack.tsx
│  ├─ screens
│  │  ├─ auth
│  │  │  ├─ auth-context.tsx
│  │  │  ├─ forgot-password
│  │  │  │  ├─ forgot-password.styles.ts
│  │  │  │  └─ forgot-password.tsx
│  │  │  ├─ login
│  │  │  │  ├─ login.styles.ts
│  │  │  │  └─ login.tsx
│  │  │  ├─ otp
│  │  │  │  ├─ otp.styles.ts
│  │  │  │  └─ otp.tsx
│  │  │  ├─ register
│  │  │  │  ├─ fields
│  │  │  │  │  └─ shop-owner-fields
│  │  │  │  │     ├─ fields.styles.ts
│  │  │  │  │     └─ shop-owner-fields.tsx
│  │  │  │  ├─ register.styles.ts
│  │  │  │  └─ register.tsx
│  │  │  └─ reset-password
│  │  │     ├─ reset-password.styles.ts
│  │  │     └─ reset-password.tsx
│  │  └─ client
│  │     ├─ earn
│  │     │  ├─ earn.styles.ts
│  │     │  └─ earn.tsx
│  │     ├─ explore
│  │     │  ├─ explore.styles.ts
│  │     │  └─ explore.tsx
│  │     ├─ favorites
│  │     │  ├─ favorites.styles.ts
│  │     │  └─ favorites.tsx
│  │     ├─ orders
│  │     │  ├─ orders.styles.ts
│  │     │  └─ orders.tsx
│  │     └─ settings
│  │        ├─ country
│  │        │  ├─ country.styles.ts
│  │        │  └─ country.tsx
│  │        ├─ language-screen
│  │        │  ├─ language-screen.styles.ts
│  │        │  └─ language-screen.tsx
│  │        ├─ payment-method
│  │        │  ├─ payment-method.styles.ts
│  │        │  └─ payment-method.tsx
│  │        ├─ profile
│  │        │  ├─ profile.styles.ts
│  │        │  └─ profile.tsx
│  │        ├─ receipts
│  │        │  ├─ receipts.styles.ts
│  │        │  └─ receipts.tsx
│  │        ├─ saved-addresses
│  │        │  ├─ saved-addresses.styles.ts
│  │        │  └─ saved-addresses.tsx
│  │        ├─ settings-main
│  │        │  ├─ settings.styles.ts
│  │        │  └─ settings.tsx
│  │        ├─ settings-stack.tsx
│  │        └─ theme-screen
│  │           ├─ theme-screen.styles.ts
│  │           └─ theme-screen.tsx
│  ├─ shared
│  │  ├─ avatar
│  │  │  ├─ avatar.styles.ts
│  │  │  └─ avatar.tsx
│  │  ├─ bottom-sheet
│  │  │  ├─ bottom-sheet.styles.ts
│  │  │  └─ bottom-sheet.tsx
│  │  ├─ empty
│  │  │  ├─ empty.styles.ts
│  │  │  └─ empty.tsx
│  │  ├─ screen
│  │  │  ├─ screen.styles.ts
│  │  │  └─ screen.tsx
│  │  └─ text
│  ├─ stores
│  │  └─ useStoreLocations.ts
│  └─ theme
│     └─ theme-context.tsx
└─ tsconfig.json

```
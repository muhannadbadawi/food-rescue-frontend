# food_rescue

A new Flutter project.

## Getting Started

This project is a starting point for a Flutter application.

A few resources to get you started if this is your first Flutter project:

- [Lab: Write your first Flutter app](https://docs.flutter.dev/get-started/codelab)
- [Cookbook: Useful Flutter samples](https://docs.flutter.dev/cookbook)

For help getting started with Flutter development, view the
[online documentation](https://docs.flutter.dev/), which offers tutorials,
samples, guidance on mobile development, and a full API reference.

```
RootStack
 ├── AuthStack
 │    ├── Login
 │    ├── Register
 │    ├── ForgotPassword
 │    └── OTP / Reset
 │
 └── AppStack
      └── Tabs
           ├── Explore
           ├── Favorites
           ├── Orders
           ├── Earn
           └── SettingsStack
                ├── SettingsMain
                ├── Receipts
                ├── SavedAddresses
                ├── PaymentMethod
                ├── Country
                ├── Theme
                └── Language

```


```
food-rescue
├─ app.json
├─ App.tsx
├─ assets
│  ├─ FoodRescueLogo.png
│  ├─ supermarket.png
│  ├─ supermarket2.png
│  └─ supermarket3.png
├─ eas.json
├─ package.json
├─ README.md
├─ src
│  ├─ api
│  │  └─ user-service.ts
│  ├─ constants
│  │  └─ Colors.ts
│  ├─ localization
│  │  ├─ ar.json
│  │  ├─ en.json
│  │  └─ i18n.ts
│  ├─ navigation
│  │  ├─ app-screens.ts
│  │  ├─ app-stack.tsx
│  │  ├─ auth-stack.tsx
│  │  └─ profile-screens.ts
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
│  │  │  │  ├─ register.styles.ts
│  │  │  │  └─ register.tsx
│  │  │  └─ reset-password
│  │  │     ├─ reset-password.styles.ts
│  │  │     └─ reset-password.tsx
│  │  └─ client
│  │     ├─ explore
│  │     │  ├─ explore.styles.ts
│  │     │  └─ explore.tsx
│  │     ├─ layout
│  │     │  └─ layout.tsx
│  │     └─ profile
│  │        ├─ payment-method
│  │        │  ├─ payment-method.styles.ts
│  │        │  └─ payment-method.tsx
│  │        ├─ profile-main
│  │        │  ├─ profile.styles.ts
│  │        │  └─ profile.tsx
│  │        ├─ profile-stack.tsx
│  │        ├─ receipts
│  │        │  ├─ receipts.styles.ts
│  │        │  └─ receipts.tsx
│  │        └─ saved-addresses
│  │           ├─ saved-addresses.styles.ts
│  │           └─ saved-addresses.tsx
│  ├─ shared
│  │  ├─ avatar
│  │  │  ├─ avatar.styles.ts
│  │  │  └─ avatar.tsx
│  │  ├─ bottom-sheet
│  │  │  └─ bottom-sheet.tsx
│  │  ├─ empty
│  │  │  ├─ empty.styles.ts
│  │  │  └─ empty.tsx
│  │  └─ text
│  ├─ stores
│  │  └─ useStoreLocations.ts
│  └─ theme
│     └─ theme-context.tsx
└─ tsconfig.json

```
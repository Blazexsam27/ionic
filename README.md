# Ionic - Web Templates Marketplace

A modern e-commerce platform for buying and selling premium web templates built with various frameworks and technologies. Browse, purchase, and download high-quality templates for Angular, React, Vue.js, and vanilla HTML/CSS projects.

## 🚀 Features

- **Template Marketplace**: Browse a curated collection of web templates
- **Multi-Framework Support**: Templates built with Angular, React, Vue.js, vanilla HTML/CSS/JavaScript
- **Modern UI Libraries**: Templates featuring Tailwind CSS, Material UI, and more
- **Secure Payments**: Integrated Stripe payment processing
- **User Authentication**: OAuth 2.0 authentication system
- **File Management**: Secure project file storage and delivery
- **User Dashboard**: Manage purchases and downloads
- **Responsive Design**: Optimized for all devices

## 🛠️ Tech Stack

### Frontend
- **Vue.js** - Progressive JavaScript framework
- **Ionic Framework** - Cross-platform UI toolkit

### Backend
- **Express.js** - Node.js web framework
- **Firebase** - Backend-as-a-Service platform
- **Firestore** - NoSQL document database

### Payment & Authentication
- **Stripe API** - Payment processing
- **OAuth 2.0** - Secure authentication

### Template Technologies
- Angular
- React
- Vue.js
- Vanilla HTML/CSS/JavaScript
- Tailwind CSS
- Material UI

## 🚦 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Firebase account
- Stripe account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Blazexsam27/ionic.git
   cd ionic
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   # Firebase Configuration
   FIREBASE_API_KEY=your_firebase_api_key
   FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   FIREBASE_PROJECT_ID=your_firebase_project_id
   FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   FIREBASE_APP_ID=your_firebase_app_id

   # Stripe Configuration
   STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_SECRET_KEY=your_stripe_secret_key

   # OAuth Configuration
   OAUTH_CLIENT_ID=your_oauth_client_id
   OAUTH_CLIENT_SECRET=your_oauth_client_secret
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Start the backend server**
   ```bash
   npm run server
   ```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
ionic/
├── src/
│   ├── components/         # Vue.js components
│   ├── views/             # Application views/pages
│   ├── router/            # Vue Router configuration
│   ├── store/             # Vuex store (if applicable)
│   └── services/          # API services
├── server/
│   ├── routes/            # Express.js routes
│   ├── middleware/        # Custom middleware
│   ├── models/            # Data models
│   └── config/            # Configuration files
├── public/                # Static assets
└── docs/                  # Documentation
```

## 🎯 Usage

### For Buyers
1. **Browse Templates**: Explore templates by category or framework
2. **Preview**: View live demos and screenshots
3. **Purchase**: Secure checkout with Stripe
4. **Download**: Access purchased templates from your dashboard

### For Sellers (if applicable)
1. **Upload Templates**: Submit your web templates
2. **Manage Listings**: Edit descriptions, prices, and previews
3. **Track Sales**: Monitor earnings and downloads

## 🔐 Authentication

The platform uses OAuth 2.0 for secure user authentication. Supported providers:
- Google
- GitHub
- Facebook (if configured)

## 💳 Payment Processing

Secure payment processing powered by Stripe:
- Credit/Debit cards
- Digital wallets
- International payments
- Secure checkout flow

## 🗄️ Database Schema

The application uses Firestore with the following main collections:
- `users` - User profiles and authentication data
- `templates` - Template metadata and information
- `purchases` - Transaction records
- `downloads` - Download tracking

## 🚀 Deployment

### Frontend Deployment
```bash
npm run build
# Deploy to your preferred hosting service (Netlify, Vercel, etc.)
```

### Backend Deployment
```bash
# Deploy to Heroku, Railway, or your preferred platform
npm run build:server
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

**Blazexsam27** - [@blazexsam27](https://github.com/Blazexsam27)

Project Link: [https://github.com/Blazexsam27/ionic](https://github.com/Blazexsam27/ionic)

## 🙏 Acknowledgments

- Vue.js community for the amazing framework
- Ionic team for the UI components
- Stripe for secure payment processing
- Firebase for reliable backend services

---

⭐ If you found this project helpful, please give it a star!

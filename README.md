# Login Form & Dashboard Demo

A modern Angular application built with Ionic framework featuring a clean login system and dashboard interface. This project uses Angular 20, Ionic 8, and Tailwind CSS for styling.

## 🚀 Features

- **Authentication System**: Complete login/logout functionality with API integration
- **Dashboard Interface**: Clean and modern dashboard
- **Responsive Design**: Built with Ionic components and Tailwind CSS
- **Modern Architecture**: Angular standalone components with feature-based structure
- **Mobile Ready**: Capacitor integration for mobile app deployment

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Angular CLI** (version 20 or higher)
- **Ionic CLI** (latest version)

## 📚 Technologies Used

- **Angular 20** - Frontend framework
- **Ionic 8** - Mobile-first UI components
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Capacitor** - Cross-platform mobile development
- **RxJS** - Reactive programming
- **ESLint** - Code linting


### Installing Prerequisites

1. **Install Node.js**:
   ```bash
   # Check if Node.js is installed
   node --version
   npm --version
   ```

2. **Install Angular CLI globally**:
   ```bash
   npm install -g @angular/cli
   ```

3. **Install Ionic CLI globally**:
   ```bash
   npm install -g @ionic/cli
   ```

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/brylsherbert/financial-tracker.git
```

### 2. Navigate to the Project Directory

```bash
cd "financial-tracker"
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Sync Project

```bash
ionic cap sync
```

### 5. Environment Configuration

The project uses environment files for configuration. You can modify the following files as needed:

- `src/environments/environment.ts` - Development environment
- `src/environments/environment.prod.ts` - Production environment

## 🚀 Running the Application

### Development Server

```bash
# Start the development server
ionic serve
# or
ng serve
```

The application will be available at `http://localhost:4200`

### Build for Production

```bash
# Build the project for production
ionic build
```

### Running Tests

```bash
# Run unit tests
npm test
```

### Linting

```bash
# Run ESLint
npm run lint
```

## 📱 Mobile Development (Capacitor)

This project is configured with Capacitor for mobile app development.

### Prerequisites for Mobile Development

- **Android Studio** (for Android development)
- **Xcode** (for iOS development, macOS only)

### Building for Mobile

1. **Build the web assets**:
   ```bash
   npm run build
   ```

2. **Add platforms** (if not already added):
   ```bash
   npx cap add android
   npx cap add ios
   ```

3. **Sync the project**:
   ```bash
   npx cap sync
   ```

4. **Open in native IDE**:
   ```bash
   # For Android
   npx cap open android
   
   # For iOS
   npx cap open ios
   ```

## 🔧 Configuration

### Styling

The project uses:
- **Ionic Components** for UI elements
- **Tailwind CSS** for utility-first styling
- **SCSS** for custom styles

## 🚀 Deployment

### Web Deployment

1. **Build for production**:
   ```bash
   npm run build
   ```

2. **Deploy the `www` folder** to your preferred hosting service (Netlify, Vercel, Firebase Hosting, etc.)

### Mobile App Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Sync with Capacitor**:
   ```bash
   npx cap sync
   ```

3. **Open in native IDE and build**:
   ```bash
   npx cap open android  # or ios
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🆘 Troubleshooting

### Common Issues

1. **Node version issues**: Ensure you're using Node.js 18 or higher
2. **Dependency conflicts**: Delete `node_modules` and `package-lock.json`, then run `npm install`
3. **Build errors**: Check that all environment variables are properly configured
4. **Mobile build issues**: Ensure you have the correct platform SDKs installed

### Getting Help

If you encounter any issues:
1. Check the [Angular documentation](https://angular.io/docs)
2. Check the [Ionic documentation](https://ionicframework.com/docs)
3. Check the [Capacitor documentation](https://capacitorjs.com/docs)

## 📞 Support

For support, email magdadarobryl@gmail.com or create an issue in the repository.

---

**Happy Coding! 🎉**

# Quiz Builder 🧩

A modern, drag-and-drop quiz creation tool built with **Next.js 15** and **React 19**. Create interactive quizzes with an intuitive visual interface, real-time editing, and comprehensive form field support.

## ✨ Features

- **🎯 Drag & Drop Interface**: Intuitive quiz building with smooth drag-and-drop functionality
- **📝 Multiple Field Types**: Support for text, number, checkbox, radio, select, and textarea fields
- **👁️ Live Preview**: Real-time preview of your quiz as you build
- **💾 Local Storage**: Automatic saving of your quizzes in browser storage
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **🎨 Modern UI**: Built with Tailwind CSS and Radix UI components
- **⚡ Fast Performance**: Powered by Next.js with Turbopack for lightning-fast builds

## 🚀 Quick Start

### Prerequisites

- Node.js (version 18 or higher)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd quiz_builder
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🏗️ Architecture

The Quiz Builder follows a modern React architecture with the following key components:

### Core Technologies

- **Next.js 15.5.2** - Full-stack React framework with App Router
- **React 19.1.0** - UI library with latest features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **@dnd-kit/core** - Drag and drop functionality
- **Zod** - Schema validation
- **React Hook Form** - Form state management

### State Management

- **QuizContext**: Manages the global list of quizzes and persistence
- **ElementContext**: Handles active quiz elements during editing sessions
- **Local Storage**: Persistent data storage in the browser

### Component Structure

```
QuizBuilder/
├── LeftSidebar/     # Element selection panel
├── Canvas/          # Drag & drop quiz canvas
├── RightSidebar/    # Property editing panel
└── DragOverlay/     # Visual feedback during drag operations
```

## 📂 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── quiz/              # Quiz viewing and editing routes
│   ├── hooks/             # Custom React hooks
│   └── layout.tsx         # Root layout with providers
├── components/
│   ├── QuizBuilder/       # Main quiz building interface
│   ├── fields/            # Form field components
│   ├── context/           # React Context providers
│   ├── ui/                # Reusable UI components
│   └── DataTable/         # Quiz management table
├── storage/               # Local storage utilities
├── constants/             # Static data and configurations
├── utils/                 # Helper functions
└── lib/                   # Utility libraries
```

## 🎮 Usage

### Creating a Quiz

1. Navigate to the quiz builder interface
2. Drag field elements from the left sidebar to the canvas
3. Configure field properties in the right sidebar
4. Use the preview button to test your quiz
5. Publish when ready

### Managing Quizzes

- View all quizzes in the data table on the home page
- Edit existing quizzes by clicking the edit button
- Delete quizzes you no longer need
- Track quiz status (draft/published)

### Available Field Types

- **Text Field**: Single-line text input
- **Textarea Field**: Multi-line text input
- **Number Field**: Numeric input with validation
- **Checkbox Field**: Multiple selection options
- **Radio Field**: Single selection from multiple options
- **Select Field**: Dropdown selection
- **Title Field**: Quiz section headers

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

### Code Quality

- **ESLint**: Configured with Next.js best practices
- **TypeScript**: Strict type checking enabled
- **Prettier**: Code formatting (recommended to configure)

## 🚀 Deployment

### Vercel (Recommended)

The easiest way to deploy your Quiz Builder is using [Vercel](https://vercel.com):

1. Push your code to a Git repository
2. Connect your repository to Vercel
3. Deploy automatically on every push

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)
- Drag and drop by [@dnd-kit](https://dndkit.com/)
- Icons from [Lucide React](https://lucide.dev/)

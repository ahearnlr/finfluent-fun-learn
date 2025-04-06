import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n/i18n'

// Check for required environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    createRoot(rootElement).render(
      <div className="min-h-screen flex items-center justify-center bg-red-50 p-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Environment Variables Missing</h1>
          <p className="mb-4">
            Supabase configuration is missing. Please set up your environment variables:
          </p>
          <div className="bg-gray-100 p-4 rounded text-left mb-4 overflow-x-auto">
            <code>
              VITE_SUPABASE_URL=your_supabase_url<br />
              VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
            </code>
          </div>
          <p className="mb-4">
            Run the following command to set up your environment:
          </p>
          <div className="bg-gray-100 p-4 rounded text-left mb-6 overflow-x-auto">
            <code>npm run setup-env</code>
          </div>
          <p className="text-sm text-gray-600">
            See the README.md file for more detailed instructions.
          </p>
        </div>
      </div>
    );
  }
} else {
  createRoot(document.getElementById("root")!).render(<App />);
}

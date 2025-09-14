
import { Rocket } from 'lucide-react';

const Header = () => {
  return (
    <header className="p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Rocket className="text-blue-500" />
        <h1 className="text-xl font-bold">LaunchMVP</h1>
      </div>
      <nav className="space-x-4">
        <a href="#" className="text-gray-600 hover:text-blue-500">Home</a>
        <a href="#" className="text-gray-600 hover:text-blue-500">Features</a>
        <a href="#" className="text-gray-600 hover:text-blue-500">Pricing</a>
      </nav>
    </header>
  );
};

export default Header;

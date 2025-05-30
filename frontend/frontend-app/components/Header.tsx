export const Header = () => (
  <header className="w-full bg-white shadow">
    <nav className="container mx-auto flex items-center justify-between p-4">
      <div className="flex items-center gap-2">
        <img className="h-10 w-10 logo" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Logo" />
        <span className="font-bold text-lg">Fusion Hub AI</span>
      </div>
      <div className="hidden md:flex gap-4">
        <a href="#" className="text-sm font-medium text-gray-700 hover:text-indigo-600">Product</a>
        <a href="#" className="text-sm font-medium text-gray-700 hover:text-indigo-600">Features</a>
        <a href="#" className="text-sm font-medium text-gray-700 hover:text-indigo-600">Marketplace</a>
        <a href="#" className="text-sm font-medium text-gray-700 hover:text-indigo-600">Company</a>
      </div>
    </nav>
  </header>
);
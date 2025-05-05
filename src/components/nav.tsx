'use client';

import { LogOut } from 'lucide-react';

export function Nav() {
  const handleLogout = async () => {
    // Implementar a lógica de logout aqui
    console.log('Logout clicked');
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-sm">
      <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
      <button
        onClick={handleLogout}
        className="flex items-center px-4 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
      >
        <LogOut className="w-4 h-4 mr-2" />
        Sair
      </button>
    </nav>
  );
}
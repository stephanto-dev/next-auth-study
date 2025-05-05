import { Nav } from '@/components/nav';
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export default async function DashboardPage() {
  const supabase = await createClient();

  const {data, error} = await supabase.auth.getUser();
  console.log(data, error);

  if(error || !data?.user) {
    redirect('/auth');
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Dashboard
          </h1>
          <p className="text-gray-600 mb-4">
            Bem-vindo ao seu dashboard! Esta é uma área protegida que só pode ser acessada por usuários autenticados.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-indigo-900 mb-2">Estatísticas</h2>
              <p className="text-indigo-700">Visualize suas estatísticas aqui</p>
            </div>
            {/* Card 2 */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-green-900 mb-2">Atividades</h2>
              <p className="text-green-700">Acompanhe suas atividades recentes</p>
            </div>
            {/* Card 3 */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-purple-900 mb-2">Configurações</h2>
              <p className="text-purple-700">Gerencie suas preferências</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
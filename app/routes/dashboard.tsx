import { Link } from "react-router";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Barra de Navegación Azul */}
      <nav className="bg-blue-600 text-white p-4 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link
              to="/configuracion"
              className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors"
            >
              ⚙️
            </Link>
          </div>
          
          {/* Título Central */}
          <h1 className="text-2xl font-bold">PMaster</h1>
          
          <div className="flex items-center gap-4">
            <Link
              to="/proyectos"
              className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors"
            >
              📋
            </Link>
            <Link
              to="/progreso"
              className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors"
            >
              📊
            </Link>
          </div>
        </div>
      </nav>

      {/* Contenido Principal */}
      <div className="max-w-6xl mx-auto p-6">
        {/* Título Proyectos */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">PROYECTOS</h2>
        </div>

        {/* Último Reporte Publicado */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">ULTIMO REPORTE PUBLICADO</h3>
          <h4 className="text-lg font-medium text-gray-700 mb-4">Descripción</h4>
        </div>

        {/* Fila Superior: METISALES y ARCHIVIOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* METISALES */}
          <Link
            to="/mensajes"
            className="block bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:bg-gray-50 transition-colors"
          >
            <h4 className="font-semibold text-gray-900 text-xl mb-4">METISALES</h4>
            <p className="text-gray-700">Contenido</p>
          </Link>

          {/* ARCHIVIOS */}
          <Link
            to="/archivos"
            className="block bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:bg-gray-50 transition-colors"
          >
            <h4 className="font-semibold text-gray-900 text-xl">ARCHIVIOS</h4>
          </Link>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-300 my-6">
          <hr />
        </div>

        {/* Fila Media: Calendario */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 capitalize">Noviembre</h3>
          
          {/* Números superiores (0-8) */}
          <div className="grid grid-cols-9 gap-1 mb-4 text-center">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div key={num} className="h-8 flex items-center justify-center text-sm text-gray-400 font-medium">
                {num}
              </div>
            ))}
          </div>

          {/* Días de la semana */}
          <div className="grid grid-cols-7 gap-1 mb-3 text-center text-sm font-medium text-gray-600">
            <div>D</div>
            <div>L</div>
            <div>M</div>
            <div>M</div>
            <div>J</div>
            <div>V</div>
            <div>S</div>
          </div>

          {/* Días del mes - Primera fila */}
          <div className="grid grid-cols-7 gap-1 mb-2 text-center">
            <div className="h-8 flex items-center justify-center text-sm font-medium text-gray-700">1</div>
            <div className="h-8 flex items-center justify-center text-sm font-medium text-gray-700">2</div>
            <div className="h-8 flex items-center justify-center text-sm font-medium text-gray-700">3</div>
            <div className="h-8 flex items-center justify-center text-sm font-medium text-gray-700">4</div>
            <div className="h-8 flex items-center justify-center text-sm font-medium text-gray-700">5</div>
            <div className="h-8 flex items-center justify-center text-sm font-medium text-gray-700">6</div>
            <div className="h-8 flex items-center justify-center text-sm font-medium text-gray-700">7</div>
          </div>

          {/* Segunda fila */}
          <div className="grid grid-cols-7 gap-1 mb-2 text-center">
            <div className="h-8 flex items-center justify-center text-sm font-medium text-gray-700">8</div>
            <div className="h-8 flex items-center justify-center text-sm font-medium text-gray-700">9</div>
            <div className="h-8 flex items-center justify-center text-sm font-medium text-gray-700">10</div>
            <div className="h-8 flex items-center justify-center text-sm font-medium text-gray-700">11</div>
            <div className="h-8 flex items-center justify-center text-sm font-medium text-gray-700">12</div>
            <div className="h-8 flex items-center justify-center text-sm font-medium text-gray-700">13</div>
            <div className="h-8 flex items-center justify-center text-sm font-medium text-gray-700">14</div>
          </div>

          {/* Tercera fila */}
          <div className="grid grid-cols-7 gap-1 mb-2 text-center">
            <div className="h-8 flex items-center justify-center text-sm font-medium text-gray-700">15</div>
            <div className="h-8 flex items-center justify-center text-sm font-medium text-gray-700">16</div>
            <div className="h-8 flex items-center justify-center text-sm font-medium text-gray-700">17</div>
            <div className="h-8 flex items-center justify-center text-sm font-medium text-gray-700">18</div>
            <div className="h-8 flex items-center justify-center text-sm font-medium text-gray-700">19</div>
            <div className="h-8 flex items-center justify-center text-sm font-medium text-gray-700">20</div>
            <div className="h-8 flex items-center justify-center text-sm font-medium text-gray-700">21</div>
          </div>

          {/* Cuarta fila */}
          <div className="grid grid-cols-7 gap-1 mb-2 text-center">
            <div className="h-8 flex items-center justify-center text-sm font-medium text-gray-700">22</div>
            <div className="h-8 flex items-center justify-center text-sm font-medium text-gray-700">23</div>
            <div className="h-8 flex items-center justify-center text-sm font-medium text-gray-700">24</div>
            <div className="h-8 flex items-center justify-center text-sm font-medium text-gray-700">25</div>
            <div className="h-8 flex items-center justify-center text-sm font-medium text-gray-700">26</div>
            <div className="h-8 flex items-center justify-center text-sm font-medium text-gray-700">27</div>
            <div className="h-8 flex items-center justify-center text-sm font-medium text-gray-700">28</div>
          </div>

          {/* Quinta fila */}
          <div className="grid grid-cols-7 gap-1 text-center">
            <div className="h-8 flex items-center justify-center text-sm font-medium text-gray-700">29</div>
            <div className="h-8 flex items-center justify-center text-sm font-medium text-gray-700">30</div>
            <div className="h-8"></div>
            <div className="h-8"></div>
            <div className="h-8"></div>
            <div className="h-8"></div>
            <div className="h-8"></div>
          </div>
        </div>

        {/* Fila Inferior: Tarea Actual */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">TAREA ACTUAL</h3>
          <h4 className="text-lg font-medium text-gray-700 mb-4">Descripción</h4>
          <div className="text-lg font-bold text-blue-600 mb-6">
            Periodo 3 - 4
          </div>
          
        </div>
      </div>
    </div>
  );
}
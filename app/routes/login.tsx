import { Link } from "react-router";

export default function Login() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo/Título */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">PMaster</h1>
          <p className="text-gray-600 mt-2">Gestión de proyectos simplificada</p>
        </div>

        {/* Formulario */}
        <div className="bg-white rounded-lg border border-gray-300 p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            INICIO DE SESIÓN
          </h2>

          <form className="space-y-6">
            {/* Campo Correo/Usuario */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Correo Electrónico o usuario
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="usuario@ejemplo.com"
              />
            </div>

            {/* Campo Contraseña */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contraseña
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="••••••••"
              />
            </div>

            {/* Botón de Inicio de Sesión */}
            <Link
              to="/dashboard"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
            >
              INICIAR
            </Link>
          </form>

          {/* Enlace de ayuda */}
          <div className="text-center mt-6">
            <a href="#" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">
            ¿No tienes una cuenta?{" "}
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
              Regístrate
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
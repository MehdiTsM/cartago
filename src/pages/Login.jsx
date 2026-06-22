import { useState } from "react";
import { FaUserShield, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // make sure auth is exported from your firebase.js

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin-dashboard");
    } catch (err) {
      setError("Email ou mot de passe incorrect.");
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-[#0092A5] via-[#00AFC5] to-[#fc9403]">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-[30px] shadow-2xl p-8">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-[#0092A5]/10 flex items-center justify-center">
              <FaUserShield className="text-4xl text-[#0092A5]" />
            </div>
          </div>

          <h1
            className="text-3xl font-bold text-center text-[#0092A5]"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Administration
          </h1>

          <p className="text-center text-gray-500 mt-2 mb-8">
            Connectez-vous pour accéder au tableau de bord.
          </p>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Adresse Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@cartago.com"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#0092A5]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mot de Passe
              </label>

              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                  className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:border-[#0092A5]"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0092A5] hover:bg-[#007e8f] text-white py-3 rounded-xl font-semibold transition duration-300"
            >
              Se Connecter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
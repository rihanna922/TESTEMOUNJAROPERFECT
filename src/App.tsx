import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// --- Constants & Assets ---
const LOGO_URL = "https://ais-pre-zsgxmgh2bnd2kw6naipxyl-137344370563.us-east1.run.app/logo.png";
const GELATINA_URL = "https://ais-pre-zsgxmgh2bnd2kw6naipxyl-137344370563.us-east1.run.app/gelatina.png";

const PRIMARY_GRADIENT = "linear-gradient(90deg, #A855F7 0%, #EC4899 100%)";
const SECONDARY_GRADIENT = "linear-gradient(90deg, #8B5CF6 0%, #D946EF 100%)";

// --- Components ---

const ProgressBar = ({ progress }: { progress: number }) => (
  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
    <motion.div 
      className="h-full bg-purple-600"
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 0.5 }}
    />
  </div>
);

const Button = ({ children, onClick, className = "" }: { children: React.ReactNode, onClick: () => void, className?: string }) => (
  <button 
    onClick={onClick}
    className={`w-full max-w-md py-5 px-6 rounded-2xl font-black text-white text-xl shadow-[0_10px_20px_rgba(168,85,247,0.3)] transition-all active:scale-95 hover:brightness-110 ${className}`}
    style={{ background: PRIMARY_GRADIENT }}
  >
    {children}
  </button>
);

export default function App() {
  const [page, setPage] = useState(1);

  const next = () => setPage(p => p + 1);

  return (
    <div className="h-screen w-full bg-white font-sans text-gray-900 overflow-hidden selection:bg-purple-100">
      <AnimatePresence mode="wait">
        {page === 1 && (
          <motion.div
            key="page1"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="h-full w-full flex flex-col items-center justify-between px-6 py-8 max-w-xl mx-auto"
          >
            {/* Logo */}
            <div className="flex-shrink-0">
              <img 
                src={LOGO_URL} 
                alt="Mounjaro Gelatina Logo" 
                className="h-16 md:h-20 object-contain" 
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.currentTarget.src = "https://via.placeholder.com/300x100?text=Mounjaro+Gelatina";
                }}
              />
            </div>

            {/* Gelatina Image */}
            <div className="flex-grow flex items-center justify-center py-4">
              <div className="bg-white rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.06)] p-4 border border-gray-50/50">
                <img 
                  src={GELATINA_URL} 
                  alt="Gelatina Bowl" 
                  className="w-48 h-48 md:w-64 md:h-64 object-contain rounded-[2rem]"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    e.currentTarget.src = "https://picsum.photos/seed/pink-gelatin/600/600";
                  }}
                />
              </div>
            </div>

            {/* Headline */}
            <div className="text-center mb-6 px-2 flex-shrink-0">
              <h1 className="text-xl md:text-2xl font-black leading-tight mb-4 tracking-tight">
                Você está lutando contra <span className="text-[#A855F7]">Barriga Estufada</span> e <span className="text-[#A855F7]">Gordura Localizada</span>?
              </h1>
              <p className="text-base md:text-lg text-gray-500 font-medium leading-relaxed">
                Descubra como ativar seu metabolismo e perder até <span className="text-gray-900 font-bold">12kg em 30 dias</span> com a <span className="text-gray-900 font-bold">Gelatina Mounjaro</span>!
              </p>
            </div>

            {/* Button */}
            <div className="w-full flex-shrink-0 mb-6">
              <Button onClick={next}>
                Quero saber se funciona para mim! 🔥
              </Button>
            </div>

            {/* Footer */}
            <div className="flex items-center gap-4 text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest flex-shrink-0">
              <span className="flex items-center gap-1.5">✓ 127.000+ mulheres</span>
              <span className="opacity-30">•</span>
              <span className="flex items-center gap-1.5">✓ 100% Natural</span>
            </div>
          </motion.div>
        )}

        {page === 2 && (
          <motion.div
            key="page2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="h-full w-full flex flex-col items-center px-6 pt-6 pb-12 max-w-xl mx-auto"
          >
            {/* Header with Logo */}
            <div className="mb-6 flex-shrink-0">
              <img 
                src={LOGO_URL} 
                alt="Logo" 
                className="h-12 object-contain" 
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/200x60?text=Logo";
                }}
              />
            </div>

            {/* Progress Bar */}
            <div className="w-full mb-12 px-4 flex-shrink-0">
              <ProgressBar progress={5} />
            </div>

            {/* Content */}
            <div className="flex-grow flex flex-col items-center justify-center text-center space-y-6 px-4">
              <h2 className="text-2xl md:text-3xl font-black leading-tight tracking-tight">
                Vamos começar sua jornada! 🚀
              </h2>
              <p className="text-base md:text-lg text-gray-500 font-medium leading-relaxed">
                Responda algumas perguntas rápidas para personalizar seu plano.
              </p>
              
              <Button onClick={() => { window.location.href = "https://checkout.perfectpay.com.br/pay/PPU38CPMMGH?"; }} className="mt-6">
                COMPRE AQUI
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

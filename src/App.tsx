import React from 'react';
import { Header } from './components/Header';
import { Avatar } from './components/Avatar';
import { MemeGenerator } from './components/MemeGenerator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const copyToClipboard = () => {
    const caText = "FVdo7CDJarhYoH6McyTFqx71EtzCPViinvdd1v86Qmy5";
    navigator.clipboard.writeText(caText).then(() => {
      toast.success("✧˖° Copied to clipboard! nyaa~ ˎˊ˗", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          background: 'rgba(253, 242, 248, 0.95)', // Light pink background
          color: '#EC4899', // Pink text
          borderRadius: '1rem',
          border: '2px solid #FBCFE8',
          padding: '12px 24px',
          fontSize: '1rem',
          fontWeight: '500',
          boxShadow: '0 4px 6px -1px rgba(251, 207, 232, 0.3)',
          backdropFilter: 'blur(8px)'
        },
        icon: "🌸"
      });
    }).catch(err => {
      toast.error("nyaa~ couldn't copy! (｡•́︿•̀｡)", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          background: 'rgba(253, 242, 248, 0.95)',
          color: '#EC4899',
          borderRadius: '1rem',
          border: '2px solid #FBCFE8',
          padding: '12px 24px',
          fontSize: '1rem',
          fontWeight: '500',
          boxShadow: '0 4px 6px -1px rgba(251, 207, 232, 0.3)',
          backdropFilter: 'blur(8px)'
        },
        icon: "🥀"
      });
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 relative">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-pink-600 mb-4 hover:text-pink-500 transition-colors">
              ✧˖° hewwoo~ welcome to nanaa nationn!! °˖✧
            </h2>
            <p className="text-pink-500 mb-2 hover:text-pink-400 transition-colors">
              a super cozy pwace wiff dreamy & sweet vibesss ♡꒰｡•ω•｡꒱
            </p>
          </div>
          <Avatar />
          <MemeGenerator />
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-pink-600 mb-4 hover:text-pink-500 transition-colors">
                ꒰ ˘͈ᵕ ˘͈♡꒱
            </h2>
            <p className="rainbow-text text-pink-500 mb-2 hover:text-pink-400 transition-colors cursor-pointer" onClick={copyToClipboard}>
                CA: GAatGnJ2GypazBLnXZ6Hm1KBdpkjspT5jMfthb9bchat
            </p>
          </div>
        </div>
      </main>
      
      <footer className="fixed bottom-4 left-4 text-pink-400 hover:text-pink-500 transition-colors">
        <p className="flex items-center gap-2">
          Made with <span className="animate-pulse hover:text-red-400 transition-colors">💖</span> by Nanaa chan
        </p>
      </footer>
      <div className="fixed bottom-4 right-4 bg-pink-100/80 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-pink-200 shadow-lg animate-bounce">
       <p className="text-pink-600 font-medium flex items-center gap-2">
         <span className="animate-pulse">💭</span>
         chatties coming soon~ nyaa! 
         <span className="animate-pulse">✧˖°</span>
       </p>
     </div>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        limit={1}
      />
    </div>
  );
}

export default App;
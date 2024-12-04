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
      toast.success("Copied to clipboard!", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: { backgroundColor: '#FDF2F8', color: '#FF69B4' }
      });
    }).catch(err => {
      toast.error("Failed to copy!", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: { backgroundColor: '#FDF2F8', color: '#FF69B4' }
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
              ✧˖° Welcome to Nanaa's World °˖✧
            </h2>
            <p className="text-pink-500 mb-2 hover:text-pink-400 transition-colors">
              a cozy space for dreamy and sweet vibes 🌸🌙✨
            </p>
            <p className="text-pink-500 mb-2 hover:text-pink-400 transition-colors cursor-pointer" onClick={copyToClipboard}>
              CA: FVdo7CDJarhYoH6McyTFqx71EtzCPViinvdd1v86Qmy5
            </p>
          </div>
          <Avatar />
          <MemeGenerator />
        </div>
      </main>
      
      <footer className="fixed bottom-4 left-4 text-pink-400 hover:text-pink-500 transition-colors">
        <p className="flex items-center gap-2">
          Made with <span className="animate-pulse hover:text-red-400 transition-colors">💖</span> by Nanachan
        </p>
      </footer>
      <ToastContainer />
    </div>
  );
}

export default App;
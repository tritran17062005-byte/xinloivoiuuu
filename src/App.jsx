import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, PartyPopper, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";

function HeartRain() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-500"
          initial={{ y: -50, x: Math.random() * window.innerWidth }}
          animate={{ y: window.innerHeight + 50 }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "linear",
          }}
        >
          <Heart className="w-6 h-6" />
        </motion.div>
      ))}
    </div>
  );
}

export default function ApologyPage() {
  const [scene, setScene] = useState(1);

  useEffect(() => {
    if (scene === 1) {
      // Tự động qua scene 2 sau 3 giây
      const t = setTimeout(() => setScene(2), 3000);
      return () => clearTimeout(t);
    }
  }, [scene]);

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center relative">
      {/* Nhạc auto play */}
      <iframe
        width="0"
        height="0"
        src="https://www.youtube.com/embed/0t_rPk8S7m4?autoplay=1&loop=1&playlist=0t_rPk8S7m4"
        title="Hơn Cả Yêu - Đức Phúc"
        frameBorder="0"
        allow="autoplay"
      ></iframe>

      <HeartRain />

      <AnimatePresence mode="wait">
        {scene === 1 && (
          <motion.div
            key="intro"
            className="text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.5 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl font-bold text-pink-600">
              Anh xin lỗi em 🥺❤️
            </h1>
            <p className="text-pink-500 mt-2">
              Cho anh cơ hội được bù đắp nha...
            </p>
          </motion.div>
        )}

        {scene === 2 && (
          <motion.div
            key="main"
            className="text-center max-w-xl p-6 bg-white/80 rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-pink-700 flex justify-center gap-2">
              <PartyPopper /> Lý do anh xin lỗi <Sparkles />
            </h2>
            <ul className="mt-4 text-left text-pink-800 space-y-2">
              <li>💖 Anh đã nói điều khiến em buồn.</li>
              <li>💖 Anh nhận ra lỗi lầm và muốn sửa ngay.</li>
              <li>💖 Anh hứa sẽ lắng nghe em nhiều hơn.</li>
            </ul>
            <div className="mt-6 flex justify-center">
              <Button onClick={() => setScene(3)} className="text-lg px-6 py-6">
                <HandHeart className="w-5 h-5 mr-2" /> Tiếp tục →
              </Button>
            </div>
          </motion.div>
        )}

        {scene === 3 && (
          <motion.div
            key="ending"
            className="text-center"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-pink-600 mb-4">
              Em tha thứ cho anh nha 💖
            </h2>
            <Button
              size="lg"
              className="text-lg px-8 py-6"
              onClick={() => setScene(1)}
            >
              <Heart className="w-6 h-6 mr-2" /> Đồng ý
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

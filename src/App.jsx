import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Cookie,
  Sparkles,
  PartyPopper,
  Flower2,
  Calendar,
  Laugh,
  ThumbsUp,
  HandHeart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const defaultPartnerName = "Em";

const reasons = [
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Vì anh thật lòng",
    text: "Chồng xin lỗi vì đã làm vợ buồn. Chồng biết mình đã nói câu đó là không thể chấp nhận được.",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Sửa sai ngay",
    text: "Chồng đã rút kinh nghiệm và sẽ hành động cụ thể để bù đắp cho vợ.",
  },
  {
    icon: <Cookie className="w-5 h-5" />,
    title: "Đãi vợ những món vợ muốn và đi chơi với vợ",
    text: "Thứ 3 tuần sau chồng sẽ mua cho vợ trà sữa + món vợ mê. Không bàn cãi!",
  },
  {
    icon: <Flower2 className="w-5 h-5" />,
    title: "Chở vợ đi ngắm pháo hoa & xin lỗi vợ",
    text: "Xin lỗi trực tiếp + một cái ôm xin lỗi thật chặt (nếu vợ cho phép).",
  },
];

hônggg làm trái ý vợ..",
];

function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    function onResize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return size;
}

function HeartBurst({ show }) {
  const { width, height } = useWindowSize();
  const particles = useMemo(
    () =>
      Array.from({ length: 36 }).map((_, i) => ({
        id: i,
        x: Math.random() * width,
        y: Math.random() * height,
        a: Math.random() * 360,
      })),
    [show, width, height]
  );
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="pointer-events-none fixed inset-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute text-pink-500"
              initial={{ x: p.x, y: p.y, rotate: 0, opacity: 0.9 }}
              animate={{
                y: p.y - (80 + Math.random() * 160),
                x: p.x + (Math.random() * 200 - 100),
                rotate: p.a + 180,
                opacity: 0,
              }}
              transition={{
                duration: 1.2 + Math.random() * 0.8,
                ease: "easeOut",
              }}
            >
              <Heart className="w-6 h-6" />
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function ApologyPage() {
  const [partnerName, setPartnerName] = useState(defaultPartnerName);
  const [message, setMessage] = useState(
    "Vợ ơi, cho chồng xin lỗi vì đã làm vợ buồn. Chồng thương vợ nhiều lắm và muốn sửa sai ngay từ hôm nay. Chồng hứa sẽ không vô tâm và nói hay làm những điều làm vợ tổn thương ạ. Cho chồng cơ hội được bù đắp nhé? 🥺❤️"
  );
  const [burst, setBurst] = useState(false);
  const [hoverDeny, setHoverDeny] = useState(false);
  const denyRef = useRef(null);

  useEffect(() => {
    if (!hoverDeny || !denyRef.current) return;
    const btn = denyRef.current;
    const x = Math.random() * 60 - 30;
    const y = Math.random() * 60 - 30;
    btn.style.transform = `translate(${x}px, ${y}px)`;
  }, [hoverDeny]);

  return (
    <div className="min-h-screen bg-pink-50 text-pink-900 flex items-center justify-center p-4 relative">
      <HeartBurst show={burst} />
      {/* Nhạc YouTube auto play */}
      <iframe
        width="0"
        height="0"
        src="https://www.youtube.com/embed/0t_rPk8S7m4?autoplay=1&loop=1&playlist=0t_rPk8S7m4"
        title="Hơn Cả Yêu - Đức Phúc"
        frameBorder="0"
        allow="autoplay"
        className="absolute"
      ></iframe>

      <div className="w-full max-w-3xl">
        <motion.chồng nữa nha ❤️
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="md:col-span-2">
                  <label className="block text-sm mb-1">Tên người yêu</label>
                  <Input
                    value={partnerName}
                    onChange={(e) => setPartnerName(e.target.value)}
                    className="bg-white"
                    placeholder="Nhập tên (Em/Anh/My/Hà/...)"
                  />
                </div>
                <div className="flex items-end">
                  <Button
                    onClick={() => {
                      setBurst(false);
                      setTimeout(() => setBurst(true), 10);
                    }}
                    className="w-full"
                  >
                    <HandHeart className="w-4 h-4 mr-2" /> Xuất hiện trái tim
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {reasons.map((r, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Card className="bg-white/80 hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <span className="text-pink-500">{r.icon}</span>
                          {r.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="-mt-2 text-sm text-pink-800/90">
                        {r.text}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="bg-white/80 rounded-2xl p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-pink-700">
                  <Calendar className="w-4 h-4" />
                  <p className="font-medium">Cam kết nè</p>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {promises.map((p, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 bg-pink-50 rounded-xl p-3"
                    >
                      <ThumbsUp className="w-4 h-4 mt-0.5 text-pink-500" />
                      <span className="text-sm">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <label className="block text-sm mb-1">
                  Lời nhắn gửi {partnerName}
                </label>
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-white min-h-[120px]"
                />
                <div className="mt-3 flex flex-wrap gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="">
                        <Heart className="w-4 h-4 mr-2" /> Gửi lời xin lỗi
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Đã gửi tới {partnerName} 💌</DialogTitle>
                        <DialogDescription>“{message}”</DialogDescription>
                      </DialogHeader>
                      <div className="text-sm text-muted-foreground">
                        (Bước tiếp theo: đọc cùng nhau và ôm một cái nha 🫶)
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button
                    variant="secondary"
                    onMouseEnter={() => setHoverDeny(true)}
                    onMouseLeave={() => setHoverDeny(false)}
                    ref={denyRef}
                  >
                    Vẫn còn giận 😤
                  </Button>
                  <Button
                    onClick={() => {
                      setBurst(false);
                      setTimeout(() => setBurst(true), 10);
                    }}
                    variant="outline"
                  >
                    <Laugh className="w-4 h-4 mr-2" /> Cho một cái cười đi ạaa
                  </Button>
                </div>
              </div>

              <p className="text-center text-sm text-pink-700/80">
                Nếu em tha thứ, nhấn nút này nè ↓
              </p>
              <div className="flex justify-center">
                <Button
                  size="lg"
                  className="text-base px-6 py-6"
                  onClick={() => {
                    setBurst(false);
                    setTimeout(() => setBurst(true), 10);
                  }}
                >
                  <Heart className="w-5 h-5 mr-2" /> Vợ tha thứ cho chồng 💖
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        <div className="mt-6 text-center text-xs text-pink-700/70">
          Thiết kế bởi bạn dễ thương đang muốn làm hòa ✨
        </div>
      </div>
    </div>
  );
}

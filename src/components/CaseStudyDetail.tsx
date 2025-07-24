import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { CaseStudy } from "@/caseStudiesData";

interface CaseStudyDetailProps {
  caseStudy: CaseStudy | null;
  isOpen: boolean;
  onClose: () => void;
  relatedWorks: CaseStudy[];
  onRelatedWorkClick: (caseStudy: CaseStudy) => void;
}

const CaseStudyDetail = ({
  caseStudy,
  isOpen,
  onClose,
  relatedWorks,
  onRelatedWorkClick,
}: CaseStudyDetailProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [secureUrl, setSecureUrl] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState(false);
  const [showConnectInfo, setShowConnectInfo] = useState(false);
  const CORRECT_PASSWORD = "123407"; // Set your password here

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [caseStudy]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handlePasswordSubmit = () => {
    if (passwordInput === CORRECT_PASSWORD) {
      setSecureUrl(caseStudy?.prototypeUrl ?? null);
      setIsPasswordModalOpen(false);
      setPasswordInput("");
      setPasswordError(false);
      setShowConnectInfo(false);
      if (caseStudy?.prototypeUrl) {
        window.open(caseStudy.prototypeUrl, "_blank");
      }
    } else {
      setPasswordError(true);
      setShowConnectInfo(true);
    }
  };

  if (!caseStudy) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 md:inset-4 z-50 glass md:rounded-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-border/50">
              <div>
                <h2 className="text-2xl font-grotesk font-bold">
                  {caseStudy.title}
                </h2>
                <p className="text-muted-foreground">
                  {caseStudy.role} • {caseStudy.year}
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="magnetic"
              >
                <X size={20} />
              </Button>
            </div>

            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto w-full md:w-[70%] mx-auto max-h-[calc(100vh-96px)]"
            >
              <div className="p-6 space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="rounded-md md:rounded-xl overflow-hidden"
                >
                  <img
                    src={caseStudy.images[1]}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover rounded-md md:rounded-xl"
                  />
                </motion.div>

                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-xl font-grotesk font-semibold mb-4">
                    Project Overview
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {caseStudy.overview}
                  </p>
                </motion.section>

                <div className="grid gap-12">
                  {["Situation", "Task", "Action", "Result"].map(
                    (title, index) => (
                      <motion.div
                        key={title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="space-y-3"
                      >
                        <h4 className="text-xl font-grotesk font-medium text-primary">
                          {title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                          {caseStudy[title.toLowerCase() as keyof CaseStudy]}
                        </p>
                      </motion.div>
                    )
                  )}
                </div>

                {caseStudy.images.length > 1 && (
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-grotesk font-semibold">
                      Design Process
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {caseStudy.images.slice(2).map((image, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.8 + index * 0.1 }}
                          className="rounded-md md:rounded-xl overflow-hidden"
                        >
                          <img
                            src={image}
                            alt={`${caseStudy.title} process ${index + 1}`}
                            className="w-full h-full object-cover rounded-md md:rounded-xl border border-[#d1d5db] hover:scale-105 hover:shadow-[0_4px_16px_rgba(0,0,0,0.15)] transition-all duration-300"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </motion.section>
                )}

                {caseStudy.prototypeUrl && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="text-center py-8"
                  >
                    <Button
                      onClick={() => setIsPasswordModalOpen(true)}
                      className="btn-gradient text-lg px-8 py-4 h-auto magnetic"
                    >
                      <ExternalLink size={20} className="mr-2" />
                      View Prototype
                    </Button>
                  </motion.div>
                )}
              </div>
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="border-t border-border/50 pt-6 px-4" // ← 👈 add px-4 here
              >
                <h3 className="text-xl font-grotesk font-semibold mb-6">
                  Other Works You Might Like
                </h3>

                <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4">
                  {relatedWorks.map((work) => (
                    <div
                      key={work.id}
                      onClick={() => onRelatedWorkClick(work)}
                      className="flex-shrink-0 w-64 glass rounded-lg overflow-hidden cursor-pointer"
                    >
                      <img
                        src={work.images[0]}
                        alt={work.title}
                        className="w-full h-40 object-cover rounded-md md:rounded-none hover:scale-110 transition-transform duration-300"
                      />
                      <div className="p-4">
                        <p className="text-sm text-muted-foreground mt-1">
                          {work.category}
                        </p>
                        <h4 className="font-medium text-lg mt-2 line-clamp-2">
                          {work.title}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            </div>
          </motion.div>

          {isPasswordModalOpen && (
            <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
              <div className="bg-white glass dark:bg-neutral-900 text-black dark:text-white rounded-xl shadow-xl w-[90%] max-w-sm p-6">
                <h3 className="text-xl font-semibold mb-4">Enter Password</h3>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full px-4 py-2 rounded border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800"
                  placeholder="Enter password"
                />
                {passwordError && (
                  <p className="text-red-500 text-sm mt-2">
                    Incorrect password entered
                  </p>
                )}
                <div className="mt-4 flex justify-end space-x-2">
                  <Button
                    className="bg-white text-black border border-gray-300 hover:bg-gray-100 transition-colors"
                    onClick={() => {
                      setIsPasswordModalOpen(false);
                      setPasswordInput("");
                      setPasswordError(false);
                      setShowConnectInfo(false);
                    }}
                  >
                    Cancel
                  </Button>

                  <Button
                    onClick={handlePasswordSubmit}
                    className="btn-gradient"
                  >
                    Submit
                  </Button>
                </div>
                {showConnectInfo && (
                  <div className="mt-8 border-t border-neutral-500 pt-6 flex flex-col items-center justify-between gap-6">
                    <div className="text-xl font-semibold">Let’s connect:</div>

                    <div className="flex flex-col items-start items-center text-lg text-muted-foreground gap-2 ">
                      <div className="flex items-center gap-2">
                        <a
                          href="mailto:david.uiux7@gmail.com"
                          className="hover:underline"
                        >
                          david.uiux7@gmail.com
                        </a>
                      </div>

                      <div className="flex items-center gap-2">
                        <span>+91 8686 143 753</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </AnimatePresence>
  );
};

export default CaseStudyDetail;

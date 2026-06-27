import { motion, AnimatePresence } from "framer-motion";
import NavLinks from "./NavLinks";

function MobileMenu({ open, close }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            onClick={close}
            className="fixed inset-0 bg-black/40 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35 }}
            className="fixed right-0 top-0 z-50 h-full w-72 bg-white shadow-2xl p-8"
          >
            <NavLinks dark mobile onClick={close} />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;
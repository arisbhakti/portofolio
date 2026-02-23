import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import Image from "next/image";
export function SuccessDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="md:max-w-119.75 bg-black text-white border box-border border-neutral-800 rounded-3xl pt-0 px-6 md:px-8 ">
        <div className="relative ">
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/icon-message-success.svg"
              alt="Success Icon"
              width={119.39}
              height={110}
              className="w-[119.39px] h-27.5 absolute -top-11.5 left-1/2 -translate-x-1/2 md:w-[147.61px] md:h-34 md:-top-14.5"
            />
          </motion.div>
        </div>
        <DialogHeader>
          <DialogTitle className="pt-17 w-full text-center">
            <motion.div
              className="flex flex-col gap-2"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.28, delay: 0.08 }}
            >
              <span className="font-bold text-lg leading-text-lg md:text-xl md:leading-text-xl">
                Message Sent Successfully!
              </span>
              <span className="text-sm leading-text-sm text-neutral-400 text-text-md md:leading-text-md">
                Thank you for reaching out. I&apos;ll get back to you as soon as
                possible
              </span>
            </motion.div>
          </DialogTitle>
        </DialogHeader>

        <DialogFooter>
          <motion.div
            className="w-full"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.28, delay: 0.15 }}
          >
            <Button
              className="bg-primary-200 hover:bg-primary-300 rounded-full w-full h-12 font-bold text-neutral-950 shadow-[0_4px_40px_0_rgba(145,255,2,0.4)] transition-colors duration-300 z-10 cursor-pointer text-sm leading-text-sm"
              onClick={onClose}
            >
              BACK TO HOME
            </Button>
          </motion.div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

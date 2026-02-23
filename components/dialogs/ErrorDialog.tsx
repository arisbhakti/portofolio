import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
export function ErrorDialog({
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
          <Image
            src="/icon-message-error.svg"
            alt="Success Icon"
            width={119.39}
            height={110}
            className="w-[119.39px] h-27.5 absolute -top-11.5 left-1/2 -translate-x-1/2 md:w-[147.61px] md:h-34 md:-top-14.5"
          />
        </div>
        <DialogHeader>
          <DialogTitle className="pt-17 w-full text-center">
            <div className="flex flex-col gap-2">
              <span className="font-bold text-lg leading-text-lg md:text-xl md:leading-text-xl">
                Message not sent!
              </span>
              <span className="text-sm leading-text-sm text-neutral-400 text-text-md md:leading-text-md">
                Something went wrong on our end. Please try again in a moment
              </span>
            </div>
          </DialogTitle>
        </DialogHeader>

        <DialogFooter>
          <Button
            className="bg-primary-200 hover:bg-primary-300 rounded-full w-full h-12 font-bold text-neutral-950 shadow-[0_4px_40px_0_rgba(145,255,2,0.4)]  transition-colors duration-300 z-10 cursor-pointer text-sm leading-text-sm"
            onClick={onClose}
          >
            TRY AGAIN
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

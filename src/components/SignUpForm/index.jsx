import { useDialog } from "../../dialog-context/DialogContext";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

const SignUpForm = ({ isOpen, closeDialog, data }) => {
  const { closeAllDialogs } = useDialog();
  if (!isOpen) return null;
  console.log("Hello");
  return (
    <Dialog open={isOpen} onOpenChange={closeDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sign Up</DialogTitle>
        </DialogHeader>
        <div>{data ? data.someField : "No data provided"}</div>
        <Button onClick={closeAllDialogs}>Close All Dialogs</Button>
        <DialogFooter>
          <Button onClick={closeDialog}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SignUpForm;

import { useDialog } from "../../dialog-context/DialogContext";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

const LoginForm = ({ isOpen, closeDialog, data }) => {
  const { openDialog } = useDialog();
  if (!isOpen) return null;
  console.log("Hello");
  return (
    <Dialog open={isOpen} onOpenChange={closeDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Manage Marketplace</DialogTitle>
        </DialogHeader>
        <div>{data ? data.someField : "No data provided"}</div>
        <Button onClick={() => openDialog("SignUpForm")}>Open</Button>
        <DialogFooter>
          <Button onClick={closeDialog}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LoginForm;

import "./App.css";
import { Button } from "./components/ui/button";
import { useDialog } from "./dialog-context/DialogContext";

function App() {
  const { openDialog, closeDialog, closeAllDialogs } = useDialog();

  const openLoginFormDialog = () => {
    console.log("Opening login form dialog");
    openDialog("LoginForm");
  };

  return (
    <>
      <div>
        <Button onClick={openLoginFormDialog}>Open Login Form</Button>
        <Button onClick={closeDialog}>Close Current Dialog</Button>
        <Button onClick={closeAllDialogs}>Close All Dialogs</Button>
      </div>
    </>
  );
}

export default App;

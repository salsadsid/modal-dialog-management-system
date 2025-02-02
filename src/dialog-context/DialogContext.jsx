import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import DialogRegistry from "./dialog-registry";

// Dialog Context
const DialogContext = createContext({
  openDialog: (dialogName, data) => {},
  closeDialog: () => {},
  closeAllDialogs: () => {},
});

// Custom hook to use dialog context
export const useDialog = () => useContext(DialogContext);

const DialogProvider = ({ children }) => {
  const [dialogStack, setDialogStack] = useState([]);

  // Open dialog by name and optional data
  const openDialog = useCallback((dialogName, data = {}) => {
    console.log("Opening dialog:", dialogName);
    if (!dialogName || !(dialogName in DialogRegistry)) {
      console.warn(`Dialog "${dialogName}" not found in registry.`);
      return;
    }
    setDialogStack((prev) => [...prev, { dialogName, data }]);
  }, []);

  // Close the topmost dialog
  const closeDialog = useCallback(() => {
    setDialogStack((prev) => prev.slice(0, -1));
  }, []);

  // Close all dialogs
  const closeAllDialogs = useCallback(() => {
    setDialogStack([]);
  }, []);

  // Memoize context value to avoid unnecessary re-renders
  const dialogContextValue = useMemo(
    () => ({
      openDialog,
      closeDialog,
      closeAllDialogs,
    }),
    [openDialog, closeDialog, closeAllDialogs]
  );

  // Get the topmost dialog to display
  const currentDialog = dialogStack.length
    ? dialogStack[dialogStack.length - 1]
    : null;

  return (
    <DialogContext.Provider value={dialogContextValue}>
      {children}
      {currentDialog &&
        React.createElement(DialogRegistry[currentDialog.dialogName], {
          isOpen: true,
          closeDialog,
          data: currentDialog.data,
        })}
    </DialogContext.Provider>
  );
};

export default DialogProvider;

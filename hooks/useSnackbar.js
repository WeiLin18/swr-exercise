import { useSnackbar as useSnackbarHandler } from "notistack";

const useSnackbar = () => {
  const { enqueueSnackbar } = useSnackbarHandler();

  const showErrorSnackbar = ({ msg, ...props }) => {
    enqueueSnackbar(msg, {
      variant: "error",
      ...props,
    });
  };

  return { showErrorSnackbar };
};

export default useSnackbar;

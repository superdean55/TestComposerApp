import * as React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Grid,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

interface Props {
  title: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function PreviewDialog({
  title,
  open,
  onClose,
  children,
}: Props) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      slotProps={{
        paper: {
          sx: {
            borderRadius: 3,
          },
        },
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>
        <Grid container alignItems="center">
          <Grid size={1} />
          <Grid size={10} container justifyContent="center">
            {title && (
              <Typography variant="h6" component="span" align="center">
                {title}
              </Typography>
            )}
          </Grid>
          <Grid size={1} container justifyContent="flex-end">
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
      </DialogTitle>

      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}

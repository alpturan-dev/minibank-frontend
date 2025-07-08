import { apiRequest } from "@/api/config";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Edit, Plus } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const AccountDialog = ({ mode, selectedAccount, getAccounts }) => {
  const [open, setOpen] = useState(false);
  const [account, setAccount] = useState({
    name: selectedAccount?.name ? selectedAccount.name : "",
    balance: selectedAccount?.balance ? selectedAccount.balance : "",
    userId: JSON.parse(localStorage.getItem("user")).id,
  });

  const handleChange = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let response;
      if (mode === "edit") {
        response = await apiRequest.put("/accounts", {
          ...account,
          id: selectedAccount.id,
        });
      } else {
        response = await apiRequest.post("/accounts", {
          ...account,
        });
      }
      if (response.status === 201) {
        await getAccounts();
        if (mode !== "edit") {
          setAccount({
            name: "",
            balance: "",
            userId: JSON.parse(localStorage.getItem("user")).id,
          });
        }
        toast.success(
          mode === "edit"
            ? "The account edited successfully!"
            : "The new account created successfully!"
        );
        setOpen(false);
      }
      console.log("response", response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {mode === "edit" ? (
          <Button variant="default">
            <Edit />
          </Button>
        ) : (
          <Button variant="outline">
            <Plus />
            New Account
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>
              {mode === "edit" ? "Edit your account" : "Create a new account"}
            </DialogTitle>
            <DialogDescription>
              {mode === "edit"
                ? "Edit your account here. Click save when you&apos;re done. "
                : "Start your new account here. Click save when you&apos;re done."}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 pt-2">
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={account.name}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="balance">Balance</Label>
              <Input
                id="balance"
                name="balance"
                value={account.balance}
                onChange={handleChange}
              />
            </div>
          </div>
          <DialogFooter className="pt-4">
            <DialogClose asChild>
              <Button variant="outline" className="cursor-pointer">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" className="cursor-pointer">
              {mode === "edit" ? "Edit account" : " Save changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AccountDialog;

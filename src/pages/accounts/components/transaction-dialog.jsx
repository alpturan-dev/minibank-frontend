import React, { useState } from "react";
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
import toast from "react-hot-toast";
import { ArrowRightLeft } from "lucide-react";

const TransactionDialog = ({ fromAccount, getAccounts, getTransactions }) => {
  const [open, setOpen] = useState(false);
  const [transaction, setTransaction] = useState({
    fromAccount: fromAccount.number,
    toAccount: "",
    amount: "",
  });

  const handleChange = (e) => {
    setTransaction({
      ...transaction,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await apiRequest.post("/transactions/transfer", {
        ...transaction,
      });

      if (response.status === 201) {
        await getAccounts();
        await getTransactions(fromAccount.id);
        setTransaction({
          ...transaction,
          toAccount: "",
          amount: "",
        });
        toast.success("The transaction was completed successfully!");
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
        <Button
          variant="outline"
          className="bg-green-800 hover:bg-green-700 hover:text-white"
        >
          New Transaction
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Transfer to Account Number</DialogTitle>
            <DialogDescription>
              Make transactions to account numbers here. Click transfer when
              you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 pt-4">
            <div className="grid gap-3">
              <Label htmlFor="toAccount">Account Number to Transfer</Label>
              <Input
                id="toAccount"
                name="toAccount"
                value={transaction.toAccount}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                name="amount"
                value={transaction.amount}
                onChange={handleChange}
              />
            </div>
          </div>
          <DialogFooter className="pt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">
              Transfer <ArrowRightLeft />
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TransactionDialog;

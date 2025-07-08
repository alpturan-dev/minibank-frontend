import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { apiRequest } from "../../api/config";
import { useEffect, useState } from "react";
import AccountDialog from "./components/account-dialog";
import { Edit, Trash } from "lucide-react";
import DeleteDialog from "./components/delete-dialog";
import { Button } from "@/components/ui/button";
import TransactionDialog from "./components/transaction-dialog";

const Accounts = () => {
  const [accounts, setAccounts] = useState([]);
  const [showTransactions, setShowTransactions] = useState({});
  const [transactions, setTransactions] = useState({});

  const getAccounts = async () => {
    try {
      const response = await apiRequest.get("/accounts");
      if (response.status === 200) {
        setAccounts(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getTransactions = async (accountId) => {
    try {
      const response = await apiRequest.get(
        `/transactions/account/${accountId}`
      );
      if (response.status === 200) {
        setTransactions((prev) => ({
          ...prev,
          [accountId]: response.data,
        }));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteAccount = async (accountId) => {
    try {
      const response = await apiRequest.delete(`/accounts/${accountId}`);
      if (response.status === 200) {
        getAccounts();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const toggleTransactionHistory = (accountId) => {
    setShowTransactions((prev) => ({
      ...prev,
      [accountId]: !prev[accountId],
    }));

    // Fetch transactions if not already loaded
    if (!transactions[accountId]) {
      getTransactions(accountId);
    }
  };

  useEffect(() => {
    getAccounts();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="flex items-center justify-between pt-4">
          <h1 className="text-xl font-semibold">Accounts</h1>
          <div>
            <AccountDialog getAccounts={getAccounts} />
          </div>
        </div>
        <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {accounts.length > 0 ? (
            accounts.map((account) => (
              <div
                key={account.id}
                className="bg-primary text-white rounded-lg p-4 shadow-2xl shadow-card"
              >
                {/* Account Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex flex-col">
                    <span className="opacity-80 text-sm font-extrabold pb-2">
                      {account.name}
                    </span>
                    <span className="font-light text-xs opacity-80">
                      Account Number
                    </span>
                    <span className="text-lg">{account.number}</span>
                    <span className="font-light text-sm opacity-80 mt-1">
                      Balance:{" "}
                      <span className="font-extrabold text-xl">
                        ${account.balance || "0.00"}
                      </span>
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <AccountDialog
                      mode="edit"
                      selectedAccount={account}
                      getAccounts={getAccounts}
                    />
                    <DeleteDialog
                      id={account.id}
                      handleDeleteAccount={handleDeleteAccount}
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mb-4">
                  <TransactionDialog
                    fromAccount={account}
                    getTransactions={getTransactions}
                    getAccounts={getAccounts}
                  />
                  <button
                    onClick={() => toggleTransactionHistory(account.id)}
                    className="bg-white/20 hover:bg-white/30 px-3 py-2 rounded text-sm font-medium transition-colors"
                  >
                    {showTransactions[account.id] ? "Hide" : "Show"} History
                  </button>
                </div>

                {/* Transaction History */}
                {showTransactions[account.id] && (
                  <div className="border-t border-white/20 pt-4">
                    <h3 className="font-medium mb-2 text-sm">
                      Recent Transactions
                    </h3>
                    <div className="max-h-32 overflow-y-auto">
                      {transactions[account.id] &&
                      transactions[account.id].length > 0 ? (
                        <div className="space-y-2">
                          {transactions[account.id]
                            .slice(0, 5)
                            .map((transaction, index) => (
                              <div
                                key={transaction.id || index}
                                className="flex justify-between items-center text-sm bg-white/10 p-2 rounded"
                              >
                                <div>
                                  <div className="font-medium">
                                    {transaction.from === account.id
                                      ? "Transaction to: "
                                      : "Transaction from: "}
                                    {transaction.from === account.id
                                      ? transaction.toNumber
                                      : transaction.fromNumber}
                                  </div>
                                  <div className="text-xs opacity-70">
                                    {transaction.transactionDate.split(
                                      "T"
                                    )[0] || new Date().toLocaleDateString()}
                                  </div>
                                </div>
                                <div
                                  className={`font-medium ${
                                    transaction.from === account.id
                                      ? "text-red-300"
                                      : "text-green-300"
                                  }`}
                                >
                                  {transaction.from === account.id ? "-" : "+"}$
                                  {Math.abs(transaction.amount || 0).toFixed(2)}
                                </div>
                              </div>
                            ))}
                        </div>
                      ) : (
                        <div className="text-sm opacity-70 text-center py-2">
                          No transactions found
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-8 text-gray-500">
              There is no account created.
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Accounts;

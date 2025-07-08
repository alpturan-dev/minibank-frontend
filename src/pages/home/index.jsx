import {
  CreditCard,
  Users,
  ArrowLeftRight,
  Shield,
  TrendingUp,
  Clock,
  ChevronRight,
  User,
  LogOut,
  Send,
} from "lucide-react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Banking Made Simple
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Experience seamless banking with Mini Bank. Create accounts,
                transfer money, and manage your finances with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/accounts">
                  <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors cursor-pointer">
                    Create Account
                  </button>
                </Link>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors cursor-pointer">
                  Learn More
                </button>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative">
                <div className="bg-primary-light rounded-2xl shadow-2xl p-8 transform rotate-3">
                  <div className=" rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-gray-600">
                        Total Balance
                      </span>
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900">
                      $12,450.00
                    </div>
                    <div className="mt-4 flex space-x-4">
                      <div className="flex-1 bg-primary rounded-lg p-3">
                        <div className="text-xs text-white">Checking</div>
                        <div className="font-semibold">$8,230.00</div>
                      </div>
                      <div className="flex-1 bg-primary rounded-lg p-3">
                        <div className="text-xs text-white">Savings</div>
                        <div className="font-semibold">$4,220.00</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-primary rounded-xl shadow-lg p-4 transform -rotate-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Send className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">
                        Transfer Complete
                      </div>
                      <div className="text-xs text-white">$500 to John Doe</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need for Modern Banking
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to make your banking experience smooth
              and secure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Create Accounts
              </h3>
              <p className="text-gray-600 mb-4">
                Set up multiple accounts instantly with our streamlined
                registration process.
              </p>
              <a
                href="#"
                className="text-primary font-medium flex items-center hover:text-primary-light transition-colors"
              >
                Learn more <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <ArrowLeftRight className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Money Transfers
              </h3>
              <p className="text-gray-600 mb-4">
                Transfer funds between accounts quickly and securely with
                real-time processing.
              </p>
              <a
                href="#"
                className="text-primary font-medium flex items-center hover:text-primary-light transition-colors"
              >
                Learn more <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Secure & Safe
              </h3>
              <p className="text-gray-600 mb-4">
                Bank-level security with encryption and fraud protection for
                peace of mind.
              </p>
              <a
                href="#"
                className="text-primary font-medium flex items-center hover:text-primary-light transition-colors"
              >
                Learn more <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Financial Insights
              </h3>
              <p className="text-gray-600 mb-4">
                Track your spending patterns and get insights to better manage
                your money.
              </p>
              <a
                href="#"
                className="text-primary font-medium flex items-center hover:text-primary-light transition-colors"
              >
                Learn more <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                24/7 Access
              </h3>
              <p className="text-gray-600 mb-4">
                Access your accounts anytime, anywhere with our responsive web
                platform.
              </p>
              <a
                href="#"
                className="text-primary font-medium flex items-center hover:text-primary-light transition-colors"
              >
                Learn more <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Account Management
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive tools to manage multiple accounts and track all
                transactions.
              </p>
              <a
                href="#"
                className="text-primary font-medium flex items-center hover:text-primary-light transition-colors"
              >
                Learn more <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Banking?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of users who trust Mini Bank for their financial
            needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Open Your Account
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

import React from "react";
import Button from "../ui/Button";
import { Waves } from "lucide-react";

const MembershipSection: React.FC = () => {
  return (
    <div className="py-16 bg-dark-teal">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-8">Keni Membership</h2>

        <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="p-8 md:w-2/3">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                BECOME A MEMBER
              </h3>
              <p className="text-white mb-6">
                Sign up for free. Join the community.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="primary"
                  className="bg-white text-green-700 hover:bg-gray-100 focus:ring-white"
                >
                  JOIN US
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-green-600 focus:ring-white"
                >
                  Sign In
                </Button>
              </div>
            </div>

            <div className="md:w-1/3 flex items-center justify-center p-8 bg-gradient-to-br from-green-500 to-teal-600">
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Waves size={100} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipSection;
